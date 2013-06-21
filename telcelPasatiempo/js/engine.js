/*
* This file is for calling custom and jQuery functions
*/
$(document).ready(function() {
	
	/****** Mouse Overs ******/
	//Right side options - mouse over
	$(".sideButton").mouseenter(function(){
		$(".sideButtonLeft",this).removeClass("sideButtonNSel");
		$(".sideButtonLeft",this).addClass("sideButtonSel");
		$(this).addClass("sideButtonSelected");
		$(".sideButtonRight",this).removeClass("sideButtonRightBg");
	});
	
	$(".sideButton").mouseleave(function(){
		$(".sideButtonLeft",this).removeClass("sideButtonSel");
		$(".sideButtonLeft",this).addClass("sideButtonNSel");
		$(this).removeClass("sideButtonSelected");
		$(".sideButtonRight",this).addClass("sideButtonRightBg");
	});
	
	//General buttons - mouse over selectedButton
	$(".selectedButton").mouseleave(function(){
		$(this).addClass("selectedButton");
	});
	
	$(".selectedButton").mouseenter(function(){
		$(this).removeClass("selectedButton");
	});
	
	//Enviar button - mouse over servBtnDiv
	$(".servBtnDiv").mouseleave(function(){
		$(this).addClass("servBtnDivBg");
	});
	
	$(".servBtnDiv").mouseenter(function(){
		$(this).removeClass("servBtnDivBg");
	});
	
	//Enviar button - mouse over servBtnDiv
	$(".servLastButtonDiv").mouseleave(function(){
		$(this).addClass("servLastButtonBg");
	});
	
	$(".servLastButtonDiv").mouseenter(function(){
		$(this).removeClass("servLastButtonBg");
	});
	
	//Selector - new number
	$("#seleccionar").change(function(){
		if($(this).val()==="1"){
			$("#cellNum").slideDown(200);
			$("#cellNumConf").slideDown(200);
		};
		if($(this).val()!=="1"){
			$("#cellNum").slideUp(200);
			$("#cellNumConf").slideUp(200);
		}
	});
	
	//Alias - saving alias
	$("#guardar").click(function(){
		if($(this).is(":checked")){
			$(".servAlias").addClass("servAliasBg");
			$("#alias").fadeIn(200);
			$("#aliasSpan").fadeIn(200);
		} else{
			$(".servAlias").removeClass("servAliasBg");
			$("#alias").fadeOut(200);
			$("#aliasSpan").fadeOut(200);
		}
	});
	
	/***** Validation *****/
	// validation plugin
/*	$.validator.addMethod('numbValidation', function(value) {
		var re = /^[0-9,]+\.\d{1,3}$/;
		return !re.test(value);
	}, '');*/
	
	///      jQuery Validator
	$("#formAlias").validate({
		errorContainer:"#validAlias",
		rules:{
			alias: {
				required:true
			}
		},
		messages:{
			alias: false
		}
	});
	
	$.validator.addMethod('saldo', function(value) {
		ok = false;
		monto = $("#monto").val();
		if (monto>50){
			$("#saldoError").fadeIn(200);
		}
		else{
			$("#saldoError").fadeOut(200);
			ok = true;
		}
		return ok;
	}, '');
	
	$.validator.addMethod('numcorrecto', function(value) {
		ok = false;
		numero = $("#numero").val();
		if (numero==="1234567890"){
			$("#numError").fadeOut(200);
			ok = true;
		}
		else{
			$("#numError").fadeIn(200);
		}
		return ok;
	}, '');
	
	$.validator.addMethod('transfer', function(value) {
		ok = false;
		transfer = $("#seleccionar").val();
		console.log(ok);
		console.log(transfer);
		if (transfer==="2"){
			$("#transfError").fadeIn(200);
		}
		else{
			$("#transfError").fadeOut(200);
			ok = true;
		}
		return ok;
	}, '');
	
	$.validator.addMethod('server', function(value) {
		ok = false;
		server = $("#seleccionar").val();
		if (server==="3"){
			$("#servError").fadeIn(200);
		}
		else{
			$("#servError").fadeOut(200);
			ok = true;
		}
		return ok;
	}, '');
	
	$("#form1").validate({
		rules: {
			monto: {	
				required: true,
				number: true,
				range: [5,200],
				digits: true,
				saldo: true
			},
			seleccionar: {
				required: true,
				min: 1,
				transfer: true,
				server: true
			},
			numero: {
				required:true,
				rangelength: [10, 10],
				numcorrecto: true
			},
			confnumero: {
				required:true,
				equalTo:"#numero"	
			}
		},
		messages: {
			monto: "<p>El monto es incorrecto. S&oacute;lo puedes transferir de 5 a 200 pesos sin centavos.</p>",
			seleccionar: "<p>Campo Requerido.</p>",
			numero: false,
			confnumero: false
		}
	});
	
	
	/*
	var keyBlur = false;
	$("#monto").blur(function(){
		if(!keyBlur){
			//Amount validation
			var valM=false;
			var monto=$(this).val();
			var regexTest = /^[0-9,]+\.\d{1,3}$/;
			
			if($.isNumeric(monto)){
				if(monto >= 5 && monto<=200){
					if(!regexTest.test(monto)){
						valM=true;
					};
				};
			};
			
			if(valM){
				$("#montoValid").hide();
			}
			else{
				$("#montoValid").show();
				keyBlur=true;
			};
		};
	});
	
	$("#monto").keyup(function(){
		if(keyBlur){
			//Amount validation
			var valM=false;
			var monto=$(this).val();
			var regexTest = /^[0-9,]+\.\d{1,3}$/;
			
			if($.isNumeric(monto)){
				if(monto >= 5 && monto<=200){
					if(!regexTest.test(monto)){
						valM=true;
					};
				};
			};
			
			if(valM){
				$("#montoValid").hide();
				keyBlur=false;
			}
			else{
				$("#montoValid").show();
			};
		};
	});
	*/
	
	// Numeric only control handler
	jQuery.fn.ForceNumericOnly =
	function()
	{
		return this.each(function()
		{
			$(this).keydown(function(e)
			{
				var key = e.charCode || e.keyCode || 0;
				// allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
				// home, end, period, and numpad decimal
				return (
					key == 8 || 
					key == 9 ||
					key == 46 ||
					key == 110 ||
					key == 190 ||
					(key >= 35 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105)
				);
			});
		});
	};
	
	$("#monto").ForceNumericOnly();
	$("#numero").ForceNumericOnly();
	$("#confnumero").ForceNumericOnly();
	
});