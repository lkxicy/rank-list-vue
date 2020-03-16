// 该组件废除   在父组件中调用子组件再进行逻辑判断会造成页面切换时不会更新视图的BUG  

<template>
  <div @click="change">
    <img v-if="like==false" src="../../public/img/评论未收藏.png" />
    <img v-if="like==true" src="../../public/img/评论收藏.png" />
  </div>
</template>

<script>
export default {
  name: "my-button1",
  props:["str","songName","singer"],
  data() {
    return {
      like: false,
    };
  },
  methods: {
    change() {
      this.like = !this.like;
      // 点了收藏
      if(this.like==true){
        this.add(this.str,this.songName,this.singer);
      }
      else{
        this.del(this.str,this.songName,this.singer);
      }
    },
    add(str,songName,singer){
      this.$store.dispatch('addCom',{str,songName,singer});
    },
    del(str,songName,singer){
      this.$store.dispatch("deleteCom",{str,songName,singer});
    }
  }
};
</script>
<style scoped>
</style>