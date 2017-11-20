<template>
    <div class="tabContainer">
      <el-tabs @tab-click="tabChange" type="border-card" v-model="activeName">
        <el-tab-pane label="数据来源统计" name="1" >
          <div class="clearfix">
            <div style="float: left">
              <el-radio-group v-model="selectType" @change="radioEvent">
                <el-radio-button :label="'projectMber'" > 工程数量</el-radio-button>
                <el-radio-button :label="'projectPrice'">工程资金</el-radio-button>
                <el-radio-button :label="'dataCapacity'">数据容量</el-radio-button>
              </el-radio-group>
            </div>
            <div style="float: right">
              <el-date-picker
                v-model="time_one"
                @change="dataSourceStartDateChange"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
              <span>至</span>
              <el-date-picker
                v-model="time_two"
                @change="dataSourceEndDateChange"

                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <div class="dataWrapper">
            <ul  class="gpg_line  clearfix">
              <li  class="gpg_line_item">
                <div><span>劳保中心</span><i class="iconfont icon-arrow"></i></div>
                <div><span style="font-size: 32px">50</span>个工程</div>
                <el-progress style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
              </li>
              <li class="gpg_line_item">
                <div class="gpg_middle">
                  <div><span>发改委</span><i class="iconfont icon-arrow"></i></div>
                  <div><span style="font-size: 32px">15</span>个</div>
                  <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                </div>
              </li>
              <li class="gpg_line_item">
                <div class="gpg_middle">
                  <div><span>控制备案系统</span><i class="iconfont icon-arrow"></i></div>
                  <div><span style="font-size: 32px">100</span>个合同</div>
                  <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                </div>
              </li>
            </ul>

            <ul  class="gpg_line clearfix">
              <li  class="gpg_left gpg_line_item">
                <div><span>劳保中心</span><i class="iconfont icon-arrow"></i></div>
                <div><span style="font-size: 32px">50</span>个工程</div>
                <el-progress style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
              </li>
              <li class="gpg_line_item">
                <div class="gpg_bigMiddle">
                  <div class="gpg_bigMiddle_inner">
                    <div class="gpg_bigMiddle_inner_one"><span>造价大数据</span><i class="iconfont"></i></div>
                    <div class="gpg_bigMiddle_inner_two"><span >937377</span>kb</div>
                    <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                  </div>
                </div>
              </li>
              <li  class="gpg_left gpg_line_item">
                <div class="gpg_middle">
                  <div><span>控制备案系统</span><i class="iconfont icon-arrow"></i></div>
                  <div><span style="font-size: 32px">100</span>个合同</div>
                  <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                </div>
              </li>
            </ul>


            <ul class="gpg_line clearfix">
              <li class="gpg_line_item">
                <div><span>劳保中心</span><i class="iconfont icon-arrow"></i></div>
                <div><span style="font-size: 32px">50</span>个工程</div>
                <el-progress style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
              </li>
              <li class="gpg_line_item">
                <div class="gpg_source">
                  <div><span>公共资源交易中心</span><i class="iconfont icon-arrow"></i></div>
                  <ul  class="gpg_source_title clearfix">
                    <li >
                      <div class="gpg_source_text">招标标段</div>
                      <div><span class="gpg_source_lightText">300</span>个</div>
                    </li>
                    <li >
                      <div>招标文件</div>
                      <div><span>1000</span>个</div>
                    </li>
                    <li >
                      <div>企业信息</div>
                      <div><span>300</span>家</div>
                    </li>
                  </ul>
                  <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                </div>
              </li>
              <li class="gpg_line_item">
                <div class="gpg_middle">
                  <div><span>控制备案系统</span><i class="iconfont icon-arrow_left-up"></i></div>
                  <div><span style="font-size: 32px">100</span>个合同</div>
                  <el-progress status="success" style="width: 200px"  :show-text="false" :stroke-width="12" :percentage="15"></el-progress>
                </div>
              </li>
            </ul>
          </div>


        </el-tab-pane>
        <el-tab-pane label="项目节点统计" name="2">
          <div class="clearfix">
            <div style="float: left">
              <el-radio-group v-model="selectType_two">
                <el-radio-button label="工程数量"></el-radio-button>
                <el-radio-button label="工程资金"></el-radio-button>
              </el-radio-group>
            </div>
            <div style="float: right">
              <el-date-picker
                v-model="time_three"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
              <span>至</span>
              <el-date-picker
                v-model="time_four"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <div class="chartsWidth" id="chartBarId" :style="{width:width,height:height}"></div>


        </el-tab-pane>
        <el-tab-pane label="项目增量统计" name="3">
          <div class="clearfix">
            <div style="float: left">
              <el-radio-group v-model="selectType_three">
                <el-radio-button label="工程数量"></el-radio-button>
                <el-radio-button label="工程资金"></el-radio-button>
                <el-radio-button label="数据容量"></el-radio-button>
              </el-radio-group>
            </div>
            <div style="float: right">
              <el-date-picker
                v-model="time_five"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
              <span>至</span>
              <el-date-picker
                v-model="time_six"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <div class="chartsWidth" id="chartlineId" :style="{width:width,height:height}"></div>
        </el-tab-pane>
        <el-tab-pane label="数据推送统计" name="4" class="clearfix">
          <div style="float: right">
            <el-date-picker
              v-model="time_seven"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
            <span>至</span>
            <el-date-picker
              v-model="time_eight"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
          <div class="chartsWidth" id="chartlineIdTwo" :style="{width:width,height:height}"></div>

        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<style rel="stylesheet/less" lang="less" slot>
  @import "../../../../styles/theme";
  @import url(dataNum);
</style>

<script type="text/babel">
  module.exports = require('./dataNum.js')
</script>
