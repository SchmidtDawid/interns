<template>
  <div class="intern-form">
    <form action="">
      <div class="form-control">
        <label>imię</label>
        <input
          type="text"
          v-model="form_first_name"
          @keyup="returnData"
        >
      </div>
      <div class="form-control">
        <label>nazwisko</label>
        <input
          type="text"
          v-model="form_last_name"
          @keyup="returnData"
        >
      </div>
      <div class="form-control">
        <label>link do avatara</label>
        <input
          type="text"
          v-model="form_img_url"
          @keyup="returnData"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['first_name', 'last_name', 'img_url'],
  data() {
    return {
      form_first_name: this.first_name || '',
      form_last_name: this.last_name || '',
      form_img_url: this.img_url || '',
    };
  },
  methods: {
    returnData() {
      this.$emit('returnData', {
        form_first_name: this.form_first_name,
        form_last_name: this.form_last_name,
        form_img_url: this.form_img_url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .intern-form{
    max-width: 600px;
    margin: 0 auto;
  }
  .form-control{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  label{
    font-size: 20px;
    margin: 15px 0 5px;
    color: #d1e3f5;
  }
  input{
    width: 100%;
    font-size: 22px;
    padding: 5px;
    border: 1px solid rgb(170, 170, 170);
    border-radius: 4px;
    font-family: inherit;
  }
</style>
