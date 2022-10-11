//服务层
app.service('customerOrderService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findCustomerOrder=function(token){
		
		return $http.get(URL+'customerOrder/findCustomerOrder',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findCustomerOrderPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.customer_id!=undefined)
			{
				postdata.customer_id=searchEntity.customer_id;
			}
			if(searchEntity.paystatus!=undefined)
			{
				postdata.paystatus=searchEntity.paystatus;
			}
			if(searchEntity.type!=undefined)
			{
				postdata.type=searchEntity.type;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'customerOrder/selectCustomerOrderPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findCustomerOrderById=function(id,token){
		return $http.get(URL+'customerOrder/findCustomerOrderById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'customerOrder/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateCustomerOrder=function(entity,token){

		return  $http.post(URL+'customerOrder/updateCustomerOrderPage',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertCustomerOrder=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'customerOrder/insertCustomerOrderPage',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'customerOrder/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateCustomerOrderStatus=function(entity,token){
		return $http.post(URL+'customerOrder/updateCustomerOrderStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteCustomerOrderById=function(id,token){
		return $http.get(URL+'customerOrder/deleteCustomerOrderPage/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteCustomerOrderByIds=function(ids,token){
		return $http.post(URL+'customerOrder/deleteCustomerOrderByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'customerOrder/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("customerOrderservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'customerOrder/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'customerOrder/selectOptionList',{headers : {'token' : token}});
	}
	
});
