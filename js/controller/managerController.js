//控制层 
app.controller('managerController', function($scope, managerService, uploadService) {



	$scope.row = 10;

	$scope.skip_page;

	$scope.page = 1;

	$scope.totalNumbers;

	$scope.entity;

	$scope.searchEntity ;



	$scope.load = function() {
		
		console.log("load exec...")
		$scope.findUserPage();
		
	}

	$scope.toastShow = function() {
		new bootstrap.Toast(document.querySelector('.toast')).show();
	}
	$scope.setCookie=function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	$scope.getCookie = function(cname) {
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
	$scope.reloadUser = function() {
		$scope.page = 1;
		$scope.row = 10;
		$scope.findUserPage();
		if ($scope.code) {
			if ($scope.code == '200') {

				$scope.success = 'true';
				$scope.nowtime = new Date();
				$scope.msg = "刷新用户列表成功";
				$scope.toastShow();
			} else {
				$scope.success = 'false';
				$scope.nowtime = new Date();
				$scope.msg = "刷新用户列表失败";
				$scope.toastShow();
			}

		} else {
			$scope.success = 'false';
			$scope.nowtime = new Date();
			$scope.msg = "刷新用户列表失败";
			$scope.toastShow();
		}

	}

	//读取列表数据绑定到表单中
	$scope.findUser = function() {

		managerService.findUser($scope.getCookie('token')).success(
			function(response) {

				if (response.code) {
					$scope.code = response.code;
					// if($scope.code=='200')
					// {
					// 	$scope.success='true';
					// }
					// else
					// {
					// 	$scope.success='false';
					// }
					// $scope.msg=response.msg;
					// $scope.nowtime=new Date();
					// $scope.toastShow();
					$scope.list = response.data;

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "查询用户失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}

			}
		);
	}
	$scope.skipRowFn = function(page,row){
		$scope.page=page;
		$scope.row=row;
		$scope.findUserPage();
	}
	$scope.skipPageFn = function(page){
		$scope.page=page;
		$scope.findUserPage();
	}
	
	$scope.findUserSearch = function() {
		
		$scope.page=1;
		$scope.findUserPage();
			
	}
		
	//读取列表数据绑定到表单中
	$scope.findUserPage = function() {
		
		if($scope.skipPage!=undefined)
		{
			if(parseInt($scope.skipPage)<1 || parseInt($scope.skipPage) > Math.ceil($scope.totalNumbers/$scope.row))
			{
				$scope.success = 'false';
				$scope.code = '404';
				$scope.msg = "输入页数不符合要求";
				$scope.nowtime = new Date();
				$scope.toastShow();
				$scope.skipPage=undefined;
				return;
			}
			else{
				$scope.page = parseInt($scope.skipPage);
				$scope.skipPage=undefined;
			}
			
		}
		
			managerService.findUserPage($scope.page, $scope.row, $scope.searchEntity,$scope.getCookie('token')).success(
				function(response) {
			
					if (response.code) {
						$scope.code = response.code;
						// if($scope.code=='200')
						// {
						// 	$scope.success='true';
						// }
						// else
						// {
						// 	$scope.success='false';
						// }
						// $scope.msg=response.msg;
						// $scope.nowtime=new Date();
						// $scope.toastShow();
						$scope.totalNumbers = response.data.totalNumbers;
						$scope.list = response.data.userList;
			
					} else {
						$scope.success = 'false';
						$scope.code = '404';
						$scope.msg = "查询用户失败";
						$scope.nowtime = new Date();
						$scope.toastShow();
					}
			
				}
			);
		
		
		
	}


	//查询实体 
	$scope.findUserById = function(id) {
		managerService.findUserById(id,$scope.getCookie('token')).success(
			function(response) {
				if (response.code) {
					$scope.code = response.code;
					// if($scope.code=='200')
					// {
					// 	$scope.success='true';
					// }
					// else
					// {
					// 	$scope.success='false';
					// }
					// $scope.msg=response.msg;
					// $scope.nowtime=new Date();
					// $scope.toastShow();
					$scope.entity = response.data;

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "查询用户失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	//更新用户
	$scope.updateUser = function() {
		var serviceObject; //服务层对象  	

		serviceObject = managerService.updateUser($scope.entity,$scope.getCookie('token')); //修改  

		serviceObject.success(
			function(response) {

				if (response.code) {
					$scope.code = response.code;
					if ($scope.code == '200') {
						$scope.success = 'true';
					} else {
						$scope.success = 'false';
					}
					$scope.msg = response.msg;
					$scope.nowtime = new Date();
					$scope.toastShow();
					//重新查询 
					
					$scope.findUserPage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "更新用户失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	//添加用户
	$scope.insertUser = function() {
		var serviceObject; //服务层对象  	
	
		serviceObject = managerService.insertUser($scope.entity,$scope.getCookie('token')); //修改  
	
		serviceObject.success(
			function(response) {
	
				if (response.code) {
					$scope.code = response.code;
					if ($scope.code == '200') {
						$scope.success = 'true';
					} else {
						$scope.success = 'false';
					}
					$scope.msg = response.msg;
					$scope.nowtime = new Date();
					$scope.toastShow();
					//重新查询 
					$scope.page=1;
					$scope.findUserPage(); //重新加载
	
				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "添加用户失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	// 文件上传的方法:
	$scope.uploadFile = function(id) {
		console.log("upload file 执行")
		uploadService.uploadFile(id,$scope.getCookie('token')).success(function(response) {
			if (response.code) {

				$scope.code = response.code;
				if ($scope.code == '200') {
					$scope.entity.avatar = response.data.url;
					$scope.success = 'true';
				} else {
					$scope.success = 'false';
				}
				$scope.msg = response.msg;
				$scope.nowtime = new Date();
				$scope.toastShow();
			} else {
				$scope.success = 'false';
				$scope.code = '404';
				$scope.msg = "上传文件失败";
				$scope.nowtime = new Date();
				$scope.toastShow();
			}
		});
	}
	//更新用户状态
	$scope.updateUserStatus = function() {

		doc = document.querySelector('#status_switch_' + $scope.entity.userId);

		if (doc.checked == true) {
			$scope.entity.status = '0';
		} else {
			$scope.entity.status = '1';
		}

		managerService.updateUserStatus($scope.entit,$scope.getCookie('token')).success(
			function(response) {
				if (response.code) {
					$scope.code = response.code;
					if ($scope.code == '200') {
						$scope.success = 'true';
					} else {
						$scope.success = 'false';
					}
					$scope.msg = response.msg;
					$scope.nowtime = new Date();
					$scope.toastShow();
					//重新查询 
					$scope.findUserPage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "更新用户状态失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}

	//删除 
	$scope.deleteUserById = function() {
		//获取选中的复选框			
		managerService.deleteUserById($scope.entity.userId,$scope.getCookie('token')).success(
			function(response) {
				if (response.code) {
					$scope.code = response.code;
					if ($scope.code == '200') {
						$scope.success = 'true';
					} else {
						$scope.success = 'false';
					}
					$scope.msg = response.msg;
					$scope.nowtime = new Date();
					$scope.toastShow();
					//重新查询 
					$scope.findUserPage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "删除用户失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	$scope.selectIds = []; //选中的ID集合 
	//批量删除 
	$scope.deleteUserByIds = function() {
		if ($scope.selectIds===0) {
			$scope.success = 'false';
			$scope.code = '404';
			$scope.msg = "当前没有选择删除的用户";
			$scope.nowtime = new Date();
			$scope.toastShow();
		} else {
			//获取选中的复选框			
			managerService.deleteUserByIds($scope.selectIds,$scope.getCookie('token')).success(
				function(response) {
					if (response.code) {
						$scope.code = response.code;
						if ($scope.code == '200') {
							$scope.success = 'true';
						} else {
							$scope.success = 'false';
						}
						$scope.msg = response.msg;
						$scope.nowtime = new Date();
						$scope.toastShow();
						//重新查询 
						$scope.findUserPage(); //重新加载

					} else {
						$scope.success = 'false';
						$scope.code = '404';
						$scope.msg = "删除用户失败";
						$scope.nowtime = new Date();
						$scope.toastShow();
					}
				}
			);
		}

	}
	//更新复选
	$scope.updateSelection = function($event, id) {
		if ($event.target.checked) { //如果是被选中,则增加到数组
			$scope.selectIds.push(id);
		} else {
			var idx = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(idx, 1); //删除 
		}
	}

	$scope.findUserSearchReset=function(){
		console.log($scope.searchEntity);
		$scope.searchEntity=undefined;
	}
	//更改开关选中状态
	$scope.changeSwitchCancel = function(type) {
		doc = document.querySelector(type + $scope.entity.userId);
		doc.checked = !doc.checked;
	}
	$scope.insertUserClick= function() {
		$scope.entity={};
	}
});
app.filter('checkstatus', function() { //可以注入依赖
	return function(text) {

		return text == '0' ? 'true' : 'false';
	}
});
app.filter('textCeil', function() { //可以注入依赖
	return function(text) {
		console.log(text);
		console.log(parseFloat(text));
		return Math.ceil(parseFloat(text));
	}
});
app.filter('remarkStr', function() { //可以注入依赖
	return function(text) {
		console.log(text);
		if(text.length>20)
		{
			return text.slice(0,20)+'...';
		}
		return text;
	}
});
app.filter('isEmptyFilter', function() { //可以注入依赖
	return function(text) {
		console.log(text);
		if(text.length==0)
		{
			return true;
		}
		return false;
	}
});