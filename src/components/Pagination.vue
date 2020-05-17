<template>
  <div class="pagination">
    <div class="prev"
      @click="prev"
      v-html="less_than"
      :class='{disable: active === 1}'
    ></div>

    <div
      v-for="(index) in total_pages"
      :key="index"
      :class='{active: active === index}'
      @click="$emit('pageChange', index)"
    >
      {{index}}
    </div>

    <div
      class="next"
      @click="next"
      :class='{disable: active === total_pages}'
    > > </div>
  </div>
</template>

<script>
export default {
  props: ['page', 'total_pages', 'active'],
  data() {
    return {
      less_than: '<',
    };
  },
  methods: {
    prev() {
      if (this.active > 1) {
        this.$emit('pageChange', this.active - 1);
      }
    },
    next() {
      if (this.active < this.total_pages) {
        this.$emit('pageChange', this.active + 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .pagination{
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.308);
    background-color: rgb(209, 227, 245);
    >div{
      flex: auto;
      border-right: 1px solid rgba(0, 0, 0, 0.082);
      padding: 5px;
      cursor: pointer;
      &.active{
        background-color: #e1c991;
      }
      &.disable{
        opacity: 0.4;
      }
    }
  }
</style>
