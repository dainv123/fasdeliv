<template>
  <div class="card card-list">
    <h3>{{ config.listTitle }} &rarr;</h3>

    <item-component 
      v-for="employee in employeeList" 
      :key="employee.id"
      :value="employee.employee_name"
      @click="$emit('update-current', employee.id)"
    >
    </item-component>
  </div>
</template>

<script>
import ItemComponent from "./ItemComponent"

export default {
  name: "ListComponent",

  components: { ItemComponent },

  props: { 
    config: Object, employeeList: Array
  }
};
</script>
