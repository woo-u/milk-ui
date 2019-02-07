import Vue from 'vue'
import Router from 'vue-router'

const AsyncComponent = (component) => ({
  // The component to load (should be a Promise)
  component: import(/* webpackChunkName: "view-[request]" */'@/components/'+component),
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

Vue.use(Router)


export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'colors',
      component: () => AsyncComponent('Colors'),
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => AsyncComponent('Colors'),
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => AsyncComponent('Buttons'),
    },
    {
      path: '/typography',
      name: 'typography',
      component: () => AsyncComponent('Typography'),
    },
    {
      path: '/iconography',
      name: 'iconography',
      component: () => AsyncComponent('Iconography'),
    },
    {
      path: '/checkboxes',
      name: 'checkboxes',
      component: () => AsyncComponent('CheckBoxes'),
    },
    
  ]
})