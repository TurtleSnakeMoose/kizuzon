<template>
  <div class="app_container">
    <div class="app_header">
      <p>{{$t('participants.header_explain')}}</p>
    </div>
    <div class="app_body">
      <ParticipantInput/>
      <ParticipantList/>
    </div>
    <div class="app_footer">
      <v-btn to='/Expenses'>{{$t('expenses.expenses')}}</v-btn>
    </div>
  </div>
</template>

<script>
import ParticipantInput from './ParticipantInput'
import ParticipantList from './ParticipantList'

export default {
  components:{
    ParticipantInput,
    ParticipantList
  }
};
</script>

<style scoped>

</style>