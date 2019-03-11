$(".login-btn").click(function(){
	//$("#form").hide({duration:1000,})
	user_name=$("[name='uname']").val()
	passwd=$("[name='password']").val();
	alert("提交"+"用户名："+user_name+" 密码："+passwd)
})