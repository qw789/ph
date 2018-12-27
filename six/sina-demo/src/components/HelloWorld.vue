<!--  -->
<template>
  <div id="test">
      <div class="steps">
        <div class="steps-item" v-for="(item, index) in items" :key="item.num">
          <p :class="['steps-item-num', activeIndex === index ? 'active' : '']">{{item.num}}</p>
          <p :class="['steps-item-text', activeIndex === index ? 'activeText' : '']">{{item.text}}</p>
          <p :class="['steps-item-line', activeIndex === index ? 'active' : '']"></p>          
        </div>
      </div>
  </div>

</template>

<script>
import Fresh from './countdown.js'
 const fresh = Fresh()
  // fresh.add(
  //   + new Date('2018-09-31 10:59:22'),
  //   re => {
  //       console.log(re)
  //   },
  //   ({d, h, m, s}) => `任务3: ${d ? d + '天' : ''} ${h ? h + '小时' : '' }${m}分${s}秒`
  // )
  
  
export default {
  data () {
    return {
      items:[
        {num:0,text:"实名认证"},{num:1,text:"补全信息"},{num:2,text:"完成"}
      ],
       activeIndex:1,
    };
  },

  components: {},

  computed: {},


  methods: {},
  created(){
    
  },
  mounted(){
    this.$nextTick(()=>{
            var time=document.createElement('div');      
       fresh.add(
        + new Date('2018-08-28 19:11:02'),
        re => {
            // console.log(re)
            time.innerHTML=re.val
            document.querySelector("#test").appendChild(time);
        },
        ({d, h, m, s}) => `任务2: ${d ? d + '天' : ''} ${h ? h + '小时' : '' }${m}分${s}秒`
    )
      fresh.start()    
    })
  }
}

</script>
<style  scoped lang="scss" rel="stylesheet/scss">
  @import "../assets/css/mix.scss";
  #test{
    width: px2rem(750px);
  }
  .steps {
      display: flex;
      height: 80px;
      padding: 0 5px;
      width: 100%;
      box-sizing: border-box;
      .steps-item {
        display: flex;
        width: 100%;
        height: 34px;
        align-items: center;
        // 分段线
        .steps-item-line {
          width:px2rem(70px);
          height: 1px;
          background: #ccc;
        }
        // 数字
        .steps-item-num {
          width: 34px;
          height: 34px;
          background: #ccc;
          border-radius: 50%;
          line-height: 34px;
          color: #fff;
          text-align: center;
        }
        // 文字
        .steps-item-text {
          text-align: center;
          padding: 0 2px;
          font-size: px2rem(34px);
        }
        // 当前状态
        .active {
          background: #0eaee9;
        }
        .activeText {
          color: #0eaee9;
        }
      }
    .steps-item:nth-child(3){
        width: 51%;
       .steps-item-line {
         display: none;
        }
      .steps-item-text {
          // width: 100%;
          text-align: center;
        }
    }
    }
    // 步骤展示
    .step-blank {
      overflow: hidden;
      width: 100%;
      padding: px2rem(20px);
      height: px2rem(140px);
      line-height: px2rem(140px);
      .iconfont-blank {
        float: left;
        width: 25%;
        text-align: center;
        .iconfont {
          font-size: px2rem(40px);
        }
      }
    }
    
</style>