<template>
    <v-app dark style="overflow:hidden;">
        <v-app-bar app dark >
            <v-tabs
                    v-model="activeTab"
                     slider-color="white" show-arrows>
                <v-tab v-for="(item) in data"  v-bind:key="item.id" v-on:click="toggle(item.id)" >
                        <v-img v-bind:src="item.favicon" class="favicon"></v-img>
                </v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <SettingsModal></SettingsModal>
                <v-btn text icon  v-on:click="minimize()">
                    <v-icon color="white">minimize</v-icon>
                </v-btn>
                    <v-btn text icon  v-on:click="maximize()">
                    <v-icon color="white">crop_square</v-icon>
                </v-btn>
                <CloseAppModal></CloseAppModal>
        </v-app-bar>
        <v-content flex>
            <div v-if="!data.length" class="no-webviews-wrapper">
                <div>
                    <h1 class="display-3 text-center">You have no tabs</h1>
                    <h2 class=" display-1 font-weight-light">Add them in the settings menu</h2>
                </div>
            </div>
            <webview-wrapper></webview-wrapper>
        </v-content>
        
    </v-app>
</template>

<script>
    import SettingsModal from './components/SettingsModal';
    import WebviewWrapper from './components/WebviewWrapper';
    import CloseAppModal from './components/CloseAppModal';

    export default {
        name: 'App',
        components: {
            SettingsModal,
            WebviewWrapper,
            CloseAppModal
        },

        computed:{
          activeTab: {
              get: function () {
                return this.$store.state.data.findIndex((item)=>item.active)
              },
              set: function () {
                
              }
            },
            data () {
                return this.$store.state.data
            },
            currentWindow(){
                return require('electron').remote.getCurrentWindow()
            } 
    
        },
        methods:{
            minimize: function(){
                this.currentWindow.minimize()
            },
            maximize: function(){
                this.currentWindow.maximize()
            },
            toggle: function(id){
                this.$store.commit('toggle', id)
            }
        },
    };
</script>
<style>
    webview{
        height:100%;
        display:none;
        width:100%;
    }
    webview.active{
        display:flex;
    }
    .favicon{
        max-width:20px !important;
        height:20px;
    }
    .no-webviews-wrapper{
        display: flex;
        flex: 1;
        height: 100%;
        align-items:center;
        justify-content: center;
    }
</style>
