<template>
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
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                selectSystemVal: '采集子系统'
            }
        },
        methods: {
            selectSystem(val) {
                this.selectSystemVal = val
            }
        },
        created() {

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
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
