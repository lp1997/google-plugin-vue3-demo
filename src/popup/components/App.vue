<template>
  <div class="google-plugin-main">
    <div class="tabs">
      <el-tabs :stretch="true" type="border-card" v-model="tabIndex" @tabChange="tabChange">
        <el-tab-pane v-for="(item,e) in filterTableData" :name="item.path" :key="e" :label="item.title" ></el-tab-pane>
      </el-tabs>
    </div>
    <el-scrollbar max-height="550px">
      <div class="page-com">
        <router-view />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routerMain } from '@popup/router/routers'
import { localGet } from '@/utils/chromeUtils'
import { useRouter } from 'vue-router'
import { pageTabs } from '@/popup/typeList'
const router = useRouter()
const selList = ref<string[]>([])
const filterTableData = ref<pageTabs[]>([])
const tabIndex = ref<string>('/')
const tabChange = (name:string) => { // tab切换
  router.push(name)
}

localGet(['selTypeList']).then((res:any) => {
  if (res.selTypeList) {
    selList.value = JSON.parse(res.selTypeList)
  }
  changeUserType(selList.value)
})
const changeUserType = (val:string[]) => { // 配置切换
  selList.value = val
  filterTableData.value = []
  setTimeout(() => {
    filterTableData.value = [...[routerMain[0]], ...routerMain.filter(
      (data:{title:string}) =>
        selList.value.includes(data.title)
    ).sort((a:{title:string}, b:{title:string}) => { return selList.value.indexOf(a.title) - selList.value.indexOf(b.title) }), ...[routerMain[1]]]
  }, 0)
}

window.Bus.$on('updateTab', (val:string[]) => { // 更新tab选择
  changeUserType(val)
})
</script>

<style lang="stylus">
.google-plugin-main{
  position: relative
  min-width: 500px
  min-height: 400px
  .tabs{
    width: 100%
    .el-tabs__content{
      display: none
    }
  }
  .page-com{
    padding: 15px
  }
  .flex{
    display: flex
  }
  .flex-center{
    justify-content: center
  }
}
</style>
