<template>
    <div class="headerContainer">
        <ul class="headerUl clearfix">
            <li >
                <div class="bigTitle">
                    <i class="iconfont icon-guanli"></i>
                    <span>广州市建设工程造价大数据统计与分析平台</span>
                </div>
            </li>

            <li >
                <div class="user">
                    <i class="el-icon-warning"></i>
                    <span>15114890157</span>
                    <span>退出</span>
                </div>
            </li>
            <li>
                <select v-model="selectedval" class="system" @change="selectSystem">
                    <option v-for="(select,index) in options" :key="index" class="systemKids">{{select.label}}</option>
                </select>
            </li>
        </ul>
    </div>

</template>

<style rel="stylesheet/less" lang="less"  scoped>
    @import '../styles/theme.less';
    .headerContainer{

        background-color: @header_bg;
        color: @font_color_head;
        padding: 33px @margin_main 33px @margin_primary;
        position: fixed;
        left:0;
        top:0;
        width: calc(~"100% - 90px");
        z-index: 999;
        .headerUl{
            .bigTitle{
                font-size: 22px;
                margin-top: @margin_tiny;
            }
            li{
                float: left;
                &:not(:first-child){
                    float: right;
                    margin-left: @margin_primary;
                }
            }
        }
        .icon-guanli{
            font-size: 32px;
            vertical-align: -5px;
        }
        .user{
            font-size: @font_14;
            margin-top: @margin_tiny;
        }
        .system{
            height: 54px;
            width: 252px;
            background-color: #4a5259;
            border: none;
            color: #fdfdfd;
            font-size: 22px;
            outline: 0;
            border-radius: 8px;
            .systemKids{
                background-color: @header_bg;
                &:hover{
                    background-color: #4a5259;

                }
            }

        }



    }

</style>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '采集子系统'
                }, {
                    value: '2',
                    label: '造价子系统'
                }, {
                    value: '3',
                    label: 'BIM子系统'
                }, ],
                selectedval:'采集子系统',
            }
        },
        props:{
            selectSystemVal:String
        },
        watch: {
            selectSystemVal (val) {
                this.selectedval =val
            }
        },
        methods: {
            selectSystem(e){

                this.$emit('selectSystem',e.target.value)
            }
        },
        created(){

        }
    }

</script>
