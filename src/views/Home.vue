<template>
  <div class="home">
      <!-- 按钮 -->
        <div>
            <a-button type="primary" ghost @click='clickButton'>
            Primary
            </a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">
            Dashed
            </a-button>
            <a-button type="danger">
            Danger
            </a-button>
            <a-config-provider :auto-insert-space-in-button="false">
            <a-button type="primary">
                按钮
            </a-button>
            </a-config-provider>
            <a-button type="primary" size='large'>
            按钮
            </a-button>
            <a-button type="link" loading >
            Link
            </a-button>
        </div>
         <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)', marginTop:'20px', marginBottom:'20px'}">
            <a-button ghost>
                Ghost
            </a-button>
            <a-button ghost disabled>
                Ghost(disabled)
            </a-button>
        </div>
        <a-button type="primary" shape="circle" icon="search" />
        <!-- 图标 -->
        <div>
            <a-icon type="fast-backward" />
            <a-icon type="scissor" />
            <a-icon type="up-circle" />
            <a-icon type="highlight" />
            <a-icon type="snippets" />
            <a-icon type="apple" />
            <!-- 使用iconfont.cn  -->
            <icon-font type="icon-twitter" />
            <!-- 自定义图标 -->
            <!-- <panda-icon :style="{ fontSize: '60px' }" /> -->
            <!-- 多色图标 -->
            <a-icon type="smile" theme="twoTone" />
            <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
            
        </div>
        <!-- layout -->
         <div>
            <a-row>
                <a-col :span="12" class="col1">
                    col-12
                </a-col>
                <a-col :span="12" class="col2">
                    col-12
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="8" class="col1">
                    col-8
                </a-col>
                <a-col :span="8" class="col2">
                    col-8
                </a-col>
                <a-col :span="8" class="col3">
                    col-8
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="6" class="col4">
                    col-6
                </a-col>
                <a-col :span="6" class="col5">
                    col-6
                </a-col>
                <a-col :span="6" class="col2">
                    col-6
                </a-col>
                <a-col :span="6" class="col1">
                    col-6
                </a-col>
            </a-row>
        </div>

        <!-- 布局 -->
        <div id="components-layout-demo-basi">
            <a-layout>
                <a-layout-sider>Sider</a-layout-sider>
                <a-layout>
                    <a-layout-header>Header</a-layout-header>
                    <a-layout-content>Content</a-layout-content>
                    <a-layout-footer>Footer</a-layout-footer>
                </a-layout>
            </a-layout>
        </div>
         
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const PandaSvg = {
  template: `
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z" fill="#6B676E" p-id="1143" />
      <path d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z" fill="#FFEBD2" p-id="1144" />
      <path d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z" fill="#E9D7C3" p-id="1145" />
      <path d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z" fill="#FFFFFF" p-id="1146" />
      <path d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z" fill="#6B676E" p-id="1147" />
      <path d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z" fill="#464655" p-id="1148" />
      <path d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1149" />
      <path d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1150" />
    </svg>
  `,
};
const PandaIcon = {
  template: `
    <a-icon :component="PandaSvg" />
  `,
  data() {
    return {
      PandaSvg,
    };
  },
};


export default {
  name: 'home',
  components: {
       IconFont,
       PandaIcon,
  },
  methods:{
      clickButton(){
        
      }
  }
}
</script>

<style lang="scss" scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
