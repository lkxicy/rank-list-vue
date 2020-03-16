<template>
  <div class="MicCollect">
    <mt-header title="排行榜收藏" fixed class="header">
      <div @click="goback()" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    

    

    <div class="content">
      <div class="ne">
        <div class="line">
          <span>网易云音乐</span>
        </div>
        <br>
          <!-- 加点取消收藏时候的动画效果 -->
          <div v-if="getNELike==''" style="text-align:center;">暂无数据</div>
          <mt-cell v-for="(n,index) in getNELike" :title="n.music" :key="index" >
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
      </div>

      <div class="kg">
        <div class="line">
          <span>酷狗音乐</span>
        </div>
        <br>
          <div v-if="getKGLike==''" style="text-align:center;">暂无数据</div>
          <mt-cell v-for="(n,index) in getKGLike" :title="n.music" :key="index"  >
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
      </div>

      <div class="qq">
        <div class="line">
          <span>QQ音乐</span>
        </div>
        <br>
          <div v-if="getQQLike==''" style="text-align:center;">暂无数据</div>
          <mt-cell v-for="(n,index) in getQQLike" :title="n.music" :key="index" >
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    likemusic(music,belong,LIKE){
      this.$store.dispatch("likeMusic",{music,belong,like:LIKE});
    },
  },
  computed: {
    // 获取收藏了的歌曲列表
    getNE(){
      return this.$store.getters.getNE;
    },
    getNELike() {
      let str=[];
      let NE=this.$store.getters.getNE;
      for(let i=0,j=0;i<NE.length;i++){
        if(NE[i].like==true){
          str[j++]=NE[i];
        }
      }
      return str;
      
    },
    getKGLike(){
      let str=[];
      let KG=this.$store.getters.getKG;
      for(let i=0,j=0;i<KG.length;i++){
        if(KG[i].like==true){
          str[j++]=KG[i];
        }
      }
      return str;
    },
    getQQLike(){
      let str=[];
      let QQ=this.$store.getters.getQQ;
      for(let i=0,j=0;i<QQ.length;i++){
        if(QQ[i].like==true){
          str[j++]=QQ[i];
        }
      }
      return str;
    },
  },
};
</script>
<style scoped>
.MicCollect .content {
  margin-top: 50px;
  text-align: center;
  margin-left: 2%;
  margin-right: 2%;
}
.MicCollect .content .ne{
  margin-top: 5%;
  margin-bottom: 10%;
}
.MicCollect .content .kg{
  margin-bottom: 10%;
}
.MicCollect .content .qq{
  margin-bottom: 10%;
}
.line{
    height: 1px;
    border-top: 1px solid #ddd;
    text-align: center;
}
.line span{
    position: relative;
    top: -8px;
    background: #fff;
    padding: 0 20px;
}
</style>