<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {getAll} from './api/index'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted () {
    //  this.$store.dispatch('getAll')
    this.getAll()
  },
  methods: {
    ...mapActions(['getAll'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background-color #f5f5f5
</style>
