<template>
  <div class="app_container">
    <div class="app_header">
      <p>{{$t('expenses.header_explain')}}</p>
    </div>
    <div class="app_body">
      {{$t('expenses.expenses').toUpperCase()}}
    </div>
    <div class="app_footer">
      <v-btn to='/'>{{$t('participants.participants')}}</v-btn>
      <v-btn to='/BreakEven'>{{$t('break-even.break_even')}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>