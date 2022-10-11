//服务层
app.service('productRoadService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findProductRoad=function(token){
		
		return $http.get(URL+'productRoad/findProductRoad',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findProductRoadPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.name!=undefined)
			{
				postdata.name=searchEntity.name;
			}
			if(searchEntity.remark!=undefined)
			{
				postdata.remark=searchEntity.remark;
			}

			
		}
		console.log(postdata);

		return $http.post(URL+'productRoad/selectProductRoadPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findProductRoadById=function(id,token){
		return $http.get(URL+'productRoad/selectProductRoadById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'productRoad/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateProductRoad=function(entity,token){

		return  $http.post(URL+'productRoad/updateProductRoadPage',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertProductRoad=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'productRoad/insertProductRoadPage',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'productRoad/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateProductRoadStatus=function(entity,token){
		return $http.post(URL+'productRoad/updateProductRoadStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductRoadById=function(id,token){
		return $http.get(URL+'productRoad/deleteProductRoadPage/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductRoadByIds=function(ids,token){
		return $http.post(URL+'productRoad/deleteProductRoadByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'productRoad/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("productRoadservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'productRoad/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'productRoad/selectOptionList',{headers : {'token' : token}});
	}
	
});
