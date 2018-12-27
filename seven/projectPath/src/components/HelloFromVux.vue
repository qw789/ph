<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
     <flow>
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" is-done>
        <span slot="title">{{ $t('Shipped') }}</span>
      </flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>
  </div>
</template>
<i18n>
In progress:
  zh-CN: 进行中222
Paid:
  zh-CN: 已付款
Shipped:
  zh-CN: 已发货                               
Delivered:
  zh-CN: 待收货
Done:
  zh-CN: 完成
</i18n>

<script>
import { Group, Cell } from 'vux'
import { Flow, FlowState, FlowLine } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Flow, FlowState, FlowLine
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  created(){
    console.log(this.$t('Shipped'))
     this.$http
          .post("http://shopmall.iwoyi.cn/wxmall/user_login", {
              "username":"ss",
              "password":"ss"
            })
          .then(res=>{
            console.log(res)
          })
          .catch(function(err) {
            console.log(err);
          });
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
