<template>
  <div>
    <van-nav-bar class="header" fixed title="标题" left-text="返回" @click-left="onClickLeft" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Header",
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>

<style>
.header {
  height: 80px;
  line-height: 80px;
  background-color: rgb(19, 186, 228);
}
.van-nav-bar__title {
  font-size: 35px;
  color: white;
}
.van-nav-bar__text {
  font-size: 30px;
  color: white;
}
.van-nav-bar__text:active {
  background-color: #13bae4;
  color: gray;
  transition: 0.5s;
}
</style>