<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-23 21:46:56
-->
<template>
  <div style="width: 100%; height: 100%; display: flex;">
    <div style="height: 100%;float: left; width: 70px; overflow: auto;">
      <ul class="leftBar">
        <li
          v-for="(item,index) in allItem"
          :key="item.name+index"
          :class="[theIndex == index ? 'active': '']"
          @click="clickLi(item,index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div id="foodBox" style="height: 100%;float: left; flex: 1; overflow: auto; padding:5px; text-align:left;">
      <ul class="food">
        <li 
          v-for="(one,index) in foodList"
          :key="one.name+index"
          :style="{height: liHeight+'px'}">
          <div class="foodImg">
            <img :src="one.images" />
          </div>
          <div class="foodContent">
            <p class="h28 title">{{one.name}}</p>
            <p class="h28">{{one.desc}}</p>
            <p class="h28">
              <i class="iconfont icon-54 fr font28"></i>
              ￥ {{one.price}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  // import { Indicator } from 'mint-ui';
  export default{
    data(){
      return{
        foodBoxHeight: 0,
        liHeight: 85,
        theIndex: 2,
        pageNum: 0,
        allFoodNum: 20,
        lastScrollTop: 0,
        oneLi: {
          name: '鸡腿饭',
          desc: '这是鸡腿饭',
          images: require('../assets/images/1.jpg'),
          price: '18.00'
        },
        foodList:[],
        allItem:[
        {
            name: '特色菜',
            category: 'special'
          },
          {
            name: '农家菜',
            category: 'family'
          },
          {
            name: '特殊汤',
            category: 'soap'
          },
          {
            name: '套餐1',
            category: 'bag1'
          },
          {
            name: '特色菜',
            category: 'special'
          },
          {
            name: '农家菜',
            category: 'family'
          },
          {
            name: '特殊汤',
            category: 'soap'
          },
          {
            name: '套餐1',
            category: 'bag1'
          },
          {
            name: '特色菜',
            category: 'special'
          },
          {
            name: '农家菜',
            category: 'family'
          },
          {
            name: '特殊汤',
            category: 'soap'
          },
          {
            name: '套餐1',
            category: 'bag1'
          }
        ]
      }
    },
    mounted(){
      

      // 获取右侧列表的高度
      let foodBoxObj = document.getElementById('foodBox');
      this.foodBoxHeight = foodBoxObj.clientHeight;
      // 每次滚动的高度大于屏幕的高度，就加载下一页
      console.log('this.foodBoxHeight:',this.foodBoxHeight);
      // 一页能放下多少个产品
      this.pageSize = parseInt(this.foodBoxHeight/this.liHeight);
      if(this.foodBoxHeight%this.liHeight){
        this.pageSize++
      }
      this.loadNext()
      console.log('this.pageSize:',this.pageSize);
      // 监听滚动条事件
      foodBoxObj.onscroll = ()=>{
        console.log('lib滚动',foodBoxObj.scrollTop);

        // 如果：box文档对象的滚动条scrollTop > (页数减去1 * 屏幕高度)， 就加载下一页
        if(foodBoxObj.scrollTop > ((this.pageNum -1)*this.foodBoxHeight) && foodBoxObj.scrollTop > this.lastScrollTop){
          let text = '加载下一页...'
          this.loadNext(text)
          this.lastScrollTop = foodBoxObj.scrollTop
        }

      }
    },
    methods:{
      loadNext(text){

        if(this.foodList.length < this.allFoodNum){
          for(let i=0;i<this.pageSize;i++){
            this.foodList.push(JSON.parse(JSON.stringify(this.oneLi)))
          }
          this.pageNum++;
        }else{
          text = '没有更多内容了..'
        }
        this.loadFun(text);
        setTimeout(()=>{
          this.closeLoad()
        },2000)
      },
      loadFun(text='加载中...'){
        this.$indicator.open({
          text,
          spinnerType: 'fading-circle',
          duration: 3000
        });
      },
      closeLoad(){
        this.$indicator.close();
      },
      clickLi(item,index){
        this.theIndex = index;
        console.log('clickLi:',item);
      }
    }
  }
</script>

<style>
  .food li{
    height: 85px;
    border: 1px solid #eee;
    margin-bottom: 10px;
    display: flex;
    border-radius:5px ;
  }
  .foodImg{
    width: 85px;
    height: 85px;
    padding: 8px;
  }
  .foodImg img{
    width: 100%;
    height: 100%;
  }
  .foodContent{
    height: 100%;
    flex: 1;
  }

  .foodContent .font28{
    font-size: 28px;
  }
  .foodContent .title{
    font-size: 18px;
  }
  .leftBar li{
    width: 100%;
    background-color: #eee;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .leftBar li.active{
    background-color: #fff;
  }
</style>
