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
      prop="proCode"
      label="地区"
    >
      <template slot-scope="scope">
        <span >广州</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="state"
      label="连接状态"
    >
    </el-table-column>
    <el-table-column
      prop="contact"
      label="联系人"
    >
    </el-table-column>
    <el-table-column
      prop="contactPhone"
      label="联系电话"
    >
    </el-table-column>
  </el-table>

</div>
</template>
<style rel="stylesheet/less" lang="less" slot>
  @import "../../../../styles/theme";
  @import url(connectionStatus.less);
</style>
<script type="text/babel">
  module.exports = require('./connectionStatus.js')
</script>
