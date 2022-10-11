//服务层
app.service('managerService',function($http){
	//网关
	var URL = "http://localhost:9010/travel-api-ms/";
	// var URL = "http://localhost:8081/";
	//读取列表数据绑定到表单中
	this.findUser=function(token){
		
		return $http.get(URL+'user/findUser',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findUserPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.userId!=undefined)
			{
				postdata.userId=searchEntity.userId;
			}
			if(searchEntity.userName!=undefined)
			{
				postdata.userName=searchEntity.userName;
			}
			if(searchEntity.userType!=undefined)
			{
				postdata.userType=searchEntity.userType;
			}
			if(searchEntity.email!=undefined)
			{
				postdata.email=searchEntity.email;
			}
			if(searchEntity.phonenumber!=undefined)
			{
				postdata.phonenumber=searchEntity.phonenumber;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'user/findUserPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findUserById=function(id,token){
		return $http.get(URL+'user/findUserById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'user/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateUser=function(entity,token){

		return  $http.post(URL+'user/updateUser',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertUser=function(entity,token){
	
		return  $http.post(URL+'user/insertUser',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'user/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateUserStatus=function(entity,token){
		return $http.post(URL+'user/updateUserStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteUserById=function(id,token){
		return $http.get(URL+'user/deleteUserById/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteUserByIds=function(ids,token){
		return $http.post(URL+'user/deleteUserByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'user/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("managerservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'user/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'user/selectOptionList',{headers : {'token' : token}});
	}
	
});
