// 该组件废除   在父组件中调用子组件再进行逻辑判断会造成页面切换时不会更新视图的BUG  

<template>
  <div @click="change">
    <img v-if="this.LIKE==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
    <img v-if="this.LIKE==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
  </div>
</template>

<script>
export default {
  name: "my-button",
  props:["music","belong","like"],
  data() {
    return {
      LIKE:'',
    };
  },
  methods: {
    change() {
      // 收藏或取消收藏
      this.likemusic(this.music,this.belong,this.LIKE);

      setTimeout(()=>{this.LIKE = !this.LIKE;
      console.log('this.music :', this.music);
      console.log('this.belong :', this.belong);
      console.log('this.LIKE :', this.LIKE);},0)
 
    },
    likemusic(music,belong,LIKE){
      this.$store.dispatch("likeMusic",{music,belong,like:LIKE});
    },
  },
  // 这样可以避免直接操作父组件的属性
  created() {
    this.LIKE=this.like;
  },
};
</script>
<style scoped>
</style>