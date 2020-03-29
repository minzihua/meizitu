<template>
  <div class="con">
    <img class="imgs" v-if="list" :src="list[0].images[0]" alt="">
    <img class="imgs" v-if="list" :src="list[1].images[0]" alt="">
    <img class="imgs" v-if="list" :src="list[2].images[0]" alt="">
    <img class="imgs" v-if="list" :src="list[3].images[0]" alt="">
    <img class="imgs" v-if="list" :src="list[4].images[0]" alt="">
    <img class="imgs" v-if="list" :src="list[5].images[0]" alt="">
  </div>
</template>

<script>
import {getMeizi} from "../assets/js/api/getMeizi";
export default {
  data(){
    return {
      list:[],
      page:1,
      count:10
    }
  },
  methods:{
    Mload(){
      getMeizi(this.page,this.count).then(res=>{
        console.log(res);
        this.list = res.data.data;
        console.log(this.list);
        
      })
    },
  },
  created(){
    this.Mload();
  },
}
</script>

<style scoped>
.con{
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.imgs{
  width: 50%;
}
</style>

