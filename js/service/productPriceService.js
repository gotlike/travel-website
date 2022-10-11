//服务层
app.service('productPriceService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findProductPrice=function(token){
		
		return $http.get(URL+'productPrice/findProductPrice',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findProductPricePage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.remark!=undefined)
			{
				postdata.remark=searchEntity.remark;
			}
			if(searchEntity.people!=undefined)
			{
				postdata.people=searchEntity.people;
			}
			if(searchEntity.child!=undefined)
			{
				postdata.child=searchEntity.child;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'productprice/selectProductPrice',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findProductPriceById=function(id,token){
		return $http.get(URL+'productPrice/findProductPriceById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'productPrice/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateProductPrice=function(entity,token){

		return  $http.post(URL+'productPrice/updateProductPrice',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertProductPrice=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'productPrice/insertProductPrice',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'productPrice/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateProductPriceStatus=function(entity,token){
		return $http.post(URL+'productPrice/updateProductPriceStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductPriceById=function(id,token){
		return $http.get(URL+'productPrice/deleteProductPrice/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductPriceByIds=function(ids,token){
		return $http.post(URL+'productPrice/deleteProductPriceByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'productPrice/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("productPriceservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'productPrice/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'productPrice/selectOptionList',{headers : {'token' : token}});
	}
	
});
