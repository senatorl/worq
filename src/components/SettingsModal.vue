<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="400"
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
                    Settings
                </v-card-title>

                <v-card-text>
                    <SitesList></SitesList>
                </v-card-text>

                <v-divider></v-divider>

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
