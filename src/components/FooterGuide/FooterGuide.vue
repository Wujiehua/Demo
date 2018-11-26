<template>
    <footer class="footer_guide">
        <a href="javascript:void(0);" class="guide_item" @click="goTo('/home')" :class="{on : isCurrent('/home')}">
            <span class="item_icon">
                <i class="iconfont icon-al-home"></i>
            </span>
            <span>外卖</span>
        </a>
        <a href="javascript:void(0);" class="guide_item" @click="goTo('/search')" :class="{on : isCurrent('/search')}">
            <span class="item_icon">
                <i class="iconfont icon-al-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:void(0);" class="guide_item" @click="goTo('/order')" :class="{on : isCurrent('/order')}">
            <span class="item_icon">
                <i class="iconfont icon-al-order"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:void(0);" class="guide_item" @click="goTo('/personal')" :class="{on : isCurrent('/personal')}">
            <span class="item_icon">
                <i class="iconfont icon-al-my"></i>
            </span>
            <span>我的</span>
        </a>
    </footer>
</template>
<script>
    export default {
        methods:{
            goTo (path) {
                this.$router.replace(path)
            },
            isCurrent (path) {
               return this.$route.path === path
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl";
 .footer_guide
     top-border-1px(#e4e4e4)
     position fixed
     z-index 100
     left 0
     bottom 0
     right 0
     background-color #ffffff
     width 100%
     height 50px
     display flex
     .guide_item
         display flex
         flex 1
         text-align center
         flex-direction column
         align-items center
         margin 5px
         color #999999
         &.on
             color #02a774
        span
            font-size 12px
            margin 2px 0 2px
            .iconfont
                font-size 22px
section
        .header //头部公共css
          background-color #02a774
          position fixed
          z-index 100
          left 0
          top 0
          width 100%
          height 45px
          .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .iconfont
              font-size 22px
              color #fff
          .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 30%
            color #fff
            font-size 22px
            text-align center

</style>
