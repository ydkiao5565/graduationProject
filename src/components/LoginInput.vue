<template>
  <div class="container" id="login">
    <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="login">

      <h1>Login</h1>
      
      <!-- Loging form -->
          <form>
          <div class="form-group">
            <input type="text" v-model="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" autocomplete="off" >
            
          </div>
          <div class="form-group">
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" >
          </div>
          <br>
          <div  class="btn" @click="loginEvent()">Sign in</div>
          </form>
      <!-- End Loging form -->

      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone:'',
      password:'',
      message:''
    }
  },
  methods:{
    async loginEvent() {
      if(!this.phone) {
            console.log(1)
            this.message = '请输入账号'
            alert(this.message)
            return
          }
          else if (!this.password) {
            console.log(2)
            this.message = '请输入密码'
            alert(this.message)
            return
          }
      let captchaId = '2098950169'
      let self = this
      var captcha =  new TencentCaptcha(captchaId, async function(res) {
        if(res.ret === 0) {
          let result = await self.$store.dispatch('login',{phone:self.phone,password:self.password})
          console.log(result.data.code)
          if(result.data.code!=200){
            console.log(3)
            self.message = '账号或密码错误'
            alert(self.message)
          }
          else if(result.data.code==200) {
            sessionStorage.setItem('create',1)
            self.$router.push('/mine')
          }

        }
      })
      captcha.langFun()
      // 滑块显示
      captcha.show()

    }

  }
}
</script>

<style lang="less">


#login{
  font-family: 'Montserrat', sans-serif;
	text-rendering : optimizeLegibility;
	-webkit-font-smoothing : antialiased;
	// padding-top: 60px;
	text-align: center;
	text-transform: uppercase;
  margin-left: -150px;
  .login {
    // width: 100%;
    // height: 300px;
    /* background-color: #fff; */
    padding: 15px;
    padding-top: 30px;
    h1 {
      margin-top: 30px;
      font-weight: bold;
      font-size: 50px;
      letter-spacing: 3px;
    }
    form {
      max-width: 420px;
      margin: 30px auto;
    }
    .btn {
      cursor: pointer;
      width: 100px;
      margin: 0 auto;
      border-radius: 50px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 20px;
      padding: 14px;
      background-color: #fff;
      // outline: medium;
    }
    .form-group input {
      outline-color:lightskyblue;
      font-size: 16px;
      font-weight: lighter;
      border: none;
      background-color: #ffffff;
      color: #465347!important;
      padding: 20px 40px;
      margin-bottom: 10px;
      border-radius: 50px;
      transition : 0.2s;

    }
  }
}

</style>