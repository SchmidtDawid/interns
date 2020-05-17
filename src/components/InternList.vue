<template>
  <div>
      <div class="intern-list">
        <InternListItem
          v-for='intern in listData.data'
          :key='intern.id'
          :id=intern.id
          :first_name=intern.first_name
          :last_name=intern.last_name
          :img_url=intern.avatar
        ></InternListItem>
      </div>
      <Pagination
        :page=listData.page
        :active=current_page
        :total_pages=listData.total_pages
        @pageChange='pageChangeHandler'
      />
  </div>
</template>


<script>
import InternListItem from './InternListItem.vue';
import Pagination from './Pagination.vue';

export default {
  data() {
    return {
      listData: [],
      current_page: 1,
    };
  },
  components: {
    InternListItem,
    Pagination,
  },
  methods: {
    getInternsList(page) {
      this.axios.get(`https://reqres.in/api/users?page=${page}`)
        .then((response) => {
          this.listData = response.data;
        });
    },
    // gets the page number from pagiation component and download proper data
    pageChangeHandler(event) {
      this.current_page = event;
      this.getInternsList(this.current_page);
    },
  },
  mounted() {
    this.getInternsList(1);
  },
};
</script>

<style lang="scss" scoped>
  .intern-list{
    border-radius: 4px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.308);
    background-color: rgb(209, 227, 245);
  }
  .pagination{
    max-width: 600px;
    margin: 10px auto 0;
  }
</style>
