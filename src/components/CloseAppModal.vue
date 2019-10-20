
    <template>
   <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
              <v-btn text icon v-on="on">
                    <v-icon color="white">close</v-icon>
                </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Are u sure you want to close the app?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  text @click="dialog = false">Cancel</v-btn>
          <v-btn  text class="red--text" @click="dialog = false"  v-on:click="close()" >Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

    export default {
        name: 'CloseAppModal',
        methods: {
            close: function(){
              this.currentWindow.close()
            }
        },
        data () {
            return {
                dialog: false,
                currentWindow: require('electron').remote.getCurrentWindow()
            }
        },
    }
</script>
