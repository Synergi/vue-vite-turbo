import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { Dropdown, vClosePopper, Menu } from "floating-vue";
import "floating-vue/dist/style.css";

import App from './App.vue';
import './assets/style.css'

// i18n
import { i18n } from '@ipscape/i18n';

// creating app
const app = createApp(App);

// add pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// add error handler
// app.config.errorHandler = useErrorService().onError;
// app.config.warnHandler = useErrorService().onWarning;

// i18n
app.use(i18n);

app.directive("close-popper", vClosePopper)
    .component("VDropdown", Dropdown)
    .component("VMenu", Menu)
    .mount('#app');
