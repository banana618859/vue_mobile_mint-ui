<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-23 21:46:19
-->
<template>
  <div class="home" style="display: flex; flex-direction: column;height: 100vh;">
    <!-- <img alt="Vue logo" width="50" src="../assets/logo.png"> -->
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div style="border: 1px solid #ddd; flex: 1; 
          margin-bottom:30px; overflow: auto; margin-top: 5px;">
      <router-view></router-view>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <router-link to="/a">
          <img slot="icon" src="../assets/1.jpg">
          外卖
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <router-link to="/b">
          <img slot="icon" src="../assets/1.jpg">
          关于
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <router-link to="/c">
          <img slot="icon" src="../assets/1.jpg">
          发现
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/d">
          <img slot="icon" src="../assets/1.jpg">
          我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data(){
    return{
      selected: '/a'
    }
  },
  components: {
    HelloWorld,
  },
  mounted(){
    console.log('this',this);
    this.$toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    });
  }
};
</script>
