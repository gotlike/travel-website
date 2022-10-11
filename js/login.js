var slidervar;
$(function() {
	slidervar = new SliderUnlock("#slider", {
		successLabelTip: "欢迎访问旅游系统",
		isOk: false
	}, function() {
		// alert("验证成功,即将跳转至首页");
		// window.location.href="/manager/index.html"
	});
	slidervar.init();
})

function fn_submit() {
	if (document.getElementById("username").value == "") {
		alert('请输入用户名');
	} else if (document.getElementById("password").value == "") {
		alert("请输入密码");
	} else if (slidervar.isOk == true) {
		window.location.href = './manager/index.html';
	} else {
		alert("请进行人机验证");
	}


};
