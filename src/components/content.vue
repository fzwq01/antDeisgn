<template>
  <div>
    <!-- 上传 -->
    <a-upload>
        <a-button><a-icon type="upload" /> 上传 </a-button>
    </a-upload>
    <!-- 确认操作 -->
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
        <a-button>Confirm</a-button>
    </a-popconfirm>

    <a-button type='primary'>you see,the style has changed</a-button>

    <!-- 面包屑 -->
    <a-breadcrumb :routes="routes">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
            <span v-if="routes.indexOf(route) === routes.length - 1">
                {{route.breadcrumbName}}
            </span>
            <router-link v-else :to="paths.join('/')">
                {{route.breadcrumbName}}
            </router-link>
        </template>
  </a-breadcrumb>
  <!-- TBALE -->
  <a-table
        :columns="columns"
        :dataSource="dataSource">
        <span slot="customTitle"><a-icon type="smile-o"/>Name</span>
</a-table>


<h1>测试 git</h1>
<h1>测试 git</h1>
<h1>测试 git</h1>
<h1>测试 git</h1>
<h1>测试 git</h1>
<h1>测试 git</h1>
  </div>
</template>

<script>
export default {
    data(){
        return{
            routes: [
                {
                    path: 'index',
                    breadcrumbName: 'home',
                    params:'xoxoxoo'
                },
                {
                    path: 'first',
                    breadcrumbName: 'first',
                    children: [
                    {
                        path: '/general',
                        breadcrumbName: 'General',
                        params:'1111'
                    },
                    {
                        path: '/layout',
                        breadcrumbName: 'Layout',
                        params:'222'
                    },
                    {
                        path: '/navigation',
                        breadcrumbName: 'Navigation',
                        params:'333'
                    },
                    ],
                },
                {
                    path: 'second',
                    breadcrumbName: 'second',
                },
            ],
            columns:{
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .ant-upload{
    margin-bottom: 20px !important;
}
</style>