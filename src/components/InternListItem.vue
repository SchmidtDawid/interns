<template>
  <router-link :to="{name: 'EditIntern', params: { id: id }}">
    <div class="list-element">
      <avatar :key="img_url" :img_url='img_url' />
      <div class="name">
        {{first_name}} {{last_name}}
      </div>
      <img class="edit-icon" src="../assets/edit.png" alt="">
    </div>
  </router-link>
</template>


<script>
import Avatar from './Avatar.vue';

export default {
  props: ['id', 'first_name', 'last_name', 'img_url'],
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
  .list-element{
    position: relative;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.082);
    cursor: pointer;
    &:hover{
      background-color: #e1c991;
    }
  }
  .name{
    padding: 0 33px 0 10px;
  }
  .edit-icon{
    width: 20px;
    position: absolute;
    right: 5px;
  }
</style>
