<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-20 20:42:54
-->
<template>
  <div class="hello">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <router-link to="/">
          <img slot="icon" src="../assets/1.jpg">
          外卖
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <router-link to="/about">
          <img slot="icon" src="../assets/1.jpg">
          关于
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <router-link to="/">
          <img slot="icon" src="../assets/1.jpg">
          发现
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/about">
          <img slot="icon" src="../assets/1.jpg">
          我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
