<template>
  <div id="container_expenseInput">
      <v-combobox
          v-model="select"
          :items="items"
          label="Select a favorite activity or create a new one"
          multiple
        ></v-combobox>
  </div>
</template>

<script>

export default {
    name: 'ExpenseInput'
}

</script>

<style scoped>

#container_expenseInput{
    background: #b5cdee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
}

</style>