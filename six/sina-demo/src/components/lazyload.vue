<!--  -->
<template>
  <div class="test">
      <ul>
          <li v-for="(item,index) in arrayImg" :key='index'>
              <img  alt=""  v-lazy="item.url">
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
        arrayImg:[{url:require('../assets/images/0.jpg')},{url:require('../assets/images/1.jpg')},{url:require('../assets/images/2.jpg')},
        {url:require('../assets/images/3.jpg')},{url:require('../assets/images/4.jpg')},{url:require('../assets/images/5.jpg')},]
    };
  },

  components: {},

  computed: {},


  methods: {},
  created(){
    //  var windowHeight=window.innerHeight;
    //  var i=this.arrayImg.length;
    //  while(i--){
    //  console.log(this.arrayImg[i])         
    //      if(this.arrayImg[i].top <windowHeight && this.arrayImg[i].bottom>0){
    //          console.log(222)
    //      }
    //  }
  }
}

</script>
<style lang='scss' scoped rel="stylesheet/scss">
@import "../assets/css/mix.scss";
.test{
    font-size: 32px;
    ul{
        padding: 0;
    }
    li{
        list-style: none;
        margin: 0;
        padding: 0;
        width: px2rem(750px);
    }
}
.loading{
    background-image: url('../assets/images/bg_quota.png');

}
</style>