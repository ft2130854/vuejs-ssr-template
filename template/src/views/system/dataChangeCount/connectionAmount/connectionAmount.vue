<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="DataList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="index"
        label="序号"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="systemName"
        label="平台名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="systemCode"
        label="平台编码"
      >
      </el-table-column>
      <el-table-column
        prop="aggregateSucceedNumber"
        label="总计数据同步成功次数"
      >
      </el-table-column>
      <el-table-column
        prop="aggregateErrorNumber"
        label="总计数据同步失败次数"
      >
      </el-table-column>

    </el-table>

  </div>
</template>
<style rel="stylesheet/less" lang="less" slot>
  @import "../../../../styles/theme";
  @import url(connectionAmount.less);
</style>
<script type="text/babel">
  module.exports = require('./connectionAmount.js')
</script>
