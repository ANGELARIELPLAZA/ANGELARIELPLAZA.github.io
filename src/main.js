import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { loadModule } from 'https://unpkg.com/vue3-sfc-loader@0.10.1/dist/vue3-sfc-loader.esm.js';

const mountTarget = '#app';
const appContainer = document.querySelector(mountTarget);

const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw Object.assign(new Error(`Error ${response.status} al cargar ${url}`), { response });
    }
    return await response.text();
  },
  addStyle(textContent) {
    const style = document.createElement('style');
    style.textContent = textContent;
    document.head.appendChild(style);
  },
};

loadModule('./src/App.vue', options)
  .then((component) => {
    const App = component?.default ?? component;
    const app = Vue.createApp(App);
    app.mount(mountTarget);
  })
  .catch((error) => {
    console.error('No se pudo inicializar la invitación:', error);
    if (appContainer) {
      appContainer.innerHTML =
        '<p style="padding:1rem;text-align:center;color:#8b0000;">No se pudo cargar la invitación. Intenta recargar la página.</p>';
    }
  });
