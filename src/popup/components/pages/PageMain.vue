<template>
  <div class="page-main">
    <div class="page-info-sec flex">
      <QrcodeVue :value="link" :size="150"></QrcodeVue>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { getPageInfo } from '@/utils/comUtils'

const link = ref('')
getPageInfo().then(tabs => {
  link.value = tabs[0].url
})
</script>
