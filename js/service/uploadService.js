app.service("uploadService",function($http){
	
	this.uploadFile = function(id,token){
		// 向后台传递数据:
		var formData = new FormData();
		// 向formData中添加数据:
		formData.append("file",document.getElementById(id).files[0]);
		return $http({
			method:'post',
			url:'http://localhost:9010/travel-api-ms/system/uploadFile',
			data:formData,
			headers:{'Content-Type':undefined,'token':token} ,// Content-Type : text/html  text/plain
			transformRequest: angular.identity
		});
	}
	
});