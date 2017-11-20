<template>
    <div>
      <!--头部-->
      <ul class="headerType clearfix">
        <li>
          <span>工程分类：</span>
          <el-select v-model="projectVal" placeholder="请选择">
            <el-option
              v-for="item in projectValOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>计价环节：</span>
          <el-select v-model="valuation" placeholder="请选择">
            <el-option
              v-for="item in valuationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>数据来源：</span>
          <el-select v-model="dataSource" placeholder="请选择">
            <el-option
              v-for="item in dataSourceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li >
          <span>投资性质：</span>
          <el-select v-model="invest" placeholder="请选择">
            <el-option
              v-for="item in investOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li >
          <span>时间：</span>
          <el-select v-model="time" placeholder="请选择">
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>

        <li >
          <el-date-picker
            v-model="time_one"
            @change="startDateChange"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
          <span>至</span>
          <el-date-picker
            @change="endDateChange"

            v-model="time_two"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </li>
        <li >
          <el-button @click="selectData" type="primary" size="large">确定</el-button>
        </li>
      </ul>
      <!--搜索-->
      <ul class="resultSearch clearfix">
        <li>
          <el-input
            class="searchInput"
            placeholder="请在结果中搜索"
            icon="search"
            v-model="keyword"
            :on-icon-click="keywordSearch">
          </el-input>
        </li>

        <li>
          <el-button type="primary" size="large">导出表格</el-button>
        </li>
        <li>
          <el-button type="primary" size="large">批量下载</el-button>
        </li>
      </ul>

      <!--表格-->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          >
        </el-table-column>
        <el-table-column
          prop="prjName"
          label="项目名称"
          width="180"
          >
        </el-table-column>
        <el-table-column
          prop="goverInvestCode"
          label="政府投资编码"
          >
        </el-table-column>
        <el-table-column
          prop="prjCode"
          label="项目编号"
          >
        </el-table-column>
        <el-table-column
          prop="subprojectCode"
          label="工程编码"
          >
        </el-table-column>
        <el-table-column
          prop="dataSource"
          label="数据来源"
          >
        </el-table-column>
        <el-table-column
          prop="collectDatetime"
          label="采集时间"
          >
        </el-table-column>
        <el-table-column
          prop="keepDatetime"
          label="备案时间"
          >
        </el-table-column>
        <el-table-column
          prop="costStage"
          label="计价环节"
          >
        </el-table-column>
        <el-table-column
          prop="subprojectType"
          label="工程分类"
          >
        </el-table-column>
        <el-table-column
          prop="fileExt"
          label="计价文件类型"
          >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="下载" placement="top">
              <i class="iconfont icon-downloadline" @click="downloadRow(scope.$index, scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>

      </el-table>


      <!--分页-->
      <div class="block clearfix" v-if="totalNum>pageSize">

        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout=" prev, pager, next,total, jumper"
          :total="totalNum">
        </el-pagination>
      </div>


    </div>
</template>

<style rel="stylesheet/less" lang="less" slot>
  @import "../../../../styles/theme";
  @import url(dataSum.less);
</style>

<script type="text/babel">
  module.exports = require('./dataSum.js')
</script>
