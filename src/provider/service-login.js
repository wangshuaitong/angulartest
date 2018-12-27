export default {
    name: 'loginService',
    fn: ['$http', function ($http) {
      this.fetch = () => $http.get('/someapi/login');
    }],
    mockFn:function($http){
      'ngInject'
      this.fetch = () =>$http.get('/app/stub/login.json?v=12131');
  }
  }