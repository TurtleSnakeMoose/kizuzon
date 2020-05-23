<template>
  <div id="container_participantInput">
      <v-text-field 
        :label="$t('participants.name')"
         @keyup.enter="participant_add" 
         v-model="participant_name"
         hide-details="auto"
         ref="txt_participantName"
         ></v-text-field>

      <v-btn v-on:click="participant_add">{{$t('participants.add')}}</v-btn>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'ParticipantInput',
    data() {
        return {
            participant_name:""
        };
    },
    methods:{
        ...mapActions(["addParticipant"]),

        participant_add: function() {
            // trim spaces, check for duplication
            var participantName = this.participant_name.trim(),
                nameExists = this.allParticipants.filter(x => x.Name === participantName).length > 0;

            if(participantName.length > 0 && participantName.length < 20 && !nameExists){
                var participant = {ID: this.allParticipants.length+1, Name: participantName};
                this.addParticipant(participant);

                // clear input and focus in.
                this.$refs.txt_participantName.$el.querySelector('input').focus();
                this.participant_name = '';
            }
        }

    },
    computed: mapGetters(["allParticipants"])
}
</script>

<style scoped>

#container_participantInput{
    background: #b5cdee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
}

.v-input {
    padding: 15px;
    flex: 10;
}

.v-btn {
    flex:2;
}

</style>