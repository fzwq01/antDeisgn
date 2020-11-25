<template>
  <a-layout id="components-layout-demo-top-side-2" >
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
        @collapse= 'collapse'
        @openChange='openChange'
      >
        <a-menu-item key="1">
          首页
        </a-menu-item>
        <a-menu-item key="2">
          详情页
        </a-menu-item>
        <a-menu-item key="3">
          帮助
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />权限管理</span>
            <a-menu-item key="1">
              授权管理
            </a-menu-item>
            <a-menu-item key="2">
              授权管理
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />密钥管理</span>
            <a-menu-item key="5">
              用户密钥管理
            </a-menu-item>
            <a-menu-item key="6">
              对称密钥管理
            </a-menu-item>
            <a-menu-item key="7">
              密钥备份
            </a-menu-item>
            <a-menu-item key="8">
              密钥恢复
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />日志管理</span>
            <a-menu-item key="9">
              查看日志信息
            </a-menu-item>
            <a-menu-item key="10">
             日志归档策略
            </a-menu-item>
            <a-menu-item key="11">
              日志归档记录
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <center-content></center-content>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import centerContent from '../components/content'

// import {allProducts} from '../plugins/api'

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
      centerContent
  },
  created(){
      this.getAll();
  },
  methods:{
    async getAll(){
        // let res = await allProjects();
        // console.log(res)
        // allProducts().then(res => {
        //     console.log(res)
        // })
    },
    openChange(openKeys){
        console.log(openKeys)
    },
    collapse(collapsed, type){
        console.log(collapsed, type)
    }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.ant-layout{
    height: 100%;
}
</style>
