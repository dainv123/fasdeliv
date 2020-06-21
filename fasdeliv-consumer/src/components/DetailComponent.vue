<template>
  <div class="card card-detail">
    <h3>{{ config.detailTitle }} &rarr;</h3>

    <p v-if="employee.id">
      {{ config.detailDescriptionSelected }}: {{ employee.id }}
    </p>
    <p v-else>
      {{ config.detailDescription }}
    </p>
    
    <div class="dragdrop-wrapper">
      <div 
        v-for="(value, key) in employee"
        :key="key"
        class="dragdrop-item" 
      >
        <span>{{ convertKeyToLabel(key) }}: </span>
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",

  props: { 
    config: Object, employee: Object
  },
  
  methods: {
    convertKeyToLabel(key) {
      const word = key.replace(/_+/g, " ");
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
  }
};
</script>
