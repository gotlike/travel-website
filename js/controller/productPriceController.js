
//控制层 
app.controller('productPriceController', function($scope, productPriceService, uploadService) {



	$scope.row = 10;

	$scope.skip_page;

	$scope.page = 1;

	$scope.totalNumbers;

	$scope.entity;

	$scope.searchEntity ;

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

	$scope.load = function() {
		
		console.log("load exec...")
		$scope.findProductPricePage();
		
	}

	$scope.toastShow = function() {
		new bootstrap.Toast(document.querySelector('.toast')).show();
	}
	

	//读取列表数据绑定到表单中
	$scope.reloadProductPrice = function() {
		$scope.page = 1;
		$scope.row = 10;
		$scope.findProductPricePage();
		if ($scope.code) {
			if ($scope.code == '200') {

				$scope.success = 'true';
				$scope.nowtime = new Date();
				$scope.msg = "刷新产品价格列表成功";
				$scope.toastShow();
			} else {
				$scope.success = 'false';
				$scope.nowtime = new Date();
				$scope.msg = "刷新产品价格列表失败";
				$scope.toastShow();
			}

		} else {
			$scope.success = 'false';
			$scope.nowtime = new Date();
			$scope.msg = "刷新产品价格列表失败";
			$scope.toastShow();
		}

	}

	//读取列表数据绑定到表单中
	$scope.findProductPrice = function() {

		productPriceService.findProductPrice().success(
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
					$scope.msg = "查询产品价格失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}

			}
		);
	}
	$scope.skipRowFn = function(page,row){
		$scope.page=page;
		$scope.row=row;
		$scope.findProductPricePage();
	}
	$scope.skipPageFn = function(page){
		$scope.page=page;
		$scope.findProductPricePage();
	}
	
	$scope.findProductPriceSearch = function() {
		
		$scope.page=1;
		$scope.findProductPricePage();
			
	}
		
	//读取列表数据绑定到表单中
	$scope.findProductPricePage = function() {
		
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
		
			productPriceService.findProductPricePage($scope.page, $scope.row, $scope.searchEntity,$scope.getCookie('token')).success(
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
						$scope.list = response.data.productPriceList;
						console.log(list);
			
					} else {
						$scope.success = 'false';
						$scope.code = '404';
						$scope.msg = "查询产品价格失败";
						$scope.nowtime = new Date();
						$scope.toastShow();
					}
			
				}
			);
		
		
		
	}
//查询实体 
	$scope.findProductPriceById = function(entity) {
		$scope.entity=entity;
	}

	// //查询实体 
	// $scope.findProductPriceById = function(id) {
	// 	productPriceService.findProductPriceById(id,$scope.getCookie('token')).success(
	// 		function(response) {
	// 			if (response.code) {
	// 				$scope.code = response.code;
	// 				// if($scope.code=='200')
	// 				// {
	// 				// 	$scope.success='true';
	// 				// }
	// 				// else
	// 				// {
	// 				// 	$scope.success='false';
	// 				// }
	// 				// $scope.msg=response.msg;
	// 				// $scope.nowtime=new Date();
	// 				// $scope.toastShow();
	// 				$scope.entity = response.data;

	// 			} else {
	// 				$scope.success = 'false';
	// 				$scope.code = '404';
	// 				$scope.msg = "查询产品价格失败";
	// 				$scope.nowtime = new Date();
	// 				$scope.toastShow();
	// 			}
	// 		}
	// 	);
	// }
	//更新产品价格
	$scope.updateProductPrice = function() {
		console.log(".............");
		var serviceObject; //服务层对象  	
		console.log(".............");
		serviceObject = productPriceService.updateProductPrice($scope.entity,$scope.getCookie('token')); //修改  

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
					
					$scope.findProductPricePage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "更新产品价格失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	//添加产品价格
	$scope.insertProductPrice = function() {
		var serviceObject; //服务层对象  	
		console.log("insert....")
		console.log($scope.entity);
		serviceObject = productPriceService.insertProductPrice($scope.entity,$scope.getCookie('token')); //修改  
	
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
					$scope.findProductPricePage(); //重新加载
	
				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "添加产品价格失败";
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
	//更新产品价格状态
	$scope.updateProductPriceStatus = function() {

		doc = document.querySelector('#status_switch_' + $scope.entity.order_id);

		if (doc.checked == true) {
			$scope.entity.status = '0';
		} else {
			$scope.entity.status = '1';
		}

		productPriceService.updateProductPriceStatus($scope.entity,$scope.getCookie('token')).success(
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
					$scope.findProductPricePage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "更新产品价格状态失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}

	//删除 
	$scope.deleteProductPriceById = function() {
		//获取选中的复选框			
		productPriceService.deleteProductPriceById($scope.entity.order_id,$scope.getCookie('token')).success(
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
					$scope.findProductPricePage(); //重新加载

				} else {
					$scope.success = 'false';
					$scope.code = '404';
					$scope.msg = "删除产品价格失败";
					$scope.nowtime = new Date();
					$scope.toastShow();
				}
			}
		);
	}
	$scope.selectIds = []; //选中的ID集合 

	//更新复选
	$scope.updateSelection = function($event, id) {
		if ($event.target.checked) { //如果是被选中,则增加到数组
			$scope.selectIds.push(id);
		} else {
			var idx = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(idx, 1); //删除 
		}
	}

	$scope.findProductPriceSearchReset=function(){
		console.log($scope.searchEntity);
		$scope.searchEntity=undefined;
	}
	//更改开关选中状态
	$scope.changeSwitchCancel = function(type) {
		doc = document.querySelector(type + $scope.entity.order_id);
		doc.checked = !doc.checked;
	}
	$scope.insertProductPriceClick= function() {
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