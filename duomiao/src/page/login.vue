<template>
  <div id='loginComponent'>
    <headerlayout></headerlayout>
    <!-- breadcrumbs-area-start -->
    <div class="breadcrumbs-area mb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumbs-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" class="active">login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumbs-area-end -->
    <!-- user-login-area-start -->
    <div class="user-login-area mb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="login-title text-center mb-30">
              <h2>Login</h2>
              <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo<br>inventore veritatis et quasi architecto beat</p>
            </div>
          </div>
          <div class="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-sm-12 col-xs-12" style="margin-left: 25%;">
            <div class="login-form">
              <form>
                <div class="single-login">
                  <label>Email or phone
                    <span>*</span>
                  </label>
                  <input v-model="phone"/><br/>
                </div>
                <div class="single-login">
                  <label>Password
                    <span>*</span>
                  </label>
                  <input v-model="password"/><br/>
                </div>
                <div class="single-login single-login-2">
                  <a href="#" @click='getLogin'>login</a>
                </div>
              </form>
              <a href="#">Lost your password?</a>
              <a href="register" style="display:block;text-align:right; float:right;">DuoMiao的新客户？</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- user-login-area-end -->
  </div>
</template>

<script>
import headerlayout from '@/components/HeaderLayout'
import {mapMutations} from 'vuex'
export default {
  name: 'login',
  components: {
    headerlayout
  },
  data: function () {
    return {
      userInfo: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO'
    ]),
    getLogin () {
      this.$axios.get('http://localhost:8081/login', {
        params: {
          phone: this.phone,
          password: this.password
        }
      })
        .then(res => {
          this.userInfo = res.data
          this.RECORD_USERINFO(this.userInfo)
          if (this.userInfo.userId !== '') {
            this.$router.push({
              name: 'main'
            })
          }
        })
    }
  }
}
</script>
