<template>
  <div>
    <h1 class="title">
      {{ config.siteTitle }} <a href="#">{{ config.siteName }}</a>
    </h1>
    <p class="description">{{ config.siteDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: { config: Object }
};
</script>
