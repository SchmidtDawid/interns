<template>
  <img :src="url" @error="imageLoadError" alt="avatar">
</template>

<script>
export default {
  props: ['img_url'],
  data() {
    return {
      url: this.img_url,
    };
  },
  methods: {
    // sets default avatar if link is incorrect
    imageLoadError() {
      this.url = '/empty_avatar.png';
    },
  },
};
</script>

<style lang="scss" scoped>
  img{
    width: 43px;
    border-radius: 15px;
    padding: 5px;
  }
</style>
