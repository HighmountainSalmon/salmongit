<!--  -->
<template>
  <div>
    <headerlayout @listenSearchClick='searchBook' :isShopPage='true'></headerlayout>
    <b-container>
      <b-row>
        <b-col lg="3">
          <book-category/>
        </b-col>
        <b-col lg="9">
          <ul>
            <li v-for="(bookInfo,index) in bookList" :key="index">
              <b-container  class="bookInfoBox">
                <b-row>
                  <b-col lg="3">
                    <a href="#" @click="psuhBookDetailPage(bookInfo.bookId)">
                    <b-img src="static/img/product/20.jpg" fluid-grow />
                    </a>
                  </b-col>
                  <b-col lg="9">
                    <b-row class="row-info">
                      <b-link @click="psuhBookDetailPage(bookInfo.bookId)">
                        {{bookInfo.bookName}}
                      </b-link>
                      <span>{{bookInfo.pubdate | formatDate}}</span>
                    </b-row>
                    <b-row class="row-info">
                      <span>{{bookInfo.author}}</span>
                    </b-row>
                    <b-row class="row-info">
                      <b-col lg="7">
                        <b-row class="row-info">
                          <span>{{bookInfo.packstyle}}</span>
                        </b-row>
                        <b-row class="row-info">
                          <span>{{bookInfo.price}}</span>
                        </b-row>
                      </b-col>
                      <b-col lg="5">
                        <b-button>
                          加入购物车
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-container>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    </div>
</template>

<script>
import {formatDate} from '../../static/js/date.js'
import headerlayout from '@/components/HeaderLayout'
import bookCategory from '@/components/bookCategory'
export default {
  data () {
    return {
      currentPage: Number(1),
      bookClassCode: Number(1),
      bookList: []
    }
  },
  components: {
    headerlayout,
    bookCategory
  },
  methods: {
    psuhBookDetailPage (bookId) {
      this.$router.push({
        name: 'bookDetail',
        query: {
          searchCondition: bookId
        }
      })
    },
    searchBook (searchCondition) {
      this.$axios.get('http://localhost:8081/selectByBookNameOrAuthor', {
        params: {
          page: this.currentPage,
          rows: 10,
          searchCondition: searchCondition
        }
      }).then(res => {
        this.bookList = res.data.list
      })
    }
  },
  created () {
    if (this.$route.query.searchCondition === undefined) {
      this.$axios.get('http://localhost:8081/getPageInfoBookList', {
        params: {
          page: this.currentPage,
          rows: 10,
          bookClassCode: this.bookClassCode
        }
      })
        .then(res => {
          this.bookList = res.data.list
        })
    } else {
      this.$axios.get('http://localhost:8081/selectByBookNameOrAuthor', {
        params: {
          page: this.currentPage,
          rows: 10,
          searchCondition: this.$route.query.searchCondition
        }
      }).then(res => {
        this.bookList = res.data.list
      })
    }
  },
  filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM')
    }
  }
}
</script>
<style scoped>
.row-info{
  margin-top: 10px;
}
</style>
