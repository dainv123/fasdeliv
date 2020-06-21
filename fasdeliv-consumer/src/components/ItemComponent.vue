<template>
  <div class="card card-item" @click="$emit('click')">
    {{ value }}
    
    <LikeComponent />
  </div>
</template>

<script>
import LikeComponent from "./LikeComponent";

export default {
  name: "ItemComponent",

  components: { LikeComponent },

  props: {
    value: [String, Number]
  }
};
</script>
