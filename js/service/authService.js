//服务层
app.service('roleService',function($http){
	//网关
	var URL = "http://localhost:9010/travel-api-ms/";
	
	
	
	//读取列表数据绑定到表单中
	this.findRole=function(token){
		
		return $http.get(URL+'role/findRole',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findRolePage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.role_id!=undefined)
			{
				postdata.role_id=searchEntity.role_id;
			}
			if(searchEntity.role_name!=undefined)
			{
				postdata.role_name=searchEntity.role_name;
			}
			if(searchEntity.remark!=undefined)
			{
				postdata.remark=searchEntity.remark;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'role/findRolePage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findRoleById=function(id,token){
		return $http.get(URL+'role/findRoleById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'role/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateRole=function(entity,token){

		return  $http.post(URL+'role/updateRole',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertRole=function(entity,token){
	
		return  $http.post(URL+'role/insertRole',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'role/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateRoleStatus=function(entity,token){
		return $http.post(URL+'role/updateRoleStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteRoleById=function(id,token){
		return $http.get(URL+'role/deleteRoleById/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteRoleByIds=function(ids,token){
		return $http.post(URL+'role/deleteRoleByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'role/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("roleservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'role/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'role/selectOptionList',{headers : {'token' : token}});
	}
	
});
