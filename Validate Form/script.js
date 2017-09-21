
	$('#form-register').on('submit',function(){
		var isValid = true;
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		if($('#name').val().trim() ==''){
			alert ('Họ và tên không hợp lệ')
			return false;
		}
		if($('#email').val().match( /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
			alert('Email không hợp lệ')
			return false;
		}
		if($('#password').val().match(/^([a-zA-Z0-9@*#]{8,15})$/) == null ){
			alert('Mật khẩu phải dài từ 8 đến 15 kí tự')
			return false;
		}
		if(confirm != password){
			alert('Mật khẩu không khớp')
			return false;
		}
		if($('#phonenum').val().trim() ==''){
			alert('Số điện thoại không được để trống')
			return false;
		}
		if($('#facebook').val().match(/facebook.com/) == null ){
			alert('Địa chỉ Facebook không hợp lệ')
			return false;
		}
		if ($('#address').val().trim()==''){
			alert('Địa chỉ không được để trống')
			return false;
		}
		if ($('#gender').val().trim()==''){
			alert('Vui lòng chọn giới tính')
			return false;
		}
	});