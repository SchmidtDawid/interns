<template>
  <div id="app">
    <transition :name="transitionStyle">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionStyle: '',
    };
  },
  watch: {
    // sets the appropriate animation based on the path
    $route(to) {
      this.transitionStyle = to.path === '/' ? 'slide-left' : 'slide-right';
    },
  },
};
</script>

<style lang="scss">
body{
  background-color: rgb(22, 55, 87);
}
#app {
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #163757;
  position: relative;
  *{
    box-sizing: border-box;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  >div{
    position: absolute;
    width: 100%;
  }
}

.button{
  display: block;
    border-radius: 4px;
    max-width: 600px;
    font-size: 20px;
    margin: 0 auto;
    padding: 10px 30px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.308);
    margin-top: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    &.green{
      background-color: #2c6929;
    }
    &.red{
      background-color: transparent;
      color: #c35454;
      box-shadow: none;
    }
}


// animations
.slide-left-enter-active, .slide-left-leave-active {
  transition: all 0.3s;
}
.slide-left-enter {
  transform: translatex(-100%);
}
.slide-left-leave-to{
  transform: translatex(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.3s;
}
.slide-right-enter {
  transform: translatex(100%);
}
.slide-right-leave-to{
  transform: translatex(-100%);
}

</style>
