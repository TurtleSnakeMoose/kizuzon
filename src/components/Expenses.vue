<template>
  <div class="app_container">
    <div class="app_header">
      <p>{{$t('expenses.header_explain')}}</p>
    </div>
    <div class="app_body">
      <ExpenseInput/>
      <ExpenseCatagories/>
    </div>
    <div class="app_footer">
      <v-btn to='/'>{{$t('participants.participants')}}</v-btn>
      <v-btn to='/BreakEven'>{{$t('break-even.break_even')}}</v-btn>
    </div>
  </div>
</template>

<script>
import ExpenseInput from './ExpenseInput'
import ExpenseCatagories from './ExpenseCatagories'

export default {
  components:{
    ExpenseInput,
    ExpenseCatagories
  }
}
</script>

<style scoped>

</style>