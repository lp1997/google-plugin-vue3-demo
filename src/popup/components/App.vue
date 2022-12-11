<template>
  <div class="google-plugin-main">
    <div class="tabs">
      <el-tabs :stretch="true" type="border-card" v-model="tabIndex" @tabChange="tabChange">
        <el-tab-pane v-for="(item,e) in routerMain" :name="item.path" :key="e" :label="item.title" ></el-tab-pane>
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
import { useRouter } from 'vue-router'
const router = useRouter()

const tabIndex = ref<string>('/')
const tabChange = (name:string) => { // tab切换
  router.push(name)
}
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
