//服务层
app.service('financeService',function($http){
	//网关
	var URL = "http://localhost:9200/";
	
	this.accessList=function(token){
		
		return $http.post("http://localhost:8081/"+'access/log/selectAccess',null,{headers : {'token' : token}});		
	}
	this.hotelList=function(token){
		
		return $http.post("http://localhost:8081/"+'orderItem/findHotelFinance',null,{headers : {'token' : token}});		
	}
	this.productList=function(token){
		
		return $http.post("http://localhost:8081/"+'orderItem/findProductFinance',null,{headers : {'token' : token}});		
	}
	this.transportationList=function(token){
		
		return $http.post("http://localhost:8081/"+'orderItem/findTransportationFinance',null,{headers : {'token' : token}});		
	}
	//读取列表数据绑定到表单中
	this.findCustomer=function(token){
		
		return $http.get(URL+'customer/findCustomer',{headers : {'token' : token}});		
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
	
		return $http.post("http://localhost:8081/"+'product/findProductPage',postdata,{headers : {'token' : token}});	
	}
	//读取列表数据绑定到表单中
	this.findHotelPage=function(page,row,searchEntity,token){
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
	
		return $http.post("http://localhost:8081/"+'hotel/findHotelPage',postdata,{headers : {'token' : token}});	
	}
	//读取列表数据绑定到表单中
	this.findTransportationPage=function(page,row,searchEntity,token){
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
	
		return $http.post("http://localhost:8081/"+'transportation/findTransportationPage',postdata,{headers : {'token' : token}});	
	}
	
	//读取列表数据绑定到表单中
	this.findCustomerPage=function(page,row,searchEntity,token){
		console.log("service");
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
			if(searchEntity.user_name!=undefined)
			{
				postdata.user_name=searchEntity.user_name;
			}
			if(searchEntity.nick_name!=undefined)
			{
				postdata.nick_name=searchEntity.nick_name;
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
		

		return $http.post(URL+'customer/findCustomerPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findCustomerById=function(id,token){
		return $http.get(URL+'customer/findCustomerById/'+id,{headers : {'token' : token}});
	}

	//修改
	this.updateCustomer=function(entity,token){

		return  $http.post(URL+'customer/updateCustomer',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertCustomer=function(entity,token){
	
		return  $http.post(URL+'customer/insertCustomer',entity,{headers : {'token' : token}});
	}

	//更新用户状态
	this.updateCustomerStatus=function(entity,token){
		return $http.post(URL+'customer/updateCustomerStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteCustomerById=function(id,token){
		return $http.get(URL+'customer/deleteCustomerById/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteCustomerByIds=function(ids,token){
		return $http.post(URL+'customer/deleteCustomerByIds',ids,{headers : {'token' : token}});
	}

	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("customerservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'customer/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'customer/selectOptionList',{headers : {'token' : token}});
	}
	
});
