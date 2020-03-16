<template>
  <div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="htm" />
      </keep-alive>
    </transition>

    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="Home">
        <img slot="icon" src="../public/img/热评.png" />
        神评论
      </mt-tab-item>
      <mt-tab-item id="Rank">
        <img slot="icon" src="../public/img/排行榜.png" />
        排行榜
      </mt-tab-item>
      <mt-tab-item id="About">
        <img slot="icon" src="../public/img/我的.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected: function(newV) {
      this.$router.push({
        name: newV
      });
    }
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.htm{
  margin-bottom: 28px;
}
</style>




