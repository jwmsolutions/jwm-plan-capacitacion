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
	});
	
	$(".sideButton").mouseleave(function(){
		$(".sideButtonLeft",this).removeClass("sideButtonSel");
		$(".sideButtonLeft",this).addClass("sideButtonNSel");
		$(this).removeClass("sideButtonSelected");
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
	
	//Selector - new number
/*	var booln=false;
	$("#seleccionar").change(function(){
		if($(this).val()==="1"){
			$("#cellNum").slideDown(200);
			$("#cellNumConf").slideDown(200);
			booln=true;
		};
		if($(this).val()!=="1"){
			$("#cellNum").slideUp(200);
			$("#cellNumConf").slideUp(200);
			booln=false;
		}
	});*/
	
	/***** Validation *****/
	// validation plugin
/*	$.validator.addMethod('currency', function(value) {
		var re = /^[0-9,]+\.\d{1,3}$/;
		return !re.test(value);
	}, '');*/
	
	$("form").validate({
		rules: {
			monto: {	
				required: true,
				number: true,
				range: [5,200],
				digits: true
			},
			seleccionar: {
				required: true,
				min: 1
			},
			numero: {
				required:true
			},
			confnumero: {
				required:true
			}
		},
		messages: {
			monto: "<p>El monto es incorrecto. S&oacute;lo puedes transferir de 5 a 200 pesos sin centavos.</p>",
			seleccionar: "<p>Campo Requerido.</p>",
			numero: "hi",
			confnumero:"ho"
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