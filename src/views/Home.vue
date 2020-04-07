<template>
  <div class="con">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        class="flex"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <img class="img" v-for="(item,i) of list" :key="i" v-lazy="item.images[0]" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getMeizi } from "../assets/js/api/getMeizi";
import { Toast } from "vant";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      page: 1,
      count: 10,
      total_counts: 0,
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.page = 1;
      this.onLoad();
    },
    onLoad() {
      if (this.isLoading) {
        this.list = [];
        this.isLoading = false;
        Toast("刷新成功");
      }
      setTimeout(() => {
        getMeizi(this.page, this.count).then(res => {
          this.list = this.list.concat(res.data.data);
          this.total_counts = res.data.total_counts;

          console.log(this.list);
          this.page += 1;
          this.loading = false;
          if (this.list.length == this.total_counts) {
            this.finished = true;
            this.page = 1;
            console.log(this.page);
          }
        });
      }, 1000);
    },
    myload() {
      getMeizi(this.page, this.count).then(res => {
        this.list = this.list.concat(res.data.data);
        this.total_counts = res.data.total_counts;
      });
    }
  }
};
</script>

<style scoped>
.con {
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  padding: 9px;
  margin-top: 80px;
}
/* .flex {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; 
} */
.con .img {
  width: 330px;
  margin: 9px;
  padding: 9px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(238, 150, 150, 0.4);
}
</style>

