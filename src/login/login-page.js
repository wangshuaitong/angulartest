import { log } from "../common/util";
import template from "./login-page.html";

const name = 'loginPage';  // <login-page></login-page>
const bindings = {};

const controller = function(loginService){
  'ngInject'
  this.loginTitle = 'Login';
  this.logins = [];
  loginService.fetch().then(resp=>{
    this.logins = resp.data;
  });
  this.login = function(){
    var flag = false;
    this.logins.forEach(loginuser => {
      if(loginuser.username == this.username&&loginuser.password == this.password){
        loginuser.role = loginuser.username;
        log(loginuser.role == "admin"?"管理员登陆":"用户登录");
        flag=!flag;
        loginuser.username=="admin"?(window.location.href = ("../user?loginusername="+11111)):(window.location.href = ("../user"));
      }
    });
    if (!flag) {
      alert("wrong username or password");
    }
  }
 }
 export default {
    name,
    template,
    bindings,
    controller,
 }