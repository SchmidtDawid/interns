<template>
  <div>
    <div class="title-holder">
      <router-link to="/">
        <img src="../assets/arrow.svg" alt="">
      </router-link>
      <Title>Edytuj stażystę</Title>
    </div>
    <InternForm
      :key="reload"
      @returnData="getFormData"
      :first_name="first_name"
      :last_name="last_name"
      :img_url="img_url"
    ></InternForm>
    <div class="message" :class="{error: error}" ref="message"></div>
    <button
      class="button green"
      @click="addIntern"
    >
      Potwierdź edycję
    </button>
    <button
      class="button red"
      @click="deleteIntern"
    >
      Usuń stażystę
    </button>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import InternForm from '../components/InternForm.vue';

export default {
  props: ['id'],
  components: {
    Title,
    InternForm,
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      img_url: '',
      error: 0,
      reload: 0,
    };
  },
  methods: {
    getFormData(event) {
      this.first_name = event.form_first_name;
      this.last_name = event.form_last_name;
      this.img_url = event.form_img_url;
    },
    addIntern() {
      this.axios.put(`https://reqres.in/api/users/${this.id}`, {
        first_name: this.first_name,
        last_name: this.last_name,
        img_url: this.img_url,
      })
        .then(() => {
          this.error = 0;
          this.$refs.message.innerHTML = 'Pomyślnie edytowano stażystę!';
        })
        .catch(() => {
          this.error = 1;
          this.$refs.message.innerHTML = 'Nie udało się edytować stażysty';
        });
    },
    deleteIntern() {
      this.axios.delete(`https://reqres.in/api/users/${this.id}`)
        .then(() => {
          this.error = 0;
          this.$refs.message.innerHTML = 'Pomyślnie usunięto stażystę!';
        })
        .catch(() => {
          this.error = 1;
          this.$refs.message.innerHTML = 'Nie udało się usunąć stażysty';
        });
      setTimeout(() => {
        this.$router.push({ path: '/' });
      }, 1000);
    },
  },
  mounted() {
    this.axios.get(`https://reqres.in/api/users/${this.id}`)
      .then((response) => {
        this.first_name = response.data.data.first_name;
        this.last_name = response.data.data.last_name;
        this.img_url = response.data.data.avatar;
        this.reload = !this.reload;
      });
  },
};
</script>

<style lang="scss" scoped>
  .title-holder{
    position: relative;
    max-width: 600px;
    margin: 0 auto;
  }
  img{
    position: absolute;
    left: 0;
    top: 4px;
    width: 30px;
  }
  .list-element{
    border-radius: 4px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.308);
    margin-top: 50px;
    &:hover{
      background-color: #fff;
      cursor: auto;
    }
  }
  .message{
    color: #c3f1c0;
    padding: 10px;
    font-size: 20px;
    &.error{
      color: red;
    }
  }
</style>
