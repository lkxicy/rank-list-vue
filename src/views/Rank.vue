<template>
  <div class="Rank">
    <div class="image">
      <img src="../../public/img/排行榜背景.jpg" height="220px" />
      <div class="text2">{{date[selected-1] | convertTime('YYYY-MM-DD')}} 更新</div>
    </div>

    <div class="line"></div>

    <mt-navbar v-model="selected" :fixed="true">
      <mt-tab-item id="1">
        网易云音乐
        <br />TOP200
      </mt-tab-item>
      <mt-tab-item id="2">
        酷狗音乐
        <br />TOP100
      </mt-tab-item>
      <mt-tab-item id="3">
        QQ音乐
        <br />TOP300
      </mt-tab-item>
    </mt-navbar>

    <div class="tab">
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="(n,index) in getNE" :title="(index+1) +' '+ n.music" :key="index" >
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(n,index) in getKG" :title="(index+1) +' '+ n.music" :key="index">
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="(n,index) in getQQ" :title="(index+1) +' '+ n.music" :key="index">
            <!-- <my-button :music="n.music" :belong="n.belong" :like="n.like" ></my-button> -->
            <div @click="likemusic(n.music,n.belong,n.like)">
              <img v-if="n.like==false" src="../../public/img/未收藏.png" height="25px" width="25px"/>
              <img v-if="n.like==true" src="../../public/img/收藏.png"  height="25px" width="25px"/>
            </div>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],   // 排行榜更新日期
      index: 0,
      selected: "1",         // 初始先选中网易云
    };
  },
  methods: {
    likemusic(music,belong,LIKE){
      this.$store.dispatch("likeMusic",{music,belong,like:LIKE});
    },
    // 往store里面增加排行榜的数据，这样方便在收藏夹里面操作
    AddMusic(){
      for(let i=0;i<this.ne.length;i++){
       this.$store.dispatch("addMusic",{music:this.ne[i],belong:'ne',like:false});
      }
      for(let i=0;i<this.kg.length;i++){
       this.$store.dispatch("addMusic",{music:this.kg[i],belong:'kg',like:false});
      }
      for(let i=0;i<this.qq.length;i++){
       this.$store.dispatch("addMusic",{music:this.qq[i],belong:'qq',like:false});
      } 
    },
    changeID(num) {
      this.index = num - 1;
    }
  },

  created() {
    // 获取网易云数据
    this.$axios
      .get("http://musicapi.leanapp.cn/top/list?idx=1")
      .then(res => {
        let updateTime = res.data.playlist.updateTime; //更新时间
        let time = new Date(updateTime); // 时间戳转化为普通时间
        this.date[0] = time; // 避免抢占  防止出错
        let ne_singers = "";
        //两种输出形式  一种单人  一种多人
        for (let i = 0; i < res.data.playlist.tracks.length; i++) {
          // 多人输出形式   singer1、singer2、... - song
          if (res.data.playlist.tracks[i].ar.length > 1) {
            for (var j = 0; j < res.data.playlist.tracks[i].ar.length; j++) {
              ne_singers += res.data.playlist.tracks[i].ar[j].name;
              if (j != res.data.playlist.tracks[i].ar.length - 1) {
                ne_singers += "、";
              }
            }
            let str1 = ne_singers + " - " + res.data.playlist.tracks[i].name;
            this.$store.dispatch("addMusic",{music:str1,belong:'ne',like:false});
            j = 0;
            ne_singers = "";
          }
          //单人输出形式    singer - song
          else {
            let str2 =
              res.data.playlist.tracks[i].ar[0].name +
              " - " +
              res.data.playlist.tracks[i].name;
            this.$store.dispatch("addMusic",{music:str2,belong:'ne',like:false});
          }
        }
      })
      .catch(err => {
        console.log(err);
        let instance = this.$toast({
          message: "网易云排行榜数据获取出错，请稍后再试",
          position: "bottom",
          duration: 5000
        });
        setTimeout(() => {
          instance.close();
        }, 2000);
      });

    // 获取酷狗数据  跨域了  响应时间较长
    this.$axios
      .get("/api")
      .then(res => {
        let updateTime = res.data.data.timestamp * 1000; //更新时间
        let time = new Date(updateTime); // 时间戳转化为普通时间
        this.date[1] = time;

        // 由于API已经集成到一起了  所以只需要一种输出形式
        for (let i = 0; i < res.data.data.info.length; i++) {
          this.$store.dispatch("addMusic",{music:res.data.data.info[i].filename,belong:'kg',like:false});
        }
      })
      .catch(err => {
        console.log(err);
        let instance = this.$toast({
          message: "酷狗排行榜数据获取出错，请稍后再试",
          position: "bottom",
          duration: 5000
        });
        setTimeout(() => {
          instance.close();
        }, 2000);
      });

    // 获取QQ音乐数据   跨域了
    this.$axios
      .get("/foo")
      .then(res => {
        let updateTime = res.data.update_time; //更新时间
        this.date[2] = updateTime;

        let qq_singers = "";
        //两种输出形式  一种单人  一种多人
        for (let i = 0; i < res.data.songlist.length; i++) {
          // 多人输出形式   singer1、singer2、... - song
          if (res.data.songlist[i].data.singer.length > 1) {
            for (var j = 0; j < res.data.songlist[i].data.singer.length; j++) {
              qq_singers += res.data.songlist[i].data.singer[j].name;
              if (j != res.data.songlist[i].data.singer.length - 1) {
                qq_singers += "、";
              }
            }
            let str1 = qq_singers + " - " + res.data.songlist[i].data.songname;
            this.$store.dispatch("addMusic",{music:str1,belong:'qq',like:false});
            j = 0;
            qq_singers = "";
          }
          //单人输出形式    singer - song
          else {
            let str2 =
              res.data.songlist[i].data.singer[0].name +
              " - " +
              res.data.songlist[i].data.songname;
            this.$store.dispatch("addMusic",{music:str2,belong:'qq',like:false});
          }
        }
      })
      .catch(err => {
        console.log(err);
        let instance = this.$toast({
          message: "QQ音乐排行榜数据获取出错，请稍后再试",
          position: "bottom",
          duration: 5000
        });
        setTimeout(() => {
          instance.close();
        }, 2000);
      });

  },
  // 排行榜的数据
  computed: {
    getNE() {
      return this.$store.getters.getNE;
    },
    getKG(){
      return this.$store.getters.getKG;
    },
    getQQ(){
      return this.$store.getters.getQQ;
    },
  },
};
</script>
<style scoped>
.Rank .tab {
  margin-left: 3%;
  margin-right: 3%;
}
.Rank .image {
  position: relative;
  width: 100%;
  height: 220px;
}
.Rank .image .text2 {
  position: absolute;
  font-size: 20px;
  left: 20px;
  bottom: 0;
  height: 30px;
  color: #aaa;
}
.Rank .line {
  margin-top: 10px;
  border: 0.5px solid rgb(218, 215, 215);
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
</style>