<template>
    <div class="leftContainer" >
        <el-menu unique-opened  :default-active="$route.path" class="el-menu-vertical-demo" v-for="(route,index) in $router.options.routes" :key="index" v-if="route.name">
            <el-submenu :index="route.path">
                <template slot="title">
                    <i :class="route.icon"></i>
                    <span>{{route.name}}</span>
                </template>
                <router-link :to="route.path+'/'+child.path" v-for="(child,index) in route.children" :key="index">
                    <el-menu-item :index="route.path+'/'+child.path" >{{child.name}}</el-menu-item>

                </router-link>
            </el-submenu>

        </el-menu>
    </div>
</template>

<style rel="stylesheet/less" lang="less"  scoped>
    @import '../styles/theme.less';
    .leftContainer{
        width: 236px;
        background-color: @main_bg;
        position: fixed;
        top: 120px;
        left:0;
        height: 100%;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {}
        },
        methods: {},
        created(){
            console.log(this.$router);
        }
    }

</script>
