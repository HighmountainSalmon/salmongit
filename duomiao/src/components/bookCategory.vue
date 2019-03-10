<!--  -->
<template>
  <div class="category-area mb-30">
    <h3>
      <a href="#">图书商品分类
        <i class="fa fa-bars"></i>
      </a>
    </h3>
    <div class="category-menu">
      <nav class="menu">
        <ul>
          <li class="cr-dropdown" v-for='(value,key,index) in bookCategory' :key='index'>
              <a href="#">
                {{key}}
                <i class="none-lg fa fa-angle-down"></i>
                <i class="none-sm fa fa-angle-right"></i>
              </a>
              <div class="left-menu">
                <span v-for='(value, key) in value' :key='value'>
                  <a href="#">
                    {{key}}
                  </a>
                </span>
              </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookCategory',
  data () {
    return {
      bookCategory: []
    }
  },

  components: {},

  computed: {},

  created () {
    this.$axios.get('http://localhost:8081/getBookCategory')
      .then(res => {
        this.bookCategory = res.data
      })
  },

  mounted () { },

  methods: {}
}
</script>

<style scoped>
</style>
