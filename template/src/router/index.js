import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Home'
import systemHome from '@/views/system'
import connectionStatus from '@/views/system/dataChangeCount/connectionStatus/connectionStatus.vue'
import connectionAmount from '@/views/system/dataChangeCount/connectionAmount/connectionAmount.vue'
import overallSituationDataSum from'@/views/system/overallSituation/dataSum'
import overallSituationDataNum from '@/views/system/overallSituation/dataNum'

Vue.use(Router)

// route-level code splitting
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/overallSituation',
        },
        {
            path: '/overallSituation',
            component: systemHome,
            redirect: '/overallSituation/dataSum',
            name: '总体情况',
            icon:'iconfont icon-zongtixinxi',
            children: [
                { path: 'dataNum',
                    component: overallSituationDataNum,
                    name: '数据统计',
                },
                { path: 'dataSum',
                    component: overallSituationDataSum,
                    name: '数据汇总',
                },

            ]
        },
        {
            path: '/dataChangeCount',
            component: systemHome,
            redirect: '/dataChangeCount/dataSum',
            name: '数据交换监控',
            icon:'iconfont icon-shujujiaohuan',
            children: [
                { path: 'connectionStatus',
                    component: connectionStatus,
                    name: '链接状态监控',
                },
                { path: 'connectionAmount',
                    component: connectionAmount,
                    name: '链接数量监控',
                },
            ]
        },
    ]
})

export default router