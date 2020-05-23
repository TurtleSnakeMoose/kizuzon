<template>
  <div id="container_participantList" v-show="allParticipants.length > 0">
      <table>
          <tbody>
            <tr :key="participant.ID" v-for="participant in allParticipants">
                <td>{{participant.ID}}.</td>
                <td>{{participant.Name}}</td>
                <td><font-awesome-icon :icon="['fas', 'minus-circle']" v-on:click="remove(participant.ID)"/></td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: 'ParticipantList',
    methods: {
        ...mapActions(["removeParticipant"]),
        remove: function (participantID){
            this.removeParticipant(participantID)
        }
    },
  computed: mapGetters(["allParticipants"]),
}
</script>

<style scoped>

#container_participantList{
    background: #b5cdee;
    border-radius: 5px;
    max-height: 56.5vh;
    overflow-y: auto;
}

table{
    width: 100%;
}

td {
    padding: 10px 15px;
    color: #474b60;
    font-size: 20px;
}

</style>