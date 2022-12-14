import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'// 中文
import locale from 'element-plus/lib/locale/lang/zh-cn'// 中文
import Bus from '@/utils/utils'

window.Bus = Bus
createApp(App).use(router).use(ElementPlus, { locale }).mount('#app')
