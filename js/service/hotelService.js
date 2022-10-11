//服务层
app.service('hotelService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findHotel=function(token){
		
		return $http.get(URL+'hotel/findHotel',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findHotelPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.hotel_name!=undefined)
			{
				postdata.hotel_name=searchEntity.hotel_name;
			}
			if(searchEntity.hotel_remark!=undefined)
			{
				postdata.hotel_remark=searchEntity.hotel_remark;
			}
			if(searchEntity.city!=undefined)
			{
				postdata.city=searchEntity.city;
			}
			if(searchEntity.type!=undefined)
			{
				postdata.type=searchEntity.type;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'hotel/findHotelPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findHotelById=function(id,token){
		return $http.get(URL+'hotel/findHotelById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'hotel/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateHotel=function(entity,token){

		return  $http.post(URL+'hotel/updateHotelPage',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertHotel=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'hotel/insertHotelPage',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'hotel/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateHotelStatus=function(entity,token){
		return $http.post(URL+'hotel/updateHotelStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteHotelById=function(id,token){
		return $http.get(URL+'hotel/deleteHotelPage/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteHotelByIds=function(ids,token){
		return $http.post(URL+'hotel/deleteHotelByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'hotel/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("hotelservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'hotel/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'hotel/selectOptionList',{headers : {'token' : token}});
	}
	
});
