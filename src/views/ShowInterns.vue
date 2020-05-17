<template>
  <div>
    <Title>Lista stażystów</Title>
    <InternList/>
    <router-link :to="{name: 'AddIntern'}">
      <button>Dodaj stażystę</button>
    </router-link>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import InternList from '../components/InternList.vue';

export default {
  name: 'ShowInterns',
  components: {
    InternList,
    Title,
  },
};
</script>

<style lang="scss" scoped>
  button{
    border-radius: 4px;
    font-size: 20px;
    font-family: inherit;
    max-width: 600px;
    padding: 10px 30px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.308);
    margin-top: 20px;
    border: none;
    background-color: #2c6929;
    color: #fff;
    cursor: pointer;
  }
</style>
