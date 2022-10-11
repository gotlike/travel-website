//服务层
app.service('transportationService',function($http){
	//网关
	var URL = "http://localhost:8081/";
	
	
	
	//读取列表数据绑定到表单中
	this.findTransportation=function(token){
		
		return $http.get(URL+'transportation/findTransportation',{headers : {'token' : token}});		
	}
	
	//读取列表数据绑定到表单中
	this.findTransportationPage=function(page,row,searchEntity,token){
		var postdata={
			
		};
		postdata.page=page;
		postdata.row=row;
		if(searchEntity!=undefined)
		{
			if(searchEntity.type!=undefined)
			{
				postdata.type=searchEntity.type;
			}
			if(searchEntity.city_from!=undefined)
			{
				postdata.city_from=searchEntity.city_from;
			}
			if(searchEntity.city_to!=undefined)
			{
				postdata.city_to=searchEntity.city_to;
			}
			if(searchEntity.remark!=undefined)
			{
				postdata.remark=searchEntity.remark;
			}
			
		}
		console.log(postdata);

		return $http.post(URL+'transportation/findTransportationPage',postdata,{headers : {'token' : token}});	
	}
	
	
	//查询实体
	this.findTransportationById=function(id,token){
		return $http.get(URL+'transportation/findTransportationById/'+id,{headers : {'token' : token}});
	}
	//增加 
	this.add=function(entity,token){
		return  $http.post(URL+'transportation/add',entity ,{headers : {'token' : token}});
	}
	//修改
	this.updateTransportation=function(entity,token){

		return  $http.post(URL+'transportation/updateTransportationPage',entity,{headers : {'token' : token}});
	}
	//修改
	this.insertTransportation=function(entity,token){
		console.log("insert service");
		return  $http.post(URL+'transportation/insertTransportationPage',entity,{headers : {'token' : token}});
	}
	//修改 
	this.update=function(entity,token){
		return  $http.post(URL+'transportation/update',entity ,{headers : {'token' : token}});
	}
	//更新用户状态
	this.updateTransportationStatus=function(entity,token){
		return $http.post(URL+'transportation/updateTransportationStatus/',entity,{headers : {'token' : token}});
	}
	//删除
	this.deleteTransportationById=function(id,token){
		return $http.get(URL+'transportation/deleteTransportationPage/'+id,{headers : {'token' : token}});
	}
	//删除
	this.deleteTransportationByIds=function(ids,token){
		return $http.post(URL+'transportation/deleteTransportationByIds',ids,{headers : {'token' : token}});
	}
	//删除
	this.dele=function(ids,token){
		return $http.get(URL+'transportation/delete?ids='+ids,{headers : {'token' : token}});
	}
	//搜索
	this.search=function(page,rows,searchEntity,token){
		//alert("transportationservice:search:"+page+","+rows+","+searchEntity);
		return $http.post(URL+'transportation/search?page='+page+"&rows="+rows, searchEntity,{headers : {'token' : token}});
	}    	
	//下拉列表
	this.selectOptionList=function(token){
		return $http.get(URL+'transportation/selectOptionList',{headers : {'token' : token}});
	}
	
});
