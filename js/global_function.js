//setTimeout(add_marker, 100, field);
	//console.log('indexOf :'+val.indexOf(val));
	//setTimeout(function(){ My_Location_Refresh(); }, 3000);
 
	if(typeof TestInputDataExists == "undefined" || typeof TestInputDataExists !='function')
	{	
		/*
			//if(typeof TestInputDataExists != "undefined" && typeof TestInputDataExists =='function')
			//TestInputDataExists();
			swiper.on('reachBeginning', function () {
				console.log('slide reachBeginning');
				const swiper = this;
				if(typeof TestInputDataExists != "undefined" && typeof TestInputDataExists =='function')
				TestInputDataExists(swiper,ObjectTypeString = 'swiper');

			}); 
		*/
		//if(typeof TestInputDataExists != "undefined" && typeof TestInputDataExists =='function')
		//TestInputDataExists(swiper,ObjectTypeString = 'swiper');
		//if(!is_undefined(TestInputDataExists) && is_function(TestInputDataExists))
		//TestInputDataExists(swiper,ObjectTypeString = 'swiper');
		
		/*
		<label class="ns__label" for="username"><?=_web_contact_email?> *
		<span  class="hidden  TestExistsMsg valid-msg color-green" TelInputErrorMsgPhone="1" style="display: none;" >✓ Valid</span>
		<span  class="hidden TestExistsMsg error-msg bg--grey color-yellow" TelInputValidMsgPhone="1"  style="display: none;"  >البريد الاكتروني موجود من قبل</span>

		<span class="TestExistLoading" style="display: none;width: 31px;height: auto;"><img src="<?=$SiteUrlMain?>images/Loading_icon.gif" /></span>

		</label>

		<input type="email"  class="ns__field required" name="email" id="email" value="<?=@$_POST['email']?>" autocomplete="off" required placeholder="" MsgError="ادخل <?=_web_contact_email?>" check="yes" Email="yes" Number="no" Site_Path="no" Site_Path="no" TelInput="0" action="<?=$href_action?>&email=" DataTestExists="1" />
		*/
			
		var UseObjectExtendedDefaults = null;
		//function TestInputDataExists(FindObject , ObjectTypeString)
		function TestInputDataExists(UseObject , ObjectTypeString)
		{
			/* 
			    var swiper = new Swiper(".CardLayout__swiper", {
				loop: !1,
				autoHeight: true,
				//allowSlideNext: false,
				//allowSlidePrev: false,
				//allowTouchMove: false,
				navigation: {
					nextEl: ".CardLayout__slider .swiper-button-next",
					prevEl: ".CardLayout__slider .swiper-button-prev"
				},
				disableOnInteraction: !1,
				speed: 500,
			});
			*/
			
			/*
			//	swiper.on('touchMove', function () {
			swiper.on('touchStart', function () {
				console.log('slide touchStart');

			});
			swiper.on('touchEnd', function () {
				console.log('slide touchEnd');

			});	
			*/
			
			/*
			
				swiper.on('reachBeginning', function () {
					console.log('slide reachBeginning');
				
				}); 
				
				swiper.on('reachEnd', function () {
					console.log('slide reachEnd');
					
				}); 
				swiper.on('realIndexChange', function () {
					console.log('slide realIndexChange');
				  
				});//swiper.on('realIndexChange', function () {
			
			var swiper_paused = false;//true , false
	
			swiper.on('click', function(e){ 
				const swiper = this;
				////console.log('slide click');
				//console.log('slide click swiper' , swiper);
				//https://swiperjs.com/swiper-api#navigation
				// swiper.enabled = swiper_paused;
				
					//allowSlideNext: false,
				//allowSlidePrev: false,
				//allowTouchMove: false,
				
				 
				swiper_paused = false;//true , false
				if(swiper.isBeginning)
				{
					swiper.allowSlideNext = swiper_paused;
					swiper.allowSlidePrev = swiper_paused;
					swiper.allowTouchMove = swiper_paused;
					if(!swiper_paused)
					{
						
					}//if(!swiper_paused)
					//swiper.update();
					//swiper.navigation.init();
				}//if(swiper.isBeginning)
			 
				//swiper.pagination.bullets[1];
				
				//swiper.pagination.update()
				//swiper.navigation.destroy();
				//swiper.navigation.init();
				
				
				//swiper.navigation.update();
				//swiper.pagination.init();
				
				//# console.log('slide click swiper.activeIndex' , swiper.activeIndex);
				//# console.log('slide click swiper.realIndex' , swiper.realIndex);
				
				
				//swiper.pagination.enabled = swiper_paused;
			 
				//console.log('slide click swiper.navigation' , swiper.navigation);
				//swiper.navigation.enabled = swiper_paused;
				//swiper.navigation.enable = swiper_paused;
				//swiper.navigation.disable = swiper_paused;
				//disable: true,
				//swiper.navigation.hideOnClick = swiper_paused;
				////swiper.navigation.disabledClass = '';
				////swiper.navigation.hiddenClass = '';
				////swiper.navigation.lockClass = '';
				////swiper.navigation.navigationDisabledClass = '';
				
				
				if(swiper.isBeginning)
				{ 
					//swiper.navigation.nextEl = '.CardLayout__slider .swiper-button-next';
					////swiper.navigation.prevEl = '.CardLayout__slider .swiper-button-prev';
				}//if(swiper.isBeginning)
				
				if(swiper.isEnd)
				{
					
				}//if(swiper.isEnd)
					
				if(!swiper.isBeginning)
				{
					
				}//if(!swiper.isBeginning)
				
				if(!swiper.isEnd)
				{
					
				}//if(!swiper.isEnd)
				
				if(!swiper_paused)
				{
					//swiper-button-next
					
					//if(swiper.isBeginning)
					//swiper.navigation.destroy();
					if(swiper.isBeginning)
					{
						console.log('swiper-button-disabled');
						swiper.navigation.destroy();
						////swiper.pagination.destroy();
						////swiper.navigation.nextEl = null;
						//swiper.navigation.nextEl = '.CardLayout__slider .swiper-button-next .swiper-button-disabled';
						////swiper.navigation.prevEl = '.CardLayout__slider .swiper-button-prev .swiper-button-disabled';
					}//if(swiper.isBeginning)
					
					if(swiper.isEnd)
					{
						
					}//if(swiper.isEnd)
						
					if(!swiper.isBeginning)
					{
						
					}//if(!swiper.isBeginning)
					
					if(!swiper.isEnd)
					{
						
					}//if(!swiper.isEnd)
					
					//console.log('swiper-button-disabled');
					//nextEl: ".CardLayout__slider .swiper-button-next",
					//prevEl: ".CardLayout__slider .swiper-button-prev"
					
					//swiper.navigation.disabledClass = '.swiper-button-disabled';
					//swiper.navigation.hiddenClass = '.swiper-button-hidden';
					////swiper.navigation.lockClass = '.swiper-button-lock';
					//swiper.navigation.navigationDisabledClass = 'swiper-navigation-disabled';
				}//if(!swiper_paused)
				//swiper.attachEvents();
				
				swiper.navigation.update();
				////swiper.pagination.update();
				//swiper.update();
				//console.log('slide click swiper.navigation' , swiper.navigation);
				 
				
				//swiper.scrollbar.dragEl
				//swiper.autoplay.paused = swiper_paused;
				//console.log('slide click swiper_paused' , swiper_paused);
				swiper_paused = !swiper_paused;//true , false
				//swiper.addSlide(index, slides)
			});//swiper.on('click', function(e){ 
			*/
	
			if(is_undefined(UseObject))
				var UseObject = null;
			if(is_undefined(ObjectTypeString))
				var ObjectTypeString = "";//'swiper'
			//var ObjectTypeString = 'swiper';//
			
			if(!is_undefined(ObjectTypeString) && is_string(ObjectTypeString))
			{
				ObjectTypeString = trim_space(ObjectTypeString);
				if(!is_empty(ObjectTypeString))
				ObjectTypeString = ObjectTypeString.toLowerCase();
			}//if(!is_undefined(ObjectTypeString) && is_string(ObjectTypeString))
			
	
		 
			//console.log('TestInputDataExists ThisObjectLength' , ThisObjectLength);
				
			$(document).ready(function () {
				//'use strict';	
				 if($(":input[DataTestExists=1]").length == 0)
					 return null;
				 //swiper.defaults
				 //swiper.extendedDefaults	SwiperOptions	Object with global Swiper extended options
				 
				 if(is_undefined(UseObjectExtendedDefaults))
				 var UseObjectExtendedDefaults = null;
				
				 var RunChangeDataTestExists = false;//true , false
				 if(UseObjectExtendedDefaults && !is_null(UseObjectExtendedDefaults))
					 RunChangeDataTestExists = true;//true , false
				 
				 if(ObjectTypeString == "swiper")
				 {
					 if(!is_object(UseObject))
						 return null;
					 if(is_object(UseObject))
					 {
						 swiper = UseObject;
						 	//console.log('slide click swiper' , swiper);
							//https://swiperjs.com/swiper-api#navigation
							
							/*
						 	UseObject.on('reachBeginning', function () {
								console.log('slide reachBeginning');
								//const swiper = this;
							
							}); 
							
							UseObject.on('reachEnd', function () {
								console.log('slide reachEnd');
								
							}); 
							UseObject.on('realIndexChange', function () {
								console.log('slide realIndexChange');
							  
							});//UseObject.on('realIndexChange', function () {
							*/
						if(!UseObjectExtendedDefaults)
						{
							//swiper.allowSlideNext = swiper_paused;
							//swiper.allowSlidePrev = swiper_paused;
							//swiper.allowTouchMove = swiper_paused; 
							UseObjectExtendedDefaults = {
									allowSlideNext: UseObject.allowSlideNext,
									allowSlidePrev: UseObject.allowSlidePrev,
									allowTouchMove: UseObject.allowTouchMove,
									navigation: UseObject.navigation
								};
								////Options = $.extend(DefaultsOptions, Options);
						}//if(!UseObjectExtendedDefaults)
						 
						//console.log('TestInputDataExists UseObject.defaults' , UseObject.defaults);
						//console.log('TestInputDataExists UseObject.extendedDefaults' , UseObject.extendedDefaults);
						//console.log('TestInputDataExists UseObjectExtendedDefaults' , UseObjectExtendedDefaults);		
					 }//if(is_object(UseObject))
				 }//if(ObjectTypeString == "swiper")
					 
				 //return null;
				 
				//alert('DataTestExists');
				
				//$("form").find("[DataTestExists]")
				
				
				var RunGoAjaxDataTestExistsIndex = 0;
				var RunGoAjaxDataTestExists = false;//true , false
				var OldActionString = null;
				var OldActionStringKeyUp = null;
				var DoSetDataStart = false;//true , false
				
				$(":input[DataTestExists=1]").unbind("mouseup");	
				$(":input[DataTestExists=1]").bind( "mouseup", function() {
					//DoSetDataStart = true;//true , false
					if(!DoSetDataStart)
					{
						//$(this).val('');
					}//if(!DoSetDataStart)
						
					//var Val = $(this).val();
					//if(is_empty(Val))
					//	return null;
					DoSetDataStart = true;//true , false	
				 });//$(":input[DataTestExists=1]").bind( "mouseup", function() {
					 
				$(":input[DataTestExists=1]").unbind("focus");	
				$(":input[DataTestExists=1]").bind( "focus", function() {
					//DoSetDataStart = true;//true , false
				 
					if(!DoSetDataStart)
					{
						//# //$(this).val('');
						//# var Val = $(this).val();
						//# if(is_empty(Val))
						//# return null;
					}//if(!DoSetDataStart)
					//console.log( ":input[DataTestExists=1] change  ajax success Data :" ,  data );
					//var Val = $(this).val();
					//if(is_empty(Val))
					//	return null;
					DoSetDataStart = true;//true , false	
				 });//$(":input[DataTestExists=1]").bind( "focus", function() {
			 
				$(":input[DataTestExists=1]").unbind("keyup");	
				$(":input[DataTestExists=1]").bind( "keyup", function() {
					//console.log(':input[DataTestExists=1] keyup');
					var ObjectParentHtml = $(this).parents().eq(0);
					//console.log(':input[DataTestExists=1] keyup ObjectParentHtml' , ObjectParentHtml);
					var Val = $(this).val();
					if(is_empty(Val))
						return null;
					var NameString = $(this).attr("name");
					if(is_undefined(NameString) || !is_string(NameString) || is_empty(NameString))
						NameString = $(this).attr("id");
					if(is_empty(NameString))
						return null;
					
					var ActionString = $(this).attr("action");
					if(is_empty(ActionString))
						return null;
					
					ActionString = ActionString+Val;
					if(OldActionStringKeyUp == ActionString)
						return null;
					
					DoSetDataStart = true;//true , false
					if(RunGoAjaxDataTestExists)
					{
						return null;
					}//if(RunGoAjaxDataTestExists)
						
				 
					OldActionStringKeyUp = ActionString;
					//console.log(':input[DataTestExists=1] keyup Val' , Val);
					//console.log(':input[DataTestExists=1] keyup ActionString' , ActionString);
					
					var ObjectTestExistLoading = null;
					var ObjectTestExistsMsg = null;
					var ObjectTestExistsMsgValid = null;
					var ObjectTestExistsMsgError = null;
					if(is_object(ObjectParentHtml) && ObjectParentHtml.length == 1)
					{
						var ObjectTestExistLoading = ObjectParentHtml.find('.TestExistLoading');
						//alert(ObjectTestExistLoading.length);
						if(ObjectTestExistLoading.length == 0)
							ObjectTestExistLoading = ObjectParentHtml.find('#TestExistLoading');
						if(ObjectTestExistLoading.length == 0)
						ObjectTestExistLoading = null;
					
					
						//ObjectTestExistsMsg = ObjectParentHtml.find('.TestExistsMsg');
						
						//ObjectTestExistsMsgValid = ObjectParentHtml.find('.TestExistsMsg .valid-msg');
						var ObjectTestExistsMsgValid = ObjectParentHtml.find('.valid-msg');
						//alert(ObjectTestExistsMsgValid.length);
						if(ObjectTestExistsMsgValid.length == 0)
							ObjectTestExistsMsgValid = ObjectParentHtml.find('#valid-msg');
						if(ObjectTestExistsMsgValid.length == 0)
						ObjectTestExistsMsgValid = null;
						
						
						//ObjectTestExistsMsgError = ObjectParentHtml.find('.TestExistsMsg .error-msg');
						var ObjectTestExistsMsgError = ObjectParentHtml.find('.error-msg');
						//alert(ObjectTestExistsMsgError.length);
						if(ObjectTestExistsMsgError.length == 0)
							ObjectTestExistsMsgError = ObjectParentHtml.find('#error-msg');
						if(ObjectTestExistsMsgError.length == 0)
						ObjectTestExistsMsgError = null;
					
						//console.log(':input[DataTestExists=1] change ObjectTestExistLoading.length' , ObjectTestExistLoading.length);
						//console.log(':input[DataTestExists=1] change ObjectTestExistsMsgValid.length' , ObjectTestExistsMsgValid.length);
						//console.log(':input[DataTestExists=1] change ObjectTestExistsMsgError.length' , ObjectTestExistsMsgError.length);
					}//if(is_object(ObjectParentHtml) && ObjectParentHtml.length == 1)
					
					if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
					{
						ObjectTestExistsMsgValid.hide();
						//ObjectTestExistsMsgValid.show();
					}//if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
					
					if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
					{
						ObjectTestExistsMsgError.hide();
						//ObjectTestExistsMsgError.show();
					}//if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
					
					if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
					{
						ObjectTestExistLoading.hide();
						//ObjectTestExistLoading.show();
					}//if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)	
				});//$(":input[DataTestExists=1]").bind( "keyup", function() {
			 


				//$(':input').blur(function () {
				//$(':input').focus(function () {
				//$("[DataTestExists]").bind( "click", function() {
				$(":input[DataTestExists=1]").unbind("change");	
				$(":input[DataTestExists=1]").bind( "change", function() {
					
					
					if(!DoSetDataStart)
					{
						DoSetDataStart = true;//true , false
						return null;
					}//if(!DoSetDataStart)
					//# console.log(':input[DataTestExists=1] change');
					//var ObjectString = $(this).attr("DataTestExists");
					//console.log(':input[DataTestExists=1] change ObjectString' , ObjectString);
					
					//# //var ObjectParentForm = $(this).parent('form').eq(0);
					//# var ObjectParentForm = $(this).parents('form').eq(0);
					
					//# //var ObjectParentDiv = $(this).parent('div').eq(0);
					//# var ObjectParentDiv = $(this).parents('div').eq(0);
					
					//# //var ObjectParentHtml = $(this).parent().eq(0);
					var ObjectParentHtml = $(this).parents().eq(0);
					//console.log(':input[DataTestExists=1] change ObjectParentHtml' , ObjectParentHtml);
					var Val = $(this).val();
					//# console.log(':input[DataTestExists=1] change Val' , Val);
					if(is_empty(Val))
						return null;
					var NameString = $(this).attr("name");
					if(is_undefined(NameString) || !is_string(NameString) || is_empty(NameString))
						NameString = $(this).attr("id");
					//# console.log(':input[DataTestExists=1] change NameString' , NameString);
					if(is_empty(NameString))
						return null;
					
					var ActionString = $(this).attr("action");
					//# console.log(':input[DataTestExists=1] change ActionString' , ActionString);
					if(is_empty(ActionString))
						return null;
					
					ActionString = ActionString+Val;
					//# console.log(':input[DataTestExists=1] change ActionString 2' , ActionString);
					if(OldActionString == ActionString)
						return null;
					
					
					
					
					if(RunGoAjaxDataTestExists)
					{
						if(RunGoAjaxDataTestExistsIndex < 10)
						return null;
					}//if(RunGoAjaxDataTestExists)
					RunGoAjaxDataTestExistsIndex += 1;
				
					OldActionString = ActionString;
					//# console.log(':input[DataTestExists=1] change OldActionString' , OldActionString);
					//console.log(':input[DataTestExists=1] change Val' , Val);
					//console.log(':input[DataTestExists=1] change ActionString' , ActionString);
					
					var ObjectTestExistLoading = null;
					var ObjectTestExistsMsg = null;
					var ObjectTestExistsMsgValid = null;
					var ObjectTestExistsMsgError = null;
					if(is_object(ObjectParentHtml) && ObjectParentHtml.length == 1)
					{
						var ObjectTestExistLoading = ObjectParentHtml.find('.TestExistLoading');
						//alert(ObjectTestExistLoading.length);
						if(ObjectTestExistLoading.length == 0)
							ObjectTestExistLoading = ObjectParentHtml.find('#TestExistLoading');
						if(ObjectTestExistLoading.length == 0)
						ObjectTestExistLoading = null;
					
					
						//ObjectTestExistsMsg = ObjectParentHtml.find('.TestExistsMsg');
						
						//ObjectTestExistsMsgValid = ObjectParentHtml.find('.TestExistsMsg .valid-msg');
						var ObjectTestExistsMsgValid = ObjectParentHtml.find('.valid-msg');
						//alert(ObjectTestExistsMsgValid.length);
						if(ObjectTestExistsMsgValid.length == 0)
							ObjectTestExistsMsgValid = ObjectParentHtml.find('#valid-msg');
						if(ObjectTestExistsMsgValid.length == 0)
						ObjectTestExistsMsgValid = null;
						
						
						//ObjectTestExistsMsgError = ObjectParentHtml.find('.TestExistsMsg .error-msg');
						var ObjectTestExistsMsgError = ObjectParentHtml.find('.error-msg');
						//alert(ObjectTestExistsMsgError.length);
						if(ObjectTestExistsMsgError.length == 0)
							ObjectTestExistsMsgError = ObjectParentHtml.find('#error-msg');
						if(ObjectTestExistsMsgError.length == 0)
						ObjectTestExistsMsgError = null;
					
						//console.log(':input[DataTestExists=1] change ObjectTestExistLoading.length' , ObjectTestExistLoading.length);
						//console.log(':input[DataTestExists=1] change ObjectTestExistsMsgValid.length' , ObjectTestExistsMsgValid.length);
						//console.log(':input[DataTestExists=1] change ObjectTestExistsMsgError.length' , ObjectTestExistsMsgError.length);
					}//if(is_object(ObjectParentHtml) && ObjectParentHtml.length == 1)
					
				
					if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
					{
						ObjectTestExistsMsgValid.hide();
						//ObjectTestExistsMsgValid.show();
					}//if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
					
					if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
					{
						ObjectTestExistsMsgError.hide();
						//ObjectTestExistsMsgError.show();
					}//if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
						
					if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
					{
						ObjectTestExistLoading.hide();
						//ObjectTestExistLoading.show();
					}//if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
					
					
					/*
					<label class="ns__label" for="username"><?=_web_contact_email?> *
					<span  class="hidden  TestExistsMsg valid-msg color-green" TelInputErrorMsgPhone="1" style="display: none;" >✓ Valid</span>
					<span  class="hidden TestExistsMsg error-msg bg--grey color-yellow" TelInputValidMsgPhone="1"  style="display: none;"  >البريد الاكتروني موجود من قبل</span>

					<span class="TestExistLoading" style="display: none;width: 31px;height: auto;"><img src="<?=$SiteUrlMain?>images/Loading_icon.gif" /></span>

					</label>

					<input type="email"  class="ns__field required" name="email" id="email" value="<?=@$_POST['email']?>" autocomplete="off" required placeholder="" MsgError="ادخل <?=_web_contact_email?>" check="yes" Email="yes" Number="no" Site_Path="no" Site_Path="no" TelInput="0" action="<?=$href_action?>&email=" DataTestExists="1" />
					*/
			
					//var Val = $(this).val();
					//var NameString = $(this).attr("name");
					 var DefaultsOptions = {
							'InputString': NameString,
							'InputValue': Val,
							//"PushStateUrl": PushStateUrl,
							"ajax_loading": true,
							"ajaxload": true,
							//"PageTitle": null,
							////"LivePage": 1,
							//"AcctionUrl": null,
							//"RunOnLoad": false,
							//"page": 1 
							 
						};
						
						  //var Options = {}; 
						//var fields = formTag.find(":input").serializeArray();
						////$( "#results" ).empty();
						//jQuery.each( fields, function( i, field ) {
						//  //$( "#results" ).append( field.value + " " );
						//  //{name: "product_id", value: "327"}
						//  Options[field.name] = field.value;
						 
						//});
						
						//var Options = formTag.find(":input").serializeArray();
			
						//Options = $.extend(DefaultsOptions, Options);
						
						
						console.log(':input[DataTestExists=1] change ActionString' , ActionString);
						//console.log(':input[DataTestExists=1] change DefaultsOptions' , DefaultsOptions);
						
						 var RunGoAjax = true;//true , false
						 if(RunGoAjax)
						 {
							 
						
							//var RunGoAjaxDataTestExistsIndex = 0;
							//var RunGoAjaxDataTestExists = false;//true , false
							//return false;
							 
							var jqxhr = $.ajax({
								type: "POST",
								//dataType: "json",
								//dataType: 'text',
								//url: formTag.attr("action")+'[and]ajaxload' ,
								
								//url: formTag.attr("action")+'?ajaxload' ,
								url: ActionString,
								//url: formTag.attr("action")+'[and]ajaxload' ,
								//data: formTag.serialize(),
								
								data: DefaultsOptions,
								//data: Options,
								
								//contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
								//processData: false, // NEEDED, DON'T OMIT THIS
								
								//data: JSON.stringify({ tripData: data }),
								//contentType: 'application/json; charset=utf-8',
								//  cache: false,
								//async : false,
								beforeSend: function(){
									 // Handle the beforeSend event
									RunGoAjaxDataTestExists = true;//true , false
									if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
									{
										ObjectTestExistsMsgError.hide();
										//ObjectTestExistsMsgError.show();
									}//if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
									if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
									{
										ObjectTestExistsMsgValid.hide();
										//ObjectTestExistsMsgValid.show();
									}//if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
										
									if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
									{
										//ObjectTestExistLoading.hide();
										ObjectTestExistLoading.show();
									}//if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
									
									if(ObjectTypeString == "swiper")
									{
										if(is_object(UseObject))
										{
											//swiper = UseObject;
											//https://swiperjs.com/swiper-api#navigation
											
											UseObject.allowSlideNext = false;
											UseObject.allowSlidePrev = false;
											UseObject.allowTouchMove = false;
											//UseObject.update();
											//UseObject.navigation.init();
											
											//UseObject.pagination.update()
											//UseObject.navigation.destroy();
											//UseObject.navigation.init();
											 
											UseObject.navigation.destroy();
											//console.log(':input[DataTestExists=1] change ajax beforeSend swiper-button-disabled');
											
											//UseObject.attachEvents();

											UseObject.navigation.update();
											////UseObject.pagination.update();
											UseObject.update();
											
										}//if(is_object(UseObject))
									}//if(ObjectTypeString == "swiper")
					
									  
									
							   },//beforeSend: function(){
								statusCode: {
									404: function() {
										//alert("page not found");
										//OpenModalPopup('6','خطأ');
										
									 
										 //console.log( "statusCode page not found" );
									 
									}
								},
								error: function(request,status, error){
									 // Handle the error event
									 //console.log( "Handle the error event " );
									// console.log( "error status " );
									 //console.log( status );
									 //console.log( "error error " );
									// console.log( error );
									 //console.log( "error request " );
									 //console.log( request );
								   },
								complete: function(){
									 // Handle the complete event
									  //console.log( "Handle the complete event " );
									  
									  //if(formTag.find('.ajax-loading').length == 1)
										//	formTag.find(".ajax-loading").hide();
										//else if(!is_undefined(ContainerPageLoading) && is_function(ContainerPageLoading))
										//ContainerPageLoading(false);
								   },
								success: function(data){
							 
										console.log( ":input[DataTestExists=1] change  ajax success Data :" ,  data );
										//return false;
									 
										RunGoAjaxDataTestExistsIndex = 0;
										RunGoAjaxDataTestExists = false;//true , false
										if(is_object(data))
										{
											var AlreadyExists = null;//0,1,2
											var data_status = 0;//0,1,2
											var data_action = "";//register , login , forget_password , activate_account
										
											var data_message = "";
											
											//var Success_Status = 1;
											//var Error_Status = 0;
											
											if(!is_undefined(data.AlreadyExists))
												 AlreadyExists = data.AlreadyExists;
											
											//if(!is_undefined(data.SuccessStatus))
											//	 Success_Status = data.SuccessStatus;
										 
											//if(!is_undefined(data.ErrorStatus))
											//	 Error_Status = data.ErrorStatus; 
											if(!is_undefined(data.status))
												data_status = data.status;
											if(!is_undefined(data.message))
											{
												//console.log( 'message' );
												//console.log( data.message );
												
												//data_message = data.message;
												data_message = trim_space(data.message);
											}//if(!is_undefined(data.message))
										 
											if(!is_undefined(data.action))
											{
												//console.log( 'action' );
												//console.log( data.action );
												data_action = trim_space(data.action);//register , login , forget_password , activate_account
											}//if(!is_undefined(data.action))	
											
										
											 
											//if(data_status == Error_Status && data_action == 'AccountLogOut')
											//if(Location_Refresh)
											//setTimeout(function(){ My_Location_Refresh(); }, 1000);
											
											
											
												
											 
											//console.log( ":input[DataTestExists=1] change  ajax success AlreadyExists :" ,  AlreadyExists );
											if(!is_null(AlreadyExists))
											{						
												if(AlreadyExists != 2)
												{
													if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
													{
														var DefaultMessage = ObjectTestExistsMsgError.attr("DefaultMessage");
														if(is_undefined(DefaultMessage))
														{
															//ObjectTestExistsMsgError.attr("DefaultMessage", trim_space(ObjectTestExistsMsgError.html()));
															ObjectTestExistsMsgError.attr("DefaultMessage", trim_space(ObjectTestExistsMsgError.text()));
															//ObjectTestExistsMsgError.removeAttr("DefaultMessage");
														}//if(is_undefined(DefaultMessage))
														//ObjectTestExistsMsgError.hide();
														//ObjectTestExistsMsgError.show();
														
														////if(is_string(data_message) && is_empty(data_message))
														if(!is_empty(data_message))
														{
															//ObjectTestExistsMsgError.html(data_message);//.show();
															ObjectTestExistsMsgError.text(data_message);
														}
														else //if(is_empty(ObjectTestExistsMsgError.html()))
														{
															var DefaultMessage = ObjectTestExistsMsgError.attr("DefaultMessage");
															if(!is_undefined(DefaultMessage))
															{
																//ObjectTestExistsMsgError.html(DefaultMessage);//.show();
																ObjectTestExistsMsgError.text(DefaultMessage);
															}
															
														}//else //if(is_empty(ObjectTestExistsMsgError.html()))
														
														if(!is_empty(ObjectTestExistsMsgError.text()))
														ObjectTestExistsMsgError.show();
													}//if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
												}//if(AlreadyExists != 2)
												
												if(AlreadyExists == 2)
												{
													if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
													{
														//ObjectTestExistsMsgValid.hide();
														ObjectTestExistsMsgValid.show();
													}//if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
												}//if(AlreadyExists == 2)
												 
											}//if(!is_null(AlreadyExists))	
										}//if(is_object(data))
										
									 
								}//success: function(data){
							}).done(function(data) {
								//alert( "success" );
								 //console.log( "done success" );
							  })
							  .fail(function() {
								//alert( "error" );
						 
								//console.log( ":input[DataTestExists=1] change  fail error" );
							  })
							  .always(function(data) {
								//alert( "complete" );
									RunGoAjaxDataTestExistsIndex = 0;
									RunGoAjaxDataTestExists = false;//true , false
									//console.log( ":input[DataTestExists=1] change  always complete" );
									if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
									{
										//ObjectTestExistsMsgError.hide();
										//ObjectTestExistsMsgError.show();
									}//if(is_object(ObjectTestExistsMsgError) && ObjectTestExistsMsgError.length == 1)
									if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
									{
										//ObjectTestExistsMsgValid.hide();
										//ObjectTestExistsMsgValid.show();
									}//if(is_object(ObjectTestExistsMsgValid) && ObjectTestExistsMsgValid.length == 1)
										
									if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
									{
										ObjectTestExistLoading.hide();
										//ObjectTestExistLoading.show();
									}//if(is_object(ObjectTestExistLoading) && ObjectTestExistLoading.length == 1)
									
									if(ObjectTypeString == "swiper")
									{
										if(is_object(UseObject))
										{
											if(!UseObjectExtendedDefaults)
											{ 
												//swiper = UseObject;
												//https://swiperjs.com/swiper-api#navigation
												
												UseObject.allowSlideNext = true;
												UseObject.allowSlidePrev = true;
												UseObject.allowTouchMove = true;
												//UseObject.update();
												//UseObject.navigation.init();
												
												//UseObject.pagination.update()
												//UseObject.navigation.destroy();
												UseObject.navigation.init();
												 
												//UseObject.navigation.destroy();
												//console.log(':input[DataTestExists=1] change ajax always swiper-button update');
												
												//UseObject.attachEvents();

												UseObject.navigation.update();
												////UseObject.pagination.update();
												UseObject.update();
											}//if(!UseObjectExtendedDefaults)
												
											
											if(UseObjectExtendedDefaults)
											{
												/*
												//swiper.allowSlideNext = swiper_paused;
												//swiper.allowSlidePrev = swiper_paused;
												//swiper.allowTouchMove = swiper_paused; 
												UseObjectExtendedDefaults = {
												allowSlideNext: UseObject.allowSlideNext,
												allowSlidePrev: UseObject.allowSlidePrev,
												allowTouchMove: UseObject.allowTouchMove,
												navigation: UseObject.navigation
												};
												*/
												//Options = $.extend(DefaultsOptions, Options);
												
												//swiper = UseObject;
												//https://swiperjs.com/swiper-api#navigation
												
												UseObject.allowSlideNext =  UseObjectExtendedDefaults.allowSlideNext;
												UseObject.allowSlidePrev = UseObjectExtendedDefaults.allowSlidePrev;
												UseObject.allowTouchMove = UseObjectExtendedDefaults.allowTouchMove;
												//UseObject.update();
												//UseObject.navigation.init();
												
												//UseObject.pagination.update()
												//UseObject.navigation.destroy();
												UseObject.navigation = UseObjectExtendedDefaults.navigation;
												UseObject.navigation.init();
												 
												//UseObject.navigation.destroy();
												//console.log(':input[DataTestExists=1] change ajax always swiper-button update');
												
												//UseObject.attachEvents();

												UseObject.navigation.update();
												////UseObject.pagination.update();
												UseObject.update();
											}//if(UseObjectExtendedDefaults)
										}//if(is_object(UseObject))
									}//if(ObjectTypeString == "swiper")
										
								
							  });//$.ajax({
							 
							// Perform other work here ...
							 
							// Set another completion function for the request above
							//# jqxhr.always(function() {
								//console.log( ":input[DataTestExists=1] change  second complete" );
							//#   //alert( "second complete" );
							//# });
						 }//if(RunGoAjax)
				});//$(":input[DataTestExists=1]").bind( "change", function() {
				//.change();

				if(is_undefined(RunChangeDataTestExists))
				 var RunChangeDataTestExists = false;//true , false
				if(RunChangeDataTestExists)
				$(":input[DataTestExists=1]").change();
					
			});//$(document).ready(function () {
			 
		}//function TestInputDataExists()
	}//if(typeof TestInputDataExists == "undefined" || typeof TestInputDataExists !='function')


	if(typeof ShowHideInputPassword == "undefined" || typeof ShowHideInputPassword !='function')
	{	
		/*
		<div class="block-50 mobile-100">
		<div class="gutter gutter-xs">
		<div class="ns-holder">
			<label class="ns__label" for="username"><?=_web_password?> *</label>
			<input type="password"  class="ns__field required"  minlength="5" name="password" id="password" value="" autocomplete="off" required placeholder="" MsgError="ادخل <?=_web_password?>" check="yes" Email="no" Number="no" Site_Path="no" Site_Path="no"  /> 
			<button aria-label="Show password" ShowInputPassword="" type="button" class="spectrum-Tool spectrum-Tool--quiet PasswordField-VisibilityToggle">
				<svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS PasswordField-VisibilityToggle__Icon"><path d="M14.573 9.44A9.215 9.215 0 0 1 26.56 21.427l2.945 2.945c2.595-2.189 4.245-4.612 4.245-6.012 0-2.364-4.214-7.341-9.137-9.78A14.972 14.972 0 0 0 18 6.937a14.36 14.36 0 0 0-4.989.941z"></path><path d="M33.794 32.058L22.328 20.592A5.022 5.022 0 0 0 23.062 18a4.712 4.712 0 0 0-.174-1.2 2.625 2.625 0 0 1-2.221 1.278A2.667 2.667 0 0 1 18 15.417a2.632 2.632 0 0 1 1.35-2.27 4.945 4.945 0 0 0-1.35-.209 5.022 5.022 0 0 0-2.592.734L3.942 2.206a.819.819 0 0 0-1.157 0l-.578.579a.817.817 0 0 0 0 1.157l6.346 6.346c-3.816 2.74-6.3 6.418-6.3 8.072 0 3 7.458 10.7 15.686 10.7a16.455 16.455 0 0 0 7.444-1.948l6.679 6.679a.817.817 0 0 0 1.157 0l.578-.578a.818.818 0 0 0-.003-1.155zM18 27.225a9.2 9.2 0 0 1-7.321-14.811l2.994 2.994A5.008 5.008 0 0 0 12.938 18 5.062 5.062 0 0 0 18 23.063a5.009 5.009 0 0 0 2.592-.736l2.994 2.994A9.144 9.144 0 0 1 18 27.225z"></path></svg>
			</button>
		</div>
		</div>
		</div>
		*/
		
		
		/*
		<div class="block-50 mobile-100">
		<div class="gutter gutter-xs">
		<div class="ns-holder">
			<label class="ns__label" for="username"><?=_web_password?> *</label>
			<input type="password"  class="ns__field required"  minlength="5" name="password" id="password" value="" autocomplete="off" required placeholder="" MsgError="ادخل <?=_web_password?>" check="yes" Email="no" Number="no" Site_Path="no" Site_Path="no"  /> 
			<button aria-label="Show password" ShowInputPassword="#password" type="button" class="spectrum-Tool spectrum-Tool--quiet PasswordField-VisibilityToggle">
				<svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS PasswordField-VisibilityToggle__Icon"><path d="M14.573 9.44A9.215 9.215 0 0 1 26.56 21.427l2.945 2.945c2.595-2.189 4.245-4.612 4.245-6.012 0-2.364-4.214-7.341-9.137-9.78A14.972 14.972 0 0 0 18 6.937a14.36 14.36 0 0 0-4.989.941z"></path><path d="M33.794 32.058L22.328 20.592A5.022 5.022 0 0 0 23.062 18a4.712 4.712 0 0 0-.174-1.2 2.625 2.625 0 0 1-2.221 1.278A2.667 2.667 0 0 1 18 15.417a2.632 2.632 0 0 1 1.35-2.27 4.945 4.945 0 0 0-1.35-.209 5.022 5.022 0 0 0-2.592.734L3.942 2.206a.819.819 0 0 0-1.157 0l-.578.579a.817.817 0 0 0 0 1.157l6.346 6.346c-3.816 2.74-6.3 6.418-6.3 8.072 0 3 7.458 10.7 15.686 10.7a16.455 16.455 0 0 0 7.444-1.948l6.679 6.679a.817.817 0 0 0 1.157 0l.578-.578a.818.818 0 0 0-.003-1.155zM18 27.225a9.2 9.2 0 0 1-7.321-14.811l2.994 2.994A5.008 5.008 0 0 0 12.938 18 5.062 5.062 0 0 0 18 23.063a5.009 5.009 0 0 0 2.592-.736l2.994 2.994A9.144 9.144 0 0 1 18 27.225z"></path></svg>
			</button>
		</div>
		</div>
		</div>
		*/
		
		//if(typeof ShowHideInputPassword != "undefined" && typeof ShowHideInputPassword =='function')
		//ShowHideInputPassword();
		//if(!is_undefined(ShowHideInputPassword) && is_function(ShowHideInputPassword))
		//ShowHideInputPassword();
	 
		function ShowHideInputPassword()
		{
			/*
			
			<form method="post">
  Username
  <input type="text" name="username" autofocus="" autocapitalize="none" autocomplete="username" required="" id="id_username">
  Password
  <input type="password" name="password" autocomplete="current-password" required="" id="id_password">
  <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
			const togglePassword = document.querySelector('#togglePassword');
			const password = document.querySelector('#id_password');

			togglePassword.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
			password.setAttribute('type', type);
			// toggle the eye slash icon
			this.classList.toggle('fa-eye-slash');
			});
			*/

			//Show/Hide Password
			
			//console.log('ShowHideInputPassword ThisObjectLength' , ThisObjectLength);
				
			$(document).ready(function () {
				//'use strict';	
					//aria-label="Show password" 
						//ShowInputPassword="password" 
						//alert('ShowInputPassword');
						
						//$("form").find("[ShowInputPassword]")
						$("[ShowInputPassword]").bind( "click", function() {
						var ObjectString = $(this).attr("ShowInputPassword");
						//if(is_undefined(ObjectString) || !is_string(ObjectString) || is_empty(ObjectString))
						//	return null;
						
						//var ObjectParentForm = $(this).parent('form').eq(0);
						var ObjectParentForm = $(this).parents('form').eq(0);
						//alert(ObjectParentForm.length);
						var Object = null;
						if(!is_undefined(ObjectString) && is_string(ObjectString) && !is_empty(ObjectString))
						{
							if(is_object(ObjectParentForm) && ObjectParentForm.length == 1)
							{
								Object = ObjectParentForm.find(':input'+ObjectString);
								//alert(Object.length);
								if(Object.length == 0)
								Object = null;	
							}
							if(!Object || !is_object(Object) || (is_object(Object) && Object.length == 0))
							{
								//if(!Object || !is_object(Object))
								Object = $(':input'+ObjectString);
							}
							
							//if(!Object || !is_object(Object))
							//Object = $(':input'+ObjectString);
							//alert(Object.length);
						}
						
						if(!Object || !is_object(Object) || (is_object(Object) && Object.length == 0))
						{
							if(is_object(ObjectParentForm) && ObjectParentForm.length == 1)
							{
								ObjectParentForm.find(':input').each(function(i){ 
								   var ReSetTypePassword = $(this).attr("ReSetTypePassword");
								   var type = $(this).attr("type");//text , password , radio , file , checkbox, number , url , email  , hidden , submit , button 
									////var tag = this.tagName.toLowerCase(); // normalize case
									
									 
									//var type = this .type;
									if(!is_undefined(type))
									type = type.toLowerCase();
									//type = trim_space(type);
									//var tag = this .tagName.toLowerCase(); // normalize case
									//alert(tag);
									//if (type == 'number' || type == 'text' || type == 'password' || tag == 'textarea')
									
									//if(type == 'text' || type == 'password')
									//	alert(type);
									if(!is_undefined(ReSetTypePassword))
									{
										if(type == 'text' && ReSetTypePassword == 'password')
										{
											$(this).attr( "type", 'password');
											$(this).removeAttr("ReSetTypePassword");
										}//if(type == 'text' && ReSetTypePassword == 'password')
									}//if(!is_undefined(ReSetTypePassword))
									else //if(is_undefined(ReSetTypePassword))
									{
										if(type == 'password')
										{
											$(this).attr( "type", 'text');
											$(this).attr( "ReSetTypePassword", 'password');
										}//if(type == 'password')
									}//else //if(is_undefined(ReSetTypePassword))
									
								});//ObjectParentForm.find(':input').each(function(i){ 
							}//if(is_object(ObjectParentForm) && ObjectParentForm.length == 1)
								
							return null;
						}//if(!Object || !is_object(Object) || (is_object(Object) && Object.length == 0))
							
						//if(!Object || !is_object(Object) || (is_object(Object) && Object.length == 0))
						//return null;
						
						 
						if(is_object(Object) && Object.length > 0)
						{ 
							//alert(ObjectString);
						 
							//# var tag = null;
							//# var type = Object.attr("type");//text , password , radio , file , checkbox, number , url , email  , hidden , submit , button 		
							//# if(is_undefined(type))
							//# type = Object.get(0).tagName;//select , textarea

							//# if(!is_undefined(type))
							//# tag = type.toLowerCase();
							
							Object.each(function(i){ 
							   var ReSetTypePassword = $(this).attr("ReSetTypePassword");
							   var type = $(this).attr("type");//text , password , radio , file , checkbox, number , url , email  , hidden , submit , button 
								////var tag = this.tagName.toLowerCase(); // normalize case
								
								 
								//var type = this .type;
								if(!is_undefined(type))
								type = type.toLowerCase();
								//type = trim_space(type);
								//var tag = this .tagName.toLowerCase(); // normalize case
								//alert(tag);
								//if (type == 'number' || type == 'text' || type == 'password' || tag == 'textarea')
								
								//if(type == 'text' || type == 'password')
								//	alert(type);
								if(!is_undefined(ReSetTypePassword))
								{
									if(type == 'text' && ReSetTypePassword == 'password')
									{
										$(this).attr( "type", 'password');
										$(this).removeAttr("ReSetTypePassword");
									}//if(type == 'text' && ReSetTypePassword == 'password')
								}//if(!is_undefined(ReSetTypePassword))
								else //if(is_undefined(ReSetTypePassword))
								{
									if(type == 'password')
									{
										$(this).attr( "type", 'text');
										$(this).attr( "ReSetTypePassword", 'password');
									}//if(type == 'password')
								}//else //if(is_undefined(ReSetTypePassword))
								
							});//Object.each(function(i){ 
						}//if(Object && is_object(Object))
						 
					});//$("[ShowInputPassword]").bind( "click", function() {
					
				});//$(document).ready(function () {
	
		}//function ShowHideInputPassword()
	}//if(typeof ShowHideInputPassword == "undefined" || typeof ShowHideInputPassword !='function')



	if(typeof ContainerPageLoading == "undefined" || typeof ContainerPageLoading !='function')
	{	
		
		//if(typeof ContainerPageLoading != "undefined" && typeof ContainerPageLoading =='function')
		//ContainerPageLoading(true);
		//if(!is_undefined(ContainerPageLoading) && is_function(ContainerPageLoading))
		//ContainerPageLoading(true);
		//ContainerPageLoading(false);
		function ContainerPageLoading(ShowHide , Object , FindObject)
		{
			if(is_undefined(ShowHide))
				var ShowHide = false;
			if(is_undefined(Object) || !is_object(Object))
				var Object = null;
			if(is_undefined(FindObject))
				var FindObject = ".page-loading";
			
			//if(is_undefined(FindObject) || (!is_object(FindObject) && (is_string(FindObject) && is_empty(FindObject))))
			//	var FindObject = null;
			 
			//if(is_object(JsonAddActionObject) && JsonAddActionObject && !jQuery.isEmptyObject(JsonAddActionObject))	
				
			
			//ShowHide = false;
			var ThisObject = null;//$("* [HomeProducResultesData=1]");
			var ThisObjectLength = 0;//ThisObject.length;
			if(Object && is_object(Object))
			{
				ThisObject = Object;
				ThisObjectLength = ThisObject.length;
				//if(ThisObjectLength == 0)
				//	ThisObject = null;
			}//if(Object && is_object(Object))
			if(ThisObjectLength == 0)
			{
				ThisObject = $("* [ContainerPageLoading=1]");
				ThisObjectLength = ThisObject.length
				
			}
			if(ThisObjectLength == 0)
				return null;
			
			//console.log('ContainerPageLoading ThisObjectLength' , ThisObjectLength);
			ThisObject.hide();
			//if(is_string(FindObject) && !is_empty(FindObject))
			//ThisObject.find(FindObject).hide();
			if(ShowHide)
			{
				//console.log('ContainerPageLoading ThisObjectLength' , ThisObjectLength);
				//ThisObject.find(".loading_img").show();
				ThisObject.show();
				//if(is_string(FindObject) && !is_empty(FindObject))
				//ThisObject.find(FindObject).css({ "display": "flex"}); //flex , block , none
				////if(is_string(FindObject) && !is_empty(FindObject))
				////ThisObject.find(FindObject).show();
			}//if(ShowHide)
		}//function ContainerPageLoading(ShowHide , Object , FindObject)
	}//if(typeof ContainerPageLoading == "undefined" || typeof ContainerPageLoading !='function')

	
	if (typeof Cost_Savings == "undefined" || typeof Cost_Savings !='function'){	
	function Cost_Savings($Cost,$new){
	//$old_price = parseInt($old_price);
	//$new_price = parseInt($new_price);
	//$TC =Cost_Savings($old_price,$new_price);
	
	$Discount = $Cost - $new;
	$Discount = ($Discount / $Cost)*100;
	return $Discount;
	}//function Cost_Savings($Cost,$new){
	}//if (typeof Cost_Savings == "undefined" || typeof Cost_Savings !='function'){
	
	
	
	if (typeof Cost_Discount == "undefined" || typeof Cost_Discount !='function'){	
	function Cost_Discount($Cost,$Discount){
	//$old_price = parseInt($old_price);
	//$discount = parseInt($discount);
	//$TC = Cost_Discount($old_price,$discount); 
	
	$Discount_M = $Cost * ($Discount/100);
	$Rest = $Cost - $Discount_M;
	return $Rest;
	}//function Cost_Discount($Cost,$Discount){	
	}//if (typeof Cost_Discount == "undefined" || typeof Cost_Discount !='function'){	
	
	
	
/*##############       ##############*/
if (typeof storageAvailable == "undefined" || typeof storageAvailable !='function')
{
	//if (storageAvailable('localStorage'))
	//storageAvailable('sessionStorage')
	function storageAvailable(type) 
	{
		if(is_undefined(type))
			return false;
		
		//if(typeof(Storage) !== "undefined") 
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				storage.length !== 0;
		}
	}//function storageAvailable(type) 	
}//if (typeof storageAvailable == "undefined" || typeof storageAvailable !='function'){
/*##############       ##############*/	

/*##############   sessionStorage    ##############*/	
/*##############       ##############*/
if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function')
{
	//SetSessionStor('sessionStorage');
	function SetSessionStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('sessionStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetSessionStor(type) 	
}//if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function'){
if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function')
{
	//SetSessionStor('sessionStorage');
	function SetSessionStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('sessionStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetSessionStor(type) 	
}//if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function'){
/*##############       ##############*/	
/*##############   sessionStorage    ##############*/
/*##############       ##############*/
if (typeof SetLocalStor == "undefined" || typeof SetLocalStor !='function')
{
	//SetLocalStor('localStorage');
	function SetLocalStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('localStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetLocalStor(type) 	
}//if (typeof SetLocalStor == "undefined" || typeof SetLocalStor !='function'){
/*##############       ##############*/	
	

	
	
	
	
 
/*##############       ##############*/
if (typeof My_Location_Go_Confirm_Message == "undefined" || typeof My_Location_Go_Confirm_Message !='function'){
	function My_Location_Go_Confirm_Message(URL , set_message)
	{
		//var message = "هل أنت متأكد أنك تريد حذف؟!";
		//var message = "Are you sure you want to delete?";
		var message = "هل انت متأكد من أنك تريد أن تفعل هذا؟";
		//var message = "Are you sure you want to do this?";
		if(!is_undefined(set_message) &&  !is_empty(set_message))
			message = set_message;
		if(!is_undefined(URL) && is_string(URL) && !is_empty(URL))
		{
			 var Go_Confirm = confirm(message);
			 if(Go_Confirm == true)
			window.location.href = URL;
			//self.location.href = URL;
			
			//top.location = top.location;
			
			//return My_Location_Go(URL);
		}
		//top.frames["hidenIframe"].location =Action;
	}//function My_Location_Go_Confirm_Message(URL , set_message)
}//if (typeof My_Location_Go_Confirm_Message == "undefined" || typeof My_Location_Go_Confirm_Message !='function'){
/*##############       ##############*/	
		
	
	
	
/*##############       ##############*/








	/*##############       ##############*/
	if (typeof PopoutFileDownload == "undefined" || typeof PopoutFileDownload !='function'){
		function PopoutFileDownload(PATH)
		{
			//alert(PATH); 
			//windowObjectReference_dilog_Show = window.open(urlP, "DescriptiveWindowName",strWindowFeatures2); 
			//windowObjectReference_dilog_Show.focus();
			var popout = window.open(PATH);
			window.setTimeout(function(){
				popout.close();
			}, 1000);
			

			//window.setInterval( "window.close()", 1000);
			 
			// window.onload = function () {window.close();}; 
			
			//windowObjectReference.closed
			//windowObjectReference_dilog_Show.document.bgColor='yellow'
			
			//windowObjectReference_dilog_Show.close()
	 
		}//function PopoutFileDownload(PATH)
	}//if (typeof PopoutFileDownload == "undefined" || typeof PopoutFileDownload !='function'){
	/*##############       ##############*/
	
	
/*
	var click_home = window.opener.jQuery('#AJAX_ACTION_HTML_ID_'+$this_id);
	var $THIS_OPJ = click_home.attr("id");
	var $THIS_Href_Action = click_home.attr("href-action");
	
	if (typeof $THIS_OPJ == "undefined" || typeof $THIS_Href_Action == "undefined" ){
	click_home = window.opener.jQuery('#Menu_InSlide_HTML_ID_'+$this_id);
	$THIS_OPJ = click_home.attr("id");
	$THIS_Href_Action = click_home.attr("href-action");
	}//	if (typeof $THIS_OPJ == "undefined"){
*/
	
	/*
	var windowObjectReference = null; // global variable
	
	function dilog_Show(PATH) {
	//alert(PATH);
	//	var	strWindowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=750,height=900"; 
	
	//strWindowFeatures = "resizable=yes,scrollbars=yes,status=yes,width=750,height=900"; 
	if(windowObjectReference == null || windowObjectReference.closed)
	//  //if the pointer to the window object in memory does not exist
	//     or if such pointer exists but the window was closed 
	
	{
	windowObjectReference = window.open(PATH,
	"PromoteFirefoxWindowName", "resizable=yes,scrollbars=yes,status=yes");
	//   // then create it. The new window will be created and
	//       will be brought on top of any other window. 
	}
	else
	{
	windowObjectReference.focus();
	//    // else the window reference must exist and the window
	//       is not closed; therefore, we can bring it back on top of any other
	//       window with the focus() method. There would be no need to re-create
	//       the window or to reload the referenced resource. 
	};
	}*/
/*##############       ##############*/
/*##############       ##############*/
var windowObjectReference_dilog_Show_Is_Win_Live = true;  

var windowObjectReference_dilog_Show = null;  
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
	
	/*##############       ##############*/
	var windowObjectReference_dilog_Show_Is_Win_Live = true;  
	
	var windowObjectReference_dilog_Show = null;  
	var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
	
	if (typeof dilog_Show_Fullwidth == "undefined" || typeof dilog_Show_Fullwidth !='function'){
		function dilog_Show_Fullwidth(PATH)
		{
			// alert(PATH);
			var urlP =PATH
			//,width=850 , height=900
			var strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes"; //window.open(urlP,'','toolbar=no,location=no,directories=no,status=no,menubar=no,width=750,height=900,scrollbars=1','');
			
			strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes"; 
			
			windowObjectReference_dilog_Show = window.open(urlP, "DescriptiveWindowName",strWindowFeatures2); 
			windowObjectReference_dilog_Show.focus();
		}//function dilog_Show_Fullwidth(PATH)
	}//if (typeof dilog_Show_Fullwidth == "undefined" || typeof dilog_Show_Fullwidth !='function'){
	/*##############       ##############*/
	
	/*##############       ##############*/
	if (typeof dilog_Show == "undefined" || typeof dilog_Show !='function'){
		function dilog_Show(PATH)
		{
			// alert(PATH);
			var urlP =PATH
			//,width=850 , height=900
			var strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes"; //window.open(urlP,'','toolbar=no,location=no,directories=no,status=no,menubar=no,width=750,height=900,scrollbars=1','');
			
			strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=750,height=900"; 
			
			
			//windowObjectReference_dilog_Show = window.open(urlP,"","fullscreen,scrollbars");
			// windowObjectReference_dilog_Show = window.open(urlP,"","channelmode")
			
			//windowObjectReference_dilog_Show = window.open(urlP, "CNN_WindowName", strWindowFeatures); 
			
			//windowObjectReference_dilog_Show = window.open(urlP, "DescriptiveWindowName","resizable=yes,scrollbars=yes,status=yes"); 
			windowObjectReference_dilog_Show = window.open(urlP, "DescriptiveWindowName",strWindowFeatures2); 
			
			windowObjectReference_dilog_Show.focus();
			
			//windowObjectReference.closed
			//windowObjectReference_dilog_Show.document.bgColor='yellow'
			
			//windowObjectReference_dilog_Show.close()
		}//function dilog_Show(PATH)
	}//if (typeof dilog_Show == "undefined" || typeof dilog_Show !='function'){
	/*##############       ##############*/
	/*##############       ##############*/	
	var My_Var_Window_Open = null;
	if (typeof My_Window_Open == "undefined" || typeof My_Window_Open !='function'){
		function My_Window_Open(URL)
		{
			if(!is_undefined(URL) && is_string(URL) && !is_empty(URL))
			{ 
				//alert(URL);
				//var $lat = parseFloat(window.opener.document.getElementById("MapLatLngStr1").value);
				//My_Var_Window_Open = window.open(URL,'','toolbar=no,location=no,directories=no,status=no,menubar=no,width=550,height=600,scrollbars=1','');
				/*
				var strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes"; //window.open(urlP,'','toolbar=no,location=no,directories=no,status=no,menubar=no,width=750,height=900,scrollbars=1','');
				strWindowFeatures2 = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes"; 
				My_Var_Window_Open = window.open(URL, "DescriptiveWindowName",strWindowFeatures2); 
				My_Var_Window_Open.focus();
				My_Var_Window_Open.close();
				*/
				var $W = 300;
				var $H = 300;
				//ifis_undefined($W) || is_empty($W))
				////if (typeof $W == "undefined" && $W != '')
				//var $W = 1100;
				
				//ifis_undefined($H) || is_empty($H))
				////if (typeof $H == "undefined" && $H != '')
				//var $H = 500;
				
				var popupWin = window.open(URL, '_blank', 'width='+$W+',height='+$H+',location=no,left=200px,resizable=yes,scrollbars=yes');
				////var popupWin = window.open('', '_blank', 'width='+$W+',height='+$H+',location=no,left=200px,resizable=yes,scrollbars=yes');
				//Window_Object_Dilog_Do_Print = popupWin;
				//popupWin.document.open();
				popupWin.document.close();
				
				/*
				//var toPrint = document.getElementById('printarea');
				var popupWin = window.open('', '_blank', 'width='+$W+',height='+$H+',location=no,left=200px,resizable=yes,scrollbars=yes');
				Window_Object_Dilog_Do_Print = popupWin;
				popupWin.document.open();

				//popupWin.document.write('<html><title>::Print Preview::</title><link rel="stylesheet" type="text/css" href="Print.css" media="screen"/></head>')
				//popupWin.document.write('<html><title>::Print Preview::</title><link rel="stylesheet" type="text/css" href="'+$P+'css/print-screen.css" media="all"/><link rel="stylesheet" type="text/css" href="'+$P+'css/Print.css" media="screen"/></head> <body> <div id="Content-Page-Print">')

				popupWin.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml">');
				popupWin.document.write('<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
				popupWin.document.write('<title>طباعة</title>');

				popupWin.document.write('<link rel="stylesheet" type="text/css" href="'+$P+'css/Sys-Restrictions.css" media="all"/><link rel="stylesheet" type="text/css" href="'+$P+'css/Sys-Reports.css" media="all"/><link rel="stylesheet" type="text/css" href="'+$P+'css/print-screen.css" media="all"/><link rel="stylesheet" type="text/css" href="'+$P+'css/Print.css?v=3" media="print"/>');
				popupWin.document.write('</head><body onload="window.print()" >');
				popupWin.document.write('<div id="Content-Page-Print">');
				//alert($P);
				//popupWin.document.write(toPrint.innerHTML);
				popupWin.document.write($Html);
				popupWin.document.write('</div>');
				popupWin.document.write('</body></html>');
				popupWin.document.close();
				//Window_Object_Dilog_Do_Print.close();
				//if(!windowObjectReference_dilog_Show.closed)
				//windowObjectReference_dilog_Show.close()
				*/
		
			}//if(!is_undefined(URL) && is_string(URL) && !is_empty(URL))
			//top.frames["hidenIframe"].location =Action;
		}//function My_Window_Open(URL)
	}//if (typeof My_Window_Open == "undefined" || typeof My_Window_Open !='function'){

/*##############       ##############*/

	
/*##############       ##############*/
if (typeof My_Location_Refresh == "undefined" || typeof My_Location_Refresh !='function'){
	function My_Location_Refresh()
	{
		top.location = top.location;
		//location.reload(true);
	}//function My_Location_Refresh()
}//if (typeof My_Location_Refresh == "undefined" || typeof My_Location_Refresh !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof My_Location_Go == "undefined" || typeof My_Location_Go !='function'){
	function My_Location_Go(URL)
	{
		if(!is_undefined(URL) && is_string(URL) && !is_empty(URL))
		{
			window.location.href = URL;
			//self.location.href = URL;
			
			//top.location = top.location;
		}
		//top.frames["hidenIframe"].location =Action;
	}//function My_Location_Go(URL)
}//if (typeof My_Location_Go == "undefined" || typeof My_Location_Go !='function'){
/*##############       ##############*/
/*##############       ##############*/
if(typeof location_top == "undefined" || typeof location_top != 'function')
{	
	function location_top($Path_FORM_JS) {
		// alert($Path_FORM_JS);
		if ($Path_FORM_JS != '' && $Path_FORM_JS != undefined)
			top.location = $Path_FORM_JS;
		else
			top.location = top.location;
	} //function location_top()
}//if(typeof location_top == "undefined" || typeof location_top != 'function')
/*##############       ##############*/
/*##############       ##############*/
if (typeof Reload_Page == "undefined" || typeof Reload_Page !='function'){
	function Reload_Page()
	{
		location.reload();
	}//function Reload_Page()
}//if (typeof Reload_Page == "undefined" || typeof Reload_Page !='function'){
/*##############       ##############*/

function Set_Position_Offset(_object)
{
	//alert('Set_Position_Offset');
	if (is_undefined(_object) || !is_object(_object) || !is_jquery(_object)) {
		return false;
	}
	//console.log( 'Set_Position_Offset _object ', _object);
	var offset = _object.offset();
	var position = _object.position();
	//var height = _object.height();
	//var height = _object.innerHeight();
	var height = _object.outerHeight();
	//var width = _object.width();
	//var width = _object.innerWidth();
	var width = _object.outerWidth();
	//_object.offset({ top: 10, left: 30 });
    //var offset_top = Set_parseFloat(offset.top);
	//var offset_top = Set_parseInt(offset.top);
	var offset_top = Set_parseFloat(offset.top);
	var position_top = Set_parseFloat(position.top);
	//console.log( "left: " + offset.left + ", top: " + offset.top );
	//console.log( "left: " + position.left + ", top: " + position.top );
	//console.log( "offset_top: " + offset_top + ", position_top: " + position_top );
	
	$(window).scrollTop(offset_top - 5);
	//$(window).scrollTop(offset_top - height);
	//$(window).scrollTop(position_top - height);
}//function Set_Position_Offset(_object)

function ToLower(str)
{
	if(is_string(str) && !is_empty(str))
	return str.toLowerCase();
	return str;
}//function ToLower(str)
function ToUpper(str)
{
	if(is_string(str) && !is_empty(str))
	return str.toUpperCase();
	return str;
}//function ToUpper(str)

	
function bt_mousesheelNumber(a) {
	return (is_number(a)) ? a : null
}
function is_null(a) {
	return (a === null)
}
function is_undefined(a) {
	return (typeof a == 'undefined' || a === 'undefined')
	//return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined')
}
function is_empty(a) {
	return (trim_space(a) == '')
}
function is_array(a) {
	return (a instanceof Array)
}
function is_jquery(a) {
	return (a instanceof jQuery)
}
function is_object(a) {
	//return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a))
	return ((a instanceof Object || typeof a == 'object'))
}
function is_number(a) {
	return ((a instanceof Number || typeof a == 'number') && !isNaN(a))
}
function is_string(a) {
	return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a))
}

function is_function(a) {
	return (a instanceof Function || typeof a == 'function')
}
function is_boolean(a) {
	return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a))
}
function is_true(a) {
	return (a === true || a === 'true')
}
function is_false(a) {
	return (a === false || a === 'false')
}
function is_percentage(x) {
	return (is_string(x) && x.slice(-1) == '%')
}
function getTime() {
	return new Date().getTime()
	//var Hours = currentTime.getHours();
	//var Minutes = currentTime.getMinutes();
	//var Seconds = currentTime.getSeconds();
}
function deprecated(o, n) {
	debug(true, o + ' is DEPRECATED, support for it will be removed. Use ' + n + ' instead.')
}
/*##############       ##############*/
function is_email(email) 
{
	var RegE = new RegExp("^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$");
	if(!is_empty(email) && RegE.test(email))//trim_space(email)
	{
		return true;
	}//if(!is_empty(email) && RegE.test(email))
	return false;
}//function is_email(email) 
/*##############       ##############*/
/*##############       ##############*/
function is_url(url) 
{
	var RegE = new RegExp('(http|ftp|https)://[a-z0-9\-_]+(\.[a-z0-9\-_]+)+([a-z0-9\-\.,@\?^=%&;:/~\+#]*[a-z0-9\-@\?^=%&;/~\+#])?', 'i');
	if(!is_empty(url) && RegE.test(url))//trim_space(url)
	{
		return true;
	}//if(!is_empty(url) && RegE.test(url))
		
	return false;
}//function is_url(url) 
/*##############       ##############*/

function Set_parseFloat(n) {
	var num = parseFloat(n);
	if(is_number(num))
		return num;
	return n;
}//function Set_parseFloat(n) {
	
function Set_parseInt(n) {
	var num = parseInt(n);
	if(is_number(num))
		return num;
	return n;
}//function Set_parseInt(n) {
	
function Set_String(s) {
	return s.toString();
}

/*  ################  GetAttributes_Select2  ################  */
function GetAttributes_object(_object) 
{
    var element = _object;
    var elem = element;
    attr = {};
    var attr_temp = ' ';
    var name = element.attr("name");
    var elemid = element.attr("id");
    ClassName = element.get(0).className;
    //      if (Settings.bricket) {
    //          if (typeof(name) != 'undefined' && name.indexOf("[]") == -1) {
    //            name = name + "[]";
    //          }
    //        }// if (Settings.bricket) {
    elem.removeAttr("multiple");
    elem.removeAttr("value");
    /*elem.removeAttr(Settings.GetMyAttributesOptions);
    RemoveAttributes = Settings.RemoveAttributes.split(' ').join('');
    if(RemoveAttributes != ''){       
    var i, c = [] , s;
    c = RemoveAttributes.split(',');
    for (i=0; i < c.length; i++){
    s = c[i];//.split(' ').join('');
    elem.removeAttr(s);
    }//for (i=0; i < c.length; i++){
    }//if(Settings.RemoveAttributes != ''){
    */
    if (elem.length) {
        $.each(elem.get(0).attributes, function(v, n) {
                n = n.nodeName || n.name;
                v = elem.attr(n); // relay on $.fn.attr, it makes some filtering and checks
                if (v != undefined && v !== false)
                    attr[n] = v
                attr_temp += n + '="' + v + '"  ';
                //alert(attr_temp)
                //alert(n+':'+v);
            }) //$.each(elem.get(0).attributes, function(v,n) { 
    } //if(elem.length) {
    //  var temp_elem = $('<'+element.get(0).tagName+' name="'+name+'" id="'+elemid+'" multiple="multiple" class="' + element.get(0).className + ' hidden"    '+ GetAttributes +' >').data('cache', {});
  
	attr_temp = trim_space(attr_temp);
	//attr_temp = StingTrim(attr_temp);
	//attr_temp = clear_space(attr_temp);
	
	return	attr_temp;
	
	//var R = attr_temp + '   multiple="multiple"  ';
    //return $('<select  ' + R + ' >').data('cache', {});
    //return element.get(0).tagName + ' name="' + name + '" id="' + elemid + '" multiple="multiple" class="' + element.get(0).className + ' hidden"  ' + attr_temp;
    ////return $('<'+ R +' >').data('cache', {});
	
	
}//function GetAttributes_object(_object) 
/*  ################  GetAttributes_object  ################  */


// FromObjectOrString = MergeDataObjectJson(FromObjectOrString = {} , ToObject = {});
function MergeDataObjectJson(FromObjectOrString , ToObject) 
{
	var StoreFromObjectOrString = {} , StoreToObject = {} , SetStore = false;
	
	//if(is_undefined(Sfrom) || is_undefined(Sto))
		
	if(!is_undefined(FromObjectOrString) && is_object(FromObjectOrString))
	{
		StoreFromObjectOrString = FromObjectOrString;
		SetStore = true;
		if(!is_undefined(FromObjectOrString) && is_object(FromObjectOrString))
			StoreToObject = ToObject;
	}//if(!is_undefined(FromObjectOrString) && is_object(FromObjectOrString))
	else if(!is_undefined(FromObjectOrString) && is_string(FromObjectOrString) && !is_empty(FromObjectOrString))
	{
		//if(is_string(FromObjectOrString) && !is_empty(FromObjectOrString))
		StoreFromObjectOrString = FromObjectOrString;
		SetStore = true;
		//if(!is_undefined(FromObjectOrString) && is_object(FromObjectOrString))
		//	StoreToObject = ToObject;
	}//else if(!is_undefined(FromObjectOrString) && is_string(FromObjectOrString) && !is_empty(FromObjectOrString))
	if(!SetStore)
	StoreToObject = ToObject;

	if(SetStore)
	{
		//StoreFromObjectOrString = {} , StoreToObject
		if(is_undefined(StoreToObject))
		StoreToObject = {};

		//StoreToObject = {'ssss':'fffffffff'};
		//StoreToObject = angular.copy(StoreToObject);
		//angular.copy(StoreFromObjectOrString, StoreToObject);


		// MergeDataObjectJson(FromObjectOrString , ToObject);
		var JsonData = "";
		if(is_object(StoreFromObjectOrString))
			JsonData = JSON.stringify(StoreFromObjectOrString);
		else if(is_string(StoreFromObjectOrString) && !is_empty(StoreFromObjectOrString))
		{
			//var ArrayString = String_ToArray(StoreFromObjectOrString, ',');
			var ArrayString = String_ToArray(StoreFromObjectOrString, "'");
			//console.log('ThisObject ArrayString' , ArrayString);
			//StoreFromObjectOrString = String_RePlace(StoreFromObjectOrString,Sfrom ="'",Sto='"');
			StoreFromObjectOrString = StoreFromObjectOrString.replace(Sfrom="'",Sto='"');
			if(ArrayString.length  > 0)
			{
				//for (i = 0; i < c.length; i++) 
				for (var index in ArrayString) 
				{
					//var String_index = ArrayString[index];
					//if (!is_empty(String_index)) 
					StoreFromObjectOrString = StoreFromObjectOrString.replace(Sfrom="'",Sto='"');
				} //for (var index in ArrayString)
			}//if(ArrayString.length  > 0)
				
			JsonData = trim_space(StoreFromObjectOrString);
			JsonData = StingTrim(JsonData);
			JsonData = clear_space(JsonData);		
			JsonData = "{" + JsonData + "}";
		}//else if(is_string(StoreFromObjectOrString) && !is_empty(StoreFromObjectOrString))
			
		if(!is_empty(JsonData))
		{
			JsonData = "start." + trim_space(JsonData) + ".end";
			if(Get_Has_Search(JsonData,'start.{{','gi'))
				JsonData = String_RePlace(JsonData,'start.{{','');
			if(Get_Has_Search(JsonData,'}}.end','gi'))
				JsonData = String_RePlace(JsonData,'}}.end','');
			
			if(Get_Has_Search(JsonData,'start.{','gi'))
				JsonData = String_RePlace(JsonData,'start.{','');
			if(Get_Has_Search(JsonData,'}.end','gi'))
				JsonData = String_RePlace(JsonData,'}.end','');
		}//if(!is_empty(JsonData))

		var JsonData2 = "";
		if(is_object(StoreToObject))
			JsonData2 = JSON.stringify(StoreToObject);

		if(!is_empty(JsonData2))
		{
			JsonData2 = "start." + trim_space(JsonData2) + ".end";
			if(Get_Has_Search(JsonData2,'start.{{','gi'))
				JsonData2 = String_RePlace(JsonData2,'start.{{','');
			if(Get_Has_Search(JsonData2,'}}.end','gi'))
				JsonData2 = String_RePlace(JsonData2,'}}.end','');
			
			if(Get_Has_Search(JsonData2,'start.{','gi'))
				JsonData2 = String_RePlace(JsonData2,'start.{','');
			if(Get_Has_Search(JsonData2,'}.end','gi'))
				JsonData2 = String_RePlace(JsonData2,'}.end','');
		}//if(!is_empty(JsonData2))

		if(!is_empty(JsonData2))
		{
			JsonData += "," + JsonData2;
		}
		//console.log(JSON.stringify({ x: 5, y: 6 }));

		if(!is_empty(JsonData))
		{
			var data = "{" + JsonData + "}";
			//json = '{"result":true, "count":42}';
			JsonData = JSON.parse(data);

			//console.log('aqabat data :');
			//console.log(data);

			//JsonData = DataToObjectJson(data);
			//console.log('aqabat JsonData :');
			//console.log(JsonData);


			if(is_object(JsonData))
				StoreToObject = JsonData;	
		}// if(!is_empty(JsonData))
 
	}//if(SetStore)
	 return StoreToObject;
}//function MergeDataObjectJson(FromObjectOrString , ToObject) 



function FixDataJSON(String)
{
	//$set_options = 'set-options="[{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}]"';
	//$set_options = 'set-options="{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}"';
	//$set_options = 'set-options="\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'"';
	/*
	var options_data = {};
	var set_options =  $(this).attr("set-options");
	//console.log("select2 set_options", set_options); 
	if(!is_undefined(set_options))
	{
	console.log("select2 defaults_data", defaults_data); 
	if(!is_empty(set_options))
	{
	//console.log("select2 set_options", set_options); 
	//parseJSON
	if(isJSON(set_options)) 
	options_data =SetDataJSON(set_options);
	}//if(!is_empty(set_options))

	console.log("select2 options_data 1 ", options_data); 
	//this.$elem.data( 'set-options' );
	options_data = $.extend(defaults_data, options_data);
	console.log("select2 options_data 2 ", options_data); 
	}//if(!is_undefined(set_options))
	*/
	if(is_undefined(String) || is_empty(String))
	  return String;
  
    //String = String_RePlace(String,SFrom = " ",STo = ".Space.");
	String = trim_space(String);
	//# String = StingTrim(String);
	//# String = clear_space(String);
	var ArrayString = [];	
	/* 
	//var ArrayString = String_ToArray(String, ',');
	var ArrayString = String_ToArray(String, "'");
	//console.log('ThisObject ArrayString' , ArrayString);
	//String = String_RePlace(String,Sfrom ="'",Sto='"');
	String = String.replace(Sfrom="'",Sto='"');
	if(ArrayString.length  > 0)
	{
		//for (i = 0; i < c.length; i++) 
		for (var index in ArrayString) 
		{
			//var String_index = ArrayString[index];
			//if (!is_empty(String_index)) 
			String = String.replace(Sfrom="'",Sto='"');
		} //for (var index in ArrayString)
	}//if(ArrayString.length  > 0)
	*/
	var SFrom = "";
	var STo = "";
	
	//SFrom = "'";
	//STo = "MaqabatDS";
	//ArrayString = [];
	//ArrayString = String_ToArray(String, "'");
	/*
	$FullArrayStringReplace = new ["/"=>"slash","\\"=>"backslash","?"=>"question mark","%"=>"percent","*"=>"star",":"=>"colon","|"=>"vertical bar",'"'=>"straight double quote","'"=>"straight single quote","<"=>"less than",">"=>"greater than",">"=>"greater than","."=>"dot",","=>"comma",";"=>"semicolon","="=>"equals sign"
		,"‘"=>"opening single quote"
		,"’"=>"closing single quote"
		,"“"=>"opening double quote"
		,"”"=>"closing double quote"
		,"("=>"left parenthesis"
		,")"=>"right parenthesis"
		,"%"=>"percent"
		,"!"=>"exclamation mark"
		,"["=>"left square bracket"
		,"]"=>"right square bracket"
		,"^"=>"circumflex OR caret"
		,"{"=>"left curly bracket"
		,"}"=>"right curly bracket"
		,"|"=>"vertical bar"
		,"~"=>"tilde"
		//,"="=>"equals"
		//,"="=>"equals"
		//,"="=>"equals"
		," "=>"space","_"=>"underscore"];
	 */
	String = "MaqabatStart." + trim_space(String)+ ".MaqabatEnd";
	String = String_RePlace(String,SFrom = "MaqabatStart.[{",STo = "MaqabatStart.SquareCurlyBracket");
	String = String_RePlace(String,SFrom = "}].MaqabatEnd",STo = "SquareCurlyBracket.MaqabatEnd");
	
	String = String_RePlace(String,SFrom = "MaqabatStart.{",STo = "MaqabatStart.CurlyBracket");
	String = String_RePlace(String,SFrom = "}.MaqabatEnd",STo = "CurlyBracket.MaqabatEnd");
	 
	String = String_RePlace(String,SFrom = "'",STo = "MaqabatDS");
	String = String_RePlace(String,SFrom = ":",STo = "MaqabatEQS");
	String = String_RePlace(String,SFrom = ",",STo = "MaqabatComma");
	//MaqabatDSMaqabatEQS
	//MaqabatEQSMaqabatDS
	
	//MaqabatDSMaqabatComma
	//MaqabatCommaMaqabatDS
	
	//MaqabatDS	
	//MaqabatEQS
	
	//String = String_RePlace(String,SFrom = "MaqabatDSMaqabatEQS",STo = '"MaqabatEQS');
	//String = String_RePlace(String,SFrom = "MaqabatEQSMaqabatDS",STo = 'MaqabatEQS"');
	 
	String = String_RePlace(String,SFrom = "MaqabatStart.SquareCurlyBracketMaqabatDS",STo = '[{"');
	String = String_RePlace(String,SFrom = "MaqabatDSSquareCurlyBracket.MaqabatEnd",STo = '"}]');
	
	String = String_RePlace(String,SFrom = "MaqabatStart.SquareCurlyBracket",STo = '[{');
	String = String_RePlace(String,SFrom = "SquareCurlyBracket.MaqabatEnd",STo = '}]');
	
	String = String_RePlace(String,SFrom = "MaqabatStart.CurlyBracketMaqabatDS",STo = '{"');
	String = String_RePlace(String,SFrom = "MaqabatDSCurlyBracket.MaqabatEnd",STo = '"}');
	
	String = String_RePlace(String,SFrom = "MaqabatStart.CurlyBracket",STo = '{');
	String = String_RePlace(String,SFrom = "CurlyBracket.MaqabatEnd",STo = '}');
	
	String = String_RePlace(String,SFrom = "MaqabatDSMaqabatEQS",STo = '"MaqabatEQS');
	String = String_RePlace(String,SFrom = "MaqabatEQSMaqabatDS",STo = 'MaqabatEQS"');
	
	String = String_RePlace(String,SFrom = "MaqabatDSMaqabatComma",STo = '"MaqabatComma');
	String = String_RePlace(String,SFrom = "MaqabatCommaMaqabatDS",STo = 'MaqabatComma"');
	
	String = String_RePlace(String,SFrom = "MaqabatStart.",STo = "");
	String = "MaqabatStart." + trim_space(String)+ ".MaqabatEnd";
	String = String_RePlace(String,SFrom = "MaqabatStart.MaqabatDS",STo = '"');
	String = String_RePlace(String,SFrom = "MaqabatDS.MaqabatEnd",STo = '"');
	
	//if(Get_Has_Search(String,'MaqabatDS','gi'))	
	String = String_RePlace(String,SFrom = "MaqabatDS",STo = "'");
	//if(Get_Has_Search(String,'MaqabatEQS','gi'))	
	String = String_RePlace(String,SFrom = "MaqabatEQS",STo = ":");		
	//if(Get_Has_Search(String,'MaqabatComma','gi'))	
	String = String_RePlace(String,SFrom = "MaqabatComma",STo = ","); 
	
	String = String_RePlace(String,SFrom = "MaqabatStart.",STo = "");
	String = String_RePlace(String,SFrom = ".MaqabatEnd",STo = "");
	String = String_RePlace(String,SFrom = ".SquareCurlyBracket",STo = "");
	String = String_RePlace(String,SFrom = ".CurlyBracket",STo = "");
	
	
	if(is_string(String) && !is_empty(String))
	{
		//console.log("FixDataJSON is_string !is_empty ", String);
		JsonData = "MaqabatStart." + trim_space(String)+ ".MaqabatEnd";
		JsonData = String_RePlace(JsonData,SFrom = "MaqabatStart.[{",STo = "MaqabatStart.SquareCurlyBracket");
		JsonData = String_RePlace(JsonData,SFrom = "}].MaqabatEnd",STo = "SquareCurlyBracket.MaqabatEnd");
		JsonData = String_RePlace(JsonData,SFrom = "MaqabatStart.{",STo = "MaqabatStart.CurlyBracket");
		JsonData = String_RePlace(JsonData,SFrom = "}.MaqabatEnd",STo = "CurlyBracket.MaqabatEnd");
		if(Get_Has_Search(JsonData,'MaqabatStart.SquareCurlyBracket','gi'))
		{
			//JsonData = JSON.parse(String);
			if(!Get_Has_Search(JsonData,'SquareCurlyBracket.MaqabatEnd','gi'))
			{
				//if(!Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
				//console.log("  !SquareCurlyBracket.MaqabatEnd", String);
				if(!Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
				String = String+"}]";
				else if(Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
				String = String+"]";
				//console.log("  !SquareCurlyBracket.MaqabatEnd", String);
			}//if(!Get_Has_Search(JsonData,'SquareCurlyBracket.MaqabatEnd','gi'))
		}//if(Get_Has_Search(JsonData,'MaqabatStart.SquareCurlyBracket','gi'))
		else if(Get_Has_Search(JsonData,'SquareCurlyBracket.MaqabatEnd','gi'))
		{
			//JsonData = JSON.parse(String);
			if(!Get_Has_Search(JsonData,'MaqabatStart.SquareCurlyBracket','gi'))
			{
				//if(!Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
				//console.log("  !SquareMaqabatStart.CurlyBracket", String);
				if(!Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
				String = "}]"+String;
				else if(Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
				String = "]"+String;
				//console.log("  !SquareMaqabatStart.CurlyBracket", String);
			}//if(!Get_Has_Search(JsonData,'MaqabatStart.SquareCurlyBracket','gi'))
			
		}//if(Get_Has_Search(JsonData,'SquareCurlyBracket.MaqabatEnd','gi'))	
		else if(Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
		{
			//if(!Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
			//console.log("  !SquareCurlyBracket.MaqabatEnd", String);
			if(!Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
			String = String+"{";
		}//if(Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
		else if(Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
		{
			//if(!Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
			//console.log("  !SquareMaqabatStart.CurlyBracket", String);
			if(!Get_Has_Search(JsonData,'MaqabatStart.CurlyBracket','gi'))
			String = "{"+String; 
		}//if(Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
			
		else //if(Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
		{
			String = "{"+String+"}";
		}//if(Get_Has_Search(JsonData,'CurlyBracket.MaqabatEnd','gi'))
		//console.log("FixDataJSON is_string !is_empty ", String);
	 
		try
		{
			//var json = $.parseJSON(String);
			if(typeof jQuery.parseJSON != "undefined" && typeof jQuery.parseJSON == 'function')
			var json  = jQuery.parseJSON(String);
			else
			var json  =  JSON.parse(String);
			if(is_object(json))
			String = json;
		}
		catch(err){} 
		
		//console.log("FixDataJSON is_string !is_empty ", String);
		//if(is_object(String))
		if(!is_object(String) && is_string(String) && !is_empty(String))
		{
			//String = MergeDataObjectJson(FromObjectOrString = String , ToObject = {});
			String = MergeDataObjectJson(FromObjectOrString = String , ToObject = {});
			//console.log("FixDataJSON is_string !is_empty ", String);
			//String = JSON.stringify(String);
		}//if(!is_object(String) && is_string(String) && !is_empty(String))
		 
		
		 
	}//if(is_string(String) && !is_empty(String))
	if(is_object(String))
	{
		//console.log("FixDataJSON is_object", String);
		String = JSON.stringify(String);
	}
   //if(is_empty(String))
   return String;
   
}//function FixDataJSON(String)
function isJSON(String) //is_string_json //is_object_json
{
	//$set_options = 'set-options="[{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}]"';
	//$set_options = 'set-options="{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}"';
	//$set_options = 'set-options="\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'"';
	/*
	var options_data = {};
	var set_options =  $(this).attr("set-options");
	//console.log("select2 set_options", set_options); 
	if(!is_undefined(set_options))
	{
	console.log("select2 defaults_data", defaults_data); 
	if(!is_empty(set_options))
	{
	//console.log("select2 set_options", set_options); 
	//parseJSON
	if(isJSON(set_options)) 
	options_data =SetDataJSON(set_options);
	}//if(!is_empty(set_options))

	console.log("select2 options_data 1 ", options_data); 
	//this.$elem.data( 'set-options' );
	options_data = $.extend(defaults_data, options_data);
	console.log("select2 options_data 2 ", options_data); 
	}//if(!is_undefined(set_options))
	*/
	//return isJSON(String);
   var IS_JSON = true;
   //if(is_undefined(String) || !is_string(String) || is_empty(String))
   if(is_undefined(String) || is_empty(String))
	   return false;
   
 
	String = FixDataJSON(String);
   if(is_empty(String))
	   return false;
   //console.log("isJSON String", String);
   try
   {
		//var json = $.parseJSON(String);
		if(typeof jQuery.parseJSON != "undefined" && typeof jQuery.parseJSON == 'function')
		var json  = jQuery.parseJSON(String);
		else
		var json  =  JSON.parse(String);
		//console.log("isJSON json", json);
   }
   catch(err)
   {
		   IS_JSON = false;
   }   
   
   return IS_JSON;
}//function isJSON(String)

function SetDataJSON(String) 
{
	//$set_options = 'set-options="[{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}]"';
	//$set_options = 'set-options="{\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'}"';
	//$set_options = 'set-options="\'containerCssClass\':\'select2--small\' , \'selectionCssClass\':\'select2--small\'"';
	/*
	var options_data = {};
	var set_options =  $(this).attr("set-options");
	//console.log("select2 set_options", set_options); 
	if(!is_undefined(set_options))
	{
	console.log("select2 defaults_data", defaults_data); 
	if(!is_empty(set_options))
	{
	//console.log("select2 set_options", set_options); 
	//parseJSON
	if(isJSON(set_options)) 
	options_data =SetDataJSON(set_options);
	}//if(!is_empty(set_options))

	console.log("select2 options_data 1 ", options_data); 
	//this.$elem.data( 'set-options' );
	options_data = $.extend(defaults_data, options_data);
	console.log("select2 options_data 2 ", options_data); 
	}//if(!is_undefined(set_options))
	*/
   
   //var obj = jQuery.parseJSON( '{ "name": "John" }' );
	
	//RatingLiveDoArray = localStorage.getItem('RatingLiveDo') ? JSON.parse(localStorage.getItem('RatingLiveDo')) : [];

	//localStorage.setItem('RatingLiveDo', JSON.stringify(RatingLiveDoArray));
	//RatingLiveDoData = JSON.parse(localStorage.getItem('RatingLiveDo'));
	////console.log('RatingLiveDoData' , RatingLiveDoData);
	
	//console.log(" typeof jQuery.parseJSON", typeof jQuery.parseJSON); 
	var obj = String;
	if(isJSON(String)) 
	{
		String = FixDataJSON(String);
		//if(typeof jQuery.parseJSON != "undefined" && typeof jQuery.parseJSON == 'function')
		//obj = jQuery.parseJSON(String);
		//else
		//obj =  JSON.parse(String);
		var json  = null;
		try
		{
		//var json = $.parseJSON(DataString);
		if(typeof jQuery.parseJSON != "undefined" && typeof jQuery.parseJSON == 'function')
		json  = jQuery.parseJSON(String);
		else
		json  =  JSON.parse(String);
		//console.log("isJSON json", json);
		}catch(err){} 
		if(is_object(json) && json && !jQuery.isEmptyObject(json))	
		{
			//$.each( json, function(n, v){});
			obj = json;
		}//if(is_object(json) && json && !jQuery.isEmptyObject(json))			
	}//if(isJSON(String)) 
	return obj;
}//function SetDataJSON(String) 
	


if (typeof GetObjectAngularLength == "undefined" || typeof GetObjectAngularLength !='function')
{
	function GetObjectAngularLength(Object)
	{
		var count = 0;
		if(!angular.isArray(Object) && !angular.isObject(Object))
			return count;
		//console.log(Object);
		  for(var i in Object){
			 // console.log(Object[i]);
			if(angular.isArray(Object[i])) 
			{
				//console.log(Object[i].length);
				//console.log(Object);
				count++;
			}else			
			count++;
		  }
		 return count;
	}//function GetObjectLength(Object)
}//if (typeof GetObjectAngularLength == "undefined" || typeof GetObjectAngularLength !='function')
	
if (typeof GetObjectLength == "undefined" || typeof GetObjectLength !='function')
{
	function GetObjectLength(Object)
	{
		var count = 0;
		if(!is_array(Object) && !is_object(Object))
			return count;
		//Object.length
		//console.log(Object);
		  for(var i in Object){
			 // console.log(Object[i]);
			 //if(angular.isArray(Object[i])) 
			if(is_array(Object[i])) 
			{
				//console.log(Object[i].length);
				//console.log(Object);
				count++;
			}else			
			count++;
		  }
		 return count;
	}//function GetObjectLength(Object)
}//if (typeof GetObjectLength == "undefined" || typeof GetObjectLength !='function')

if (typeof forEachObject == "undefined" || typeof forEachObject !='function')
{
	function forEachObject(Object)
	{
		if(is_array(Object) && GetObjectLength(Object) > 0)
		{
			for(var i in Object)
			{
			 // console.log(Object[i]);
			 //if(angular.isArray(Object[i])) 
				if((is_object(Object[i]) || is_array(Object[i])))//&& GetObjectLength(Object[i]) > 0
				{
					Object[i] = forEachObject(Object[i]); 
				}
				else if(!is_undefined(Object[i]))// && is_string(Object[i])
					Object[i] = trim_space(Object[i]);
				
		    }//for(var i in Object)
		}//if(is_array(Object) && GetObjectLength(Object) > 0)
		else if(is_object(Object) && GetObjectLength(Object) > 0)
		{
			
			//ItemData.forEach(items => {
			//  //log('ItemData.forEach items: ', items);
			//  //liMaker(items);
			//  items.forEach(RowItem => {
			//		//log('ItemData.forEach RowItem: ', RowItem);
			//		
			//		//var item = "name:" +RowItem.name + " , value:" +RowItem.value;
			//		//liMaker(item);
			//		liMaker(RowItem);
			//  });//ItemData.forEach(RowItem => {
			//});//ItemData.forEach(items => {
			
			for(var i in Object)
			{
			 // console.log(Object[i]);
			 //if(angular.isArray(Object[i])) 
				if((is_object(Object[i]) || is_array(Object[i])))// && GetObjectLength(Object[i]) > 0 
				{
					Object[i] = forEachObject(Object[i]); 
				}
				else if(!is_undefined(Object[i]))// && is_string(Object[i])
					Object[i] = trim_space(Object[i]);
				
		    }//for(var i in Object)
		}//else if(is_object(Object) && GetObjectLength(Object) > 0)
	
		return Object;	
	}//function forEachObject(Object)
}//if (typeof forEachObject == "undefined" || typeof forEachObject !='function')

if (typeof MergeDataObject == "undefined" || typeof MergeDataObject !='function')
{
	//ToObject = MergeDataObject(FromObject , ToObject , false);
	function MergeDataObject(FromObject,ToObject , AllowRepetition)
	{
		let StoreFromObject;//  , StoreToObject = {} , SetStore = false;
		//let SetJsonData;
		//if(Get_Index_Search(Sting,'[\?]'))
		//var GetIndex = Get_Index_Search(Sting,'[\?]' , true);
	
		if(is_undefined(FromObject) || !is_object(FromObject))
		FromObject = [];
		if(is_undefined(ToObject) || !is_object(ToObject))
		ToObject = [];
		if(is_undefined(AllowRepetition) || !is_boolean(AllowRepetition))
		AllowRepetition = false; 
	 
		//console.log('MergeDataObject GetObjectLength(FromObject):' , GetObjectLength(FromObject));
		//console.log('MergeDataObject GetObjectLength(ToObject):' , GetObjectLength(ToObject)); 
		
		//itemsFormArray[IndexForm] = localStorage.getItem(localStorageNameForm) ? JSON.parse(localStorage.getItem(localStorageNameForm)) : [];
		//localStorage.setItem(localStorageNameForm, JSON.stringify(itemsFormArray[IndexForm]));
		//var ItemData = JSON.parse(localStorage.getItem(localStorageNameForm));
		
		if(GetObjectLength(ToObject) > 0)
		ToObject = forEachObject(ToObject);
	
		if(GetObjectLength(FromObject) > 0)
		FromObject = forEachObject(FromObject);
	
		var GetDataStore = false;
		if(!GetDataStore && GetObjectLength(FromObject) > 0 && GetObjectLength(ToObject) == 0)
		{
			ToObject.push(FromObject);
			if(GetObjectLength(ToObject) > 0)
			{
				//ToObject = forEachObject(ToObject);
				GetDataStore = true;
			}
			//GetDataStore = true;
		}//if(!GetDataStore && GetObjectLength(FromObject) > 0 && GetObjectLength(ToObject) == 0)
		if(!GetDataStore && GetObjectLength(FromObject) > 0)
		{
			//StoreFromObject = JSON.stringify(FromObject);
			//StoreFromObject = JSON.parse(StoreFromObject);
			
			for(var i in FromObject)
			{
			 
				if((is_object(FromObject[i]) || is_array(FromObject[i])))//&& GetObjectLength(FromObject[i]) > 0
				{
					//FromObject[i] = forEachObject(FromObject[i]); 
					
					for(var i2 in ToObject)
					{
						if((is_object(ToObject[i2]) || is_array(ToObject[i2])))
						{
							//ToObject[i2] = MergeDataObject(ToObject[i],ToObject[i2] , AllowRepetition);
							var ToObj = MergeDataObject(ToObject[i],ToObject[i2] , AllowRepetition);
							ToObject.push(ToObj);
						}
					}//for(var i2 in ToObject)
				}//if((is_object(FromObject[i]) || is_array(FromObject[i])))
				//else if(!is_undefined(FromObject[i]))// && is_string(FromObject[i])
				//	ToObject[i] = FromObject[i];
				////	FromObject[i] = trim_space(FromObject[i]);
				
		    }//for(var i in FromObject)
			
		   if(GetObjectLength(ToObject) > 0)
			ToObject = forEachObject(ToObject);
		}//if(!GetDataStore && GetObjectLength(FromObject) > 0)

		// RowJsonData.key = trim_space(RowJsonData.key);
		//if(!In_Array(RowJsonData.Data,Val))
		//RowJsonData.Data.push(trim_space(Val));
		
		
		//if(GetObjectLength(ToObject) > 0)
		//ToObject = forEachObject(ToObject);
	
	
		 
		//$.each( ToObject , function(key, items){
		 
		//});//$.each( ToObject , function(key, items){
		 
		//# console.log('MergeDataObject GetObjectLength(FromObject):' , GetObjectLength(FromObject));
		//# console.log('MergeDataObject GetObjectLength(ToObject):' , GetObjectLength(ToObject)); 	
		/* 
		var GetDataStore = false;
		$.each( ToObject , function(key, items){
			console.log('MergeDataObject ToObject key:' , key);
			console.log('MergeDataObject ToObject items:' , items);
			if(!is_undefined(items) && is_object(items))
			{
				
			}//if(!is_undefined(items) && is_object(items))
				
		});//$.each( ToObject , function(key, items){
		if(!GetDataStore)
		{
			$.each( FromObject , function(key, items){
				console.log('MergeDataObject FromObject key:' , key);
				console.log('MergeDataObject FromObject items:' , items);
				if(!is_undefined(items) && is_object(items))
				{
					
				}//if(!is_undefined(items) && is_object(items))
					
			});//$.each( FromObject , function(key, items){
		}//if(!GetDataStore)
		*/

			
		/*
		for (var Index in submitItemArray)
			{
				var row = submitItemArray[Index];
				////var JsonData = {"key" : localStorageNameForm , "Data": []};
				//if(!is_undefined(_name) && !is_empty(_name) && !is_undefined(Val) && !is_empty(Val))
				//	if(row)
				
			}//for (var Index in submitItemArray)
				*/
	
		/*
		if(!is_empty(Sting))
		{
			Sting = trim_space(Sting);
			//Sting = clear_space(Sting);
			//Sting = trim_space1(Sting);
			//Sting = trim_space2(Sting);
			//Sting = trim_space3(Sting);
		}//if(!is_empty(Sting))
		return Sting;
   
		*/
		
		return ToObject;
		
	}//function MergeDataObject(FromObject,ToObject , AllowRepetition)
}//if (typeof MergeDataObject == "undefined" || typeof MergeDataObject !='function')
 

	//var x2 = _Array_Items_Barcode_UnChecked.indexOf(barcode_id);
	/*
	User_Online_Array.splice(0,User_Online_Array.length);

	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2,2);
	The result of fruits will be:

	Banana,Orange
	-------------------------------
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi")
	-------------------------
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var a = fruits.indexOf("Apple");//2
	*/	
function String_ToArray(s,prg) {
	if(is_string(s) && !is_undefined(prg))
	{
		A =  s.split(prg);
		if(is_array(A))
			return A;
	}
	return s;
}//function String_ToArray(s,p) {
function RemoveVal_In_Array(array,val)
{
	if(In_Array(array,val))
	{
		array.splice(array.indexOf(val),1);
	}
	return array;
}//function RemoveVal_In_Array(array,val)	
function Clear_Array(array)
{
	return array.splice(0,array.length);
}//function Clear_Array(array)

/*
 Array_push(_Array_Get_Val , val_input);
					 console.log('val_input :'+_Array_Get_Val.length);
*/
function Array_push(my_array,val)
{
	//return my_array.push(val);
	  my_array.push(val);
}//function Array_push(array,val)

function In_Array(array,val)
{
	if(!is_array(array))
		return false;
	if(array.indexOf(val) < 0)
		return false;
	return true;
	/*
	if(array.indexOf(val) < 0)
		array.push(val);
	//console.log('indexOf :'+val.indexOf(val));
	if(array.indexOf(val) >= 0)
		array.splice(array.indexOf(val),1);
	*/	
	/*
	$return = false;
	for($i = 0 ; $i < array.length ; $i++)
	{
		if(array[$i] == val)
		{
			$return = true;
			break;
		}//if(array[$i] == val)
	}//for($i = 0 ; $i < array.length ; $i++)
	return $return;
	*/
}//function In_Array(array,val)

function TestKeyInArray(arrayData, keyData) 
{
	//alert('TestKeyInArray');
	if(!is_undefined(arrayData))
	{
		//alert('TestKeyInArray !is_undefined');
		if(is_array(arrayData))
		{
			//alert('TestKeyInArray is_array');
			//if(!is_undefined(arrayData[keyData]))
			//alert('TestKeyInArray !is_undefined[keyData]');
			//if(!is_undefined(arrayData.keyData))
			//alert('TestKeyInArray !is_undefined.keyData');
			//alert(" typeof keyData =" + typeof keyData +" , keyData =" + keyData);
				//console.log('TestKeyInArray arrayData');
				//console.log(arrayData);
			if(!is_undefined(arrayData[keyData]))
				return true;
		}//f(is_array(arrayData))
		
 
	}//if(!is_undefined(arrayData))
	return false;
	
	//angular.forEach($scope.subjects, function(value, key) {
	//    $scope.subjects[key].teacherId = JSON.parse($scope.subjects[key].teacherId);
   // });
}//function TestKeyInArray(arrayData, keyData) 
	
function String_RePlace(s,Sfrom,Sto) {
	//if(is_empty(Sto))
	if(is_undefined(Sfrom) || is_undefined(Sto))
		return s;
	
	//s = trim_space(s);
	//s = StingTrim(s);
	//s = clear_space(s);
	
	//s.replace("PT","");
	//alert(Sfrom)
	//if (Get_Has_Search(_Url, '&', 'gi'))
	var rs = s;	
	//var rs = s.replace(Sfrom,Sto);
	var _A = String_ToArray(rs,Sfrom);
	if(_A.length  > 0)
	{
		for (var i in _A)
		{
			rs = rs.replace(Sfrom,Sto);
		}//for (var i in _A)
	}//if(_A.length  > 0)
	return rs;
}//function String_RePlace(s,Sfrom,Sto) {




	
if (typeof StingTrim == "undefined" || typeof StingTrim !='function')
{
	function StingTrim(Sting) 
	{
		//if(Get_Index_Search(Sting,'[\?]'))
		//var GetIndex = Get_Index_Search(Sting,'[\?]' , true);
		if(is_undefined(Sting))
		Sting = "";
		 
		
		if(!is_empty(Sting))
		{
			Sting = trim_space(Sting);
			//Sting = clear_space(Sting);
			//Sting = trim_space1(Sting);
			//Sting = trim_space2(Sting);
			//Sting = trim_space3(Sting);
		}//if(!is_empty(Sting))
	   return Sting;
	}//function StingTrim(Sting) 
}//if (typeof StingTrim == "undefined" || typeof StingTrim !='function')


 
if (typeof ClearRegexStingSearch == "undefined" || typeof ClearRegexStingSearch != 'function') {
    function ClearRegexStingSearch(RegexSting) 
	{
		//RegexSting = StingTrim(RegexSting);
        ////RegexSting = trim_space(RegexSting);
		////RegexSting = trim_space(RegexSting);
		
		//RegexSting = String_RePlace(RegexSting,Sfrom,Sto);
		var StartRegexSting = 'StartMaqabat';
		var EndRegexSting = 'EndMaqabat';
		RegexSting = StartRegexSting + RegexSting + EndRegexSting;
		RegexSting =RegexSting.replace(StartRegexSting+'[','');
		RegexSting =RegexSting.replace(']'+EndRegexSting,'');
		
		RegexSting = RegexSting.replace('?',StartRegexSting+'?');
	 
		RegexSting =RegexSting.replace(StartRegexSting+'?',StartRegexSting+'\?');
		RegexSting =RegexSting.replace('\\'+StartRegexSting+'\?','\?');
		
		//RegexSting = RegexSting.replace('\?','\?');
		//RegexSting = RegexSting.replace("\?",'\\?');
		//RegexSting = String_RePlace(RegexSting,'?','\?');
		
		//RegexSting =RegexSting.replace('\?','');
		RegexSting =RegexSting.replace(StartRegexSting,'');
		RegexSting =RegexSting.replace(StartRegexSting,'');
		
		//console.log('ClearRegexStingSearch RegexSting' , RegexSting);
		//if((Get_Has_Search(Sting,'\\[eq:','gi')))
		return RegexSting;	
    }//function ClearRegexStingSearch(RegexSting) 
} //if (typeof ClearRegexStingSearch == "undefined" || typeof ClearRegexStingSearch !='function'){
 
if (typeof Get_Index_Search == "undefined" || typeof Get_Index_Search !='function')
{
	function Get_Index_Search(Sting, Sting_Search , GetIndex , CleaRegexSting) 
	{
		//if(Get_Index_Search(Sting,Sting_Search, false , true))
		//if(Get_Index_Search(Sting,'[\?]'))
		//var GetIndex = Get_Index_Search(Sting,'[\?]' , true);
		if(is_undefined(GetIndex))
		GetIndex = false;
		if(is_undefined(CleaRegexSting))
		CleaRegexSting = false;
		if(is_undefined(Sting) || is_undefined(Sting_Search))
		{
			if(!GetIndex)
			return false;
			return -1;
		}
		
		Sting = trim_space(Sting);
		Sting_Search = trim_space(Sting_Search);
		//Sting = clear_space(Sting);
		//Sting = trim_space1(Sting);
		//Sting = trim_space2(Sting);
		//Sting = trim_space3(Sting);
		if(!is_empty(Sting) && !is_empty(Sting_Search))
		{
			if(CleaRegexSting)
			Sting_Search = ClearRegexStingSearch(Sting_Search);
			//if((Get_Has_Search(Sting,'\\[eq:','gi')))
			if(GetIndex)
			return Sting.indexOf(Sting_Search);
			else if(Sting.indexOf(Sting_Search) >= 0)
			return true;
			//if(Sting.indexOf(Sting_Search) >= 0 )
		}//if(!is_empty(Sting) && !is_empty(Sting_Search)) 
		
	   if(!GetIndex)
	   return false;
	   return -1;
	}//function Get_Index_Search(Sting, Sting_Search , GetIndex , CleaRegexSting)
	 
}//if (typeof Get_Index_Search == "undefined" || typeof Get_Index_Search !='function')
	

	


if (typeof Get_Has_Index_Search == "undefined" || typeof Get_Has_Index_Search !='function')
{
//if(Get_Has_Index_Search(Sting,'v=','gi'))
function Get_Has_Index_Search(Sting, Sting_Search, MyRegex) 
{
	//if (Get_Has_Search(StringAction, '[\?]', 'gi'))
		
	//if(Get_Index_Search(Sting,'[\?]'))
		//var GetIndex = Get_Index_Search(Sting,'[\?]' , true);
	var HasSearch = false;
	var StingSearchOld = Sting_Search;
	//Get_Has_Index_Search(StringAction, '[\?]', 'gi'))
	
	//var ClearRegexSting = '\?';
	//console.log('Get_Has_Index_Search ClearRegexSting 1 ' , ClearRegexSting);
	//ClearRegexSting = ClearRegexStingSearch(ClearRegexSting);
	//console.log('Get_Has_Index_Search ClearRegexSting 2' , ClearRegexSting);
	
	
	////Sting_Search.replace('[','\[');
	//console.log('Get_Has_Index_Search Sting '+"\t" , Sting);
	//console.log('Get_Has_Index_Search Sting_Search 1 ' , Sting_Search);
	//console.log('Get_Has_Index_Search MyRegex' , MyRegex);
	
	if(!is_empty(Sting_Search))
		Sting_Search = ClearRegexStingSearch(Sting_Search);
	//console.log('Get_Has_Index_Search Sting_Search 2 ' , Sting_Search);
	//if(Get_Index_Search(Sting,Sting_Search, false , true))
	if(Get_Index_Search(Sting,Sting_Search))	
    HasSearch = true;
	//console.log('Get_Has_Index_Search HasSearch 1' , HasSearch);
	if(!HasSearch && Get_Has_Search(Sting,StingSearchOld, MyRegex))
	{
	   HasSearch = true;
	  // console.log('Get_Has_Index_Search HasSearch 2' , HasSearch);
	}//if(!HasSearch && Get_Has_Index_Search(Sting,StingSearchOld, MyRegex))
	
    return HasSearch;
} //function Get_Has_Index_Search(Sting,Sting_Search,MyRegex){
}//if (typeof Get_Has_Index_Search == "undefined" || typeof Get_Has_Index_Search !='function')	
	

if (typeof Get_Has_Search == "undefined" || typeof Get_Has_Search !='function')
{
	//if(Get_Has_Search(Sting,'v=','gi'))
	function Get_Has_Search(Sting, Sting_Search, MyRegex) {
		if (typeof MyRegex == "undefined" && typeof MyRegex != '')
			MyRegex = 'gi';
		if (typeof Sting == "undefined" || typeof Sting_Search == "undefined")
			return false;
		//alert(Sting);
		var regex = new RegExp(Sting_Search, MyRegex);
		if (typeof Sting.search === 'function') {
			if (Sting.search(regex) != -1) {
				//Sting = Sting.replace(text_search,'');
				return true;
			} //if (Sting.search(regex) != -1){ 
		} //if (typeof Sting.search === 'function'){
		if (regex.test(Sting)) {
			//Sting = Url_Video.replace(text_search,'');
			return true;
		} //if (regex.test(Sting)){
		return false;
	} //function Get_Has_Search(Sting,Sting_Search,MyRegex){
}//if (typeof Get_Has_Search == "undefined" || typeof Get_Has_Search !='function')


	
/*
        //if(Get_Has_Search(Url_Video,text_search,'gi'))
        $duration2 = $duration.replace("PT", "");
        $duration2 = $duration2.replace("H", ":");
        $duration2 = $duration2.replace("M", ":");
        $duration2 = $duration2.replace("S", "");
        $DurationArr = $duration2.split(':');

		
		     var text_search = 'www.youtube.com';
                if (Get_Has_Search(Url_Video, text_search, 'gi')) {
                    //var video_id = unescape(Url_Video.substring(0,(Url_Video.lastIndexOf("?")) + 1));
                    var _Url = unescape(Url_Video.substring((Url_Video.lastIndexOf("?")) + 1), Url_Video.length);
                    if (Get_Has_Search(_Url, 'v=', 'gi')) {
                        _Url = _Url.replace('v=', '');
                        if (Get_Has_Search(_Url, '&', 'gi'))
                            _Url = unescape(_Url.substring(0, _Url.indexOf("&")));
                        var video_id = _Url;
                        if (typeof Array_Data_Youtube_Api[video_id] == 'undefined') {
                            //alert(video_id);
                            GetVideoInfo_One_youtube_api(video_id);
                            //Array_Data_Youtube_Api[video_id] = {};
                        } //if (typeof Array_Data_Youtube_Api[video_id]=='undefined') {
                        else
                            ShowVideoInfo_One_youtube_api(video_id);
                    } //if(Get_Has_Search(_Url,'v=','gi')){
                    else {
                        $('#data_video_youtube_api').find('.api_data_loading_msseg').html($('#data_video_youtube_api').find('.api_data_loading_msseg_error.error2').html()).show();
                        $('#data_video_youtube_api #api_data_loading').removeAttr('disabled').removeClass("disabled");
                    }
                    //$('#data_video_youtube_api').parents('form').find(':input[type=submit]').removeAttr('disabled').removeClass("disabled");
                    //$('#data_video_youtube_api').find('#data_video_youtube_home').show();
                } //if(Get_Has_Search(Url_Video,text_search,'gi')){
		
*/

/*##############       ##############*/
function selectTexLine(TextareaObject,startPos,endPos) 
{
	// do selection
	// Chrome / Firefox
	if(typeof(TextareaObject.selectionStart) != "undefined") {
		TextareaObject.focus();
		TextareaObject.selectionStart = startPos;
		TextareaObject.selectionEnd = endPos;
		return true;
	}
	// IE
	 if (document.selection && document.selection.createRange) {
		TextareaObject.focus();
		TextareaObject.select();
		var range = document.selection.createRange();
		range.collapse(true);
		range.moveEnd("character", endPos);
		range.moveStart("character", startPos);
		range.select();
		return true;
	}
	return false;
}//function selectTexLine(TextareaObject,startPos,endPos) 
/*##############       ##############*/
/*##############       ##############*/
function selectTextareaLine(TextareaObject, selectText){
	var lines = TextareaObject.value.split("\n");
	// calculate start/end
	selectText = trim_space(selectText);
	var startPos = 0, endPos = TextareaObject.value.length;
	//var Search_Array = selectTextsplit(",");
	for(var x = 0; x < lines.length; x++) 
	{
		//alert(lines[x])
		s = trim_space(lines[x]);
		if(s == selectText) {
			//alert(lines[x])
			 endPos = (lines[x].length);
			break;
		}
		startPos += (lines[x].length+1);
	}//for(var x = 0; x < lines.length; x++) 
	var endPos = endPos+startPos;
	selectTexLine(TextareaObject,startPos,endPos) 
}//function selectTextareaLine(TextareaObject, selectText){
/*##############       ##############*/

/*##############       ##############*/
function Search_ReplaceTextareaLine(TextareaObject, SelectText){
	var lines =  String_ToArray(TextareaObject.value , '\n');
	var startPos = 0, endPos = TextareaObject.value.length;
	var Search_Array =  String_ToArray(SelectText , ',');
	for(var x = 0; x < lines.length; x++) 
	{
		s = trim_space(lines[x]);
		for(var x2 = 0; x2 < Search_Array.length; x2++) 
		{
			s2 = trim_space(Search_Array[x2]);
			if(s == s2) 
			{
				TextareaObject.value = String_RePlace(TextareaObject.value,s,'');
				//break;
			}	
		}//for(var x2 = 0; x2 < Search_Array.length; x2++) 
		startPos += (lines[x].length+1);
	}//for(var x = 0; x < lines.length; x++) 
}//function Search_ReplaceTextareaLine(TextareaObject, SelectText){
/*##############       ##############*/	
	
/*##############       ##############*/	
if (typeof convertNumbers2Arabic0 == "undefined" || typeof convertNumbers2Arabic0 != 'function') 
{
	function convertNumbers2Arabic0(string)
	{
		var newValue="";
		//var string="1234"; // this is your input string
		for (var i=0;i<string.length;i++)
		{
			var ch=string.charCodeAt(i);
			if (ch>=48 && ch<=57)
			{
				// european digit range
				var newChar=ch+1584;
				newValue=newValue+String.fromCharCode(newChar);
			}
			else
				newValue=newValue+String.fromCharCode(ch);
		}
		//alert(newValue);
		return newValue;
	}//function convertNumbers2Arabic0(string)  
}//if (typeof convertNumbers2Arabic0 == "undefined" || typeof convertNumbers2Arabic0 != 'function')
/*##############       ##############*/
/*##############       ##############*/	
if (typeof convertNumbers2Arabic == "undefined" || typeof convertNumbers2Arabic != 'function') 
{
	function convertNumbers2Arabic(string)
	{
		var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
		return string.replace(/[0-9]/g, function(w){
			return id[+w]
		});
	}//function convertNumbers2Arabic(string)  
}//if (typeof convertNumbers2Arabic == "undefined" || typeof convertNumbers2Arabic != 'function')
/*##############       ##############*/
/*##############       ##############*/
//  var string="1234";
//  convertNumbers2Arabic(string); 

if (typeof convertNumbers2English0 == "undefined" || typeof convertNumbers2English0 != 'function') 
{
	function convertNumbers2English0(string)
	{
		return string.replace(/[\u0660-\u0669]/g, function (c) {
			return c.charCodeAt(0) - 0x0660;
		}).replace(/[\u06f0-\u06f9]/g, function (c) {
		   return c.charCodeAt(0) - 0x06f0;
	   });
	}//function convertNumbers2English0(string) 
}//if (typeof convertNumbers2English0 == "undefined" || typeof convertNumbers2English0 != 'function')
/*##############       ##############*/
/*##############       ##############*/
if (typeof convertNumbers2English == "undefined" || typeof convertNumbers2English != 'function') 
{
	function convertNumbers2English(string)
	{
	   return string.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c) {
			return c.charCodeAt(0) & 0xf;
		});
	}//function convertNumbers2English(string)  
}//if (typeof convertNumbers2English == "undefined" || typeof convertNumbers2English != 'function') 
/*##############       ##############*/


/*##############       ##############*/
if (typeof ArabicDigits== "undefined" || typeof ArabicDigits != 'function') 
{
	function ArabicDigits(digits)
	{
		//return convertNumbers2Arabic(digits);
		var newValue="";
		//var digits="1234"; // this is your input string
		for (var i=0;i<digits.length;i++)
		{
			var ch=digits.charCodeAt(i);
			if (ch>=48 && ch<=57)
			{
				// european digit range
				var newChar=ch+1584;
				newValue=newValue+String.fromCharCode(newChar);
			}
			else
				newValue=newValue+String.fromCharCode(ch);
			
		
		}//for (var i=0;i<digits.length;i++)
		//alert(newValue);
		return newValue;
	}//function ArabicDigits(digits)
}//if (typeof ArabicDigits == "undefined" || typeof ArabicDigits != 'function') 
/*##############       ##############*/


/*##############       ##############*/
if (typeof ArabicClock == "undefined" || typeof ArabicClock != 'function') 
{
	function ArabicClock(digits)
	{
		//return convertNumbers2Arabic(digits);
		return ArabicDigits(digits);
	}//function ArabicClock(digits)
}//if (typeof ArabicClock == "undefined" || typeof ArabicClock != 'function') 
/*##############       ##############*/
 /*
//timeConverter(_DateToTimestamp('02/13/2018 23:31:30'));
	function timeConverter(UNIX_timestamp) 
	{   
		//return new Date(s * 1e3).toISOString().slice(-13, -5);
	//var a = new Date(UNIX_timestamp * 1000);
	//var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	//var year = a.getFullYear();
	//var month = months[a.getMonth()];
	//var date = a.getDate();
	//var hour = a.getHours();
	//var min = a.getMinutes();
	//var sec = a.getSeconds();
	//var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	//return time;

	var a = new Date(UNIX_timestamp * 1000);
	var today = new Date();
	var yesterday = new Date(Date.now() - 86400000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	if (a.setHours(0,0,0,0) == today.setHours(0,0,0,0))
	return 'today, ' + hour + ':' + min;
	else if (a.setHours(0,0,0,0) == yesterday.setHours(0,0,0,0))
	return 'yesterday, ' + hour + ':' + min;
	else if (year == today.getFullYear())
	return date + ' ' + month + ', ' + hour + ':' + min;
	else
	return date + ' ' + month + ' ' + year + ', ' + hour + ':' + min;
	}
 */
/*##############       ##############*/
if (typeof _DateToTimestamp == "undefined" || typeof _DateToTimestamp != 'function') 
{
	//alert(_DateToTimestamp('02/13/2018 23:31:30'));//2009-02-13 11:31:30 PM
	//_DateToTimestamp(h+":"+m+":"+s+"  "+month+" / "+daym+" / "+year);//
	function _DateToTimestamp(strDate)
	{
		//data += (new Date).getTime() / 1000;
		var datum = Date.parse(strDate);
		return datum/1000;
	}//function _DateToTimestamp(strDate) 
}//if (typeof _DateToTimestamp == "undefined" || typeof _DateToTimestamp != 'function') 
/*##############       ##############*/

/*##############       ##############*/
if(typeof MyCheckTime == "undefined" || typeof MyCheckTime != 'function')
{	
	function MyCheckTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	} //function MyCheckTime(i) {
}//if(typeof MyCheckTime == "undefined" || typeof MyCheckTime != 'function')
/*##############       ##############*/



/*##############       ##############*/
if(typeof daysinMonthfromInput == "undefined" || typeof daysinMonthfromInput != 'function')
{	
	//console.log('daysinMonthfromInput(7,2029)',daysinMonthfromInput(7,2029));//31
	//console.log('daysinMonthfromInput(2,2029)',daysinMonthfromInput(2,2029));//28
	//console.log('daysinMonthfromInput(2,2028)',daysinMonthfromInput(2,2028));//29


	//console.log('daysinMonthfromInput(7,2009)',daysinMonthfromInput(7,2009));//31
	//console.log('daysinMonthfromInput(2,2009)',daysinMonthfromInput(2,2009));//28
	//console.log('daysinMonthfromInput(2,2008)',daysinMonthfromInput(2,2008));//29
	
	function daysinMonthfromInput(month,year)
	{
		return new Date(year,month,1,-1).getDate();
	}//function daysinMonthfromInput(month,year)
}//if(typeof daysinMonthfromInput == "undefined" || typeof daysinMonthfromInput != 'function')
/*##############       ##############*/


/*##############       ##############*/
if(typeof daysInMonth == "undefined" || typeof daysInMonth != 'function')
{
	//console.log('daysInMonth(7,2029)',daysInMonth(7,2029));//31
	//console.log('daysInMonth(2,2029)',daysInMonth(2,2029));//28
	//console.log('daysInMonth(2,2028)',daysInMonth(2,2028));//29


	//console.log('daysInMonth(7,2009)',daysInMonth(7,2009));//31
	//console.log('daysInMonth(2,2009)',daysInMonth(2,2009));//28
	//console.log('daysInMonth(2,2008)',daysInMonth(2,2008));//29
	//Month is 1 based
	function daysInMonth(month,year) 
	{
	  return new Date(year, month, 0).getDate();
	}//function daysInMonth(month,year) 
}//if(typeof daysInMonth == "undefined" || typeof daysInMonth != 'function')
/*##############       ##############*/



 


/*##############       ##############*/
if (typeof ReplaceArabicCharacter == "undefined" || typeof ReplaceArabicCharacter != 'function') {
    function ReplaceArabicCharacter(String) {
		if (String == '' || String == null) 
		{
			return '';
		}
		/*
		<pair> 
		<search>/ّ|َ|ً|ُ|ٌ|ِ|ٍ|ْ/</search> 
		<replace>(ّ|َ|ً|ُ|ٌ|ِ|ٍ|ْ)?</replace> 
		</pair> 
		<pair> 
		<search>/ا|أ|إ|آ/</search> 
		<replace>(ا|أ|إ|آ)</replace> 
		</pair> 
		*/
		//$String = preg_replace("/(أ|إ|آ)/u", "ا", $String);
		if(!is_string(String))
		{
			return String;
		}
		return String;
        //return String.replace(/(أ|إ|آ)/g, 'ا');
    }
} //if (typeof ReplaceArabicCharacter == "undefined" || typeof ReplaceArabicCharacter !='function'){
/*##############       ##############*/

/*##############       ##############*/
if (typeof clear_space == "undefined" || typeof clear_space != 'function') {
    function clear_space(str) {
        return str.split(' ').join('');
    }
} //if (typeof clear_space == "undefined" || typeof clear_space !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space == "undefined" || typeof trim_space != 'function') {
    function trim_space(str) {
		if (str == '' || str == null) 
		{
			return '';
		}
		if(!is_string(str))
		{
			return str;
		}
        return str.replace(/^\s+|\s+$/g, "");
    }
} //if (typeof trim_space == "undefined" || typeof trim_space !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space1 == "undefined" || typeof trim_space1 != 'function') {
    function trim_space1(str) {
		//$String = preg_replace("/\s+/u", " ", $String);
		str = trim_space(str);
		return str.replace(/\s+/u, " ");
      //return str.split(' ').join(' ');
    }
} //if (typeof trim_space1 == "undefined" || typeof trim_space1 !='function'){
/*##############       ##############*/

/*##############       ##############*/
if (typeof trim_space2 == "undefined" || typeof trim_space2 != 'function') {
    function trim_space2(myString) {
        return myString.replace(/^s+/g, '').replace(/s+$/g, '')
    }
} //if (typeof trim_space2 == "undefined" || typeof trim_space2 !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space3 == "undefined" || typeof trim_space3 != 'function') {
    function trim_space3(str) {
        str = str.toString();
        var begin = 0;
        var end = str.length - 1;
        while (begin <= end && str.charCodeAt(begin) < 33) {
            ++begin;
        }
        while (end > begin && str.charCodeAt(end) < 33) {
            --end;
        }
        return str.substr(begin, end - begin + 1);
    }
    //jQuery.trim(StringVariable) == '')
} //if (typeof trim_space3 == "undefined" || typeof trim_space3 !='function'){
/*##############       ##############*/
/*##############       ##############*/
if(typeof strip_tag == "undefined" || typeof strip_tag != 'function')
{	
	function strip_tag(html)
	{
		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		var str = tmp.textContent||tmp.innerText
		if (typeof str == "undefined")
			str  = html;
		var r =str.replace(/(&nbsp)*/g,"")
		r = r.replace(/<[^>]*>|\s/g, '');
		return r;
		//if(r == '')
		//	return false;
		//else
		//	return true;
	}//function strip_tag(html)
}//if(typeof strip_tag == "undefined" || typeof strip_tag != 'function')
/*##############       ##############*/

/*##############       ##############*/
if(typeof _SetCookieday == "undefined" || typeof _SetCookieday != 'function')
{	
	function _SetCookieday(CookieName, CookieValue, Exdays) {
		//alert(CookieName)
		var d = new Date();
		d.setTime(d.getTime() + (Exdays*24*60*60*1000));
		//d.setTime(d.getTime() + (Exdays * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		//document.cookie = CookieName + "=" + CookieValue + "; " + expires;
		document.cookie = CookieName + "=" + CookieValue + "; " + expires + ";path=/";
	} //function _SetCookieday(CookieName, CookieValue, Exdays) {
}//if(typeof _SetCookieday == "undefined" || typeof _SetCookieday != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _SetCookie == "undefined" || typeof _SetCookie != 'function')
{	
	function _SetCookie(CookieName, CookieValue, ExMins) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (ExMins*60*1000));
		var expires = "expires="+d.toUTCString();  
		document.cookie = CookieName + "=" + CookieValue + ";" + expires + ";path=/";
	}//function _SetCookie(CookieName, CookieValue, ExMins) 	
		
}//if(typeof _SetCookie == "undefined" || typeof _SetCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _GetCookie == "undefined" || typeof _GetCookie != 'function')
{	
	function _GetCookie(CookieName) {
		var Name = CookieName + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1);
			if (c.indexOf(Name) == 0)
				return c.substring(Name.length, c.length);
		} //for(var i=0; i<ca.length; i++) {
		return "";
	} //function _GetCookie(CookieName) {
}//if(typeof _GetCookie == "undefined" || typeof _GetCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _CheckCookie == "undefined" || typeof _CheckCookie != 'function')
{	
	function _CheckCookie(Name) {
		var CookieName = _GetCookie(Name);
		if (CookieName != "") {
			return true;
		} else {
			return false;
		}
		/*
		if (CookieName!="") {
		alert("Welcome again " + CookieName);
		}else{
		CookieName = prompt("Please enter your name:", "");
		if (CookieName != "" && CookieName != null) {
		_SetCookie(Name, CookieName, 365);
		}
		}
		*/
	} //function _CheckCookie() {
}//if(typeof _CheckCookie == "undefined" || typeof _CheckCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _Delete_Cookie == "undefined" || typeof _Delete_Cookie != 'function')
{	
	function _Delete_Cookie(Name) {
		// document.cookie = Name + '=; Max-Age=0'
		//document.cookie = Name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		//document.cookie = Name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;;path=/';
		_SetCookie(Name, "", 0);
	} //function _Delete_Cookie(Name) {
}//if(typeof _Delete_Cookie == "undefined" || typeof _Delete_Cookie != 'function')
/*##############       ##############*/




/*##############       ##############*/
if (typeof textarea_autosize == "undefined" || typeof textarea_autosize != 'function') {
    function textarea_autosize(_this)
	{
		/*
		$("textarea.autoExpand").keydown( function() { 
		//console.log('keydown');
		//console.log(this);
		textarea_autosize(this);
		});//$("textarea.autoExpand").keydown( function() { 
		*/
		
		/*
		//<textarea class="form-control autoExpand"  ng-focus="focus_comment(post_key)"  ng-keydown="autoTextZone($event)"
//app.directive('input', function() {
app.directive('textarea', function($parse, $timeout,$rootScope) {
  return {
//E for Element name
//A for Attribute
//C for Class
//M for Comment
    restrict: 'E',//AC
    //require: 'ngModel',
	// require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
		 
		////content ng-scope ng-hide
		////return null;
		////console.log(element.find(":input").length);
		//if(element.find(":input").length == 0)
		//return null;
		
		////console.log(element.find("[ng-get-result]").filter("[ng-click]").length);
		//if(element.find("[ng-get-result]").filter("[ng-click]").length == 0)
		//return null;
		//// $( "p:first" ).hasClass( "autoExpand" ).toString() 
  
 
 
 		//lement.hasClass( "autoExpand" ).toString() 
		//console.log('directive textarea');
	   //console.log(element);
	   //element.bind("keydown keypress", function (event) {
		element.bind("keydown", function (event) {
			
		   //console.log('directive textarea keydown this');
	       //console.log(this);
		   
		  // console.log('directive textarea event.which');
	      // console.log(event.which);
            if(event.which !== 9) {
                //scope.$apply(function (){
                //    scope.$eval(attrs.ngEnter);
                //});

                //event.preventDefault();
				return textarea_autosize(this);
				//return textarea_autosize_Angular(this);
            }//if(event.which !== 9) {
        });//element.bind("keydown", function (event) {
		
  
		//ng-blur
		//ng-change
		//ng-click
		//ng-copy
		//ng-cut
		//ng-dblclick
		//ng-focus
		//ng-keydown
		//ng-keypress
		//ng-keyup
		//ng-mousedown
		//ng-mouseenter
		//ng-mouseleave
		//ng-mousemove
		//ng-mouseover
		//ng-mouseup
		//ng-paste
	 
		
 
		//console.log(element);
		//angular.forEach(element.find(":input"), function (item,key) {
		//	//if(item == val)
		//	//console.log(key);
		//	//if(item === true)
		//	//console.log(key);
		//	//console.log(item);
		//});//angular.forEach($scope.views, function (item,key) {
 
	}//link: function(scope, element, attrs, ngModel) {
  }// return {
});//app.directive('textarea', function($parse, $timeout,$rootScope) {
		*/
	  var el = _this;
	  
	  //console.log('textarea_autosize');
	  //console.log(_this);
	  setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
			// for box-sizing other than "content-box" use:
			// el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		  },0);
	}//function textarea_autosize(_this)
} //if (typeof textarea_autosize == "undefined" || typeof textarea_autosize !='function'){
/*##############       ##############*/



/*##############       ##############*/
if (typeof textarea_autosize_Angular == "undefined" || typeof textarea_autosize_Angular != 'function') {
	
	function textarea_autosize_Angular(_this)
	{
		/*
		//ng-keydown="autoTextZone($event)"
		$scope.autoTextZone = function(e) {
			//console.log('autoTextZone');
			//console.log(e);
			  
		 return textarea_autosize_Angular(e);
		};//$scope.autoTextZone = function(e) {
		*/


/*
//https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval
//jQuery.globalEval("var newVar = 'ff';");
	//eval("x=10;y=20;document.write(x*y)");
	jQuery.globalEval(Code_J);
	if (typeof $Array == "undefined")
	eval(Code_J);
	//alert(Code_J);
	// alert($Array);
*/
	/*
//<textarea class="form-control autoExpand"  ng-focus="focus_comment(post_key)"  ng-keydown="autoTextZone($event)"
//app.directive('input', function() {
app.directive('textarea', function($parse, $timeout,$rootScope) {
  return {
//E for Element name
//A for Attribute
//C for Class
//M for Comment
    restrict: 'E',//AC
    //require: 'ngModel',
	// require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
		 
		////content ng-scope ng-hide
		////return null;
		////console.log(element.find(":input").length);
		//if(element.find(":input").length == 0)
		//return null;
		
		////console.log(element.find("[ng-get-result]").filter("[ng-click]").length);
		//if(element.find("[ng-get-result]").filter("[ng-click]").length == 0)
		//return null;
		//// $( "p:first" ).hasClass( "autoExpand" ).toString() 
  
 
 
 		//lement.hasClass( "autoExpand" ).toString() 
		//console.log('directive textarea');
	   //console.log(element);
	   //element.bind("keydown keypress", function (event) {
		element.bind("keydown", function (event) {
			
		   //console.log('directive textarea keydown this');
	       //console.log(this);
		   
		  // console.log('directive textarea event.which');
	      // console.log(event.which);
            if(event.which !== 9) {
                //scope.$apply(function (){
                //    scope.$eval(attrs.ngEnter);
                //});

                //event.preventDefault();
				return textarea_autosize(this);
				//return textarea_autosize_Angular(this);
				//return textarea_autosize_Angular(event);
            }//if(event.which !== 9) {
        });//element.bind("keydown", function (event) {
		
  
		//ng-blur
		//ng-change
		//ng-click
		//ng-copy
		//ng-cut
		//ng-dblclick
		//ng-focus
		//ng-keydown
		//ng-keypress
		//ng-keyup
		//ng-mousedown
		//ng-mouseenter
		//ng-mouseleave
		//ng-mousemove
		//ng-mouseover
		//ng-mouseup
		//ng-paste
	 
		
 
		//console.log(element);
		//angular.forEach(element.find(":input"), function (item,key) {
		//	//if(item == val)
		//	//console.log(key);
		//	//if(item === true)
		//	//console.log(key);
		//	//console.log(item);
		//});//angular.forEach($scope.views, function (item,key) {
 
	}//link: function(scope, element, attrs, ngModel) {
  }// return {
});//app.directive('textarea', function($parse, $timeout,$rootScope) {
	*/




		//ng-blur
		//ng-change
		//ng-click
		//ng-copy
		//ng-cut
		//ng-dblclick
		//ng-focus
		//ng-keydown
		//ng-keypress
		//ng-keyup
		//ng-mousedown
		//ng-mouseenter
		//ng-mouseleave
		//ng-mousemove
		//ng-mouseover
		//ng-mouseup
		//ng-paste
	  var el = _this;
	   

	  //console.log('textarea_autosize_Angular');
	  // console.log(_this);
	  setTimeout(function(){
		//el.element.nativeElement.style.height = 'auto';
		//el.element.nativeElement.style.height = el.element.nativeElement.scrollHeight + 'px';
		//el.element.nativeElement.style.maxHeight = '100px';  
		//opacity + " !important;"
	 
		
		//jQuery('#id').css('cssText', 'height: 200px !important');
		
		 $(el).css({ 'cssText': "height:auto; padding:0" });
		 $(el).css({ 'cssText': "height: "+el.scrollHeight+"px" });
		 return;
		el.target.style.height = "auto";
		//el.target.style.padding = "0";
		el.target.style.height = (el.target.scrollHeight)+"px";
		/*
		el.style.cssText = 'height:auto; padding:0';
		// for box-sizing other than "content-box" use:
		// el.style.cssText = '-moz-box-sizing:content-box';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
		*/
	  },0);
	}//function textarea_autosize_Angular(_this)
} //if (typeof textarea_autosize_Angular == "undefined" || typeof textarea_autosize_Angular !='function'){
/*##############       ##############*/


