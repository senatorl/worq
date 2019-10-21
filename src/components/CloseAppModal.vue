
    <template>
   <v-dialog v-model="dialog" persistent max-width="620">
      <template v-slot:activator="{ on }">
              <v-btn text icon v-on="on">
                    <v-icon color="white">close</v-icon>
                </v-btn>
      </template>
      <v-card>
        <v-card-title class="display-1 font-weight-light pt-6">Close the app?</v-card-title>
        <v-card-subtitle class="title font-weight-light ml-2 mt-1">Are u sure you want to close the app?</v-card-subtitle>
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
