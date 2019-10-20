<!--
  - Copyright 2018 Nazmul Idris All rights reserved.
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
    <div class="host">
        <webview v-for="item in data" v-on:new-window="openExternal($event)" v-on:page-favicon-updated="updateFavicon($event, item)" v-bind:key="item.name"
                 v-bind:class="{ active: item.active }" v-bind:name="item.name" v-bind:src="item.url" class="webview"
                 autosize="on"></webview>
    </div>
</template>

<script>
    export default {
        name: 'WebviewWrapper',

        computed: {
            data () {
                return this.$store.state.data
            }
        },
        methods: {
            updateFavicon: function (event, item) {
                const [favicon] = event.favicons;
                this.$store.commit('updateFavicon', {id: item.id, favicon})
            },
            openExternal : function(event){
                   const protocol = require('url').parse(event.url).protocol
                    if (protocol === 'http:' || protocol === 'https:') {
                        require('electron').shell.openExternal(event.url)
                    }
            }
        }
    };
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .host {
        display: flex;
        flex: 1;
        height: 100%;
    }
</style>
