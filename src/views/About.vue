<template >
  <div class="About">
    <div class="round">
      <div class="tex">神评论排行榜 v1.0.0</div>
    </div>

    <div class="btn">
      <!-- 第一个button需要角落3px -->
      <router-link :to="{name:'ComCollect'}">
        <mt-button
          style="background-color:#fff;text-align:left;border-radius: 3px 3px 0px 0px"
          size="large"
        >
          <img src="../../public/img/评论收藏.png" height="20" width="20" slot="icon" />
          评论收藏
        </mt-button>
      </router-link>

      <router-link :to="{name:'MicCollect'}">
        <mt-button
          style="background-color:#fff;text-align:left;border-radius: 0px 0px 0px 0px"
          size="large"
        >
          <img src="../../public/img/收藏.png" height="20" width="20" slot="icon" />
          排行榜收藏
        </mt-button>
      </router-link>

        <mt-button
          style="background-color:#fff;text-align:left;border-radius: 0px 0px 0px 0px"
          size="large"
        >
          <img src="../../public/img/分享.png" height="20" width="20" slot="icon" />
          分享
        </mt-button>

        <mt-button
          style="background-color:#fff;text-align:left;border-radius: 0px 0px 0px 0px"
          size="large"
        >
          <img src="../../public/img/点赞.png" height="20" width="20" slot="icon" />
          赞赏支持
        </mt-button>

        <mt-button
          style="background-color:#fff;text-align:left;border-radius: 0px 0px 3px 3px"
          size="large"
        >
          <img src="../../public/img/反馈.png" height="20" width="20" slot="icon" />
          意见反馈 & 联系开发者
        </mt-button>
    </div>

    <div class="down">谁能有幸，错付终生</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.About .round {
  margin-left: 0;
  margin-right: 0;
  background-color: #97dcf7;
  width: 100%;
  height: 250px;
  border-radius: 0px 0px 150px 150px;
}
.About .round .tex {
  padding-top: 40%;
  text-align: center;
}
.About .btn {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15%;
}
.About .down {
  position: fixed;
  bottom: 10%;
  left: 0;
  width: 100%;
  text-align: center;
  color: #424c50;
}
</style>