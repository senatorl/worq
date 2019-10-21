<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="410"
        >
            <template v-slot:activator="{ on }">
                <v-btn text icon    v-on="on">
                    <v-icon color="white">settings</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline lighten-2"
                        primary-title
                >
                    <h2 class="display-1 font-weight-light mt-3">Settings</h2>
                    <h3 class="title font-weight-light grey--text text--darken-1">Add here your commonly used webapps</h3>
                </v-card-title>
                <v-card-text class="mt-5">
                    <SitesList></SitesList>
                </v-card-text>

                <v-card-actions>
                    <v-btn class="mx-2"
                            left bottom
                           fab dark color="primary"   @click="newItem()">
                        <v-icon dark color="white">add</v-icon>
                    </v-btn>

                </v-card-actions>
            </v-card>
            <v-snackbar
                    v-model="snackbar"
                    color="error"
            >
                Fill form correctly!

            </v-snackbar>
        </v-dialog>

    </div>
</template>

<script>
    import SitesList from './SitesList';

    export default {

        name: 'App',
        components: {
            SitesList
        },
        methods: {
            newItem: function(){
                if(this.$store.state.data.find(item => !item.url)){
                    this.snackbar = true;
                }else{
                    this.$store.commit('newItem')
                }
            }
    },
        data () {
            return {
                dialog: false,
                snackbar: false
            }
        },
    }
</script>
