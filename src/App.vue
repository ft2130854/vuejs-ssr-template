<template>
    <div id="app">
        <div class="canton_wrapper">
            <header-bar :selectSystemVal="selectSystemVal" @selectSystem="selectSystem"></header-bar>
            <left-menu></left-menu>
            <div class="mainContainer">
                <div class="tag">{{selectSystemVal}}
                    <span v-for="(route ,index) in $route.matched" :key="index">>{{route.name}}</span>
                </div>
                <div class="mainContainerInner">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import HeaderBar from './components/headerBar.vue'
    import LeftMenu from './components/leftMenu.vue'

    export default {
        name: 'app',
        data() {
            return {
                selectSystemVal: '采集子系统'
            }
        },
        components: {HeaderBar, LeftMenu},

        computed: {
            ...mapGetters('i18n', ['locale'])
        },
        watch: {
            locale() {
                this.$i18n.locale = this.locale
            }
        },
        methods: {
            ...mapActions('i18n', ['setLang']),
            selectSystem(val) {

                this.selectSystemVal = val
            }
        },
        created() {
            this.$i18n.locale = this.locale
        }
    }
</script>

<style lang="less">
    @import './styles/theme.less';
    body{
        background-color: @body_bg;
        .canton_wrapper{
            .mainContainer{
                margin-left: 256px;
                margin-top: 120px;
                .tag{
                    font-size: @font_14;
                    color: @font_color9;
                    padding: @margin_tiny 0;
                }
                .mainContainerInner{
                    background-color: @main_bg;
                    padding: @margin_primary;

                }
            }
        }
    }
</style>