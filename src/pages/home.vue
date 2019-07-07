<template lang="pug">
  f7-page

      f7-navbar
        f7-nav-left
          f7-link(panel-open='left')
            img(src="static/img/icons/menu.svg" width="30px")
        f7-nav-title Hotels
      
      f7-toolbar(bottom)
        f7-link Левая ссылка
        f7-link Правая ссылка

      f7-block-title(medium) Данные REST API
      
      div(v-if="hotels.loading")
        Loader
      div(v-else)
        f7-list
          f7-list-item(simple-list, v-for="hotel in hotels.items", v-bind:key="hotel.id", :title="hotel.title")

</template>
<script>
import { mapState } from 'vuex';
import Loader from '../components/Loader';

export default {
  name: 'home',
  data (){
    return{
     
    }
  },
  components:{
    Loader
  },
  computed: {
    ...mapState([
      'hotels'
    ])
  },
  mounted() {
    this.$f7ready((f7) => {
        this.getHotels();
    });
  },
  methods:{
    getHotels(){
      this.$store.dispatch('GET_HOTELS','todos').then(() => {
        // все ок
      })
      .catch(error => {
        // ошибка
      });
    }
  }
}
</script>
