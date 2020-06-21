<template>
  <div class="like__btn animated">
    <i v-if="isLiked" class="like__icon fa fa-heart" @click.stop="interactHandler"></i>
    <i v-else class="like__icon fa fa-heart-o" @click.stop="interactHandler"></i>
  </div>
</template>

<script>
export default {
  name: "LikeComponent",
  
  data() {
    return {
      isLiked: Math.random() >= 0.5
    }
  },

  methods: {
    interactHandler() {
      if (!this.isLiked) {
        this.$el.classList.add("tada");
      } else {
        this.$el.classList.remove("tada");
      }

      this.isLiked = !this.isLiked;
    },
  }
};
</script>

<style scoped lang="scss">
@import "like-component.scss"
</style>