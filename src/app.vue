<template lang="pug">
  //  App 
  f7-app(:params='f7params')
    
    //  Statusbar 
    f7-statusbar

    //  Left Panel 
    f7-panel(left reveal theme-dark)
      PanelLeft

    //  Main View 
    f7-view#main-view.safe-areas(url='/' main)
    
    //  Popup 
    f7-popup#popup
      f7-view
        f7-page
          f7-navbar(title='Popup')
            f7-nav-right
              f7-link(popup-close) Закрыть
          f7-block Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.

</template>

<script>
import routes from './routes.js';
import PanelLeft from './components/PanelLeft';

export default {
  data() {
    return {
      // Framework7 params
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Dream Hotel Anapa', // App name
        theme: 'md',
        routes: routes,
      },
    }
  },
  components:{
    PanelLeft
  }
  
}
</script>
