import { Route } from 'vue-router';

/* eslint-disable */

// @ts-ignore
export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production')
    return

  // @ts-ignore
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function() {(m[i].a=m[i].a||[]).push(arguments)};
  // @ts-ignore
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");


  // @ts-ignore
  ym(66889903, "init", {
    defer: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

  app.router.afterEach((to: Route) => {
    // @ts-ignore
    ym(66889903, 'hit', to.fullPath);
  })
};
