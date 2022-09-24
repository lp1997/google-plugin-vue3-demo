<template>
  <div class="google-plugin-main">
    <div class="tabs">
      <el-tabs :stretch="true" type="border-card" v-model="tabIndex">
        <el-tab-pane :name="item.id" :label="item.name" v-for="item in tabList" :key="item.id"></el-tab-pane>
      </el-tabs>
    </div>
    <el-scrollbar max-height="550px">
      <div class="page-com">
        <Main v-show="tabIndex === 1"/>
        <Hello v-show="tabIndex === 2"/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Main from './pages/PageMain.vue'
import Hello from './pages/PageHello.vue'

const tabIndex = ref(1)
const tabList = ref([
  {
    id: 1,
    name: 'tab1'
  },
  {
    id: 2,
    name: 'tab2'
  }
])
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
