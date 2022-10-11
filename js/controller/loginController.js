
//控制层 
app.controller('loginController', function($scope, loginService) {


	$scope.load = function() {
		

	
	}

	$scope.loginUser={
		
	};



	$scope.load = function() {
		

	}

	$scope.toastShow = function() {
		new bootstrap.Toast(document.querySelector('.toast')).show();
	}
	$scope.fn_submit=function() {
		if (document.getElementById("username").value == "") {
			alert('请输入用户名');
			return;
		} else if (document.getElementById("password").value == "") {
			alert("请输入密码");
			return;
		}  else{
			$scope.login();
			
		}

	
	};

	$scope.setCookie=function(cname, cvalue, exdays) {
		console.log(cname);console.log(cvalue);console.log(exdays);
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

	}

	$scope.getCookie=function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			 }
			if (c.indexOf(name)  == 0) {
				return c.substring(name.length, c.length);
			 }
		}
		return "";
	}
	//读取列表数据绑定到表单中
	$scope.login = function() {

		loginService.login($scope.loginUser).success(
			function(response) {

				if (response.code) {
					$scope.code = response.code;
					
					$scope.success = 'false';
					$scope.msg = response.msg;
					$scope.nowtime = new Date();
					
					
					alert($scope.msg);
					// $scope.toastShow();
					if($scope.code=='200')
					{
						$scope.setCookie("token",response.data,10);

						
						window.location.href = './manager/dashboard5.html';
					}
						
				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "登录失败";
					$scope.nowtime = new Date();
					alert($scope.msg);
					// $scope.toastShow();
				}

			}
		);
	}


});

