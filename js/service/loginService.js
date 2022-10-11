//服务层
app.service('loginService',function($http){
	//网关
	var URL = "http://localhost:9310";


	this.login=function(loginUser){
		console.log(loginUser);

		return $http.post(URL+'/userauth/login',loginUser);	
	}
	
	

	
});
