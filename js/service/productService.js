//服务层
app.service('productService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findProduct=function(token){
		
		return $http.get(URL+'product/findProduct',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findProductPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.duration!=undefined)
			{
				postdata.duration=searchEntity.duration;
			}
			if(searchEntity.province!=undefined)
			{
				postdata.province=searchEntity.province;
			}
			if(searchEntity.city!=undefined)
			{
				postdata.city=searchEntity.city;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'product/findProductPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findProductById=function(id,token){
		return $http.get(URL+'product/findProductById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'product/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateProduct=function(entity,token){

		return  $http.post(URL+'product/updateProductPage',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertProduct=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'product/insertProductPage',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'product/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateProductStatus=function(entity,token){
		return $http.post(URL+'product/updateProductStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductById=function(id,token){
		return $http.get(URL+'product/deleteProductPage/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteProductByIds=function(ids,token){
		return $http.post(URL+'product/deleteProductByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'product/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("productservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'product/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'product/selectOptionList',{headers : {'token' : token}});
	}
	
});
