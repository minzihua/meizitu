<template>
  <div class="con">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <img class="img" v-for="(item,i) of list" :key="i" v-lazy="item.images[0]" />
    </van-list>
  </div>
</template>

<script>
import { getMeizi } from "../assets/js/api/getMeizi";
export default {
  data() {
    return {
      list: [],
      page: 1,
      count: 10,
      total_counts: 0,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      getMeizi(this.page, this.count).then(res => {
        this.list = this.list.concat(res.data.data);
        this.total_counts = res.data.total_counts;
        console.log(this.list);
        this.page += 1;
        this.loading = false;
        if (this.list.length == this.total_counts) {
          this.finished = true;
          console.log(this.page);
        }
      });
    }
  }
};
</script>

<style scoped>
.con {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0;
  padding: 9px;
}
.con .img {
  width: 330px;
  margin: 15px;
  border-radius: 15px;
  border: 3px solid gainsboro;
  box-shadow: 0 5px 20px rgba(34, 25, 25, 0.4);
}
</style>

