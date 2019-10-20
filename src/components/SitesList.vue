<template>
    <div>
        <v-container class="d-flex flex-row" v-for="(item, index) in data" v-bind:key="item.id" >
            <v-text-field
                    v-model="item.url"
                    label="url"
                    required
                    @blur="updateItem(item)"
            >
            </v-text-field>
            <v-col>
            <v-btn icon v-on:click="remove(index)">
                <v-icon color="red">remove</v-icon>
            </v-btn>
            </v-col>
        </v-container>
    </div>
</template>

<script>
    export default {
        computed: {
            data () {
                return this.$store.state.data
            }
        },
        methods: {
            newItem: function(){
                this.$store.commit('newItem')
            },
            remove: function(index){
                this.$store.commit('remove', index)
            },
            updateItem: function(item){
                this.$store.commit('updateItem', item)
            }
        },
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>
