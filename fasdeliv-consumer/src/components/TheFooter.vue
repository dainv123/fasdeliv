<template>
  <footer>
    <a href="#">{{ config.copyRightLabel }}(<b>{{ config.email }}</b>)</a>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: { config: Object }
};
</script>
