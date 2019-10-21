import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {LocalStore} from "./localStore";
import Vuex from "vuex";
import uuid from 'uuid/v1';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false

const localStore = new LocalStore({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
      data: [{id: uuid(), url: 'http://messenger.com', active: true, favicon: 'https://www.google.com/s2/favicons?domain=http://messenger.com'}]
  }
});

export const vuexStore = new Vuex.Store({
  state: {
      data: localStore.get('data')
  },
  mutations: {
      newItem: (state) => {
          const id = uuid();
          const url = 'https://google.pl';
          const active = state.data.length === 0 ? true : false;
          const favicon = `https://www.google.com/s2/favicons?domain=${url}`;
          state.data.push({id, url, active, favicon})
          localStore.set('data', state.data);
      },
      updateFavicon: (state, data) => {
          state.data.map((item)=>{
              if(item.id === data.id){
                  item.favicon = data.favicon;
              }
          })
      },
      updateItem: (state, data) =>{
          data.favicon = `https://www.google.com/s2/favicons?domain=${data.url}`;
          const foundIndex = state.data.findIndex(item => item.id == data.id);
          state.data[foundIndex] = data;
          localStore.set('data', state.data);

      },
      toggle: (state, id) =>{
          state.data.map((item) =>{
              if(id === item.id){
                  item.active = true
              }else{
                  item.active = false;
              }
          })
      },
      remove: (state, index) =>{
          state.data.splice(index, 1);
          if(!state.data.find((item)=> item.active) && state.data.length){
              state.data[0].active = true;
          }
          localStore.set('data', state.data);
      }
  }
});

new Vue({
  vuetify,
  store: vuexStore,
  render: h => h(App)
}).$mount('#app')
