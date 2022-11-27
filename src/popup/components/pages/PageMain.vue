<template>
  <div class="page-main">
    <div class="page-info-sec flex">
      <QrcodeVue :value="link" :size="150"></QrcodeVue>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { getPageInfo } from '@/utils/chromeUtils'
export default {
  name: 'PageMain'
}
</script>
<script lang="ts" setup>
const link = ref<string>('')
getPageInfo().then((tabs:any) => {
  link.value = tabs[0].url
})
</script>
