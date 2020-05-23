<template>
  <div class="app_container">
    <div class="app_header">
      <p>{{$t('break-even.header_explain')}}</p>
    </div>
    <div class="app_body">
      {{$t('break-even.break_even').toUpperCase()}}
    </div>
    <div class="app_footer">
      <v-btn to='/Expenses'>{{$t('expenses.expenses')}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>