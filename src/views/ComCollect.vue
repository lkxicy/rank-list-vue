<template>
   <div class="ComCollect">
       <mt-header title="评论收藏" fixed class="header">
            <div @click="goback()" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>


    <div class="content">
        
            <div v-if="getcom==''" style="text-align:center;">暂无数据</div>
          <mt-cell v-for="(n,index) in getcom" :title="n.singer + ' - ' +n.songName" :label="n.str" :key="index" class="left">
              
            <div @click="change(n.str,n.songName,n.singer)" class="right">
              <img v-if="getComment(n.str,n.songName,n.singer)==false" src="../../public/img/评论未收藏.png" />
              <img v-if="getComment(n.str,n.songName,n.singer)==true" src="../../public/img/评论收藏.png"  />
            </div>
          </mt-cell>
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
           goback(){
               this.$router.go(-1);
           },
           change(str,songName,singer) {
                // 点了收藏  也就是收藏库中还未收藏
                if(this.getComment(str,songName,singer)==false){
                    this.add(str,songName,singer);
                }
                else{
                    this.del(str,songName,singer);
                }
                
            },
            add(str,songName,singer){
                this.$store.dispatch('addCom',{str,songName,singer});
            },
            del(str,songName,singer){
                this.$store.dispatch("deleteCom",{str,songName,singer});
            },
            getComment(str,songName,singer){
                let item;
                for(item in this.getcom){
                    // 在store中找得到的情况下
                    if(this.getcom[item].songName==songName && 
                    this.getcom[item].str==str &&
                    this.getcom[item].singer==singer){
                        return true;
                    }
                }
                return false;
             },
        
   },
   computed: {
            getcom(){
                return this.$store.getters.getCOM;
            }
        },
   }
</script>
<style scoped>
.ComCollect .content {
  margin-top: 50px;
  margin-left: 2%;
  margin-right: 2%;
}
.ComCollect .left{
    margin-top: 8%;
}
.ComCollect .right{
    margin-left: 8%;
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