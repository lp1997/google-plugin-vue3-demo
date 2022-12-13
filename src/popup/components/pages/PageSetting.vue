<template>
  <div class="page-setting">
    <el-button type="primary" @click="showFuncList = true"
      >配置插件功能</el-button
    >
    <el-dialog v-model="showFuncList" :width="450">
      <el-checkbox-group v-model="checkListSel" :max="5">
        <div v-for="(el,e) in routerMain" :key="e">
          <el-checkbox v-if="!el.isCom" :label="el.title" border />
        </div>
      </el-checkbox-group>
      <div class="btn-cont flex">
        <el-button type="info" style="width: 50%" @click="selCancel"
          >取消</el-button
        >
        <el-button type="primary" style="width: 50%" @click="selConfirm"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { routerMain } from '@/popup/router/routers'
import { localGet, localSet } from '@/utils/chromeUtils'
import { pageTabs } from '@/popup/typeList'
import { ref } from 'vue'
export default {
  name: 'PageSetting'
}
</script>
<script lang="ts" setup>
const showFuncList = ref<boolean>(false) // 显示插件功能配置弹窗
const checkList = ref<pageTabs[]>([])// 选择的功能列表
const checkListSel = ref<pageTabs[]>([])// 选中未确认的功能列表

localGet(['selTypeList']).then((res:any) => {
  if (res.selTypeList) {
    checkListSel.value = checkList.value = JSON.parse(res.selTypeList)
  }
})

const selCancel = () => { // 功能列表取消选择
  checkListSel.value = checkList.value
  showFuncList.value = false
}

const selConfirm = () => { // 功能列表确认选择
  checkList.value = checkListSel.value
  showFuncList.value = false
  window.Bus.$emit('updateTab', checkList.value)
  localSet('selTypeList', JSON.stringify(checkList.value))
}
</script>
<style lang="stylus" scoped>
.el-dialog{
  .btn-cont{
    margin-top: 30px
  }
}
</style>
