/**
 * Created by liangx-h on 2017/10/25.
 */
import  qs from 'qs'
export default {
  data() {
    return {
      //工程分类
      projectVal:'',
      projectValOptions: [],
      //计价环节
      valuation:'',
      valuationOptions: [],
      //数据来源
      dataSource:'',
      dataSourceOptions: [],
      //投资性质
      invest:'',
      investOptions: [],
      //时间
      time:'',
      timeOptions: [
        {
          label:'备案时间',
          value:'keepDatetime',
        },
        {
          label:'采集时间',
          value:'collectDatetime',
        },
      ],

      time_one:'',
      time_two:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },

      keyword:'',

      //表格
      tableData: [

      ],
      multipleSelection: [],
      pageSize:10,
      currentPage:1,
      totalNum:null,
      paramsObj :{//参数
        subprojectType:'',
        costStage:'',
        dataSource:'',
        investType:'',
        login:'',
        startDate:'',
        endDate:'',
        projectCodeAndName:'',
        pageSize:10,
        currentPage:1,
      }

    }
  },
  methods: {
    //搜索
    keywordSearch(){
      this.paramsObj.projectCodeAndName = this.keyword
      this.fetchData()
    },
    //全选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //下载一行数据
    downloadRow(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {

    },
    handleCurrentChange(val) {
      this.currentPage =val
      this.fetchData()
    },
//获取列表数据
    fetchData(){
      this.paramsObj.currentPage = this.currentPage

      this.$http.post('/hlht/case/ajax/dataCollectSystemList', this.paramsObj).then(res=>{
        this.tableData = res.data.data.list
        this.totalNum = res.data.data.total
      },response=>{})
    },
//获取下拉选项数据
    fetchSelectData(){
      this.$http.post('/hlht/case/dataCollectSystem').then(res=>{

        res.data.data.subprojectTypeList.forEach((item,index)=>{
          let obj = {
            label:item,
            value:item,
          }
           this.projectValOptions.push(obj)
        })
        res.data.data.investTypeList.forEach((item,index)=>{
          let obj = {
            label:item,
            value:item,
          }
           this.investOptions.push(obj)
        })
        res.data.data.costStageList.forEach((item,index)=>{
          let obj = {
            label:item,
            value:item,
          }
           this.valuationOptions.push(obj)
        })
        res.data.data.dataSourceList.forEach((item,index)=>{
          let obj = {
            label:item,
            value:item,
          }
           this.dataSourceOptions.push(obj)
        })
      },response=>{})
    },
//筛选数据
    selectData(){

      this.paramsObj.subprojectType = this.projectVal
      this.paramsObj.costStage = this.valuation
      this.paramsObj.dataSource = this.dataSource
      this.paramsObj.investType = this.invest
      this.paramsObj.login = this.time
      this.fetchData()
    },

    //开始日期
    startDateChange(val){
      this.paramsObj.startDate = val
    },
    endDateChange(val){
      this.paramsObj.endDate = val
    },

  },
  created(){
    this.fetchSelectData()
    this.fetchData()
  },



}
