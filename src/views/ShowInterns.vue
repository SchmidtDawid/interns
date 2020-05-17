<template>
  <div>
    <Title>Lista stażystów</Title>
    <InternList/>
    <router-link :to="{name: 'AddIntern'}">
      <button class="green-button">Dodaj stażystę</button>
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
