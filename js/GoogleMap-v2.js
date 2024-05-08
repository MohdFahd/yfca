

function Length_document_object(string_object)
{
	
	//var _value =  parseInt($(this).val());
    //var _value = Set_String($(this).val());
	//if (is_empty(_value))
		
	var length = 0;
	//(object.textContent || object.innerText || object.innerHTML).length;
	if($(string_object).length > 0)
	length = $(string_object).length;
	return length;
	//alert(typeof object);
}//function Length_document_object(string_object)

function get_val_object(string_object)
{
	
	//var _value =  parseInt($(this).val());
    //var _value = Set_String($(this).val());
	//if (is_empty(_value))
	var _value = null;

//console.log( "get_val_object  string_object" , string_object);
//if(length = Length_document_object(string_object) > 0)
//console.log( "get_val_object Length_document_object > 0 string_object" , string_object);
//if(is_jquery($(string_object)))
//console.log( "get_val_object is_jquerystring_object string_object true" , string_object);

//length = Length_document_object(string_object);
//console.log( "get_val_object  string_object length" , length);
	//(object.textContent || object.innerText || object.innerHTML).length;
	if(Length_document_object(string_object) > 0 && is_jquery($(string_object)) )
	{
		var my_value = trim_space($(string_object).val());
		if (!is_empty(my_value))
			_value = my_value;
	}//if(Length_document_object(string_object) > 0 && is_jquery($(string_object)) )
		
	//console.log('get_val_object _value' , _value);
	//console.log('get_val_object string_object' , string_object);
	return _value;
}//function get_val_object(string_object)






function FixingAction(StringAction) { //Cities or Districts
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//true , false
    //ActionData="action=GetCities" ActionDataTagId="city_id"
    var Return_Action = "";
    if (!is_undefined(StringAction) && !is_empty(StringAction))
        StringAction = trim_space(StringAction);
    Return_Action = trim_space(StringAction);
    if (!is_empty(StringAction)) {
		// console.log('FixingAction StringAction Has ?' , StringAction);
        if (Get_Has_Index_Search(StringAction, '[\?]', 'gi')) {
			//if(FunPrintConsoleLog)
            //console.log('FixingAction StringAction Has ?' , StringAction);
            
            var Temp_Array = String_ToArray(StringAction, '?');
            Return_Action = "";
            StringActionData = "";
			//if(FunPrintConsoleLog)
            //console.log('Temp_Array',Temp_Array);
            ////var _value =  parseInt(This_Object.val());
            for (var $i = 0; $i < Temp_Array.length; $i++) {
                if ($i == 0) {
                    Return_Action = trim_space(Temp_Array[$i]);
                } //if($i == 0)
                else {
                    //Action_Array_Data[] = trim_space(Temp_Array[$i]);
                    var String = trim_space(Temp_Array[$i]);
                    if (is_empty(StringActionData) && !is_empty(String)) {
                        //if(!is_empty(TempString) && !Get_Has_Index_Search(TempString,'[\?]','gi'))
                        StringActionData = String;
                    } else if (!is_empty(String)) {
                        StringActionData += "&" + String;
                    }
                } //else //if($i == 0)
            } //for (var $i = 0; $i < Temp_Array.length; $i++)  
            Return_Action += "?" + StringActionData;
        } //if(Get_Has_Index_Search(StringAction,'[\?]','gi'))
    } //if(!is_empty(StringAction))
	if(FunPrintConsoleLog)	
	console.log('FixingAction Return_Action' , Return_Action);
    return Return_Action;
} //function FixingAction(StringActionData)

function CreateActionData(object, StringActionData) { //Cities or Districts
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//true , false
    //ActionData="action=GetCities" ActionDataTagId="city_id"
    var Return_String = "";
    if (is_undefined(object)) {
        if (!is_undefined(StringActionData) && !is_empty(StringActionData))
            return StringActionData;
        return Return_String;
    } //if(is_undefined(object))
    //if(!$("*").children().is('[ActionData]'))
    //return StringActionData;
    if (!is_undefined(StringActionData) && !is_empty(StringActionData)) {
        //if(!Get_Has_Index_Search(StringActionData,'[\?]','gi'))
        //  Return_String = "?";
        Return_String = trim_space(StringActionData);
		if(FunPrintConsoleLog)
        console.log('CreateActionData Return_String' , Return_String);
    } //if(!is_undefined(StringActionData) && !is_empty(StringActionData))
    //var Action_Array_Data = []; 
    if (!is_undefined(object.attr("ActionData")) && !is_empty(object.attr("ActionData"))) {
        var ActionData = trim_space(object.attr("ActionData"));
		if(FunPrintConsoleLog)
        console.log('CreateActionData ActionData',ActionData);
        if (!is_empty(ActionData)) {
            var Temp_Return_String = Return_String;
            //if(!is_empty(Temp_Return_String) && !Get_Has_Index_Search(Temp_Return_String,'[\?]','gi'))
            //  TempString += Return_String + "?";
            Return_String = "";
            var Temp_Array = String_ToArray(ActionData, ',');
            for (var $i = 0; $i < Temp_Array.length; $i++) {
                //var String = trim_space(Action_Array_Data[$i]);
                var String = trim_space(Temp_Array[$i]);
                if (is_empty(Return_String) && !is_empty(String)) {
                    if (is_empty(Temp_Return_String) || (!is_empty(Temp_Return_String) && !Get_Has_Index_Search(Temp_Return_String, String, 'gi')))
                        Return_String = String;
                } else if (!is_empty(String)) {
                    if (is_empty(Temp_Return_String) || (!is_empty(Temp_Return_String) && !Get_Has_Index_Search(Temp_Return_String, String, 'gi')))
                        Return_String += "&" + String;
                }
            } //for (var $i = 0; $i < Temp_Array.length; $i++) 
            if (!is_empty(Temp_Return_String)) {
				if(FunPrintConsoleLog)
                console.log('CreateActionData Temp_Return_String',Temp_Return_String);
				if(FunPrintConsoleLog)
                console.log('CreateActionData Return_String 000',Return_String);
                if (!is_empty(Return_String) && !Get_Has_Index_Search(Temp_Return_String, '[\?]', 'gi'))
                    Return_String = Temp_Return_String + "?" + Return_String;
                else if (!is_empty(Return_String))
                    Return_String = Temp_Return_String + "&" + Return_String;
                else
                    Return_String = Temp_Return_String;
				if(FunPrintConsoleLog)
                console.log('CreateActionData Temp_Return_String + Return_String 000' , Return_String);
            } //if(!is_empty(Temp_Return_String))
        } //if(!is_empty(ActionData))   
    } //if(!is_undefined(object.attr("ActionData")) && !is_empty(object.attr("ActionData")))
    //Return_String = trim_space(Return_String);

	//console.log('CreateActionData Return_String' , Return_String);
    return Return_String;
} //function CreateActionData(object , StringActionData)



//var placesResultsInfo = [];
//var DefaultsOptions = {};
var ArrayReSetTempSearchData  = {};
//var ArrayReSetFullDataResultsInfoBeforLoadData = [];
var ArrayFullDataResultsInfo = {};
var ArraySearchResultsInfo = [];
//var ArrayReSetTagDataInfo = [];


var DefaultsDataResultsInfoOptions = {
			//"MapZoom": '8',
			//"maps_latitude": '15.3691',
			//"maps_longitude": '44.1895',
			
			"DefaultsMapZoom": '7',
			//"DefaultsMapLatitude": '15.3691',
			//"DefaultsMapLongitude": '44.1895',
			"DefaultsMapLatitude": '15.38308',
			"DefaultsMapLongitude": '44.21128',
			
			"ResultsServicePointsGoogleLatLngInfo": null ,// [{}]
			////"ResultsCategoryServicePointsGoogleLatLngInfo": null ,// [{}]
			////"RunFilterSearch": false ,//true , false
			////"CityGoogleLatLngInfo": null ,// [{}]
			
			//"ArrayMapMarkerDataInfo": null, // [{}]
			"ResultsInfo": null, // [{}]
			"HtmlMapMarkerInfoContentObject": null, //.MapMarkerInfoContent .MapMarkerInfoContent-item
			//# "HtmlMapMarkerInfoContent": null, // [{}]
			
			"HtmlBoxContentSearchListObject": null, //.wrap_box_content ul.search_list
			"HtmlBoxContentSearchDataList": null, //HTML CODE
        };
	
var DefaultsOptions = {};
DefaultsOptions = DefaultsDataResultsInfoOptions; 	
ArrayFullDataResultsInfo = DefaultsDataResultsInfoOptions;
ArrayReSetTempSearchData = DefaultsDataResultsInfoOptions;	

//function SetLoadResultsDataInfo(ResultData , DoReSetSearchData)
function SetLoadResultsDataInfo(object,DoReSetSearchData)
{
	//return null;
	var ReSetResultsDataSearchData = false;//true,false
	//if(!is_undefined(DoReSetSearchData) && is_boolean(DoReSetSearchData))
	if(!is_undefined(DoReSetSearchData) && DoReSetSearchData)
		ReSetResultsDataSearchData = true;//true,false
	//if(ReSetResultsDataSearchData)
	//return null;	
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//true , false
	
	var DoSetObject = null;
	if(!is_undefined(object) && !is_null(object) && is_object(object) && object.length > 0)
	DoSetObject = object;
	
	//var DefaultsOptions = {};
	//DefaultsOptions = DefaultsDataResultsInfoOptions; 
	
   //JSON.parse(data);
	//console.log('SetLoadResultsDataInfo Action' , Action);
	//console.log('SetLoadResultsDataInfo ajax Data success' , data);
	
	//ArrayFullDataResultsInfo = {};
	//ArrayReSetTempSearchData = {};
	//ArraySearchResultsInfo = [];
	
	//ArrayFullDataResultsInfo = DefaultsDataResultsInfoOptions;
	//ArrayReSetTempSearchData = DefaultsDataResultsInfoOptions;	
	//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
	var data = null;
	//ReSetResultsDataSearchData = false;//true,false //true = Old Data [Ajax Load] ,false = New Data [Ajax Load]
	if(ReSetResultsDataSearchData)
	{
		//if(!is_undefined(ArrayReSetTempSearchData) && !is_null(ArrayReSetTempSearchData) && is_object(ArrayReSetTempSearchData) && ArrayReSetTempSearchData.length > 0)
		
	
		var TagId = "AllSelected";
		//# SearchTagIdByMap(TagId);
		//console.log('SetLoadResultsDataInfo RunSetMapSearchResultsInfo' , RunSetMapSearchResultsInfo);
		SetMapSearchResultsInfo(DoSetObject,ReSetResultsDataSearchData,TagId);
		
				
		//# if(is_object(ArrayReSetTempSearchData))
		if(is_object(ArrayReSetTempSearchData) && !jQuery.isEmptyObject(ArrayReSetTempSearchData))
		data = ArrayReSetTempSearchData;// Old Data [Ajax Load]
	
		//data = DefaultsDataResultsInfoOptions;// Old Data [Ajax Load]
	}//if(ReSetResultsDataSearchData)
	else //if(ReSetResultsDataSearchData)
	{
		//if(!is_undefined(ArrayFullDataResultsInfo) && !is_null(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo) && ArrayFullDataResultsInfo.length > 0)
		
		//# if(is_object(ArrayFullDataResultsInfo))	
		if(is_object(ArrayFullDataResultsInfo) && !jQuery.isEmptyObject(ArrayFullDataResultsInfo))	
		data = ArrayFullDataResultsInfo;// New Data [Ajax Load]
	}//else //if(ReSetResultsDataSearchData)
	
	//FunPrintConsoleLog = false;//true,false
	if(FunPrintConsoleLog)
	{
		console.log('SetLoadResultsDataInfo ReSetResultsDataSearchData' , ReSetResultsDataSearchData);
		console.log('SetLoadResultsDataInfo ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		console.log('SetLoadResultsDataInfo data' , data);
		//console.log('SetLoadResultsDataInfo data.length ' , data.length );
	}//if(FunPrintConsoleLog)
	
	//console.log('SetLoadResultsDataInfo ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
	//console.log('SetLoadResultsDataInfo ArrayReSetTempSearchData' , ArrayReSetTempSearchData);
	//console.log('SetLoadResultsDataInfo 1 data' , data);
	//if(data.length == 0)	
	if(is_null(data) || !is_object(data))
	return null;
	//var Obj = _Array_locations_Info[$index];
	
	if(is_object(data) && jQuery.isEmptyObject(data))
		return null;
	
	if(is_undefined(data.result))
	return null;	
	//if(FunPrintConsoleLog)
	//console.log('SetLoadResultsDataInfo 2 data' , data);


	if(is_object(data)) 
	{
		
		var Options = {};	
		
		//ReSetResultsDataSearchData = false;//true,false
		if(!ReSetResultsDataSearchData)
		{ 
	
			//var Options = DefaultsDataResultsInfoOptions;	
			//Options = $.extend({},DefaultsDataResultsInfoOptions, data);
			
			//ArrayFullDataResultsInfo = Options;
			//ArrayReSetTempSearchData = Options;
		}//if(!ReSetResultsDataSearchData)
		
						
		ArraySearchResultsInfo = [];
		var data_status = 0;//0,1,2
		var $show = null;
		var $hide = null;
		var $showObject  = null;
		var $hideObject  = null;
		var $showArray  = [];
		var $hideArray  = [];
		
		var $active = null;
		var $un_active = null;	
		var ObjectTagMessagesResult = "";
		var data_DoSearchType = "";
		var data_action = "";
		var $Success_Status = 1;
		var $Error_Status = 0;
		
		//var SetAqHomeObject = null;
		var SetAqHtmlSearchListObject = "";//'.wrap_box_content ul.search_list'
		var SetAqHtmlSearchListDataResult = "";
		//var SetShowHtmlSearchList =  true;//true,false
		
		//data-item="search"
		//$('.wrap_box_content ul.search_list').html('');//SetAqHtmlSearchListDataResult
		//$('.wrap_box_content ul.search_list').hide();
	 
		if(!is_undefined(data.SuccessStatus))
		{
			$Success_Status = data.SuccessStatus;
		}//if(is_undefined(data.SuccessStatus))
		if(!is_undefined(data.ErrorStatus))
		{
			$Error_Status = data.ErrorStatus;
		}//if(is_undefined(data.ErrorStatus))
		if(!is_undefined(data.status))
		{
			//console.log( 'status' );
			//console.log( data.status );
			data_status = data.status;
			//data_status = Set_parseInt(data_status);
		}//if(is_undefined(data.status))
		if(!is_undefined(data.message))
		{
			//console.log( 'message' );
			//console.log( data.message );
			data_message = data.message;
			//data_message = Set_String(trim_space(data_message));
		}//if(!is_undefined(data.message))
			
		if(!is_undefined(data.DoSearchType))
		{
			//console.log( 'DoSearchType' );
			//console.log( data.DoSearchType );
			//&DoSearchType=SearchWord
			data_DoSearchType = trim_space(data.DoSearchType);// "SearchNearBy","SearchWord","CityId","ProgramId","DonorId"
		}//if(!is_undefined(data.DoSearchType))
			
		
		if(!is_undefined(data.action))
		{
			//console.log( 'action' );
			//console.log( data.action );
			data_action = trim_space(data.action);//register , login , forget_password , activate_account
		}//if(!is_undefined(data.action))	
		
	
		if(!is_undefined(data.show))
		{
			if(is_string(data.show) && !is_empty(data.show))
			{
				//$show = trim_space(data.show);
				$show = Set_String(trim_space(data.show));
				var StringToArray = String_ToArray($show, ',');
				//var ArrayTemp = [];
				if(is_array(StringToArray))
				{
					if(StringToArray.length > 0)
					{
						$showArray = StringToArray;
						$show = null;
					}//if(StringToArray.length > 0)
					
					/*
					//for(index = 0; index < StringToArray.length; index++) 
					for (var index in StringToArray) {
						var Id_Name = StringToArray[index];
						if (!is_empty(Id_Name)) {
							Id_Name = trim_space(Id_Name);
							Array_push($showArray, Id_Name); 
						} //if(!is_empty(Id_Name))
					} //for (var index in StringToArray)
					*/	
				}//if(is_array(StringToArray))
				
				//FunPrintConsoleLog = false;//true,false
				if(FunPrintConsoleLog)
				{
					console.log('SetLoadResultsDataInfo $show' , $show);
					console.log('SetLoadResultsDataInfo StringToArray' , StringToArray);
					console.log('SetLoadResultsDataInfo $showArray' , $showArray);
				}//if(FunPrintConsoleLog)
					
			}//if(is_string(data.show) && !is_empty(data.show))
			else if(is_object(data.show))
			{
				//$show = (data.show);
				$showObject = (data.show);
				
				//console.log('SetLoadResultsDataInfo $showObject' , $showObject);
			}//else if(is_object(data.show))
				
		}//if(!is_undefined(data.show))
			
		if(!is_undefined(data.hide))
		{
			
			
			if(is_string(data.hide) && !is_empty(data.hide))
			{
				//$hide = trim_space(data.hide);
				$hide = Set_String(trim_space(data.hide));
				var StringToArray = String_ToArray($hide, ',');
				//var ArrayTemp = [];
				if(is_array(StringToArray))
				{
					if(StringToArray.length > 0)
					{
						$hideArray = StringToArray;
						$hide = null;
					}//if(StringToArray.length > 0)
					
					/*
					//for(index = 0; index < StringToArray.length; index++) 
					for (var index in StringToArray) {
						var Id_Name = StringToArray[index];
						if (!is_empty(Id_Name)) {
							Id_Name = trim_space(Id_Name);
							Array_push($hideArray, Id_Name); 
						} //if(!is_empty(Id_Name))
					} //for (var index in StringToArray)
					*/	
				}//if(is_array(StringToArray))
				
				//FunPrintConsoleLog = false;//true,false
				if(FunPrintConsoleLog)
				{
					console.log('SetLoadResultsDataInfo $hide' , $hide);
					console.log('SetLoadResultsDataInfo StringToArray' , StringToArray);
					console.log('SetLoadResultsDataInfo $hideArray' , $hideArray);
				}//if(FunPrintConsoleLog)
				
			}//if(is_string(data.hide) && !is_empty(data.hide))
			else if(is_object(data.hide))
			{
				//$hide = (data.hide);
				$hideObject = (data.hide);
				
				//console.log('SetLoadResultsDataInfo $hideObject' , $hideObject);
			}//else if(is_object(data.hide))
			
		}//if(!is_undefined(data.hide))
		
		
		/*
		if(data_status == $Error_Status && data_action == 'AccountLogOut')
		{
			//console.log( 'AccountLogOut' );
			if(typeof OpenModalPopup != "undefined" && typeof OpenModalPopup =='function')
			OpenModalPopup('PopupContainer',data_message);
			//register , login , forget_password , activate_account
			if(Location_Refresh)
			 setTimeout(function(){ My_Location_Refresh(); }, 1000);
		}
		else if(data_status == $Success_Status && data_action == 'login')
		{
			
		}
		*/
		
		
		//ReSetResultsDataSearchData = false;//true,false
		if(ReSetResultsDataSearchData)
		{
			
		}//if(ReSetResultsDataSearchData)
		else //if(ReSetResultsDataSearchData)
		{
			
		}//else //if(ReSetResultsDataSearchData)
		
		
		
		
		
		
		
		
		var DoRunReSetResultsDataSearchData = false;//true,false
		if(DoRunReSetResultsDataSearchData)
		{
			//ReSetResultsDataSearchData = false;//true,false
			if(ReSetResultsDataSearchData)
			{
				if(is_array($hideArray))
				{
					StringToArray = $hideArray;
					//if(StringToArray.length > 0)
					//for(index = 0; index < StringToArray.length; index++) 
					for(var index in StringToArray) {
						var Id_Name = StringToArray[index];
						if(!is_empty(Id_Name)) 
						{
							Id_Name = trim_space(Id_Name);
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find(Id_Name).length > 0)
								{
									DoSetObject.find(Id_Name).show();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find(Id_Name).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							
							if(DoShowHide && $(Id_Name).length > 0)
							$(Id_Name).show(); 
						} //if(!is_empty(Id_Name))
					} //for(var index in StringToArray)
				}//if(is_array(StringToArray))
						
				if(!is_null($hideObject) && is_object($hideObject))
				{
					$.each($hideObject, function(key, optionVal) {

						//console.log(key + '=' + optionVal);  
						//if(is_null(optionVal) || is_empty(optionVal)) 
						 
						if(is_string(optionVal) && !is_empty(optionVal))
						{
							optionVal = trim_space(optionVal);
							
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find(optionVal).length > 0)
								{
									DoSetObject.find(optionVal).show();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find(optionVal).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							
							if(DoShowHide && $(optionVal).length > 0)
							$(optionVal).show(); 
						}//if(is_string(optionVal) && !is_empty(optionVal))
					});//$.each($hideObject, function(key, option) {
				}//if(!is_null($hideObject) && is_object($hideObject))
					
				
				if($hide && is_string($hide) && !is_empty($hide))
				{
					DoShowHide = true;//true,false
					if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
					{
						if(DoSetObject.find($hide).length > 0)
						{
							DoSetObject.find($hide).show();
							DoShowHide = false;//true,false
						}//if(DoSetObject.find($hide).length > 0)
					}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
					
					if(DoShowHide && $($hide).length > 0)
					$($hide).show();
				}//if($hide && is_string($hide) && !is_empty($hide))
				
			}//if(ReSetResultsDataSearchData)
			

			//ReSetResultsDataSearchData = false;//true,false
			if(ReSetResultsDataSearchData)
			{
				if(is_array($showArray))
				{
					StringToArray = $showArray;
					//if(StringToArray.length > 0)
					//for(index = 0; index < StringToArray.length; index++) 
					for(var index in StringToArray) {
						var Id_Name = StringToArray[index];
						if(!is_empty(Id_Name)) 
						{
							Id_Name = trim_space(Id_Name);
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find(Id_Name).length > 0)
								{
									DoSetObject.find(Id_Name).hide();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find(Id_Name).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							
							if(DoShowHide && $(Id_Name).length > 0)
							$(Id_Name).hide(); 
						} //if(!is_empty(Id_Name))
					} //for(var index in StringToArray)
				}//if(is_array(StringToArray))
						
				if(!is_null($showObject) && is_object($showObject))
				{
					$.each($showObject, function(key, optionVal) {

						//console.log(key + '=' + optionVal);  
						//if(is_null(optionVal) || is_empty(optionVal)) 
						 
						if(is_string(optionVal) && !is_empty(optionVal))
						{
							optionVal = trim_space(optionVal);
							
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find(optionVal).length > 0)
								{
									DoSetObject.find(optionVal).hide();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find(optionVal).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							
							if(DoShowHide && $(optionVal).length > 0)
							$(optionVal).hide(); 
						}//if(is_string(optionVal) && !is_empty(optionVal))
					});//$.each($showObject, function(key, option) {
				}//if(!is_null($showObject) && is_object($showObject))
					
				if($show && is_string($show) && !is_empty($show))
				{
					DoShowHide = true;//true,false
					if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
					{
						if(DoSetObject.find($show).length > 0)
						{
							DoSetObject.find($show).hide();
							DoShowHide = false;//true,false
						}//if(DoSetObject.find($show).length > 0)
					}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
					
					if(DoShowHide && $($show).length > 0)
					$($show).hide();
				}//if($show && is_string($show) && !is_empty($show))
				
			}//if(ReSetResultsDataSearchData)
			
		}//if(DoRunReSetResultsDataSearchData)
		
		//ReSetResultsDataSearchData = false;//true,false
		if(!ReSetResultsDataSearchData)
		{
			if(is_array($hideArray))
			{
				StringToArray = $hideArray;
				//if(StringToArray.length > 0)
				//for(index = 0; index < StringToArray.length; index++) 
				for(var index in StringToArray) {
					var Id_Name = StringToArray[index];
					if(!is_empty(Id_Name)) 
					{
						Id_Name = trim_space(Id_Name);
						DoShowHide = true;//true,false
						if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						{
							if(DoSetObject.find(Id_Name).length > 0)
							{
								DoSetObject.find(Id_Name).hide();
								DoShowHide = false;//true,false
							}//if(DoSetObject.find(Id_Name).length > 0)
						}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						
						if(DoShowHide && $(Id_Name).length > 0)
						$(Id_Name).hide(); 
					} //if(!is_empty(Id_Name))
				} //for(var index in StringToArray)
			}//if(is_array(StringToArray))
					
			if(!is_null($hideObject) && is_object($hideObject))
			{
				$.each($hideObject, function(key, optionVal) {

					//console.log(key + '=' + optionVal);  
					//if(is_null(optionVal) || is_empty(optionVal)) 
					 
					if(is_string(optionVal) && !is_empty(optionVal))
					{
						optionVal = trim_space(optionVal);
						
						DoShowHide = true;//true,false
						if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						{
							if(DoSetObject.find(optionVal).length > 0)
							{
								DoSetObject.find(optionVal).hide();
								DoShowHide = false;//true,false
							}//if(DoSetObject.find(optionVal).length > 0)
						}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						
						if(DoShowHide && $(optionVal).length > 0)
						$(optionVal).hide(); 
					}//if(is_string(optionVal) && !is_empty(optionVal))
				});//$.each($hideObject, function(key, option) {
			}//if(!is_null($hideObject) && is_object($hideObject))
				
			
			if($hide && is_string($hide) && !is_empty($hide))
			{
				DoShowHide = true;//true,false
				if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				{
					if(DoSetObject.find($hide).length > 0)
					{
						DoSetObject.find($hide).hide();
						DoShowHide = false;//true,false
					}//if(DoSetObject.find($hide).length > 0)
				}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				
				if(DoShowHide && $($hide).length > 0)
				$($hide).hide();
			}//if($hide && is_string($hide) && !is_empty($hide))
			
		}//if(!ReSetResultsDataSearchData)
		
	
		//ReSetResultsDataSearchData = false;//true,false
		if(!ReSetResultsDataSearchData)
		{
			if(is_array($showArray))
			{
				StringToArray = $showArray;
				//if(StringToArray.length > 0)
				//for(index = 0; index < StringToArray.length; index++) 
				for(var index in StringToArray) {
					var Id_Name = StringToArray[index];
					if(!is_empty(Id_Name)) 
					{
						Id_Name = trim_space(Id_Name);
						DoShowHide = true;//true,false
						if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						{
							if(DoSetObject.find(Id_Name).length > 0)
							{
								DoSetObject.find(Id_Name).show();
								DoShowHide = false;//true,false
							}//if(DoSetObject.find(Id_Name).length > 0)
						}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						
						if(DoShowHide && $(Id_Name).length > 0)
						$(Id_Name).show(); 
					} //if(!is_empty(Id_Name))
				} //for(var index in StringToArray)
			}//if(is_array(StringToArray))
					
			if(!is_null($showObject) && is_object($showObject))
			{
				$.each($showObject, function(key, optionVal) {

					//console.log(key + '=' + optionVal);  
					//if(is_null(optionVal) || is_empty(optionVal)) 
					 
					if(is_string(optionVal) && !is_empty(optionVal))
					{
						optionVal = trim_space(optionVal);
						
						DoShowHide = true;//true,false
						if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						{
							if(DoSetObject.find(optionVal).length > 0)
							{
								DoSetObject.find(optionVal).show();
								DoShowHide = false;//true,false
							}//if(DoSetObject.find(optionVal).length > 0)
						}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
						
						if(DoShowHide && $(optionVal).length > 0)
						$(optionVal).show(); 
					}//if(is_string(optionVal) && !is_empty(optionVal))
				});//$.each($showObject, function(key, option) {
			}//if(!is_null($showObject) && is_object($showObject))
				
			if($show && is_string($show) && !is_empty($show))
			{
				DoShowHide = true;//true,false
				if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				{
					if(DoSetObject.find($show).length > 0)
					{
						DoSetObject.find($show).show();
						DoShowHide = false;//true,false
					}//if(DoSetObject.find($show).length > 0)
				}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				
				if(DoShowHide && $($show).length > 0)
				$($show).show();
			}//if($show && is_string($show) && !is_empty($show))
			
		}//if(!ReSetResultsDataSearchData)
		
	
		
		//var SetAqHomeObject = null;
		//# var SetAqHtmlSearchListObject = null;//'.wrap_box_content ul.search_list'
		//# var SetAqHtmlSearchListDataResult = null;
		//# var SetShowHtmlSearchList =  true;//true,false
		/*
		//data-item="search"
		//$('.wrap_box_content ul.search_list').html('');//SetAqHtmlSearchListDataResult
		//$('.wrap_box_content ul.search_list').hide();
		if(!is_undefined(data.HtmlSearchListObject) && !data.HtmlSearchListObject)
		{
			//SetShowSearchList = Set_parseInt(data.ShowSearchList);
			SetShowSearchList =  false;//true,false
		}//if(!is_undefined(data.ShowSearchList) && !data.ShowSearchList)
			
		if(!is_undefined(data.HtmlSearchListObject) && !is_empty(data.HtmlSearchListObject))
			SetAqHtmlSearchListObject = trim_space(data.HtmlSearchListObject);
		*/
		
		//console.log('GetAjaxLoadDataMap ajax Data success' , data);
		//console.log('SetLoadResultsDataInfo 3 data' , data);
		if(!is_undefined(data.result) && is_object(data.result))
		{
			
			var result = data.result;
			
			//if(is_object(result) && jQuery.isEmptyObject(result)) 
			//# var ArrayPlacesResultsInfo = [];
		 
			//ReSetResultsDataSearchData = false;//true,false
			if(!ReSetResultsDataSearchData)
			{ 
		
				//var Options = DefaultsDataResultsInfoOptions;	
				//Options = $.extend({},DefaultsDataResultsInfoOptions, data);
				
				//ArrayFullDataResultsInfo = Options;
				//ArrayReSetTempSearchData = Options;
			}//if(!ReSetResultsDataSearchData)
			
			ArraySearchResultsInfo = result;
			//var Options = {};	
			////var Options = DefaultsDataResultsInfoOptions;	
			//Options = $.extend({},Options, result);

			
			
			var RunSetMapSearchResultsInfo =  null;//true,false
			if(!is_undefined(data.RunSetMapSearchResultsInfo) && data.RunSetMapSearchResultsInfo)
				RunSetMapSearchResultsInfo =  data.RunSetMapSearchResultsInfo;//true,false
			if(is_null(RunSetMapSearchResultsInfo) && !is_undefined(result.RunSetMapSearchResultsInfo) && result.RunSetMapSearchResultsInfo)
				RunSetMapSearchResultsInfo =  result.RunSetMapSearchResultsInfo;//true,false
			
			if(is_null(RunSetMapSearchResultsInfo))
			RunSetMapSearchResultsInfo =  true;//true,false
			if(!is_null(RunSetMapSearchResultsInfo) && RunSetMapSearchResultsInfo)
			{
				//ReSetResultsDataSearchData = false;//true,false
				if(!ReSetResultsDataSearchData)
				{
					var TagId = "AllSelected";
					//# SearchTagIdByMap(TagId);
					//console.log('SetLoadResultsDataInfo RunSetMapSearchResultsInfo' , RunSetMapSearchResultsInfo);
					SetMapSearchResultsInfo(DoSetObject,ReSetResultsDataSearchData,TagId);
				}//if(!ReSetResultsDataSearchData)
					
				//var TagId = "AllSelected";
				////# SearchTagIdByMap(TagId);
				////console.log('SetLoadResultsDataInfo RunSetMapSearchResultsInfo' , RunSetMapSearchResultsInfo);
				//SetMapSearchResultsInfo(DoSetObject,ReSetResultsDataSearchData,TagId);
			}
			
			//console.log('GetAjaxLoadDataMap ajax Data success' , data);
			
			
			/*
			if(is_empty(SetAqHtmlSearchListObject) && !is_undefined(result.HtmlSearchListObject) && !is_empty(result.HtmlSearchListObject))
			SetAqHtmlSearchListObject = trim_space(result.HtmlSearchListObject);
			
			if(SetShowSearchList && !is_undefined(result.HtmlSearchListObject) && !result.HtmlSearchListObject)
			{
				//SetShowSearchList = Set_parseInt(result.ShowSearchList);
				SetShowSearchList =  false;//true,false
			}//if(SetShowSearchList && !is_undefined(result.HtmlSearchListObject) && !result.HtmlSearchListObject)
			*/	
			
			
		
			var SetAqHtmlSearchListObject = "";//'.wrap_box_content ul.search_list'
			if(!is_undefined(result.HtmlBoxContentSearchListObject) && !is_empty(result.HtmlBoxContentSearchListObject))
			SetAqHtmlSearchListObject = trim_space(result.HtmlBoxContentSearchListObject);
				
			var SetAqHtmlSearchListDataResult = "";	
			if(!is_undefined(result.HtmlBoxContentSearchDataList) && !is_empty(result.HtmlBoxContentSearchDataList))
			SetAqHtmlSearchListDataResult = trim_space(result.HtmlBoxContentSearchDataList);
			
			//FunPrintConsoleLog = false;//true,false
			if(FunPrintConsoleLog)
			{
				//console.log('SetLoadResultsDataInfo SetAqHtmlSearchListObject' , SetAqHtmlSearchListObject);
				//console.log('SetLoadResultsDataInfo SetAqHtmlSearchListDataResult' , SetAqHtmlSearchListDataResult);
			}//if(FunPrintConsoleLog)
		
		  
			//if(!is_undefined(SetAqHtmlSearchListObject) && !is_empty(SetAqHtmlSearchListDataResult))
			//$(SetAqHtmlSearchListObject).hide();
		
			//if(!is_undefined(SetAqHtmlSearchListObject) && !is_empty(SetAqHtmlSearchListDataResult))
			//$(SetAqHtmlSearchListObject).html(SetAqHtmlSearchListDataResult).show();
		 
			
			
			if(!is_empty(SetAqHtmlSearchListObject))
			{
				
				DoHtmlObject = null;
				if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				{
					//console.log('SetLoadResultsDataInfo DoSetObject' , DoSetObject);
					if(DoSetObject.find(SetAqHtmlSearchListObject).length > 0)
					{
						DoHtmlObject = DoSetObject.find(SetAqHtmlSearchListObject);
						//DoHtmlObject.hide();
						//console.log('SetLoadResultsDataInfo DoHtmlObject 0' , DoHtmlObject);
					}//if(DoSetObject.find(SetAqHtmlSearchListObject).length > 0)
						
					
					if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
					{
						if(DoSetObject.filter(SetAqHtmlSearchListObject).length > 0)
						{
							DoHtmlObject = DoSetObject.filter(SetAqHtmlSearchListObject);
							//DoHtmlObject.hide();
							//console.log('SetLoadResultsDataInfo DoHtmlObject 0' , DoHtmlObject);
						}//if(DoSetObject.find(SetAqHtmlSearchListObject).length > 0)
					}//if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
				}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				
				 
			 
				
				
				if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
				{
					if($(SetAqHtmlSearchListObject).length > 0)
					{
						DoHtmlObject = $(SetAqHtmlSearchListObject);
						//console.log('SetLoadResultsDataInfo DoHtmlObject.length' , DoHtmlObject.length);
						
					}
					//console.log('SetLoadResultsDataInfo DoHtmlObject 1' , DoHtmlObject);
					//DoHtmlObject.hide();
				}//if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
			 
				if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
				{
					//$(SetAqHtmlSearchListObject).html(SetAqHtmlSearchListDataResult).show();
					//DoHtmlObject.html('');
					//DoHtmlObject.hide();
					DoHtmlObject.html('').hide();
					//ReSetResultsDataSearchData = false;//true,false
					if(!ReSetResultsDataSearchData)
					{
						if(!is_empty(SetAqHtmlSearchListDataResult))
						DoHtmlObject.html(SetAqHtmlSearchListDataResult).show();
					}//if(!ReSetResultsDataSearchData)
				}//if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
			
				//FunPrintConsoleLog = false;//true,false
				if(FunPrintConsoleLog)
				{
					console.log('SetLoadResultsDataInfo DoHtmlObject' , DoHtmlObject);
					if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
					console.log('SetLoadResultsDataInfo DoHtmlObject.length' , DoHtmlObject.length);
					
					//console.log('SetLoadResultsDataInfo SetAqHtmlSearchListObject' , SetAqHtmlSearchListObject);
					//console.log('SetLoadResultsDataInfo SetAqHtmlSearchListDataResult' , SetAqHtmlSearchListDataResult);
				}//if(FunPrintConsoleLog)
					
			}//if(!is_empty(SetAqHtmlSearchListObject))
				
			
			
			
			
			//"HtmlMapMarkerInfoContentObject": null, //.MapMarkerInfoContent .MapMarkerInfoContent-item
		 
			var SetAqHtmlMapMarkerInfoContentObject = "";//'.wrap_box_content ul.search_list'
			if(!is_undefined(result.HtmlMapMarkerInfoContentObject) && !is_empty(result.HtmlMapMarkerInfoContentObject))
			SetAqHtmlMapMarkerInfoContentObject = trim_space(result.HtmlMapMarkerInfoContentObject);
		
			var SetAqHtmlMapMarkerInfoContentString = "";
			/*	
			var SetAqHtmlMapMarkerInfoContentDataResult = {};	
			if(!is_undefined(result.HtmlMapMarkerInfoContent) && is_object(result.HtmlMapMarkerInfoContent))
			SetAqHtmlMapMarkerInfoContentDataResult =  (result.HtmlMapMarkerInfoContent);
		
			
			if(!is_null($SetAqHtmlMapMarkerInfoContentDataResult) && is_object($SetAqHtmlMapMarkerInfoContentDataResult))
			{
				$.each($SetAqHtmlMapMarkerInfoContentDataResult, function(key, optionVal) {

					
				});//$.each($SetAqHtmlMapMarkerInfoContentDataResult, function(key, option) {
			}//if(!is_null($SetAqHtmlMapMarkerInfoContentDataResult) && is_object($hideObject))
			*/	
			
			
			if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
			{
				
				DoHtmlObject = null;
				if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				{
					//console.log('SetLoadResultsDataInfo DoSetObject' , DoSetObject);
					if(DoSetObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
					{
						DoHtmlObject = DoSetObject.find(SetAqHtmlMapMarkerInfoContentObject);
						//DoHtmlObject.hide();
						//console.log('SetLoadResultsDataInfo DoHtmlObject 0' , DoHtmlObject);
					}//if(DoSetObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
						
					
					if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
					{
						if(DoSetObject.filter(SetAqHtmlMapMarkerInfoContentObject).length > 0)
						{
							DoHtmlObject = DoSetObject.filter(SetAqHtmlMapMarkerInfoContentObject);
							//DoHtmlObject.hide();
							//console.log('SetLoadResultsDataInfo DoHtmlObject 0' , DoHtmlObject);
						}//if(DoSetObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
					}//if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
				}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
				
				 
			 
				
				
				if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
				{
					if($(SetAqHtmlMapMarkerInfoContentObject).length > 0)
					{
						DoHtmlObject = $(SetAqHtmlMapMarkerInfoContentObject);
						//console.log('SetLoadResultsDataInfo DoHtmlObject.length' , DoHtmlObject.length);
						
					}
					//console.log('SetLoadResultsDataInfo DoHtmlObject 1' , DoHtmlObject);
					//DoHtmlObject.hide();
				}//if((!is_object(DoHtmlObject) || is_null(DoHtmlObject)))
			 
				if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
				{
					//$(SetAqHtmlMapMarkerInfoContentObject).html(SetAqHtmlMapMarkerInfoContentString);//.show();
					//DoHtmlObject.html('');
					DoHtmlObject.hide();
					/*
					DoHtmlObject.html('').hide();
					//ReSetResultsDataSearchData = false;//true,false
					if(!ReSetResultsDataSearchData)
					{
						if(!is_empty(SetAqHtmlMapMarkerInfoContentString))
						DoHtmlObject.html(SetAqHtmlMapMarkerInfoContentString);//.show();
					}//if(!ReSetResultsDataSearchData)
					*/	
				}//if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
			
				//FunPrintConsoleLog = false;//true,false
				if(FunPrintConsoleLog)
				{
					console.log('SetLoadResultsDataInfo DoHtmlObject' , DoHtmlObject);
					if(is_object(DoHtmlObject) && !is_null(DoHtmlObject))
					console.log('SetLoadResultsDataInfo DoHtmlObject.length' , DoHtmlObject.length);
					
					//console.log('SetLoadResultsDataInfo SetAqHtmlMapMarkerInfoContentObject' , SetAqHtmlMapMarkerInfoContentObject);
					//console.log('SetLoadResultsDataInfo SetAqHtmlMapMarkerInfoContentString' , SetAqHtmlMapMarkerInfoContentString);
				}//if(FunPrintConsoleLog)
					
			}//if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
			 
		 
		 
		 
			//ReSetResultsDataSearchData = false;//true,false
			if(!ReSetResultsDataSearchData)
			{
				//if(!is_undefined(initResultsDataReLoad) && is_function(SetLoadingIconShowHide))
				if(typeof initResultsDataReLoad != "undefined" && typeof initResultsDataReLoad =='function')	
				initResultsDataReLoad(true);//true,false
			}//if(!ReSetResultsDataSearchData)
			
			
			
		
			//# if(typeof OpenModalPopup != "undefined" && typeof OpenModalPopup =='function')
			//# OpenModalPopup('PopupContainer',data_message);
			//# if(Location_Refresh)
			//# setTimeout(function(){ My_Location_Refresh(); }, 1000);
			
			/*
			//console.log('result', result );
			//console.log('result.length', result.length );
			var result_length = 0;
			$.each( result, function( key, item ) {
				result_length++;
			});//$.each( result, function( key, item ) {
			//console.log('result_length', result_length);
			if(result_length > 0)
			{
				data = result;
				$Success_Status = 0;
				$Error_Status = 1;
				Location_Refresh = false;
			}//if(result_length > 0)
			*/
		
		}//if(!is_undefined(data.result) && is_object(data.result))
		
		 
	 
		
		
		

			

	
	} //if(is_object(data))
	//$.each( data, function( key , item ) {
	//  //alert( field.name + '=' + field.value)
	//  //console.log( field.name + '=' + field.value + '\n' );
	//  console.log( key + '=' + item + '\n' );
	//  $.each( item[0], function( i2, item2 ) {
	//      console.log( i2 + '=' + item2 + '\n' );
	//  });//$.each( item, function( i2, item2 ) {
	//});//$.each( data, function( key , item ) {
	 
}//function SetLoadResultsDataInfo(object,DoReSetSearchData)




//var PrintConsoleLog = false;//true , false
function GetAjaxLoadDataMap(Action, object, ArrayStore)
{
	/*
	Action = trim_space(Action);
	if (!is_empty(Action))
	GetAjaxLoadDataMap(Th_Object, Action, 'Districts') //ArrayStore= Cities or Districts
	*/		
	
	/*
	Action = trim_space(Action);
	if (!is_empty(Action))
	GetAjaxLoadDataMap(Action, object) //ArrayStore= Cities or Districts
	//GetAjaxLoadDataMap(Action, object, 'all') //ArrayStore= Cities or Districts
	*/	
	
	var DoSetObject = null;
	if(!is_undefined(object) && !is_null(object) && is_object(object) && object.length > 0)
	DoSetObject = object;

	
	//if(!is_object(ArrayReSetTempSearchData) || jQuery.isEmptyObject(ArrayReSetTempSearchData))
	//ArrayReSetTempSearchData = DefaultsDataResultsInfoOptions;
 
	ArrayFullDataResultsInfo = {};
	//ArrayFullDataResultsInfo = DefaultsDataResultsInfoOptions;
	//ArrayReSetTempSearchData = DefaultsDataResultsInfoOptions;
	SetLoadResultsDataInfo(DoSetObject,true);//true,false

	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//true , false
	/*
	if(FunPrintConsoleLog)
	console.log('GetAjaxLoadDataMap object' , object);
	if(FunPrintConsoleLog)
	console.log('GetAjaxLoadDataMap Action' , Action);
	if(FunPrintConsoleLog)
	console.log('GetAjaxLoadDataMap ArrayStore' , ArrayStore);
    if (is_undefined(object) || !is_jquery(object) || is_undefined(Action) || is_undefined(ArrayStore))
        return;
    //ArrayStore = //Cities or Districts
    if (ArrayStore != 'Cities' && ArrayStore != 'Districts')
        return;
  
    object.find("option").not("[Set_Init]").remove();
    if (ArrayStore == 'Cities') {} //if(ArrayStore == 'Cities')
    else if (ArrayStore == 'Districts') {} //else if(ArrayStore == 'Districts')
    //return false;
	*/
	
	if(FunPrintConsoleLog)
	console.log('GetAjaxLoadDataMap Action' , Action);

    var jqxhr = $.ajax({
            type: "GET", //POST //methods: "GET,PUT,POST,DELETE"
            dataType: "json",
            //dataType: 'text',
            //crossDomain: true,
            //dataType: 'jsonp',
            //url: formTag.attr("action")+'[and]ajaxload' ,
            //url: formTag.attr("action")+'?ajaxload' ,
            url: Action, //+'[and]ajaxload'
            //data: formTag.serialize(),
            //data: JSON.stringify({ tripData: data }),
            //contentType: 'application/json; charset=utf-8',
            //  cache: false,
            //async : false,
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'} ,
            beforeSend: function() {
                // Handle the beforeSend event
				//if(FunPrintConsoleLog)
                //console.log( "Handle the beforeSend event" );
            },
            statusCode: {
                404: function() { 
					//if(FunPrintConsoleLog)
					console.log('GetAjaxLoadDataMap ajax 404 action Action ' , Action);
                }
            },
            error: function(request, status, error) {
                // Handle the error event
				//if(FunPrintConsoleLog)
                //console.log( "Handle the error event " );
                // console.log( "error status " , status);
                //console.log( "error error " , error);
                // console.log( "error request " , request);
            },
            complete: function() {
                // Handle the complete event
				//if(FunPrintConsoleLog)
                //console.log( "Handle the complete event " );
            },
            success: function(data) {
                    //JSON.parse(data);
					//console.log('GetAjaxLoadDataMap Action' , Action);
					//console.log('GetAjaxLoadDataMap ajax Data success' , data);
					
				 
						
					if(FunPrintConsoleLog)
					console.log('GetAjaxLoadDataMap ajax Data success' , data);
                    if (is_object(data)) {
                        //ArrayStore = //Cities or Districts
                        //if(ArrayStore != 'Cities' && ArrayStore != 'Districts')
                        //return ;
                        //ArrayStore
						
						
						/*
						var Options = {};	
						//var Options = DefaultsDataResultsInfoOptions;	
						Options = $.extend({},DefaultsDataResultsInfoOptions, data);
						
						if(FunPrintConsoleLog)
						console.log('GetAjaxLoadDataMap ajax Data success Options' , Options);
				
						ArrayFullDataResultsInfo = Options;
						ArrayReSetTempSearchData = Options;
						*/
						
					 
						ArrayFullDataResultsInfo = data;
						ArrayReSetTempSearchData = data;
						
						SetLoadResultsDataInfo(DoSetObject,false);//true,false
						//# ArraySearchResultsInfo = [];
					 
						/*
						if(!is_undefined(data.result) && is_object(data.result))
						{ 
							
						 
							var result = data.result;
							ArraySearchResultsInfo = result;
							//var Options = {};	
							////var Options = DefaultsDataResultsInfoOptions;	
							//# Options = $.extend({},Options, result);
							
							//function SetMapSearchResultsInfo(object,DoReSetSearchData,TagId) 
							var TagId = "AllSelected";
							//# SearchTagIdByMap(TagId);
							SetMapSearchResultsInfo(DoSetObject,false,TagId);
							
							//if(FunPrintConsoleLog)
							//console.log('GetAjaxLoadDataMap ajax Data success result Options' , Options);
							//# var TagId = "AllSelected";
							//# SearchTagIdByMap(TagId);
						 
						}//if(!is_undefined(data.result) && is_object(data.result))
						*/
						//if(!is_undefined(initResultsDataReLoad) && is_function(SetLoadingIconShowHide))
						//# //# if(typeof initResultsDataReLoad != "undefined" && typeof initResultsDataReLoad =='function')	
						//# initResultsDataReLoad(true);//true,false
                    } //if(is_object(data))
						
					
					
					/*
					if (is_object(data)) {
						//ArrayStore = //Cities or Districts
						//if(ArrayStore != 'Cities' && ArrayStore != 'Districts')
						//return ;
						//ArrayStore
						
						
						ArrayFullDataResultsInfo = data;
						//# ArraySearchResultsInfo = [];

						var data_status = 0;//0,1,2
						var $show = null;
						var $hide = null;
						var $active = null;
						var $un_active = null;	
						var ObjectTagMessagesResult = "";
						var data_action = "";
						var $Success_Status = 1;
						var $Error_Status = 0;
						
						//var SetAqHomeObject = null;
						var SetAqHtmlSearchListObject = null;//'.wrap_box_content ul.search_list'
						var SetAqHtmlSearchListDataResult = null;
						var SetShowHtmlSearchList =  true;//true,false
						
						//data-item="search"
						//$('.wrap_box_content ul.search_list').html('');//SetAqHtmlSearchListDataResult
						//$('.wrap_box_content ul.search_list').hide();
					 
						if(!is_undefined(data.SuccessStatus))
						{
							$Success_Status = data.SuccessStatus;
						}//if(is_undefined(data.SuccessStatus))
						if(!is_undefined(data.ErrorStatus))
						{
							$Error_Status = data.ErrorStatus;
						}//if(is_undefined(data.ErrorStatus))
						if(!is_undefined(data.status))
						{
							//console.log( 'status' );
							//console.log( data.status );
							data_status = data.status;
						}//if(is_undefined(data.status))
						if(!is_undefined(data.message))
						{
							//console.log( 'message' );
							//console.log( data.message );
							data_message = data.message;
						}//if(!is_undefined(data.message))
							
						
						if(!is_undefined(data.action))
						{
							//console.log( 'action' );
							//console.log( data.action );
							data_action = trim_space(data.action);//register , login , forget_password , activate_account
						}//if(!is_undefined(data.action))	
						
					
						if(!is_undefined(data.show))
							$show = trim_space(data.show);
						if(!is_undefined(data.hide))
							$hide = trim_space(data.hide);
						 
						
						//var SetAqHomeObject = null;
						//# var SetAqHtmlSearchListObject = null;//'.wrap_box_content ul.search_list'
						//# var SetAqHtmlSearchListDataResult = null;
						//# var SetShowHtmlSearchList =  true;//true,false
						
						//data-item="search"
						//$('.wrap_box_content ul.search_list').html('');//SetAqHtmlSearchListDataResult
						//$('.wrap_box_content ul.search_list').hide();
						if(!is_undefined(data.HtmlSearchListObject) && !data.HtmlSearchListObject)
						{
							//SetShowSearchList = Set_parseInt(data.ShowSearchList);
							SetShowSearchList =  false;//true,false
						}//if(!is_undefined(data.ShowSearchList) && !data.ShowSearchList)
							
						if(!is_undefined(data.HtmlSearchListObject) && !is_empty(data.HtmlSearchListObject))
							SetAqHtmlSearchListObject = trim_space(data.HtmlSearchListObject);
						
						if(!is_undefined(data.result) && is_object(data.result))
						{
							
							var result = data.result;
							
							//# var ArrayPlacesResultsInfo = [];
						 
							ArraySearchResultsInfo = result;
							
							if(is_empty(SetAqHtmlSearchListObject) && !is_undefined(result.HtmlSearchListObject) && !is_empty(result.HtmlSearchListObject))
							SetAqHtmlSearchListObject = trim_space(result.HtmlSearchListObject);
							
							if(SetShowSearchList && !is_undefined(result.HtmlSearchListObject) && !result.HtmlSearchListObject)
							{
								//SetShowSearchList = Set_parseInt(result.ShowSearchList);
								SetShowSearchList =  false;//true,false
							}//if(SetShowSearchList && !is_undefined(result.HtmlSearchListObject) && !result.HtmlSearchListObject)
								
						 
							
							
							
							
							
							//if(!is_undefined(initResultsDataReLoad) && is_function(SetLoadingIconShowHide))
							if(typeof initResultsDataReLoad != "undefined" && typeof initResultsDataReLoad =='function')	
							initResultsDataReLoad(true);//true,false
						
						
							//# if(typeof OpenModalPopup != "undefined" && typeof OpenModalPopup =='function')
							//# OpenModalPopup('PopupContainer',data_message);
							//# if(Location_Refresh)
							//# setTimeout(function(){ My_Location_Refresh(); }, 1000);
							 
						}//if(!is_undefined(data.result) && is_object(data.result))
						
						
						
						
						if($hide &&  !is_empty($hide))
						{
							//console.log('form[ajaxSend=1] submit formTag.find($hide).length' , formTag.find($hide).length);
							//console.log('form[ajaxSend=1] submit $($hide).length' , $($hide).length);
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find($hide).length > 0)
								{
									DoSetObject.find($hide).hide();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find($hide).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							//if(formTag.find($hide).length > 0)
							//formTag.find($hide).hide();
							if(DoShowHide && $($hide).length > 0)
							$($hide).hide();
							//console.log('form[ajaxSend=1] submit $hide' , $hide);
						}//if($hide &&  !is_empty($hide))
							
						if($show &&  !is_empty($show))
						{
							//var formTag = $(this);
							//var Object = $(this);
							////console.log('form[ajaxSend=1] submit formTag.find($show).length' , formTag.find('[svgFavorite=1]').length);
							//console.log('form[ajaxSend=1] submit formTag.find($show).length' , formTag.find($show).length);
							//console.log('form[ajaxSend=1] submit $($show).length' , $($show).length);
							DoShowHide = true;//true,false
							if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							{
								if(DoSetObject.find($show).length > 0)
								{
									DoSetObject.find($show).show();
									DoShowHide = false;//true,false
								}//if(DoSetObject.find($show).length > 0)
							}//if(!is_null(DoSetObject) && is_object(DoSetObject) && DoSetObject.length > 0)
							//if(formTag.find($show).length > 0)
							//formTag.find($show).show();
							if(DoShowHide && $($show).length > 0)
							$($show).show();
							//console.log('form[ajaxSend=1] submit $show' , $show);
						}//if($show &&  !is_empty($show))
						
						 
					
					} //if(is_object(data))
					*/
	
                    //$.each( data, function( key , item ) {
                    //  //alert( field.name + '=' + field.value)
                    //  //console.log( field.name + '=' + field.value + '\n' );
                    //  console.log( key + '=' + item + '\n' );
                    //  $.each( item[0], function( i2, item2 ) {
                    //      console.log( i2 + '=' + item2 + '\n' );
                    //  });//$.each( item, function( i2, item2 ) {
                    //});//$.each( data, function( key , item ) {
						
					return null;	
                } //success: function(data){
        }).done(function(data) {
            //alert( "success" );
			//if(FunPrintConsoleLog)
            //console.log( "done success" );
        })
        .fail(function() {
            //alert( "error" );
			//if(FunPrintConsoleLog)
            //console.log( "fail error" );
        })
        .always(function(data) {}); //$.ajax({
    // Perform other work here ...
    // Set another completion function for the request above
    jqxhr.always(function() {
        //alert( "second complete" );
    });
	
	return null;
} //function GetAjaxLoadDataMap(Action, object, ArrayStore)




function initResultsDataReLoad(ReLoadData)
{
	var ReSetResultsData = false;//true,false
	if(!is_undefined(ReLoadData) && ReLoadData)
		ReSetResultsData = true;//true,false
	
	// ReSetResultsData = false;//true,false
	if(!ReSetResultsData)
	$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").unbind("click");
	//$("[DataInfoLink=1]").unbind("click");
	$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click( function() {
		//EventClickGetInfoData=\"1\" IndexResultsInfo=\"25\"
		
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
		
		//var TagId = ""; 
		//if(!is_undefined($(this).attr("SearchFilterInput")) && !is_empty($(this).attr("SearchFilterInput")))
        //   TagId =  trim_space($(this).attr("SearchFilterInput"));
	   
	   //SearchButtonClick = false;//true , false
	   if(!map)
		{
			//SearchButtonClick = true;//true , false
			return null;
		}//if(!map)
	   var IndexResultsInfo = ""; 
		if(!is_undefined($(this).attr("IndexResultsInfo")) && !is_empty($(this).attr("IndexResultsInfo")))
           IndexResultsInfo =  trim_space($(this).attr("IndexResultsInfo"));
	   
		var SetIndexResultsInfo = ""; 
		if(!is_empty(IndexResultsInfo))
		{
			Coun = Set_parseInt(IndexResultsInfo);
			if(Coun > 0)
			SetIndexResultsInfo = Coun;
		}//if(!is_empty(IndexResultsInfo))
		 
		//console.log(' EventClickGetInfoData filter[IndexResultsInfo] click SetIndexResultsInfo' , SetIndexResultsInfo);
	 
	 
		if(!is_empty(SetIndexResultsInfo))
		{
			var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
			//SetMapSearchResultsInfo(object,DoReSetSearchData,SetIndexResultsInfo,TagId)
			var ReSetDoReSetSearchData = false;//true,false	
			//SetMapSearchResultsInfo(SetIndexResultsInfo,ReSetDoReSetSearchData);
			SetMapSearchResultsInfo(SetIndexResultsInfo , false , TagId);
			//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
			//# //# $(".js-item").filter(".active").click();
			//# $("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
			//# console.log(' $([EventClickGetInfoData=1]).filter([IndexResultsInfo]) SetIndexResultsInfo' , SetIndexResultsInfo);
		}//if(!is_empty(SetIndexResultsInfo))
		
		
		return false; 
	});//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click( function() {
		
		
}//function initResultsDataReLoad(ReLoadData)

function initPageLoad() 
{
	if(typeof initResultsDataReLoad != "undefined" && typeof initResultsDataReLoad =='function')	
	initResultsDataReLoad(false);//true,false
}//function initPageLoad()


var HomeObject = null;
//var SetliveHomeObjectDataList = null;
//var SetVarHomeObjectNameString = "";//'.wrap_box_content'
//var SkipGetSearchResultDataList = false;//true,false


var map = null;
var marker = null;
var markers = [];

 
var markers_latlng = [];
var image = null;
var Maps_Set_New = true;
var Maps_SetInputsValueEmpty = false;
var Google_Maps_Loaded = false;
var display_maps_time = null;
var infowindow = null;
var geocoder = null;
//var DefaultsMapLatitude = null;
//var DefaultsMapLongitude = null;
//var DefaultsMapZoom = 0;
var DefaultsMapZoom = 7;

var MaxMapsZoom = null;
var MinMapsZoom = null;

//var SelectedCategoryId = null;
var SelectedTagId = null;
var SelectedSectionId = "";
var SelectedCityId = "";
	
var PrintConsoleLog = false;//false , true;	
var SearchNearByMapClick = false;//true , false
var RunChangeSearchMapChange = false;//true , false
var SearchButtonClick = false;//true , false
var RunInitPageLoadAutoRun = false;//true , false


function BuildMapHighlightPlaceAddress() { //Build_Map_Highlight_Place_Address
   if($('#div_Build_Map_Highlight_Place_Address').length > 0)
   $("#input_place_id").change();
} //function BuildMapHighlightPlaceAddress()






$( document ).ready(function() {
//'use strict';
	/*
	$("#input_place_id").change(function() {
		//var _value =  parseInt($(this).val());
		var _value = Set_String($(this).val());
		//var Key = "q=place_id:" + _value + "&key=AIzaSyCzKm4vePANibv1HPYQx2yL_PG_CYMgujg";
		var Key = "q=place_id:" + _value + "&key=AIzaSyBkBkwWF2yh5nQ_W-_yasjr7FtJYQrIZX0";
		//$("Build_Map_Highlight_Place_Address").animate({height: scrollHeight + 'px'}, 500)
		var Src = 'https://www.google.com/maps/embed/v1/place?' + Key;

		//$('#div_Build_Map_Highlight_Place_Address').hide("slow");
		//$('#Build_Map_Highlight_Place_Address').hide("slow");

		if($('#div_Build_Map_Highlight_Place_Address').length > 0)
		{
			//$('#Build_Map_Highlight_Place_Address').hide("slow",function(){
			//	   $('#div_Build_Map_Highlight_Place_Address').hide("slow");
			//});
			if (is_empty(_value))
			{
				Src = "";
			}
			else
			{
				$('#div_Build_Map_Highlight_Place_Address').show("slow",function(){
					$('#Build_Map_Highlight_Place_Address').show("slow");
				});
			}
			$('#Build_Map_Highlight_Place_Address').attr('src', Src);
		}//if($('#div_Build_Map_Highlight_Place_Address').length > 0)
	}); // $("#input_place_id").change( function() {
	if($('#div_Build_Map_Highlight_Place_Address').length > 0)	
	$("#input_place_id").change();    
	*/
	
	/*
	// latval = 15.3691, longval = 44.1895;
	
		setTimeout( function () {
		$('.wrapper').addClass('loaded');
	},500) 
	
	if (window.matchMedia('(min-width: 1200px)').matches) {
		var window_height,
		header_height,
		page_height;
		window_height = $( window ).height();
		header_height = $('.site-header').innerHeight();
		$('.page_content').height(window_height - header_height);
	}
	else{
		$('.page_content').css('height', '');
	}
	
	$(window).resize(function(){
		if (window.matchMedia('(min-width: 1200px)').matches) {
			var window_height,
			header_height,
			page_height;
			window_height = $( window ).height();
			header_height = $('.site-header').innerHeight();
			$('.page_content').height(window_height - header_height);
		}
		else{
			$('.page_content').css('height', '');
		}
	});
	
	
	if(!is_undefined(SetLoadingIcon) && is_function(SetLoadingIcon))
	SetLoadingIcon(); 
	//if(!is_undefined(SetLoadingIconShowHide) && is_function(SetLoadingIconShowHide))
	//SetLoadingIconShowHide(true);
	if(!is_undefined(SetLoadingIconShowHide) && is_function(SetLoadingIconShowHide))
	SetLoadingIconShowHide();
	*/
	/*
	var DefaultsOptions = {
			//"MapZoom": '8',
						//"maps_latitude": '15.3691',
			//"maps_longitude": '44.1895',
			
			"DefaultsMapZoom": '7',
			//"DefaultsMapLatitude": '15.3691',
			//"DefaultsMapLongitude": '44.1895',
			"DefaultsMapLatitude": '15.38308',
			"DefaultsMapLongitude": '44.21128',
			
			//"ResultsServicePointsGoogleLatLngInfo": null ,// [{}]
			//"ResultsCategoryServicePointsGoogleLatLngInfo": null ,// [{}]
			//"RunFilterSearch": false ,//true , false
			//"CityGoogleLatLngInfo": null ,// [{}]
			//"ResultsInfo": null // [{}]
        };
	DefaultsOptions = DefaultsDataResultsInfoOptions; 
	*/
	/*
//$("[RunChangeSearchMap=1]").filter("[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]")
$("[MapJsonOptions]").each(function(i){
	//.filter("[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]")
	
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
		
	var ObjectJsonOptions =  $(this);
	var JsonContent = $(this).text();
	if(!is_empty(JsonContent))
		JsonContent = trim_space(JsonContent);
	//Index = Set_parseInt(Index);
	//if(is_empty(ColorName))
	//$( "div:contains('John')" ).css( "text-decoration", "underline" );

 
	var Options = {};	
	//var Options = DefaultsOptions;	
	Options = $.extend({},DefaultsOptions, Options);
	if(!is_empty(JsonContent))
	{
		//var Options = {};
		//JsonContent = trim_space(JsonContent);
		var JsonOptions = {};
		JsonOptions = JSON.parse(JsonContent);
		//if(isJSON(JsonContent)) 
		//JsonOptions =SetDataJSON(JsonContent);
		 
		if(is_object(JsonOptions))
		Options = $.extend({},DefaultsOptions, JsonOptions);
		//console.log('$([MapJsonOptions]).each typeof JsonOptions' , typeof JsonOptions);
		//console.log('$([MapJsonOptions]).each JsonOptions' , JsonOptions);
	  
		//console.log('$([MapJsonOptions]).each typeof JsonContent' , typeof JsonContent);
		//console.log('$([MapJsonOptions]).each JsonContent' , JsonContent);
		//console.log('$([MapJsonOptions]).each Options' , Options);
		ObjectJsonOptions.remove();
	}//if(!is_empty(JsonContent))	
		
	ArrayFullDataResultsInfo  = Options;
	//console.log('$([MapJsonOptions]).each ArrayFullDataResultsInfo.length' , ArrayFullDataResultsInfo.length);
	
	
	if(FunPrintConsoleLog)//if(is_object(ArrayFullDataResultsInfo))
	console.log('$([MapJsonOptions]).each ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
	//console.log(' ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
 });//$("[MapJsonOptions]").each(function(i){
		
*/
		
	//SearchNearByMapClick = false;//true , false
	//RunChangeSearchMapChange = false;//true , false
	//SearchButtonClick = false;//true , false
	$("[SearchNearByMapPlaces=1]").unbind("click");
	$("[SearchNearByMapPlaces=1]").click( function() {
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
	
		if(!map)
		{
			SearchNearByMapClick = true;//true , false
			RunInitPageLoadAutoRun = true;//true , false
			return null;
		}//if(!map)
		SearchNearByMapClick = false;//true , false
		RunInitPageLoadAutoRun = false;//true , false
	
		var _action = null;
	  
		//getMyLocationAuto();
		getMyLocationbyPlaces();
		//getMyLocation(_action);
		return false;
	});//$("[SearchNearByMap=1]").click( function() {
	
	//if($("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	//$("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();	
	
	$("[SearchNearByMap=1]").unbind("click");	
	$('[SearchNearByMap=1]').click(function(){
	 
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
		 
		if(!map)
		{
			SearchNearByMapClick = true;//true , false
			RunInitPageLoadAutoRun = true;//true , false
			return null;
		}//if(!map)
		SearchNearByMapClick = false;//true , false
		RunInitPageLoadAutoRun = false;//true , false
	
		SetliveHomeObjectDataList = null;
		//# SetliveHomeObjectDataList = HomeObject;
		var SetAqAction = "";
		var SetAqHomeObject = null;
		var SetSkipTestAqAction =  false;//true,false
		SetVarHomeObjectNameString = "";
		//var Action = "";
		
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
		
		$('.MapMarkerInfoContent').find('[data-id=1]').html('');
		$('.MapMarkerInfoContent').find('[data-id=1]').hide();
		$('.MapMarkerInfoContent').find('.action-close').click();
		
		$('.action-zone').find('[data-id=1]').html('');
		$('.action-zone').find('[data-id=1]').hide();
		$('.action-zone').find('.action-close').click();
		
		//var _value =  parseInt(This_Object.val());
        //var _value = Set_String(This_Object.val());
        var SetVarValue = $(this).attr("SetAqAction");
        if(is_undefined(SetVarValue))
            SetVarValue = "";
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("SetAction");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
		
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("Action");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("href");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
		
		if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
		{
			SetVarValue = trim_space(SetVarValue);
			if(SetVarValue !="")
			SetAqAction = SetVarValue;
		}
		
	 
		if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))
		{ 
			SetVarValue = $(this).attr("SetSkipTestAqAction");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SetSkipTestAction");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SkipTestAction");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			 
			//if(!is_empty(SetVarValue) && (SetVarValue != "0" && SetVarValue != "1"))
			//if(!is_empty(SetVarValue) && SetVarValue != "1")
			//	SetVarValue = "";
			if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			{
				SetVarValue = trim_space(SetVarValue);
				//SetSkipTestAqAction =  false;//true,false
				//SetSkipTestAqAction = SetVarValue;
				if(SetVarValue == "1")
				SetSkipTestAqAction =  true;//true,false
			}
			
		 
			SetVarValue = $(this).attr("SetAqHomeObject");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SetHomeObject");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("HomeObject");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			 
			//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			//SetVarValue = trim_space(SetVarValue);
			 
			if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			{
				
				//console.log('[SearchNearByMap=1] click SetAqHomeObject SetVarValue ', SetVarValue);
				//SetVarValueString = '"'+SetVarValue+'"';
				SetVarValueString = ''+SetVarValue;
				SetVarValueObject = $(SetVarValueString);
				//if(!is_object(SetVarValueObject) || is_null(SetVarValueObject) || !SetVarValueObject || (is_object(SetVarValueObject) && SetVarValueObject.length == 0))
				if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
				{
					SetVarValueString = '.'+SetVarValue;
					SetVarValueObject = $(SetVarValueString);
					if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
					{
						SetVarValueString = '#'+SetVarValue;
						SetVarValueObject = $(SetVarValueString);
					}//if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
				}//if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
			 
				//console.log('[SearchNearByMap=1] click SetVarValue ', SetVarValue)
				//console.log('[SearchNearByMap=1] click SetVarValueString ', SetVarValueString);
				//console.log('[SearchNearByMap=1] click SetVarValueObject ', SetVarValueObject);
				////if(!is_undefined(SetVarValueObject) && !is_null(SetVarValueObject) && is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//console.log('[SearchNearByMap=1] click SetVarValueObject.length', SetVarValueObject.length );
				
				
				//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
				//SetVarValue = trim_space(SetVarValue);
			 
				SetVarHomeObjectNameString = "";//'.wrap_box_content'
				//SetMapInfoLinkEvent(SetAqHomeObject.find('ul.search_list') , SetAqHomeObject);
				//if(!is_undefined(SetVarValueObject) && !is_null(SetVarValueObject) && is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				{
					//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
					//SetVarHomeObjectNameString = trim_space(SetVarHomeObjectNameString);
					SetVarHomeObjectNameString = SetVarValueString;//'.wrap_box_content'
					SetAqHomeObject = SetVarValueObject;
					//SetliveHomeObjectDataList = null;
					SetliveHomeObjectDataList = SetAqHomeObject;
				}
				 
			}//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			
			//if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
			//SetAqHomeObject = HomeObject;
			if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
			{
				//var SetVarHomeObjectNameString = "";//'.wrap_box_content'	
				SetVarValueObject = $(this).parents('.wrap_box_content').eq(0);
				//if(SetVarValueObject.length == 0) 
				//SetVarValueObject = $(this).parents("form[SearchMap=1]").parents('.wrap_box_content').eq(0);
				if(SetVarValueObject.length == 0) 
				SetVarValueObject = $("form[SearchMap=1]").parents('.wrap_box_content').eq(0);
				if(SetVarValueObject.length == 0) 
				SetVarValueObject = $('.wrap_box_content').eq(0);
				//SetVarValueObject = $('.WrapBoxContentSearchMap');
				SetVarHomeObjectNameString = "";//'.wrap_box_content'
				if(SetVarValueObject.length > 0)
				{
					//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
					//SetVarHomeObjectNameString = trim_space(SetVarHomeObjectNameString);
					SetVarHomeObjectNameString = '.wrap_box_content';//'.wrap_box_content'
					SetAqHomeObject = SetVarValueObject;
					//SetliveHomeObjectDataList = null;
					SetliveHomeObjectDataList = SetAqHomeObject;
				}
				//if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//SetAqHomeObject = SetVarValueObject;
			}//if(!is_object(SetAqHomeObject) || SetAqHomeObject.length == 0)
				
			//if(is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
			//HomeObject = SetAqHomeObject;
		 
		 
			
			
			//HomeObject.find('ul.search_list  a[DataInfoLink]').eq($index).click();
		}//if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))	
		
		/*
		//if(!is_undefined(SetAqHomeObject) && !is_null(SetAqHomeObject) && is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
		if(!is_undefined(SetliveHomeObjectDataList) && !is_null(SetliveHomeObjectDataList) && is_object(SetliveHomeObjectDataList) && SetliveHomeObjectDataList.length > 0)
		{
			//# console.log('[SearchNearByMap=1] click SetAqHomeObject.length', SetAqHomeObject.length );
			//# console.log('[SearchNearByMap=1] click SetliveHomeObjectDataList.length', SetliveHomeObjectDataList.length );
			//$(this).removeClass("active");
			//# $(this).find('[SearchNearByMap=1]').removeClass("active");
			
			$('[SearchNearByMap=1]').removeClass("active");
			
			//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
			//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
			
			//$('.MapMarkerInfoContent').find('[data-id=1]').html('');
			//$('.MapMarkerInfoContent').find('[data-id=1]').hide();
			//$('.MapMarkerInfoContent').find('.action-close').click();
		
			//$('.action-zone').find('[data-id=1]').html('');
			//$('.action-zone').find('[data-id=1]').hide();
			//$('.action-zone').find('.action-close').click();
			
		}//if(!is_undefined(SetliveHomeObjectDataList) && !is_null(SetliveHomeObjectDataList) && is_object(SetliveHomeObjectDataList) && SetliveHomeObjectDataList.length > 0)
		$(this).addClass("active");
		*/ 
		 
		/*
		if(!map)
		{
			SearchNearByMapClick = true;//true , false
			return null;
		}//if(!map)
		SearchNearByMapClick = false;//true , false
	
		var _action = null;
	  
		getMyLocation();
		//getMyLocation(_action);
		*/ 
		
		
		var SetAction = "";
		//console.log('[SearchNearByMap=1] click SetAqAction ', SetAqAction);
		if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))
		{
			SetAction = getMyLocationAction(SetAqAction,SetAqHomeObject);
			//////if(Get_Has_Index_Search(action,'[\?]','gi'))
			////SetAction = action +"?"+ SetAction;	
			////SetAction = FixingAction(SetAction);
			//console.log('[SearchNearByMap=1] click SetAction ', SetAction);
			
		}
		//console.log('[SearchNearByMap=1] click SetAqAction ', SetAqAction);
		//console.log('[SearchNearByMap=1] click SetAction ', SetAction);
		
		//	if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
		//if(!SetSkipTestAqHomeObject && !SetSkipGetDataList)
		/*	
		SkipGetSearchResultDataList = false;//true,false
		//return _get_json_locationsATMs(SetAction , SetSkipTestAqAction , SetAqHomeObject);
		if(!is_undefined(SetAction) && is_string(SetAction) && !is_empty(SetAction))
		{
			//SkipGetSearchResultDataList = true;//true,false
		 
			LoadData = GetAjaxLoadDataMap(SetAction,SetAqHomeObject);
				//console.log('.search_button click LoadData ', LoadData);
		}
		*/
		
		return false;
		
	 
	});//$('[SearchNearByMap=1]').click(function(){
	
	//if($("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	//$("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
	
	/*	
	//var SelectedSectionId = "";
	//var SelectedCityId = "";
	$("[RunChangeSearchMap=1]").unbind("change");
	$("[RunChangeSearchMap=1]").change( function() { 
		
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
		
		if(!map)
		{
			RunChangeSearchMapChange = true;//true , false
			return null;
		}//if(!map)
		RunChangeSearchMapChange = false;//true , false
	
		var Val = $(this).val();
		
		var RunSearchTagIdByMap = false;//true , false
		var TagId = ""; 
		if(!is_undefined($(this).attr("SearchFilterInput")) && !is_empty($(this).attr("SearchFilterInput")))
           TagId =  trim_space($(this).attr("SearchFilterInput"));
       
		//if(!is_empty(TagId) &&  SelectedTagId === TagId)
		//	TagId = "";
		if(!is_empty(TagId) && TagId == "SectionId")
		{
			////SelectedTagId = TagId;
			//if(SelectedSectionId == Val)
			//	return false;
			if(SelectedSectionId != Val)
			{
				RunSearchTagIdByMap = true;//true , false
				SelectedSectionId = Val;
			}//if(SelectedSectionId != Val)
	
		}//if(!is_empty(TagId) && TagId == "SectionId")
			
		if(!is_empty(TagId) && TagId == "CityId")
		{
			////SelectedTagId = TagId;
			//if(SelectedCityId == Val)
			//	return false;
			if(SelectedCityId != Val)
			{
				RunSearchTagIdByMap = true;//true , false
				SelectedCityId = Val;
			}//if(SelectedCityId != Val)
		}//if(!is_empty(TagId) && TagId == "CityId")
			
		
		
		if(FunPrintConsoleLog)
		{
			console.log(' RunChangeSearchMap change SelectedTagId' , SelectedTagId);
			console.log(' RunChangeSearchMap change SelectedSectionId' , SelectedSectionId);
			console.log(' RunChangeSearchMap change SelectedCityId' , SelectedCityId);
		}//if(FunPrintConsoleLog)
			
		if(RunSearchTagIdByMap)
			SearchTagIdByMap(TagId);
	 
		return false;
	});//$("[RunChangeSearchMap=1]").change( function() { 
	
	$("[SearchButton=1]").unbind("click");
	$("[SearchButton=1]").click( function() {
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
		
		if(!map)
		{
			SearchButtonClick = true;//true , false
			return null;
		}//if(!map)
		SearchButtonClick = false;//true , false
	
		var RunSearchTagIdByMap = false;//true , false 
		
		var ValSectionId = $("select[SearchFilterInput]").filter("[SearchFilterInput=SectionId]").val();
		var ValCityId = $("select[SearchFilterInput]").filter("[SearchFilterInput=CityId]").val();
		
		if(SelectedSectionId != ValSectionId)
		{
			RunSearchTagIdByMap = true;//true , false
			SelectedSectionId = ValSectionId;
		}//if(SelectedSectionId != ValSectionId)
			
		if(SelectedCityId != ValCityId)
		{
			RunSearchTagIdByMap = true;//true , false
			SelectedCityId = ValCityId;
		}//if(SelectedCityId != ValCityId)
			
		var TagId = "AllSelected";
		if(FunPrintConsoleLog)
		{
			console.log(' SearchButton click ValSectionId' , ValSectionId);
			console.log(' SearchButton click SelectedSectionId' , SelectedSectionId);
			console.log(' SearchButton click ValCityId' , ValCityId);
			console.log(' SearchButton click SelectedCityId' , SelectedCityId);
		}//if(FunPrintConsoleLog)
		
		
		
		
		if(RunSearchTagIdByMap)
		SearchTagIdByMap(TagId);
		 
		return false; 
	});//$("[SearchCategoryByMap=1]").click( function() {
		
*/

	
	
	//$("[ReSetSearchData=1]").unbind("click");
	$('[ReSetSearchData=1]').click(function(){
	 
		//$(this).find('[GetSearchActionData=1]').eq(0).addClass("active");
		//# $(this).find('[GetSearchActionData=1]').removeClass("active");
			
		SkipGetSearchResultDataList = false;//true,false
		//SetliveHomeObjectDataList = null;
		SetliveHomeObjectDataList = HomeObject;
		var SetTabIndex = $(this).attr("SetTabIndex");
		if(is_undefined(SetTabIndex))
			SetTabIndex = "";
		if(!is_string(SetTabIndex) || is_empty(SetTabIndex))
		{
			SetTabIndex = $(this).attr("ObjMap");
			if(is_undefined(SetTabIndex))
				SetTabIndex = "";
		}//if(!is_string(SetTabIndex) || is_empty(SetTabIndex))
			
		if(is_string(SetTabIndex) && !is_empty(SetTabIndex))
		{
			//var ArrayReSetTempSearchData  = [];
			
			//console.log('[ReSetSearchData=1] click SetTabIndex ', SetTabIndex);
			//console.log('[ReSetSearchData=1] click ArrayReSetTempSearchData ', ArrayReSetTempSearchData);
			//console.log('[ReSetSearchData=1] click ArrayReSetTempSearchData.length', ArrayReSetTempSearchData.length );
			
			//console.log('[ReSetSearchData=1] click _Array_locations_Info.length', _Array_locations_Info.length );
		}//if(is_string(SetTabIndex) && !is_empty(SetTabIndex))
		
		
 
	});//$('[ReSetSearchData=1]').click(function(){

	//SearchMap="1" ObjMap="ATMs"
	//$('[ReSetSearchData=1]').filter('.active').click();
	
	$("[GetSearchActionData=1]").unbind("click");
	$('[GetSearchActionData=1]').click(function(){
	 //SkipGetSearchResultDataList = false;//true,false
	 
		if(!map)
		{
			SearchButtonClick = true;//true , false
			RunInitPageLoadAutoRun = true;//true , false
			return null;
		}//if(!map)
		SearchButtonClick = false;//true , false
		RunInitPageLoadAutoRun = false;//true , false
		
		//PrintConsoleLog = true;//false , true;
		var FunPrintConsoleLog = PrintConsoleLog;
		//FunPrintConsoleLog = true;//false , true;
		
		SetliveHomeObjectDataList = null;
		//# SetliveHomeObjectDataList = HomeObject;
		var SetAqAction = "";
		var SetAqHomeObject = null;
		var SetSkipTestAqAction =  false;//true,false
		SetVarHomeObjectNameString = "";
		//var Action = "";
		
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
		
		$('.MapMarkerInfoContent').find('[data-id=1]').html('');
		$('.MapMarkerInfoContent').find('[data-id=1]').hide();
		$('.MapMarkerInfoContent').find('.action-close').click();
		
		$('.action-zone').find('[data-id=1]').html('');
		$('.action-zone').find('[data-id=1]').hide();
		$('.action-zone').find('.action-close').click();
		
		//var _value =  parseInt(This_Object.val());
        //var _value = Set_String(This_Object.val());
        var SetVarValue = $(this).attr("SetAqAction");
        if(is_undefined(SetVarValue))
            SetVarValue = "";
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("SetAction");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
		
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("Action");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
		if(!is_string(SetVarValue) || is_empty(SetVarValue))
		{
			SetVarValue = $(this).attr("href");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
		}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
		
		if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
		{
			SetVarValue = trim_space(SetVarValue);
			if(SetVarValue !="")
			SetAqAction = SetVarValue;
		}
		
	 
		if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))
		{ 
			SetVarValue = $(this).attr("SetSkipTestAqAction");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SetSkipTestAction");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SkipTestAction");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			 
			//if(!is_empty(SetVarValue) && (SetVarValue != "0" && SetVarValue != "1"))
			//if(!is_empty(SetVarValue) && SetVarValue != "1")
			//	SetVarValue = "";
			if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			{
				SetVarValue = trim_space(SetVarValue);
				//SetSkipTestAqAction =  false;//true,false
				//SetSkipTestAqAction = SetVarValue;
				if(SetVarValue == "1")
				SetSkipTestAqAction =  true;//true,false
			}
			
		 
			SetVarValue = $(this).attr("SetAqHomeObject");
			if(is_undefined(SetVarValue))
				SetVarValue = "";
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("SetHomeObject");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			
			if(!is_string(SetVarValue) || is_empty(SetVarValue))
			{
				SetVarValue = $(this).attr("HomeObject");
				if(is_undefined(SetVarValue))
					SetVarValue = "";
			}//if(!is_string(SetVarValue) || is_empty(SetVarValue))
			 
			//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			//SetVarValue = trim_space(SetVarValue);
			 
			if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			{
				
				//console.log('[GetSearchActionData=1] click SetAqHomeObject SetVarValue ', SetVarValue);
				//SetVarValueString = '"'+SetVarValue+'"';
				SetVarValueString = ''+SetVarValue;
				SetVarValueObject = $(SetVarValueString);
				//if(!is_object(SetVarValueObject) || is_null(SetVarValueObject) || !SetVarValueObject || (is_object(SetVarValueObject) && SetVarValueObject.length == 0))
				if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
				{
					SetVarValueString = '.'+SetVarValue;
					SetVarValueObject = $(SetVarValueString);
					if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
					{
						SetVarValueString = '#'+SetVarValue;
						SetVarValueObject = $(SetVarValueString);
					}//if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
				}//if(!is_object(SetVarValueObject) || SetVarValueObject.length == 0)
			 
				//console.log('[GetSearchActionData=1] click SetVarValue ', SetVarValue)
				//console.log('[GetSearchActionData=1] click SetVarValueString ', SetVarValueString);
				//console.log('[GetSearchActionData=1] click SetVarValueObject ', SetVarValueObject);
				////if(!is_undefined(SetVarValueObject) && !is_null(SetVarValueObject) && is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//console.log('[GetSearchActionData=1] click SetVarValueObject.length', SetVarValueObject.length );
				
				
				//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
				//SetVarValue = trim_space(SetVarValue);
			 
				SetVarHomeObjectNameString = "";//'.wrap_box_content'
				//SetMapInfoLinkEvent(SetAqHomeObject.find('ul.search_list') , SetAqHomeObject);
				//if(!is_undefined(SetVarValueObject) && !is_null(SetVarValueObject) && is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				{
					//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
					//SetVarHomeObjectNameString = trim_space(SetVarHomeObjectNameString);
					SetVarHomeObjectNameString = SetVarValueString;//'.wrap_box_content'
					SetAqHomeObject = SetVarValueObject;
					//SetliveHomeObjectDataList = null;
					SetliveHomeObjectDataList = SetAqHomeObject;
				}
				 
			}//if(!is_undefined(SetVarValue) && is_string(SetVarValue) && !is_empty(SetVarValue))
			
			//if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
			//SetAqHomeObject = HomeObject;
			if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
			{
				//var SetVarHomeObjectNameString = "";//'.wrap_box_content'	
				SetVarValueObject = $(this).parents('.wrap_box_content').eq(0);
				//if(SetVarValueObject.length == 0) 
				//SetVarValueObject = $(this).parents("form[SearchMap=1]").parents('.wrap_box_content').eq(0);
				if(SetVarValueObject.length == 0) 
				SetVarValueObject = $("form[SearchMap=1]").parents('.wrap_box_content').eq(0);
				if(SetVarValueObject.length == 0) 
				SetVarValueObject = $('.wrap_box_content').eq(0);
				//SetVarValueObject = $('.WrapBoxContentSearchMap');
				SetVarHomeObjectNameString = "";//'.wrap_box_content'
				if(SetVarValueObject.length > 0)
				{
					//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
					//SetVarHomeObjectNameString = trim_space(SetVarHomeObjectNameString);
					SetVarHomeObjectNameString = '.wrap_box_content';//'.wrap_box_content'
					SetAqHomeObject = SetVarValueObject;
					//SetliveHomeObjectDataList = null;
					SetliveHomeObjectDataList = SetAqHomeObject;
				}
				//if(is_object(SetVarValueObject) && SetVarValueObject.length > 0)
				//SetAqHomeObject = SetVarValueObject;
			}//if(!is_object(SetAqHomeObject) || SetAqHomeObject.length == 0)
				
			//if(is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
			//HomeObject = SetAqHomeObject;
		 
		 
			
			
			//HomeObject.find('ul.search_list  a[DataInfoLink]').eq($index).click();
		}//if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))	
		
		
		//if(!is_undefined(SetAqHomeObject) && !is_null(SetAqHomeObject) && is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
		if(!is_undefined(SetliveHomeObjectDataList) && !is_null(SetliveHomeObjectDataList) && is_object(SetliveHomeObjectDataList) && SetliveHomeObjectDataList.length > 0)
		{
			//# console.log('[GetSearchActionData=1] click SetAqHomeObject.length', SetAqHomeObject.length );
			//# console.log('[GetSearchActionData=1] click SetliveHomeObjectDataList.length', SetliveHomeObjectDataList.length );
			//$(this).removeClass("active");
			//# $(this).find('[GetSearchActionData=1]').removeClass("active");
			
			$('[GetSearchActionData=1]').removeClass("active");
			
			//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
			//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
			
			//$('.MapMarkerInfoContent').find('[data-id=1]').html('');
			//$('.MapMarkerInfoContent').find('[data-id=1]').hide();
			//$('.MapMarkerInfoContent').find('.action-close').click();
		
			//$('.action-zone').find('[data-id=1]').html('');
			//$('.action-zone').find('[data-id=1]').hide();
			//$('.action-zone').find('.action-close').click();
			
		}//if(!is_undefined(SetliveHomeObjectDataList) && !is_null(SetliveHomeObjectDataList) && is_object(SetliveHomeObjectDataList) && SetliveHomeObjectDataList.length > 0)
		$(this).addClass("active");
		 
		
		//# console.log('[GetSearchActionData=1] click SetAqAction ', SetAqAction);
		//# console.log('[GetSearchActionData=1] click SetSkipTestAqAction ', SetSkipTestAqAction);
		//# console.log('[GetSearchActionData=1] click SetAqHomeObject ', SetAqHomeObject);
		//# if(!is_undefined(SetAqHomeObject) && !is_null(SetAqHomeObject) && is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
		//# console.log('[GetSearchActionData=1] click SetAqHomeObject.length', SetAqHomeObject.length );
			
		
		//# console.log('[GetSearchActionData=1] click ArrayReSetTempSearchData ', ArrayReSetTempSearchData);
		//console.log('[GetSearchActionData=1] click ArrayReSetTempSearchData.length', ArrayReSetTempSearchData.length );
		
		//console.log('[GetSearchActionData=1] click _Array_locations_Info.length', _Array_locations_Info.length );
		//# console.log('[GetSearchActionData=1] click _Array_locations_Info.length', _Array_locations_Info.length );
	 
		//var FormObject = $(this).parents('form[SearchMap=1]').eq(0);
		//alert(FormObject.length);
		
		//	if(!is_object(SetAqHomeObject) || is_null(SetAqHomeObject) || !SetAqHomeObject || (is_object(SetAqHomeObject) && SetAqHomeObject.length == 0))
		//if(!SetSkipTestAqHomeObject && !SetSkipGetDataList)
		SkipGetSearchResultDataList = false;//true,false
		//return _get_json_locationsATMs(SetAqAction , SetSkipTestAqAction , SetAqHomeObject);
		if(!is_undefined(SetAqAction) && is_string(SetAqAction) && !is_empty(SetAqAction))
		{
			//SkipGetSearchResultDataList = true;//true,false
		 
			LoadData = GetAjaxLoadDataMap(SetAqAction,SetAqHomeObject);
				//console.log('.search_button click LoadData ', LoadData);
		}
 
		
		return false;
		
	 
	});//$('[GetSearchActionData=1]').click(function(){
	
	//if($("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	//$("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
	
	
	$('[DataInfoLinkShow=1]').hide();
	//$("form[SearchMap=1]").unbind("submit");
	$("form[SearchMap=1]").submit( function() {
		
	  //HomeObject = $(this).parents('.wrap_box_content');
	  //# $(this).find('.search_button').click();
	  return false;
	} );//$("form[SearchMap=1]").submit( function() {
	/*
	$( "form" ).each(function( index ) {//[required]

		//console.log('  form $(this).trigger("reset")');
		$(this).trigger("reset");//work
		//clearForm(this);
		////$(this).closest('form').trigger("reset");
		////('#AddRowform select').trigger("change");
		//this[0].reset();
		//this.get(0).reset();
	});
	*/
	
	
	$("[InputSearchMapKeyDown=1]").unbind("keydown");
	$("[InputSearchMapKeyDown=1]").keydown( function(e) {
		SkipGetSearchResultDataList = false;//true,false
		/*
		//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
		//$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
		
		//$('.MapMarkerInfoContent').find('[data-id=1]').html('');
		//$('.MapMarkerInfoContent').find('[data-id=1]').hide();
		//$('.MapMarkerInfoContent').find('.action-close').click();
		$('.action-zone').find('[data-id=1]').html('');
		$('.action-zone').find('[data-id=1]').hide();
		$('.action-zone').find('.action-close').click();
		$('[GetSearchActionData=1]').removeClass("active"); 
		*/
		
		var PressedKeyCode = e.which;
		if(is_undefined(PressedKeyCode))	
		  PressedKeyCode = e.keyCode;
	 
		//console.log( 'InputSearchMapKeyDown PressedKeyCode ', PressedKeyCode );
		if(PressedKeyCode == 13 && trim_space($(this).val()) != '') 
		{
			var FormObject = $(this).parents('form[SearchMap=1]').eq(0);
			//alert(FormObject.length);
			//alert($(this).val());
			if(FormObject.length != 0)
			FormObject.find('.search_button').click();
		}//if(PressedKeyCode == 13 && trim_space($(this).val()) != '') 
	 
	});//$("[InputSearchMapKeyDown=1]").keydown( function(e) {
	//$("[InputSearchMapKeyDown=1]").eq(0).keydown();
 
	//var SearchMapEmptyReset= "";
	$("[RunChangeSearchMapEmptyReset=1]").unbind("keyup");
	$("[RunChangeSearchMapEmptyReset=1]").keyup( function() {
		if (trim_space($(this).val()) == '')
		$("[RunChangeSearchMap=1]").change();
	});//$("[RunChangeSearchMapEmptyReset=1]").keyup( function() {
		
	$("[RunChangeSearchMap=1]").unbind("change");
	$("[RunChangeSearchMap=1]").change( function() {
		
	 
	
		var FormObject = $(this).parents('form[SearchMap=1]').eq(0);
		//alert(FormObject.length);
		//alert($(this).val());
		
		//# if (trim_space($(this).val()) != '') 
		FormObject.find('.search_button').click();
	});//$("[RunChangeSearchMap=1]").change( function() {
	
	$('.search_button').unbind("click");
	$('.search_button').click(function(){
		
		if(!map)
		{
			SearchButtonClick = true;//true , false
			RunInitPageLoadAutoRun = true;//true , false
			return null;
		}//if(!map)
		SearchButtonClick = false;//true , false
		RunInitPageLoadAutoRun = false;//true , false
		
		SkipGetSearchResultDataList = false;//true,false
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').html('');
		$('.MapMarkerInfoContent').find('.MapMarkerInfoContent-item').hide();
		
		$('.MapMarkerInfoContent').find('[data-id=1]').html('');
		$('.MapMarkerInfoContent').find('[data-id=1]').hide();
		$('.MapMarkerInfoContent').find('.action-close').click();
		
		$('.action-zone').find('[data-id=1]').html('');
		$('.action-zone').find('[data-id=1]').hide();
		$('.action-zone').find('.action-close').click();
		$('[GetSearchActionData=1]').removeClass("active"); 	
		
		//$(this).parents('.tiib_lanches').addClass('_result'); 
		//HomeObject = null;
		HomeObject = $(this).parents('[data-item=search]').eq(0);	
		if(HomeObject.length == 0)
			HomeObject = $(this).parents('.wrap_box_content').eq(0);	
		if(HomeObject.length == 0)
			HomeObject = $("form[SearchMap=1]").parents('.wrap_box_content').eq(0);	
		
		if(HomeObject.length == 0)
		{
			//HomeObject = $('.WrapBoxContentSearchMap');
			HomeObject = $('.wrap_box_content').eq(0);	
		}//if(HomeObject.length == 0)
			
		if(HomeObject.length == 0)
		HomeObject = null;
	
		
		var FormObject = $(this).parents('form[SearchMap=1]').eq(0);
		var ActionForm = "";
		var ActionInput = "";
		//StringActionData
		if(FormObject.length > 0)
		{
			var SiteAction = FormObject.attr("SiteAction");
			if(!is_undefined(SiteAction) && !is_empty(SiteAction))
			 ActionForm = trim_space(SiteAction);		
			//if (typeof FormObject.attr("SiteAction") != "undefined")
              //  ActionForm = trim_space(FormObject.attr("SiteAction"));
			//console.log('.search_button click ActionForm ', ActionForm);
			
			
			//find(':input[InputSearchMap=1]')
			FormObject.find(':input[InputSearchMap=1]').each(function(i) {
			  
				//# var type = this.type;
				//# var tag = this.tagName.toLowerCase(); // normalize case
				//if (type == 'number' || type == 'text' || type == 'password' || tag == 'textarea')
				//this.value = "";	
				//else if (type == 'checkbox' || type == 'radio')
				//this.checked = false;
				//// select elements need to have their 'selectedIndex' property set to -1
				//// (this works for both single and multiple select elements)
				//else if (tag == 'select')
				//this.selectedIndex = -1;
			
				var SetActionVal = "";
				var ActionVal = ($(this).val());
				//console.log('.search_button each ActionVal ', ActionVal);
				if(!is_empty(ActionVal))
				SetActionVal = trim_space(ActionVal);
			
				//var required = $(this).attr("required");
				//if(!is_undefined(required))
				//$(this).removeAttr( "required" );
			
				var SetActionName = "";
				var ActionName = $(this).attr("Get_Location");
				if(!is_undefined(ActionName) && !is_empty(ActionName))
				 SetActionName = trim_space(ActionName);
				if(is_empty(SetActionName))
				{
					var ActionName = $(this).attr("name");
					if(!is_undefined(ActionName) && !is_empty(ActionName))
					SetActionName = trim_space(ActionName);
				
					if(is_empty(SetActionName))
					{
						var ActionName = $(this).attr("id");
						if(!is_undefined(ActionName) && !is_empty(ActionName))
						SetActionName = trim_space(ActionName);
					}//if(is_empty(SetActionName))
				}//if(is_empty(SetActionName))
					
				
				
			
			 
				if (!is_empty(SetActionName)) 
				{
					if(!is_empty(ActionInput)) 
					ActionInput += "&";
				
					ActionInput += SetActionName+"="+SetActionVal;
				}//if (!is_empty(SetActionName)) 
			
			}); //FormObject.find(':input').each(function(i) {
		
			
		}//if(FormObject.length > 0)
		
	 
		var Action = "";
		if(!is_empty(ActionForm) && !is_empty(ActionInput))
		{
			////if(Get_Has_Index_Search(ActionForm,'[\?]','gi'))
			Action = ActionForm +"?"+ ActionInput;	
			Action = FixingAction(Action);
		}//if(!is_empty(ActionForm) && !is_empty(ActionInput))
		
		//console.log('.search_button click ActionForm ', ActionForm);
		//console.log('.search_button click ActionInput ', ActionInput);
		//console.log('.search_button click Action ', Action);
		
		//LoadData = null;
		//var ArrayStore = [];
		if(!is_empty(Action))
		{
			LoadData = GetAjaxLoadDataMap(Action,HomeObject);
			//LoadData = GetAjaxLoadDataMap(Action,FormObject,ArrayStore);
			//console.log('.search_button click ArrayStore ', ArrayStore);
			//console.log('.search_button click LoadData ', LoadData);
		}//if(!is_empty(Action))
		
		
		
		
		return false;
	});
	
	
	
	if($("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	$("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
	if($("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	$("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
	if($("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
	$("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();

	////ArrayFullDataResultsInfo = DefaultsDataResultsInfoOptions;
	//ArrayReSetTempSearchData = DefaultsDataResultsInfoOptions;
	////var Options = DefaultsDataResultsInfoOptions;	
	//# Options = $.extend({},Options, DefaultsDataResultsInfoOptions);
	
	//# $('.search_button').eq(0).click();
	
	//# //# SetLoadResultsDataInfo($("form[SearchMap=1]"),false);
	/*
	$('.back_icon').click(function(){
		//var SetVarHomeObjectNameString = "";//'.wrap_box_content'	
		$('.wrap_box_content').eq(0).removeClass('_result');
	});
	
	
	$('.search_nearby_button').click(function(){
		
	  //HomeObject = $(this).parents('.wrap_box_content');
	 $("[SearchNearByMap=1]").click();
	  return false;
	} );//$('.search_nearby_button').click(function(){
	
	
	
	$("[SearchNearByMap=1]").click( function() {
	
		//return _get_json_locations();
		//$('.wrap_box_content').addClass('_result');
		//alert('search_btn1 SearchATMs')
		//MapObject
		if(!is_undefined('SetLoadingObject') && is_function('SetLoadingObject'))
		SetLoadingObject(Object);
		//$("form[SearchMap=1]")
				
		HomeObject = $(this).parents('.wrap_box_content').eq(0);	
		var _action = null;
		//alert(HomeObject.length);
		
		if(HomeObject.length == 0)
		{
			HomeObject = $("form[SearchMap=1]").parents('.wrap_box_content').eq(0);	
		}//if(HomeObject.length == 0)
		if(HomeObject.length == 0)
		{
			//HomeObject = $('.WrapBoxContentSearchMap');
			HomeObject = $('.wrap_box_content').eq(0);	
		}//if(HomeObject.length == 0)	
			
		SetliveHomeObjectDataList = null;
		SetVarHomeObjectNameString = "";//'.wrap_box_content'
		if(HomeObject.length > 0)
		{
			SetliveHomeObjectDataList = HomeObject;
			SetVarHomeObjectNameString = '.wrap_box_content';//'.wrap_box_content'
		}
		//alert(HomeObject.length);
		if(typeof $(this).attr("title") != "undefined")
		{
			HomeObject.find('.search_word h2').html($(this).attr("title"));
		}
		
		if(typeof $(this).attr("SiteAction") != "undefined")
		{
			_action = ($(this).attr("SiteAction"));
			
			if (trim_space(_action) == '') 
				return false;
			
			
		}
		
		if(HomeObject.find('select[Get_Location=city]').length > 0)
		{
			var aq_city_id = HomeObject.find('select[Get_Location=city]').find("option:selected").val();
			if(trim_space(aq_city_id) != '') {
				aq_city_id = parseInt(aq_city_id);
				if (aq_city_id > 0)
					_action += '&city_id=' + aq_city_id;
				
			} //if (trim_space(aq_city_id) != '')
		}//if(HomeObject.find('select[Get_Location=city]').length > 0)
			
		if(HomeObject.find('input[Get_Location=searchWord]').length > 0)
		{
			var aq_searchWord = HomeObject.find('input[Get_Location=searchWord]').val();
			if (trim_space(aq_searchWord) != '') {
				aq_searchWord = trim_space(aq_searchWord);
				_action += '&searchWord=' + aq_searchWord;
			} //if (trim_space(aq_searchWord) != '') {
		} 
		if(HomeObject.find('select[Get_Location=map_type]').length > 0)
		{
			var aq_map_type = HomeObject.find('select[Get_Location=map_type]').val();
			if (trim_space(aq_map_type) != '') {
				aq_map_type = trim_space(aq_map_type);
				_action += '&map_type=' + aq_map_type;
			} //if (trim_space(aq_map_type) != '') {
		} 
		//_action += '&latitude=15.340665200000002';
		//_action += '&longitude=44.2169192';
		//return _get_json_locationsNearby(_action);
	 
		//HomeObject.addClass('_result');
		//alert(HomeObject.find('select[Get_Location=city]').length);
		//return _get_json_locationsBranches();
		if(_action)
		return getMyLocation(_action);
		//return _get_json_locationsATMs();
		return false;
		//$(this).parents('.tiib_lanches').addClass('_result');
	});//$("[SearchNearByMap=1]").click( function() {
	*/	
		
		
});




	
var SetAoutReRunEvent  = function()
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	//setTimeout( function () {SetAoutReRunEvent();},200);
	if(map && (RunInitPageLoadAutoRun || SearchNearByMapClick || RunChangeSearchMapChange || SearchButtonClick))
	{
		if(SearchNearByMapClick)
		$("[SearchNearByMap=1]").click();
		
		if(SearchNearByMapClick)
		$("[RunChangeSearchMap=1]").change();
		
		if(SearchButtonClick)
		$("[SearchButton=1]").click();
	
		if($("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
		$("[SearchNearByMapPlaces=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
		if($("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
		$("[SearchNearByMap=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
		if($("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").length > 0)
		$("[GetSearchActionData=1]").filter("[InitPageLoadAutoRun=1],[AutoRunChangeSearchMap=1],[InitSelectedAutoRunChange=1],[SelectedAutoRunChange=1]").click();
	}//if(map && (RunInitPageLoadAutoRun || SearchNearByMapClick || RunChangeSearchMapChange || SearchButtonClick))
		
	if(map)
	{
		SearchNearByMapClick = false;//true , false
		RunChangeSearchMapChange = false;//true , false
		SearchButtonClick = false;//true , false	
		RunInitPageLoadAutoRun = false;//true , false	
	}//if(map)
		
}//var SetAoutReRunEvent = function()



/* Note: This example requires that you consent to location sharing when
 * prompted by your browser. If you see the error "Geolocation permission
 * denied.", it means you probably did not give permission for the browser * to locate you. */
let pos;
//let map;
let bounds;
let infoWindow = null;
let currentInfoWindow;
let service;
let infoPane;


/*	
var map = null;
var marker = null;
var markers = [];
var markers_infowindow = [];
var markers_infowindowHtml = [];
var markers_latlng = [];
var image = null;
var Maps_Set_New = true;
var Maps_SetInputsValueEmpty = false;
var Google_Maps_Loaded = false;
var display_maps_time = null;
var infowindow = null;

//var DefaultsMapLatitude = null;
//var DefaultsMapLongitude = null;
//var DefaultsMapZoom = 0;
*/
//var AddImageIcon = false;//true , false
var SetMarkerImageIcon = "";
var ReSetDefaultsMapOptions  = false;//true , false

var geocoder = null;
var Live_latitude = null;
var Live_longitude = null;
var Live_MapZoom = null;
var Live_google_address = null;
var Live_map_address_id = null;

 
var parent_latitude = null;
var parent_longitude = null;
var parent_MapZoom = null;
var parent_google_address = null;
var parent_map_address_id = null;
var set_geometry_location  = null;		
	
	
function SetMapSearchResultsInfo(object,DoReSetSearchData,SetIndexResultsInfo,TagId)
{
	//var DoSetObject = null;
	var ReSetIndexResultsInfo = "";
	var ReSetTagId = "";
	//var ReSetDoSetObject = null;
	var ReSetAqHomeObject = null;
	var ReSetDoReSetSearchData = false;//true,false
	if(!is_undefined(object) && !is_null(object) && is_object(object) && object.length > 0)
	ReSetAqHomeObject = object;
	else if(!is_undefined(object) && is_number(object) && !is_empty(object))
	ReSetIndexResultsInfo = trim_space(object);
	else if(!is_undefined(object) && is_string(object) && !is_empty(object))
	ReSetTagId = trim_space(object);
	else if(!is_undefined(object) && is_boolean(object))
	ReSetDoReSetSearchData = object;
	
	
	if(!is_undefined(DoReSetSearchData) && !is_null(DoReSetSearchData) && is_object(DoReSetSearchData) && DoReSetSearchData.length > 0)
	ReSetAqHomeObject = DoReSetSearchData;
	else if(!is_undefined(DoReSetSearchData) && is_number(DoReSetSearchData) && !is_empty(DoReSetSearchData))
	ReSetIndexResultsInfo = trim_space(DoReSetSearchData);
	else if(!is_undefined(DoReSetSearchData) && is_string(DoReSetSearchData) && !is_empty(DoReSetSearchData))
	ReSetTagId =  trim_space(DoReSetSearchData);
	else if(!is_undefined(DoReSetSearchData) && is_boolean(DoReSetSearchData))
	ReSetDoReSetSearchData = DoReSetSearchData;
	
	
	if(!is_undefined(SetIndexResultsInfo) && !is_null(SetIndexResultsInfo) && is_object(SetIndexResultsInfo) && SetIndexResultsInfo.length > 0)
	ReSetAqHomeObject = SetIndexResultsInfo;
	else if(!is_undefined(SetIndexResultsInfo) && is_number(SetIndexResultsInfo) && !is_empty(SetIndexResultsInfo))
	ReSetIndexResultsInfo = trim_space(SetIndexResultsInfo);
	else if(!is_undefined(SetIndexResultsInfo) && is_string(SetIndexResultsInfo) && !is_empty(SetIndexResultsInfo))
	ReSetSetIndexResultsInfo = trim_space(SetIndexResultsInfo);
	else if(!is_undefined(SetIndexResultsInfo) && is_boolean(SetIndexResultsInfo))
	ReSetDoReSetSearchData = SetIndexResultsInfo;

	
	if(!is_undefined(TagId) && !is_null(TagId) && is_object(TagId) && TagId.length > 0)
	ReSetAqHomeObject = TagId;
	else if(!is_undefined(TagId) && is_number(TagId) && !is_empty(TagId))
	ReSetIndexResultsInfo = trim_space(TagId);
	else if(!is_undefined(TagId) && is_string(TagId) && !is_empty(TagId))
	ReSetTagId = trim_space(TagId);
	else if(!is_undefined(TagId) && is_boolean(TagId))
	ReSetDoReSetSearchData = TagId;
	

	////if(is_undefined(DoSetObject))
	DoSetObject = ReSetAqHomeObject;
	//if(is_undefined(SetAqHomeObject))
	SetAqHomeObject = ReSetAqHomeObject;
	
	//if(is_undefined(SetIndexResultsInfo))
	SetIndexResultsInfo = ReSetIndexResultsInfo;

	//if(is_undefined(TagId))
	TagId = ReSetTagId;
	//var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
	
	//var ReSetResultsDataSearchData = false;//true,false
	//if(is_undefined(ReSetResultsDataSearchData))
	var ReSetResultsDataSearchData = ReSetDoReSetSearchData;//true,false
	
	
 
	//ArrayFullDataResultsInfo = {};
	//ArrayReSetTempSearchData = {};
	//ArraySearchResultsInfo = [];
	//if(!is_undefined(SetVarHomeObjectNameString) && is_string(SetVarHomeObjectNameString) && !is_empty(SetVarHomeObjectNameString))
	var data = null;
	//ReSetResultsDataSearchData = false;//true,false //true = Old Data [Ajax Load] ,false = New Data [Ajax Load]
	if(ReSetResultsDataSearchData)
	{
		//if(!is_undefined(ArrayReSetTempSearchData) && !is_null(ArrayReSetTempSearchData) && is_object(ArrayReSetTempSearchData) && ArrayReSetTempSearchData.length > 0)
		
		//# //# if(is_object(ArrayReSetTempSearchData))
		//# if(is_object(ArrayReSetTempSearchData) && !jQuery.isEmptyObject(ArrayReSetTempSearchData))
		//# data = ArrayReSetTempSearchData;// Old Data [Ajax Load]
		
		data = DefaultsDataResultsInfoOptions;
	}//if(ReSetResultsDataSearchData)
	else //if(ReSetResultsDataSearchData)
	{
		//if(!is_undefined(ArrayFullDataResultsInfo) && !is_null(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo) && ArrayFullDataResultsInfo.length > 0)
		
		//# if(is_object(ArrayFullDataResultsInfo))	
		if(is_object(ArrayFullDataResultsInfo) && !jQuery.isEmptyObject(ArrayFullDataResultsInfo))	
		{
			SearchData = ArrayFullDataResultsInfo;// New Data [Ajax Load]
			
			if(!is_undefined(SearchData.result) && is_object(SearchData.result))
			{
				data = SearchData.result;	
				var OptionsSearchData = DefaultsDataResultsInfoOptions;	
	 
				//https://api.jquery.com/jQuery.extend/
				
				//$.extend( object1, object2 );// Merge object2 into object1
				//$.extend( true, object1, object2 );// Merge object2 into object1, recursively
				//var settings = $.extend( {}, defaults, options );// Merge defaults and options, without modifying defaults

				data = $.extend({}, OptionsSearchData, data);
			}//if(!is_undefined(SearchData.result) && is_object(SearchData.result))
		}//if(is_object(ArrayFullDataResultsInfo) && !jQuery.isEmptyObject(ArrayFullDataResultsInfo))
	}//else //if(ReSetResultsDataSearchData)
	
	
	//# console.log(' SetMapSearchResultsInfo ReSetResultsDataSearchData' , ReSetResultsDataSearchData);
	
	//# console.log(' SetMapSearchResultsInfo data' , data);
	//# console.log(' SetMapSearchResultsInfo DefaultsDataResultsInfoOptions' , DefaultsDataResultsInfoOptions);
	//if(!is_undefined(data.result) && is_object(data.result))
		
	var OptionsSearchData = {};
	if(!is_null(data) && is_object(data))
	var OptionsSearchData = data;	

	//# console.log(' SetMapSearchResultsInfo OptionsSearchData' , OptionsSearchData);
	//var OptionsSearchResultData = {};
	//if(!is_undefined(OptionsSearchData.result) && is_object(OptionsSearchData.result))
	//	OptionsSearchResultData = OptionsSearchData.result;
	 
		
	if(!is_object(OptionsSearchData) || jQuery.isEmptyObject(OptionsSearchData)) 	
	{
		//# console.log(' SetMapSearchResultsInfo OptionsSearchData' , OptionsSearchData);
		return;	
	}
 
	//DoSetObject = ReSetAqHomeObject;
	//SetAqHomeObject = ReSetAqHomeObject;
	//ReSetResultsDataSearchData = false;//true,false//true = Old Data [Ajax Load] ,false = New Data [Ajax Load]
	if(ReSetResultsDataSearchData)
	{
		
	}//if(ReSetResultsDataSearchData)
	else //if(ReSetResultsDataSearchData)
	{
		
	}//else //if(ReSetResultsDataSearchData)
		
	
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	if(is_undefined(TagId))
	{
		TagId = "";
		//TagId = "AllSelected";
	}
	//TagId = trim_space(TagId); 
	//if(is_empty(TagId) && !map)
	//return null;
	/*
	if(infoWindow)
	{
		//# marker = addMarker(position);
		infowindow = infoWindow;
		infowindow.close();
	}//if(infoWindow)
	if(map)	
	clearMarkers();
	*/
	
	
 
 					


	if(FunPrintConsoleLog)
	{
		console.log(' SetMapSearchResultsInfo TagId' , TagId);
		console.log(' SetMapSearchResultsInfo SetIndexResultsInfo' , SetIndexResultsInfo);
		console.log(' SetMapSearchResultsInfo SetAqHomeObject' , SetAqHomeObject);
		console.log(' SetMapSearchResultsInfo ReSetResultsDataSearchData' , ReSetResultsDataSearchData);
	}//if(FunPrintConsoleLog)
			
	if(FunPrintConsoleLog)
	console.log('SetMapSearchResultsInfo OptionsSearchData' , OptionsSearchData);


	/*
	var DefaultsDataResultsInfoOptions = {
			//"MapZoom": '8',
			//"maps_latitude": '15.3691',
			//"maps_longitude": '44.1895',
			
			"DefaultsMapZoom": '7',
			//"DefaultsMapLatitude": '15.3691',
			//"DefaultsMapLongitude": '44.1895',
			"DefaultsMapLatitude": '15.38308',
			"DefaultsMapLongitude": '44.21128',
			
			"ResultsServicePointsGoogleLatLngInfo": null ,// [{}]
			////"ResultsCategoryServicePointsGoogleLatLngInfo": null ,// [{}]
			////"RunFilterSearch": false ,//true , false
			////"CityGoogleLatLngInfo": null ,// [{}]
			
			//"ArrayMapMarkerDataInfo": null, // [{}]
			"ResultsInfo": null, // [{}]
			"HtmlMapMarkerInfoContentObject": null, //.MapMarkerInfoContent .MapMarkerInfoContent-item
			//# "HtmlMapMarkerInfoContent": null, // [{}]
			
			"HtmlBoxContentSearchListObject": null, //.wrap_box_content ul.search_list
			"HtmlBoxContentSearchDataList": null, //HTML CODE
        };
	*/
	if(!is_undefined(OptionsSearchData) && is_object(OptionsSearchData))
	{
		
		var placesInfo = {};
		if(!is_undefined(OptionsSearchData.ResultsInfo) && OptionsSearchData.ResultsInfo  && is_object(OptionsSearchData.ResultsInfo))
		placesInfo = OptionsSearchData.ResultsInfo;
	
		var GetOptionsSelectedSearchData = OptionsSearchData;
		
		//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
		
		var GetCountMapMarkerDataInfo = 0;
		var CountMapMarkerDataInfo = 0;
		var MapMarkerDataInfo = [];
		
		var GetCountMapMarkerInfoContent = 0; 
		var CountMapMarkerInfoContent = 0; 
		var MapMarkerInfoContent = [];
	
		
		var GetDataSetIndexResultsInfo  = false;//true , false
		//console.log(' SetMapSearchResultsInfo SetIndexResultsInfo' , SetIndexResultsInfo);
		//if(is_array(placesInfo))
		//console.log(' SetMapSearchResultsInfo is_array' , placesInfo);
		if(!is_empty(SetIndexResultsInfo) && is_object(placesInfo))
		{
			//var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
			
			pInfo = {};
			//if(is_array(placesInfo) && TestKeyInArray(placesInfo,SetIndexResultsInfo))
			//	pInfo = placesInfo[SetIndexResultsInfo];
			
			if(!is_undefined(placesInfo[SetIndexResultsInfo]))
			{
				//pInfo[SetIndexResultsInfo] = placesInfo[SetIndexResultsInfo];
				pInfo = placesInfo[SetIndexResultsInfo];
			}//if(!is_undefined(placesInfo[SetIndexResultsInfo]))
				
			//console.log(' SetMapSearchResultsInfo placesInfo pInfo' , pInfo);
			
			if(is_object(pInfo) && !jQuery.isEmptyObject(pInfo))
			{
				GetDataSetIndexResultsInfo  = true;//true , false
				placesInfo = pInfo;
				
				//if(!is_undefined(pInfo[SetIndexResultsInfo]))
				//{
				//	//var GetOptionsSelectedSearchData = OptionsSearchData;
				
				//	//var Options = {};	
				//	////var Options = DefaultsDataResultsInfoOptions;	
				//	GetOptionsSelectedSearchData = $.extend({},GetOptionsSelectedSearchData,  pInfo[SetIndexResultsInfo]);
				//}
				
			}//if(is_object(pInfo) && !jQuery.isEmptyObject(pInfo))
			
		
		}//if(!is_empty(SetIndexResultsInfo) && is_object(placesInfo))
	 
		/*	
		if(is_object(placesInfo) && TestKeyInArray(placesInfo,TagId))
		{
			pInfo = placesInfo[TagId];
			//if(is_object(pInfo) && !jQuery.isEmptyObject(pInfo))
			if(is_object(pInfo))
			placesInfo = pInfo;
		}//if(is_object(placesInfo) && !TestKeyInArray(placesInfo,TagId))
		*/	
		//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
		//console.log(' SetMapSearchResultsInfo placesInfo' , placesInfo);
		
		if(is_object(placesInfo))
		{
			
			/*
			if(!is_undefined(placesInfo.CountMapMarkerDataInfo))
			{
				Coun = Set_parseInt(placesInfo.CountMapMarkerDataInfo);
				if(Coun > 0)
				CountMapMarkerDataInfo = Coun;
			}//if(!is_undefined(placesInfo.CountMapMarkerDataInfo))
		
			if(!is_undefined(placesInfo.MapMarkerDataInfo) && placesInfo.MapMarkerDataInfo  && is_object(placesInfo.MapMarkerDataInfo))
			MapMarkerDataInfo = placesInfo.MapMarkerDataInfo;
		
			if(!is_undefined(placesInfo.CountMapMarkerInfoContent))
			{
				Coun = Set_parseInt(placesInfo.CountMapMarkerInfoContent);
				if(Coun > 0)
				CountMapMarkerInfoContent = Coun;
			}//if(!is_undefined(placesInfo.CountMapMarkerInfoContent))
		
			if(!is_undefined(placesInfo.MapMarkerInfoContent) && placesInfo.MapMarkerInfoContent  && is_object(placesInfo.MapMarkerInfoContent))
			MapMarkerInfoContent = placesInfo.MapMarkerInfoContent;
			*/
		
			
			
			//GetDataSetIndexResultsInfo  = false;//true , false
			if(!GetDataSetIndexResultsInfo)
			{
				//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
				$.each( placesInfo, function(rowPlacesInfokey, rowPlacesInfo){
					//var Info =  "Name: " + rowPlacesInfokey + ", rowPlacesInfo: " + rowPlacesInfo ;
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo rowPlacesInfokey' , rowPlacesInfokey);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo rowPlacesInfo' , rowPlacesInfo);
					row = rowPlacesInfo;
					
					//if(!is_undefined(rowPlacesInfo.IndexPlacesInfo))
					//rowInfo.IndexPlacesInfo = rowPlacesInfokey;
							
					if(!is_undefined(rowPlacesInfo)  && rowPlacesInfo  && is_object(rowPlacesInfo))
					{
						var LocationId = 0;
						if(!is_undefined(rowPlacesInfo.LocationId) && !is_empty(rowPlacesInfo.LocationId))
						LocationId = Set_parseInt(rowPlacesInfo.LocationId);
						
						//var ProjectsIdIndexPlacesInfo = 0;//rowPlacesInfokey;
						var ProjectsId = 0;//rowPlacesInfokey;
						if(!is_undefined(rowPlacesInfo.projects_id) && !is_empty(rowPlacesInfo.projects_id))
						ProjectsId = Set_parseInt(rowPlacesInfo.projects_id);
					
						if(ProjectsId <= 0 && !is_undefined(rowPlacesInfo.ProjectsId) && !is_empty(rowPlacesInfo.ProjectsId))
						ProjectsId = Set_parseInt(rowPlacesInfo.ProjectsId);
				
						if(!is_undefined(rowPlacesInfo.CountMapMarkerDataInfo))
						{
							//console.log(' SetMapSearchResultsInfo rowPlacesInfo.CountMapMarkerDataInfo' , rowPlacesInfo.CountMapMarkerDataInfo);
							Coun = Set_parseInt(rowPlacesInfo.CountMapMarkerDataInfo);
							if(Coun > 0)
							CountMapMarkerDataInfo += Coun;
						}//if(!is_undefined(rowPlacesInfo.CountMapMarkerDataInfo))
						
						//if(!is_undefined(rowPlacesInfo.CountMapMarkerDataInfo))
						//console.log(' SetMapSearchResultsInfo rowPlacesInfo.CountMapMarkerDataInfo' , rowPlacesInfo.CountMapMarkerDataInfo);
						if(!is_undefined(rowPlacesInfo.MapMarkerDataInfo) && rowPlacesInfo.MapMarkerDataInfo  && is_object(rowPlacesInfo.MapMarkerDataInfo))
						{
							//Array_push(MapMarkerDataInfo, rowPlacesInfo.MapMarkerDataInfo); 
							//# MapMarkerDataInfo[LocationId] = rowPlacesInfo.MapMarkerDataInfo;
							//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerDataInfo' , rowPlacesInfo.MapMarkerDataInfo);
							
							$.each(rowPlacesInfo.MapMarkerDataInfo, function(rowInfokey, rowInfo){
								
								var RowLocationId = 0;
								if(!is_undefined(rowInfo.LocationId) && !is_empty(rowInfo.LocationId))
								RowLocationId = Set_parseInt(rowInfo.LocationId);
								//if(RowLocationId > 0)
								
								//if(is_undefined(rowInfo.IndexPlacesInfo))
								//rowInfo.IndexPlacesInfo = rowPlacesInfokey;
							
								//# //Array_push(MapMarkerDataInfo, rowInfo); 
								//if(RowLocationId > 0)
								MapMarkerDataInfo[RowLocationId] = rowInfo;
								//else //if(RowLocationId > 0)
								//MapMarkerDataInfo[rowInfokey] = rowInfo;
								
								GetCountMapMarkerDataInfo += 1;
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerDataInfo $.each RowLocationId' , RowLocationId);
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerDataInfo $.each rowInfokey' , rowInfokey);
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerDataInfo $.each rowInfo' , rowInfo);
							});//$.each(rowPlacesInfo.MapMarkerDataInfo, function(rowInfokey, rowInfo){
						}//if(!is_undefined(rowPlacesInfo.MapMarkerDataInfo) && rowPlacesInfo.MapMarkerDataInfo  && is_object(rowPlacesInfo.MapMarkerDataInfo))
							
					
						if(!is_undefined(rowPlacesInfo.CountMapMarkerInfoContent))
						{
							//console.log(' SetMapSearchResultsInfo rowPlacesInfo.CountMapMarkerInfoContent' , rowPlacesInfo.CountMapMarkerInfoContent);
							Coun = Set_parseInt(rowPlacesInfo.CountMapMarkerInfoContent);
							if(Coun > 0)
							CountMapMarkerInfoContent += Coun;
						}//if(!is_undefined(rowPlacesInfo.CountMapMarkerInfoContent))
					
						if(!is_undefined(rowPlacesInfo.MapMarkerInfoContent) && rowPlacesInfo.MapMarkerInfoContent  && is_object(rowPlacesInfo.MapMarkerInfoContent))
						{
							//Array_push(MapMarkerInfoContent, rowPlacesInfo.MapMarkerInfoContent); 
							//# MapMarkerInfoContent[LocationId] = rowPlacesInfo.MapMarkerInfoContent;
							//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerInfoContent' , rowPlacesInfo.MapMarkerInfoContent);
							
							$.each(rowPlacesInfo.MapMarkerInfoContent, function(rowInfokey, rowInfo){
								
								//var RowLocationId = 0;
								//if(!is_undefined(rowInfo.LocationId) && !is_empty(rowInfo.LocationId))
								//RowLocationId = Set_parseInt(rowInfo.LocationId);
								//if(RowLocationId > 0)
								//if(is_undefined(rowInfo.IndexPlacesInfo))
								//rowInfo.IndexPlacesInfo = rowPlacesInfokey;
							
								//# //Array_push(MapMarkerInfoContent, rowInfo); 
								//if(RowLocationId > 0)
								//MapMarkerInfoContent[RowLocationId] = rowInfo;
								//else //if(RowLocationId > 0)
								MapMarkerInfoContent[rowInfokey] = rowInfo;
								
								GetCountMapMarkerInfoContent += 1;
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerInfoContent $.each RowLocationId' , RowLocationId);
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerInfoContent $.each rowInfokey' , rowInfokey);
								//console.log(' SetMapSearchResultsInfo rowPlacesInfo.MapMarkerInfoContent $.each rowInfo' , rowInfo);
							});//$.each(rowPlacesInfo.MapMarkerInfoContent, function(rowInfokey, rowInfo){
								
						}//if(!is_undefined(rowPlacesInfo.MapMarkerInfoContent) && rowPlacesInfo.MapMarkerInfoContent  && is_object(rowPlacesInfo.MapMarkerInfoContent))
							
						
					
					}//if(!is_undefined(rowPlacesInfo)  && rowPlacesInfo  && is_object(rowPlacesInfo))
				});//$.each( placesInfo, function(rowPlacesInfokey, PlacesInfo){
				
			}//if(!GetDataSetIndexResultsInfo)
				
			
			
			//GetDataSetIndexResultsInfo  = false;//true , false
			if(GetDataSetIndexResultsInfo)
			{
				row = placesInfo;
			 	
				if(!is_undefined(placesInfo)  && placesInfo  && is_object(placesInfo))
				{
					var LocationId = 0;
					if(!is_undefined(placesInfo.LocationId) && !is_empty(placesInfo.LocationId))
					LocationId = Set_parseInt(placesInfo.LocationId);
					
					//var ProjectsIdIndexPlacesInfo = 0;//placesInfokey;
					var ProjectsId = 0;//placesInfokey;
					if(!is_undefined(placesInfo.projects_id) && !is_empty(placesInfo.projects_id))
					ProjectsId = Set_parseInt(placesInfo.projects_id);
				
					if(ProjectsId <= 0 && !is_undefined(placesInfo.ProjectsId) && !is_empty(placesInfo.ProjectsId))
					ProjectsId = Set_parseInt(placesInfo.ProjectsId);
			
					if(!is_undefined(placesInfo.CountMapMarkerDataInfo))
					{
						//console.log(' SetMapSearchResultsInfo placesInfo.CountMapMarkerDataInfo' , placesInfo.CountMapMarkerDataInfo);
						Coun = Set_parseInt(placesInfo.CountMapMarkerDataInfo);
						if(Coun > 0)
						CountMapMarkerDataInfo += Coun;
					}//if(!is_undefined(placesInfo.CountMapMarkerDataInfo))
					
					//if(!is_undefined(placesInfo.CountMapMarkerDataInfo))
					//console.log(' SetMapSearchResultsInfo placesInfo.CountMapMarkerDataInfo' , placesInfo.CountMapMarkerDataInfo);
					if(!is_undefined(placesInfo.MapMarkerDataInfo) && placesInfo.MapMarkerDataInfo  && is_object(placesInfo.MapMarkerDataInfo))
					{
						//Array_push(MapMarkerDataInfo, placesInfo.MapMarkerDataInfo); 
						//# MapMarkerDataInfo[LocationId] = placesInfo.MapMarkerDataInfo;
						//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerDataInfo' , placesInfo.MapMarkerDataInfo);
						
						$.each(placesInfo.MapMarkerDataInfo, function(rowInfokey, rowInfo){
							
							var RowLocationId = 0;
							if(!is_undefined(rowInfo.LocationId) && !is_empty(rowInfo.LocationId))
							RowLocationId = Set_parseInt(rowInfo.LocationId);
							//if(RowLocationId > 0)
							
							//if(is_undefined(rowInfo.IndexPlacesInfo))
							//rowInfo.IndexPlacesInfo = placesInfokey;
						
							//# //Array_push(MapMarkerDataInfo, rowInfo); 
							//if(RowLocationId > 0)
							MapMarkerDataInfo[RowLocationId] = rowInfo;
							//else //if(RowLocationId > 0)
							//MapMarkerDataInfo[rowInfokey] = rowInfo;
							
							GetCountMapMarkerDataInfo += 1;
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerDataInfo $.each RowLocationId' , RowLocationId);
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerDataInfo $.each rowInfokey' , rowInfokey);
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerDataInfo $.each rowInfo' , rowInfo);
						});//$.each(placesInfo.MapMarkerDataInfo, function(rowInfokey, rowInfo){
					}//if(!is_undefined(placesInfo.MapMarkerDataInfo) && placesInfo.MapMarkerDataInfo  && is_object(placesInfo.MapMarkerDataInfo))
						
				
					if(!is_undefined(placesInfo.CountMapMarkerInfoContent))
					{
						//console.log(' SetMapSearchResultsInfo placesInfo.CountMapMarkerInfoContent' , placesInfo.CountMapMarkerInfoContent);
						Coun = Set_parseInt(placesInfo.CountMapMarkerInfoContent);
						if(Coun > 0)
						CountMapMarkerInfoContent += Coun;
					}//if(!is_undefined(placesInfo.CountMapMarkerInfoContent))
				
					if(!is_undefined(placesInfo.MapMarkerInfoContent) && placesInfo.MapMarkerInfoContent  && is_object(placesInfo.MapMarkerInfoContent))
					{
						//Array_push(MapMarkerInfoContent, placesInfo.MapMarkerInfoContent); 
						//# MapMarkerInfoContent[LocationId] = placesInfo.MapMarkerInfoContent;
						//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerInfoContent' , placesInfo.MapMarkerInfoContent);
						
						$.each(placesInfo.MapMarkerInfoContent, function(rowInfokey, rowInfo){
							
							//var RowLocationId = 0;
							//if(!is_undefined(rowInfo.LocationId) && !is_empty(rowInfo.LocationId))
							//RowLocationId = Set_parseInt(rowInfo.LocationId);
							//if(RowLocationId > 0)
							//if(is_undefined(rowInfo.IndexPlacesInfo))
							//rowInfo.IndexPlacesInfo = placesInfokey;
						
							//# //Array_push(MapMarkerInfoContent, rowInfo); 
							//if(RowLocationId > 0)
							//MapMarkerInfoContent[RowLocationId] = rowInfo;
							//else //if(RowLocationId > 0)
							MapMarkerInfoContent[rowInfokey] = rowInfo;
							
							GetCountMapMarkerInfoContent += 1;
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerInfoContent $.each RowLocationId' , RowLocationId);
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerInfoContent $.each rowInfokey' , rowInfokey);
							//console.log(' SetMapSearchResultsInfo placesInfo.MapMarkerInfoContent $.each rowInfo' , rowInfo);
						});//$.each(placesInfo.MapMarkerInfoContent, function(rowInfokey, rowInfo){
							
					}//if(!is_undefined(placesInfo.MapMarkerInfoContent) && placesInfo.MapMarkerInfoContent  && is_object(placesInfo.MapMarkerInfoContent))
						
					
				
				}//if(!is_undefined(placesInfo)  && placesInfo  && is_object(placesInfo))
		 
			}//if(GetDataSetIndexResultsInfo)
				
			
		 
			if(!is_empty(TagId) && TagId == "InfoTagSelected")
			{
				
				
				
				TempGetCountMapMarkerDataInfo = GetCountMapMarkerDataInfo;
				TempCountMapMarkerDataInfo = CountMapMarkerDataInfo;
				TempMapMarkerDataInfo = MapMarkerDataInfo;
				
				TempGetCountMapMarkerInfoContent = GetCountMapMarkerInfoContent; 
				TempCountMapMarkerInfoContent = CountMapMarkerInfoContent; 
				TempMapMarkerInfoContent = MapMarkerInfoContent;
				
				
				
		
				
				var GetMapMarkerDataInfo = true;//true , false	
				if(GetMapMarkerDataInfo && is_array(MapMarkerDataInfo))
				{ 
					
					GetCountMapMarkerDataInfo = 0;
					//CountMapMarkerDataInfo = 0;
					MapMarkerDataInfo = [];
					
					GetCountMapMarkerInfoContent = 0; 
					//CountMapMarkerInfoContent = 0; 
					MapMarkerInfoContent = [];
				
					//if(TempMapMarkerDataInfo.length > 0)
					//for(index = 0; index < TempMapMarkerDataInfo.length; index++) 
					for(var index in TempMapMarkerDataInfo) 
					{
						//rowInfo 
						var row = TempMapMarkerDataInfo[index];
						if(!is_undefined(row) && row  && is_object(row))
						{
							var RowLocationId = 0;
							if(!is_undefined(row.LocationId) && !is_empty(row.LocationId))
							RowLocationId = Set_parseInt(row.LocationId);
							var ParentLocationId = 0;
							if(!is_undefined(row.ParentLocationId) && !is_empty(row.ParentLocationId))
							ParentLocationId = Set_parseInt(row.ParentLocationId);
							
							 
							var SetAqHtmlMapMarkerInfoContentString = "";
							//if(is_array(TempMapMarkerInfoContent) && TestKeyInArray(TempMapMarkerInfoContent,index))
							//	SetAqHtmlMapMarkerInfoContentString = MapMarkerInfoContent[index];
							
							if(!is_undefined(TempMapMarkerInfoContent[index]))
							{
								SetAqHtmlMapMarkerInfoContentString = TempMapMarkerInfoContent[index];
							}//if(!is_undefined(TempMapMarkerInfoContent[index]))
						 	
								
							//GetData  = true;//true , false
							//if(!is_empty(TagId) && TagId == "InfoTagSelected")
							
							GetData  = false;//true , false	
							//if(index == SetIndexResultsInfo)
							//if(RowLocationId == SetIndexResultsInfo)	
							if(RowLocationId == SetIndexResultsInfo)
							{
								//if(!is_empty(SetAqHtmlMapMarkerInfoContentString))
								if(!is_undefined(TempMapMarkerInfoContent[index]))	
								GetData  = true;//true , false
								
							}
							if(GetData)
							{
								//if(RowLocationId > 0)
							
								//if(is_undefined(row.IndexPlacesInfo))
								//row.IndexPlacesInfo = rowPlacesInfokey;
							
								//# //Array_push(MapMarkerDataInfo, row); 
								//if(RowLocationId > 0)
								MapMarkerDataInfo[RowLocationId] = row;
								//else //if(RowLocationId > 0)
								//MapMarkerDataInfo[rowInfokey] = row;
								
								MapMarkerInfoContent[index] = TempMapMarkerInfoContent[index];
								
								GetCountMapMarkerDataInfo += 1;
							}//if(GetData)	
								
						}//if(!is_undefined(row) && row  && is_object(row))
					
					} //for(var index in TempMapMarkerDataInfo)
				
				}//if(is_array(TempMapMarkerDataInfo))
				
				/*	
				//GetMapMarkerDataInfo = false;//true , false	
				if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))
				{
					$.each( MapMarkerDataInfo, function(row_key, row){
					
						if(!is_undefined(row) && row  && is_object(row))
						{
							var zoom = 0;
							var latitude = 0;
							var longitude = 0;
							
							if(!is_undefined(row.zoom) && !is_empty(row.zoom))
							zoom = Set_parseInt((row.zoom));	
						
							if(!is_undefined(row.latitude) && !is_empty(row.latitude))
							longitude = Set_parseFloat((row.latitude));	
							latitude = Set_parseFloat(row.latitude);
							if(!is_undefined(row.longitude) && !is_empty(row.longitude))
							longitude = Set_parseFloat((row.longitude));
							//longitude = Set_parseFloat(trim_space(row.longitude));
							GetRowInfo = false;//true , false
							if(zoom != 0 && latitude != 0 && longitude != 0)
							GetRowInfo = true;//true , false
						
							if(GetRowInfo)
							{
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
								GetMapMarkerDataInfo = true;//true , false
							}//if(GetRowInfo) 
						}//if(!is_undefined(row) && row  && is_object(row))
					
					});//$.each( MapMarkerDataInfo, function(row_key, row){
					 
				}//if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))	
				*/	
				
				GetCountMapMarkerInfoContent = GetCountMapMarkerDataInfo;
				CountMapMarkerDataInfo = GetCountMapMarkerDataInfo;
				CountMapMarkerInfoContent = GetCountMapMarkerInfoContent;
				
				/*
				//var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
				console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData SetIndexResultsInfo' , SetIndexResultsInfo);
				console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
				console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
				console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
				console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
				
				console.log(' SetMapSearchResultsInfo GetCountMapMarkerInfoContent' , GetCountMapMarkerInfoContent);	
				console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
				console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);
				*/
				
			}//if(!is_empty(TagId) && TagId == "InfoTagSelected")
				
			//GetDataSetIndexResultsInfo  = false;//true , false
			if(GetDataSetIndexResultsInfo)
			{
				//var GetOptionsSelectedSearchData = OptionsSearchData;
				
				//var Options = {};	
				////var Options = DefaultsDataResultsInfoOptions;	
				//Options = $.extend({},Options, result);

				/*
				var GetMapMarkerDataInfo = true;//true , false	
				if(GetMapMarkerDataInfo && is_array(MapMarkerDataInfo))
				{ 
					
					MaxZoom = 0;	
					MinZoom = 0; 
					MaxLongitude = 0;	
					MaxLatitude = 0;	
					MinLongitude = 0;	
					MinLatitude = 0;
					//if(MapMarkerDataInfo.length > 0)
					//for(index = 0; index < MapMarkerDataInfo.length; index++) 
					for(var index in MapMarkerDataInfo) 
					{
						
						var row = MapMarkerDataInfo[index];
						if(!is_undefined(row) && row  && is_object(row))
						{
							var zoom = 0;
							var latitude = 0;
							var longitude = 0;
							
							if(!is_undefined(row.zoom) && !is_empty(row.zoom))
							zoom = Set_parseInt((row.zoom));	
						
							if(!is_undefined(row.latitude) && !is_empty(row.latitude))
							longitude = Set_parseFloat((row.latitude));	
							latitude = Set_parseFloat(row.latitude);
							if(!is_undefined(row.longitude) && !is_empty(row.longitude))
							longitude = Set_parseFloat((row.longitude));
							//longitude = Set_parseFloat(trim_space(row.longitude));
							GetRowInfo = false;//true , false
							if(zoom != 0 && latitude != 0 && longitude != 0)
							GetRowInfo = true;//true , false
						
							if(GetRowInfo)
							{
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
								GetMapMarkerDataInfo = true;//true , false
							}//if(GetRowInfo) 
						}//if(!is_undefined(row) && row  && is_object(row))
					
					} //for(var index in MapMarkerDataInfo)
				}//if(is_array(MapMarkerDataInfo))
				
					
				//GetMapMarkerDataInfo = false;//true , false	
				if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))
				{
					$.each( MapMarkerDataInfo, function(row_key, row){
					
						if(!is_undefined(row) && row  && is_object(row))
						{
							var zoom = 0;
							var latitude = 0;
							var longitude = 0;
							
							if(!is_undefined(row.zoom) && !is_empty(row.zoom))
							zoom = Set_parseInt((row.zoom));	
						
							if(!is_undefined(row.latitude) && !is_empty(row.latitude))
							longitude = Set_parseFloat((row.latitude));	
							latitude = Set_parseFloat(row.latitude);
							if(!is_undefined(row.longitude) && !is_empty(row.longitude))
							longitude = Set_parseFloat((row.longitude));
							//longitude = Set_parseFloat(trim_space(row.longitude));
							GetRowInfo = false;//true , false
							if(zoom != 0 && latitude != 0 && longitude != 0)
							GetRowInfo = true;//true , false
						
							if(GetRowInfo)
							{
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
								GetMapMarkerDataInfo = true;//true , false
							}//if(GetRowInfo) 
						}//if(!is_undefined(row) && row  && is_object(row))
					
					});//$.each( MapMarkerDataInfo, function(row_key, row){
					 
				}//if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))	
				*/
	
			}//if(GetDataSetIndexResultsInfo)
				
			/*
			console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
		
			//console.log(' SetMapSearchResultsInfo placesInfo' , placesInfo);
		 
			console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
			console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
			console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
			console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
			
			console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
			console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
			console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);
			*/ 	
		}//if(is_object(placesInfo))
			
	
	
		//var ArrayMapMarkerDataInfo = {};
		//if(!is_undefined(GetOptionsSelectedSearchData.ArrayMapMarkerDataInfo)  && GetOptionsSelectedSearchData.ArrayMapMarkerDataInfo  && is_object(GetOptionsSelectedSearchData.ArrayMapMarkerDataInfo))
		//ArrayMapMarkerDataInfo = GetOptionsSelectedSearchData.ArrayMapMarkerDataInfo;
		
		//var RunFilterSearch = false;//true , false
		//if(!is_undefined(GetOptionsSelectedSearchData.RunFilterSearch)  && GetOptionsSelectedSearchData.RunFilterSearch )// && is_boolean(GetOptionsSelectedSearchData.RunFilterSearch)
		//RunFilterSearch = GetOptionsSelectedSearchData.RunFilterSearch;
		
		var ServicePointsGoogleLatLngInfo = {};
		if(!is_undefined(GetOptionsSelectedSearchData.ResultsServicePointsGoogleLatLngInfo)  && GetOptionsSelectedSearchData.ResultsServicePointsGoogleLatLngInfo  && is_object(GetOptionsSelectedSearchData.ResultsServicePointsGoogleLatLngInfo))
		ServicePointsGoogleLatLngInfo = GetOptionsSelectedSearchData.ResultsServicePointsGoogleLatLngInfo;
	
	
	
		if(FunPrintConsoleLog)
		{
			console.log(' SetMapSearchResultsInfo TagId' , TagId);
			console.log(' SetMapSearchResultsInfo placesInfo' , placesInfo);
			
			console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);
			console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
			console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
			
			
			console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);
			console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
			console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);
			
			
			//console.log(' SetMapSearchResultsInfo ArrayMapMarkerDataInfo' , ArrayMapMarkerDataInfo);
			console.log(' SetMapSearchResultsInfo ServicePointsGoogleLatLngInfo' , ServicePointsGoogleLatLngInfo);
		}//if(FunPrintConsoleLog)
			
		/*
		if(RunFilterSearch)
		{ 
			var ReSetDefaultsOptions = {"RunFilterSearch": false };////true , false 
			GetOptionsSelectedSearchData = $.extend({},ReSetDefaultsOptions, GetOptionsSelectedSearchData);
			//$("[SearchButton=1]").click();
			if(FunPrintConsoleLog)
			console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);
		}//if(RunFilterSearch)
		*/	
		
		//DoSetObject = ReSetAqHomeObject;
		//SetAqHomeObject = ReSetAqHomeObject;
		//ReSetResultsDataSearchData = false;//true,false//true = Old Data [Ajax Load] ,false = New Data [Ajax Load]
		if(ReSetResultsDataSearchData)
		{
			
		}//if(ReSetResultsDataSearchData)
		else //if(ReSetResultsDataSearchData)
		{
			
		}//else //if(ReSetResultsDataSearchData)
		
		
		//var ReSetDefaultsMapOptions  = false;//true , false
		//# FunPrintConsoleLog = true;//false , true; 
		//# ReSetDefaultsMapOptions  = true;//true , false
				
		//var SetDefaultsZoom = null;
		//var SetDefaultsLongitude = null;
		//var SetDefaultsLatitude = null;
		var SetDefaultsZoom = 0;
		var SetDefaultsLongitude = 0;
		var SetDefaultsLatitude = 0;
		
		
		if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapZoom))
		{
			zoom = Set_parseInt(GetOptionsSelectedSearchData.DefaultsMapZoom);
			if(zoom != 0)
				SetDefaultsZoom = zoom;
		}//if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapZoom))
		if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapLongitude))
			SetDefaultsLongitude =  trim_space(GetOptionsSelectedSearchData.DefaultsMapLongitude);	
			
		if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapLatitude))
			SetDefaultsLatitude =  trim_space(GetOptionsSelectedSearchData.DefaultsMapLatitude);
			
		
		
		ReSetDefaultsMapOptions  = true;//true , false
		//GetDataSetIndexResultsInfo  = false;//true , false
		if(GetDataSetIndexResultsInfo)
		{
			//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
			//console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
			
			if(CountMapMarkerDataInfo == 1)
			ReSetDefaultsMapOptions  = false;//true , false
			if(CountMapMarkerDataInfo > 1)
			{
				/*
				if(!is_undefined(placesInfo.DefaultsMapZoom))
				{
					zoom = Set_parseInt(placesInfo.DefaultsMapZoom);
					if(zoom != 0 && zoom < SetDefaultsZoom)
						SetDefaultsZoom = zoom;
				}//if(!is_undefined(placesInfo.DefaultsMapZoom))
					
				if(!is_undefined(placesInfo.DefaultsMapLongitude))
					SetDefaultsLongitude =  trim_space(placesInfo.DefaultsMapLongitude);	
					
				if(!is_undefined(placesInfo.DefaultsMapLatitude))
					SetDefaultsLatitude =  trim_space(placesInfo.DefaultsMapLatitude);
				*/
			}//if(CountMapMarkerDataInfo > 1)
			 
				
		}//if(GetDataSetIndexResultsInfo)
			
		/*
		console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
	
		//console.log(' SetMapSearchResultsInfo placesInfo' , placesInfo);
	 
		console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
		console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
		console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
		console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
		
		console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
		console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
		console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);
		*/ 
			
			
		
		if(ReSetDefaultsMapOptions)
		{
			//# ReSetDefaultsMapOptions  = false;//true , false
			
			//console.log(' SetMapSearchResultsInfo TagId' , TagId);
			//console.log(' SetMapSearchResultsInfo SetAqHomeObject' , SetAqHomeObject);
			//console.log(' SetMapSearchResultsInfo ReSetResultsDataSearchData' , ReSetResultsDataSearchData);

			//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);
			
			//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
			//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsLongitude' , SetDefaultsLongitude);
			//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsLatitude' , SetDefaultsLatitude);
			
			//if(SetDefaultsLongitude && SetDefaultsLatitude && !is_empty(SetDefaultsLongitude) && !is_empty(SetDefaultsLatitude))
			if(SetDefaultsLongitude != 0 && SetDefaultsLatitude != 0)	
			{
				latitude = Set_parseFloat(SetDefaultsLatitude);
				longitude = Set_parseFloat(SetDefaultsLongitude);
				if(latitude != 0 && longitude != 0)
				{
					//if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapLongitude))
					//longval =  trim_space(GetOptionsSelectedSearchData.DefaultsMapLongitude);	
					
					//if(!is_undefined(GetOptionsSelectedSearchData.DefaultsMapLatitude))
					//latval =  trim_space(GetOptionsSelectedSearchData.DefaultsMapLatitude);	

					//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
					//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsLongitude' , SetDefaultsLongitude);
					//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsLatitude' , SetDefaultsLatitude);
					
					//var pyrmont = {lat: latval, lng: longval};
					//var myLatlng = new google.maps.LatLng(latval, longval);
					//var c = map.getCenter();
					//x = c.lng().toFixed(5);
					//y = c.lat().toFixed(5);
					
					//x = latitude;//.toFixed(5);
					//y = longitude;//.toFixed(5);
					
					//var XandY = x + ' , ' + y;
					//console.log(' SetMapSearchResultsInfo  x , y' , XandY);
					var pyrmont = {lat: latitude, lng: longitude};
					//console.log(' SetMapSearchResultsInfo  pyrmont ' , pyrmont);
					//map.setCenter(new google.maps.LatLng(y, x)); 
			
					 
					/*
					var myLatlng = new google.maps.LatLng(latitude, longitude);
					
					map.setCenter(myLatlng);
					
					//marker = addMarker(myLatlng);
					
					var OptionsMarker = {
						//position: {lat: beach[1], lng: beach[2]}, 
						position: myLatlng,
						//title: html,
						//title:"Hello World!",
						map: map,
						//icon: image,
						animation: google.maps.Animation.DROP
					};
					var marker = new google.maps.Marker(OptionsMarker); 
					console.log(' SetMapSearchResultsInfo marker ' , marker); 
					//return null;
					*/
					map.setCenter(new google.maps.LatLng(latitude, longitude));
					//if(SetDefaultsZoom && SetDefaultsZoom != 0)
					if(SetDefaultsZoom != 0)	
					{
						map.setZoom(SetDefaultsZoom);
						//SetDefaultsZoom = null;
					}
					/* 
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					var XandY = x + ' , ' + y;
					console.log(' SetMapSearchResultsInfo x , y' , XandY);
					
					Zoom = map.getZoom();
					console.log(' SetMapSearchResultsInfo  Zoom' , Zoom);
					*/
					
					/*
					//pos = { lat: 15.3691, lng: 44.1895 };
					//var pyrmont = {lat: latitude, lng: longitude};
					var pyrmont = new google.maps.LatLng(latitude, longitude);
				
					var bounds = new google.maps.LatLngBounds();
					////bounds.union(place.geometry.viewport);
					//// bounds.extend(place.geometry.location);
					////bounds.union(pyrmont);
					bounds.extend(pyrmont);
					//map.fitBounds(bounds);
					*/
					//var pyrmont = new google.maps.LatLng(latitude, longitude);
					//marker = addMarker(pyrmont);
					
					//function addMarker(location, infowindow, html , marker_title)
					//function initMap()
				}//if(latitude != 0 && longitude != 0)
			}//if(SetDefaultsLongitude && SetDefaultsLatitude && !is_empty(SetDefaultsLongitude) && !is_empty(SetDefaultsLatitude))
				
			
			if(SetDefaultsZoom && SetDefaultsZoom != 0)
			{
				//Zoom = map.getZoom();
				////map.setZoom(map.getZoom());
				map.setZoom(SetDefaultsZoom);
				//console.log('SetMapSearchResultsInfo ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
			}//if(SetDefaultsZoom && SetDefaultsZoom != 0)
				
		}//if(ReSetDefaultsMapOptions)
			
		//return null;
		if(infoWindow)
		{
			//# marker = addMarker(position);
			infowindow = infoWindow;
			infowindow.close();
		}//if(infoWindow)
		
		//if(map)	
		//clearMarkers();
		if(map) 
		deleteMarkers();
		
		if(!geocoder)
		geocoder = new google.maps.Geocoder;

		if(!infowindow)
		infowindow = new google.maps.InfoWindow;
				
		var SetAqHtmlMapMarkerInfoContentObject = "";//'.wrap_box_content ul.search_list'
		if(!is_undefined(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject) && !is_empty(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject))
		SetAqHtmlMapMarkerInfoContentObject = trim_space(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject);
	
		DoHtmlMarkerInfoContentObject = null;
		if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
		{
			
			
			if(!is_null(SetAqHomeObject) && is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
			{
				//console.log('SetLoadResultsDataInfo SetAqHomeObject' , DoSetObject);
				if(SetAqHomeObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
				{
					DoHtmlMarkerInfoContentObject = SetAqHomeObject.find(SetAqHtmlMapMarkerInfoContentObject);
					//DoHtmlMarkerInfoContentObject.hide();
					//console.log('SetLoadResultsDataInfo DoHtmlMarkerInfoContentObject 0' , DoHtmlMarkerInfoContentObject);
				}//if(SetAqHomeObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
					
				
				if((!is_object(DoHtmlMarkerInfoContentObject) || is_null(DoHtmlMarkerInfoContentObject)))
				{
					if(SetAqHomeObject.filter(SetAqHtmlMapMarkerInfoContentObject).length > 0)
					{
						DoHtmlMarkerInfoContentObject = SetAqHomeObject.filter(SetAqHtmlMapMarkerInfoContentObject);
						//DoHtmlMarkerInfoContentObject.hide();
						//console.log('SetLoadResultsDataInfo DoHtmlMarkerInfoContentObject 0' , DoHtmlMarkerInfoContentObject);
					}//if(SetAqHomeObject.find(SetAqHtmlMapMarkerInfoContentObject).length > 0)
				}//if((!is_object(DoHtmlMarkerInfoContentObject) || is_null(DoHtmlMarkerInfoContentObject)))
					
			}//if(!is_null(SetAqHomeObject) && is_object(SetAqHomeObject) && SetAqHomeObject.length > 0)
			
		
		 
			if((!is_object(DoHtmlMarkerInfoContentObject) || is_null(DoHtmlMarkerInfoContentObject)))
			{
				if($(SetAqHtmlMapMarkerInfoContentObject).length > 0)
				{
					DoHtmlMarkerInfoContentObject = $(SetAqHtmlMapMarkerInfoContentObject);
					//console.log('SetLoadResultsDataInfo DoHtmlMarkerInfoContentObject.length' , DoHtmlMarkerInfoContentObject.length);
					
				}
				//console.log('SetLoadResultsDataInfo DoHtmlMarkerInfoContentObject 1' , DoHtmlMarkerInfoContentObject);
				//DoHtmlMarkerInfoContentObject.hide();
			}//if((!is_object(DoHtmlMarkerInfoContentObject) || is_null(DoHtmlMarkerInfoContentObject)))
				
			
			if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
			{
				//$(SetAqHtmlMapMarkerInfoContentObject).html(SetAqHtmlMapMarkerInfoContentString);//.show();
				//DoHtmlMarkerInfoContentObject.html('');
				DoHtmlMarkerInfoContentObject.hide();
				 
				//# DoHtmlMarkerInfoContentObject.html('').hide();
				//# //ReSetResultsDataSearchData = false;//true,false
				//# if(!ReSetResultsDataSearchData)
				//# {
				//# 	if(!is_empty(SetAqHtmlMapMarkerInfoContentString))
				//# 	DoHtmlMarkerInfoContentObject.html(SetAqHtmlMapMarkerInfoContentString);//.show();
				//# }//if(!ReSetResultsDataSearchData)		
			}//if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
		}//if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
		 
	 
				
		//console.log('SetMapSearchResultsInfo markers' , markers);
		
		//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
		//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
		//console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
		//console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
		
		//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
		//console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
		//console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);
			
		//return;		
		var HasDataRowInfo = false;//true , false
		
		var GetMapMarkerDataInfo = true;//true , false	
		if(GetMapMarkerDataInfo && is_array(MapMarkerDataInfo))
		{ 
			
			//if(MapMarkerDataInfo.length > 0)
			//for(index = 0; index < MapMarkerDataInfo.length; index++) 
			for(var index in MapMarkerDataInfo) 
			{
				
				var row = MapMarkerDataInfo[index];
				if(!is_undefined(row) && row  && is_object(row))
				{
					/*
					/var RowInfo = MapMarkerDataInfo[index];
					if(!is_undefined(RowInfo) && RowInfo  && is_object(RowInfo))
					console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowInfo' , RowInfo);
					var row = {};
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowInfo' , RowInfo);
					for(var index2Row in RowInfo)
					{
						var Row2Info = RowInfo[index2Row];
						if(!is_undefined(Row2Info) && Row2Info  && is_object(Row2Info))
						row = Row2Info;	
						//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
					}//for(var index2Row in RowInfo)
					*/
				
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
				
					var title = null;
					var address = null;
					//var RowCategory = null;
					var RowSectionId = null;
					var RowCityId = null;
					var GetRowInfo = false;//true , false
					//zoom = trim_space(zoom);
					//zoom = Set_String(zoom);
					//zoom = Set_parseInt(zoom);
					//zoom = Set_parseFloat(zoom);
					
					//# if(!is_undefined(row.category)   && !is_empty(row.category))
					//# RowCategory = trim_space(row.category);
				
					//if(!is_undefined(row.city_id) && !is_empty(row.city_id))
					//RowCityId = Set_parseInt(row.city_id);
					//if(!is_undefined(row.section_id) && !is_empty(row.section_id))
					//RowSectionId = Set_parseInt(row.section_id);
					if(!is_undefined(row.title) && !is_empty(row.title))
					title = trim_space(row.title);
					if(!is_undefined(row.address) && !is_empty(row.address))
					address = trim_space(row.address);
					//if(is_empty(title)  && !is_empty(address))
					//	title = trim_space(address);
				
				
					var zoom = 0;
					var latitude = 0;
					var longitude = 0;
					
					if(!is_undefined(row.zoom) && !is_empty(row.zoom))
					zoom = Set_parseInt((row.zoom));	
				
					if(!is_undefined(row.latitude) && !is_empty(row.latitude))
					longitude = Set_parseFloat((row.latitude));	
					latitude = Set_parseFloat(row.latitude);
					if(!is_undefined(row.longitude) && !is_empty(row.longitude))
					longitude = Set_parseFloat((row.longitude));
					//longitude = Set_parseFloat(trim_space(row.longitude));
				 

					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo title' , title);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo address' , address);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
					
					//console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
					GetRowInfo = true;//true , false
					var RowShowMarker = null;//true , false
					//if(!is_undefined(row.ShowMarker) && !is_empty(row.ShowMarker))
					//RowShowMarker = Set_parseInt(row.ShowMarker);
					if(!is_undefined(row.ShowMarker))
					RowShowMarker = row.ShowMarker;
					if(is_null(RowShowMarker))
						RowShowMarker = false;//true , false
					
					var ShowInfoWindowMarker = null;//true , false
					if(!is_undefined(row.ShowInfoWindowMarker))
					ShowInfoWindowMarker = row.ShowInfoWindowMarker;
					if(is_null(ShowInfoWindowMarker))
						ShowInfoWindowMarker = false;//true , false
					if(GetCountMapMarkerDataInfo == 1)
						ShowInfoWindowMarker = true;//true , false
					
					if(GetRowInfo)
					{ 
						if(latitude != 0 && longitude != 0)
						{
							GetMapMarkerDataInfo = false;//true , false	
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
							HasDataRowInfo = true;//true , false
							
								
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
							//ReSetDefaultsMapOptions  = false;//true , false
							//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							if(CountMapMarkerDataInfo == 1)
							{
								
								//var row = MapMarkerDataInfo[index];
								
							
								var RowLocationId = 0;
								if(!is_undefined(row.LocationId) && !is_empty(row.LocationId))
								RowLocationId = Set_parseInt(row.LocationId);
								var ParentLocationId = 0;
								if(!is_undefined(row.ParentLocationId) && !is_empty(row.ParentLocationId))
								ParentLocationId = Set_parseInt(row.ParentLocationId);
							
								var SetAqHtmlMapMarkerInfoContentString = "";
								//if(is_array(MapMarkerInfoContent) && TestKeyInArray(MapMarkerInfoContent,index))
								//	SetAqHtmlMapMarkerInfoContentString = MapMarkerInfoContent[index];
								
								if(!is_undefined(MapMarkerInfoContent[index]))
								{
									SetAqHtmlMapMarkerInfoContentString = MapMarkerInfoContent[index];
								}//if(!is_undefined(MapMarkerInfoContent[index]))
									
								
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
								//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
								//console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
								//console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);

								//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
								//console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
								//console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);

			
								//"HtmlMapMarkerInfoContentObject": null, //.MapMarkerInfoContent .MapMarkerInfoContent-item
								
								/*
								var SetAqHtmlMapMarkerInfoContentObject = "";//'.wrap_box_content ul.search_list'
								if(!is_undefined(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject) && !is_empty(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject))
								SetAqHtmlMapMarkerInfoContentObject = trim_space(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject);
							
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo SetAqHtmlMapMarkerInfoContentObject' , SetAqHtmlMapMarkerInfoContentObject);
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo SetAqHtmlMapMarkerInfoContentString' , SetAqHtmlMapMarkerInfoContentString);
								*/
								if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
								{
									if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
									{
										if(!is_empty(SetAqHtmlMapMarkerInfoContentString))
										{
											DoHtmlMarkerInfoContentObject.html(SetAqHtmlMapMarkerInfoContentString).show();
										}											
									}//if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
								}//if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
								 
								 
								////map.setCenter(new google.maps.LatLng(latitude, longitude));
								//map.setCenter(pyrmont);
								//if(zoom != 0)
								//	map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							 
							
							//ReSetDefaultsMapOptions  = false;//true , false
							if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							{
								//map.setCenter(new google.maps.LatLng(latitude, longitude));
								map.setCenter(pyrmont);
								if(zoom != 0)
									map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)


								
							var pyrmont = new google.maps.LatLng(latitude, longitude); 
							
							
							
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
							
							//ReSetDefaultsMapOptions  = false;//true , false
							if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							{
								//map.setCenter(new google.maps.LatLng(latitude, longitude));
								map.setCenter(pyrmont);
								if(zoom != 0)
									map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							//pos = { lat: 15.3691, lng: 44.1895 };
							//var pyrmont = {lat: latitude, lng: longitude};
							
							//FullLatLngBounds.push(pyrmont);
							 
						 
							// map.fitBounds(bounds);
							//map.setZoom(zoom);
							////map.setZoom(map.getZoom());
						 
							 
							//var bounds = new google.maps.LatLngBounds();
							////bounds.union(place.geometry.viewport);
							//// bounds.extend(place.geometry.location);
							////bounds.union(pyrmont);
							//bounds.extend(pyrmont);
							//map.fitBounds(bounds);
							
							var marker_title = title;
							////if(is_empty(title)  && !is_empty(address))
							////marker_title = trim_space(address);

							var html = '';//'<b>اليمن</b>';
							if(!is_empty(title))
							html += '<div><b>'+title+'</b></div>';
							if(!is_empty(address))
							html += '<div><b>'+address+'</b></div>';
							//style="color: #000;"
							if(!ShowInfoWindowMarker)
								html = '';
							//var marker_title = "";
							//var html = "";
							//if(!is_undefined(row.info) && !is_empty(row.info))
							//html = trim_space(row.info);
							SetMarkerImageIcon = "";
							//var image = "";			
							if (trim_space(row.image_icon) != '')
							{
								SetMarkerImageIcon = trim_space(row.image_icon);
								//AddImageIcon = true;//true , false
							}
							 
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowShowMarker' , RowShowMarker);
							if(RowShowMarker)
							{
								
								//var OptionsMarker = {
								//	//position: {lat: beach[1], lng: beach[2]}, 
								//	position: new google.maps.LatLng(latitude, longitude),
								//	map: map,
								//	infowindow: infowindow,
								//	title:"Hello World!",
								//	html:"html Hello World!",
								//	icon: image,
								//  RunEventMarkerClick: false,//false , true;
								//  ObjectMarkerInfo: null,
								////ObjectMarkerInfo: ArrayFullDataResultsInfo.ResultsInfo
								//  SetAqHomeObject: null
								//};
									
								//var OptionsMarker = {position: new google.maps.LatLng(latitude, longitude)};
								var OptionsMarker = {position: pyrmont};
								//var OptionsMarker = {position: pyrmont,map: map};
								OptionsMarker.ObjectMarkerInfo=row;
								if(!is_undefined(SetAqHomeObject))
								OptionsMarker.SetAqHomeObject=SetAqHomeObject;
								
								//# var RunEventClickMarkerInfoContentHideActive = true;//true , false
								//# if(!is_undefined(row.RunEventClickMarkerInfoContentHideActive))
								//# RunEventClickMarkerInfoContentHideActive = row.RunEventClickMarkerInfoContentHideActive;
								//# OptionsMarker.RunEventClickMarkerInfoContentHideActive=RunEventClickMarkerInfoContentHideActive;//false , true;
								
								OptionsMarker.RunEventMarkerClick=true;//false , true;
								////var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
								if(!is_empty(TagId) && TagId == "InfoTagSelected")
								{
									//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
									OptionsMarker.RunEventMarkerClick=false;//false , true;	
								}//if(!is_empty(TagId) && TagId == "InfoTagSelected")
								
								if(trim_space(row.image_icon) != '')
								{
									OptionsMarker.icon=trim_space(row.image_icon);
									//OptionsMarker.image=trim_space(row.image_icon);
								}//if(trim_space(row.image_icon) != '')
									
								if(!is_empty(html))
								{
									//if(!infowindow)
									OptionsMarker.infowindow=infowindow;
									OptionsMarker.html=trim_space(html);
									if(!is_empty(marker_title))
									OptionsMarker.title=trim_space(marker_title); 
								
								}//if(trim_space(row.image_icon) != '')
							
								//console.log('SetMapSearchResultsInfo markers' , markers);
								
								marker = addMarkerV2(OptionsMarker);
								//# showMarkers();
								//console.log('SetMapSearchResultsInfo MapMarkerDataInfo marker' , marker);
							}//if(RowShowMarker)	
											 
							 //infowindow.close();

						}//if(latitude != 0 && longitude != 0)
					 
					
					}//if(GetRowInfo) 
				
				}//if(!is_undefined(row) && row  && is_object(row))
			
			} //for(var index in MapMarkerDataInfo)
		}//if(is_array(MapMarkerDataInfo))
		
			
		//GetMapMarkerDataInfo = false;//true , false	
		if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))
		{
			$.each( MapMarkerDataInfo, function(row_key, row){
				//var Info =  "Name: " + row_key + ", row: " + row ;
				//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo row_key' , row_key);
				//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo row' , row);
				if(!is_undefined(row) && row  && is_object(row))
				{
					/*
					/var RowInfo = MapMarkerDataInfo[index];
					if(!is_undefined(RowInfo) && RowInfo  && is_object(RowInfo))
					console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowInfo' , RowInfo);
					var row = {};
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowInfo' , RowInfo);
					for(var index2Row in RowInfo)
					{
						var Row2Info = RowInfo[index2Row];
						if(!is_undefined(Row2Info) && Row2Info  && is_object(Row2Info))
						row = Row2Info;	
						//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
					}//for(var index2Row in RowInfo)
					*/
				
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
				
					var title = null;
					var address = null;
					//var RowCategory = null;
					var RowSectionId = null;
					var RowCityId = null;
					var GetRowInfo = false;//true , false
					//zoom = trim_space(zoom);
					//zoom = Set_String(zoom);
					//zoom = Set_parseInt(zoom);
					//zoom = Set_parseFloat(zoom);
					
					//# if(!is_undefined(row.category)   && !is_empty(row.category))
					//# RowCategory = trim_space(row.category);
				
					//if(!is_undefined(row.city_id) && !is_empty(row.city_id))
					//RowCityId = Set_parseInt(row.city_id);
					//if(!is_undefined(row.section_id) && !is_empty(row.section_id))
					//RowSectionId = Set_parseInt(row.section_id);
					if(!is_undefined(row.title) && !is_empty(row.title))
					title = trim_space(row.title);
					if(!is_undefined(row.address) && !is_empty(row.address))
					address = trim_space(row.address);
					//if(is_empty(title)  && !is_empty(address))
					//	title = trim_space(address);
				
				
					var zoom = 0;
					var latitude = 0;
					var longitude = 0;
					
					if(!is_undefined(row.zoom) && !is_empty(row.zoom))
					zoom = Set_parseInt((row.zoom));	
				
					if(!is_undefined(row.latitude) && !is_empty(row.latitude))
					longitude = Set_parseFloat((row.latitude));	
					latitude = Set_parseFloat(row.latitude);
					if(!is_undefined(row.longitude) && !is_empty(row.longitude))
					longitude = Set_parseFloat((row.longitude));
					//longitude = Set_parseFloat(trim_space(row.longitude));
				 

					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo title' , title);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo address' , address);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
					//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
					
					//console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);
					GetRowInfo = true;//true , false
					var RowShowMarker = null;//true , false
					//if(!is_undefined(row.ShowMarker) && !is_empty(row.ShowMarker))
					//RowShowMarker = Set_parseInt(row.ShowMarker);
					if(!is_undefined(row.ShowMarker))
					RowShowMarker = row.ShowMarker;
					if(is_null(RowShowMarker))
						RowShowMarker = false;//true , false
					
					var ShowInfoWindowMarker = null;//true , false
					if(!is_undefined(row.ShowInfoWindowMarker))
					ShowInfoWindowMarker = row.ShowInfoWindowMarker;
					if(is_null(ShowInfoWindowMarker))
						ShowInfoWindowMarker = false;//true , false
					if(GetCountMapMarkerDataInfo == 1)
						ShowInfoWindowMarker = true;//true , false
					
					if(GetRowInfo)
					{ 
						if(latitude != 0 && longitude != 0)
						{
							GetMapMarkerDataInfo = false;//true , false	
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo latitude' , latitude);
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo longitude' , longitude);
							HasDataRowInfo = true;//true , false
							
								
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
							//ReSetDefaultsMapOptions  = false;//true , false
							//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							if(CountMapMarkerDataInfo == 1)
							{
								
								//var row = MapMarkerDataInfo[index];
								
							
								var RowLocationId = 0;
								if(!is_undefined(row.LocationId) && !is_empty(row.LocationId))
								RowLocationId = Set_parseInt(row.LocationId);
								var ParentLocationId = 0;
								if(!is_undefined(row.ParentLocationId) && !is_empty(row.ParentLocationId))
								ParentLocationId = Set_parseInt(row.ParentLocationId);
							
								var SetAqHtmlMapMarkerInfoContentString = "";
								//if(is_array(MapMarkerInfoContent) && TestKeyInArray(MapMarkerInfoContent,index))
								//	SetAqHtmlMapMarkerInfoContentString = MapMarkerInfoContent[index];
								
								if(!is_undefined(MapMarkerInfoContent[index]))
								{
									SetAqHtmlMapMarkerInfoContentString = MapMarkerInfoContent[index];
								}//if(!is_undefined(MapMarkerInfoContent[index]))
									
								
								//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData placesInfo' , placesInfo);
								//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
								//console.log(' SetMapSearchResultsInfo CountMapMarkerDataInfo' , CountMapMarkerDataInfo);
								//console.log(' SetMapSearchResultsInfo MapMarkerDataInfo' , MapMarkerDataInfo);

								//console.log(' SetMapSearchResultsInfo GetCountMapMarkerDataInfo' , GetCountMapMarkerDataInfo);	
								//console.log(' SetMapSearchResultsInfo CountMapMarkerInfoContent' , CountMapMarkerInfoContent);
								//console.log(' SetMapSearchResultsInfo MapMarkerInfoContent' , MapMarkerInfoContent);

			
								//"HtmlMapMarkerInfoContentObject": null, //.MapMarkerInfoContent .MapMarkerInfoContent-item
								
								/*
								var SetAqHtmlMapMarkerInfoContentObject = "";//'.wrap_box_content ul.search_list'
								if(!is_undefined(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject) && !is_empty(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject))
								SetAqHtmlMapMarkerInfoContentObject = trim_space(GetOptionsSelectedSearchData.HtmlMapMarkerInfoContentObject);
							
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo row' , row);
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo SetAqHtmlMapMarkerInfoContentObject' , SetAqHtmlMapMarkerInfoContentObject);
								console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo SetAqHtmlMapMarkerInfoContentString' , SetAqHtmlMapMarkerInfoContentString);
								*/
								if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
								{
									if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
									{
										if(!is_empty(SetAqHtmlMapMarkerInfoContentString))
										{
											DoHtmlMarkerInfoContentObject.html(SetAqHtmlMapMarkerInfoContentString).show();
										}											
									}//if(is_object(DoHtmlMarkerInfoContentObject) && !is_null(DoHtmlMarkerInfoContentObject))
								}//if(!is_empty(SetAqHtmlMapMarkerInfoContentObject))
								 
								 
								////map.setCenter(new google.maps.LatLng(latitude, longitude));
								//map.setCenter(pyrmont);
								//if(zoom != 0)
								//	map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							 
							
							//ReSetDefaultsMapOptions  = false;//true , false
							if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							{
								//map.setCenter(new google.maps.LatLng(latitude, longitude));
								map.setCenter(pyrmont);
								if(zoom != 0)
									map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)


								
							var pyrmont = new google.maps.LatLng(latitude, longitude); 
							
							
							
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData' , GetOptionsSelectedSearchData);	
							
							//ReSetDefaultsMapOptions  = false;//true , false
							if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							{
								//map.setCenter(new google.maps.LatLng(latitude, longitude));
								map.setCenter(pyrmont);
								if(zoom != 0)
									map.setZoom(zoom);
							}//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
							//pos = { lat: 15.3691, lng: 44.1895 };
							//var pyrmont = {lat: latitude, lng: longitude};
							
							//FullLatLngBounds.push(pyrmont);
							 
						 
							// map.fitBounds(bounds);
							//map.setZoom(zoom);
							////map.setZoom(map.getZoom());
						 
							 
							//var bounds = new google.maps.LatLngBounds();
							////bounds.union(place.geometry.viewport);
							//// bounds.extend(place.geometry.location);
							////bounds.union(pyrmont);
							//bounds.extend(pyrmont);
							//map.fitBounds(bounds);
							
							var marker_title = title;
							////if(is_empty(title)  && !is_empty(address))
							////marker_title = trim_space(address);

							var html = '';//'<b>اليمن</b>';
							if(!is_empty(title))
							html += '<div><b>'+title+'</b></div>';
							if(!is_empty(address))
							html += '<div><b>'+address+'</b></div>';
							//style="color: #000;"
							if(!ShowInfoWindowMarker)
								html = '';
							//var marker_title = "";
							//var html = "";
							//if(!is_undefined(row.info) && !is_empty(row.info))
							//html = trim_space(row.info);
							SetMarkerImageIcon = "";
							//var image = "";			
							if (trim_space(row.image_icon) != '')
							{
								SetMarkerImageIcon = trim_space(row.image_icon);
								//AddImageIcon = true;//true , false
							}
							 
							//console.log('SetMapSearchResultsInfo GetOptionsSelectedSearchData MapMarkerDataInfo RowShowMarker' , RowShowMarker);
							if(RowShowMarker)
							{
								
								//var OptionsMarker = {
								//	//position: {lat: beach[1], lng: beach[2]}, 
								//	position: new google.maps.LatLng(latitude, longitude),
								//	map: map,
								//	infowindow: infowindow,
								//	title:"Hello World!",
								//	html:"html Hello World!",
								//	icon: image,
								//  RunEventMarkerClick: false,//false , true;
								//  ObjectMarkerInfo: null,
								////ObjectMarkerInfo: ArrayFullDataResultsInfo.ResultsInfo
								//  SetAqHomeObject: null
								//};
									
								//var OptionsMarker = {position: new google.maps.LatLng(latitude, longitude)};
								var OptionsMarker = {position: pyrmont};
								//var OptionsMarker = {position: pyrmont,map: map};
								OptionsMarker.ObjectMarkerInfo=row;
								if(!is_undefined(SetAqHomeObject))
								OptionsMarker.SetAqHomeObject=SetAqHomeObject;
								
								//# var RunEventClickMarkerInfoContentHideActive = true;//true , false
								//# if(!is_undefined(row.RunEventClickMarkerInfoContentHideActive))
								//# RunEventClickMarkerInfoContentHideActive = row.RunEventClickMarkerInfoContentHideActive;
								//# OptionsMarker.RunEventClickMarkerInfoContentHideActive=RunEventClickMarkerInfoContentHideActive;//false , true;
								
								OptionsMarker.RunEventMarkerClick=true;//false , true;
								////var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
								if(!is_empty(TagId) && TagId == "InfoTagSelected")
								{
									//if(!ReSetDefaultsMapOptions && CountMapMarkerDataInfo == 1)
									OptionsMarker.RunEventMarkerClick=false;//false , true;	
								}//if(!is_empty(TagId) && TagId == "InfoTagSelected")
								
								if(trim_space(row.image_icon) != '')
								{
									OptionsMarker.icon=trim_space(row.image_icon);
									//OptionsMarker.image=trim_space(row.image_icon);
								}//if(trim_space(row.image_icon) != '')
									
								if(!is_empty(html))
								{
									//if(!infowindow)
									OptionsMarker.infowindow=infowindow;
									OptionsMarker.html=trim_space(html);
									if(!is_empty(marker_title))
									OptionsMarker.title=trim_space(marker_title); 
								
								}//if(trim_space(row.image_icon) != '')
							
								//console.log('SetMapSearchResultsInfo markers' , markers);
								
								marker = addMarkerV2(OptionsMarker);
								//# showMarkers();
								//console.log('SetMapSearchResultsInfo MapMarkerDataInfo marker' , marker);
							}//if(RowShowMarker)	
											 
							 //infowindow.close();

						}//if(latitude != 0 && longitude != 0)
					 
					
					}//if(GetRowInfo) 
				
				}//if(!is_undefined(row) && row  && is_object(row))
			
			});//$.each( MapMarkerDataInfo, function(row_key, row){
			 
		}//if(GetMapMarkerDataInfo && !is_array(MapMarkerDataInfo) && is_object(MapMarkerDataInfo))	
		
		//# showMarkers();
		//console.log('SetMapSearchResultsInfo markers' , markers);
		
 
	}//if(!is_undefined(GetOptionsSelectedSearchData) && is_object(GetOptionsSelectedSearchData))
		
	
}//function SetMapSearchResultsInfo(object,DoReSetSearchData,SetIndexResultsInfo,TagId)
 
 
 
function SearchTagIdByMap(TagId) 
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	if(is_undefined(TagId))
	{
		TagId = "";
		//TagId = "AllSelected";
	}
	//TagId = trim_space(TagId); 
	//if(is_empty(TagId) && !map)
	//return null;
	/*
	if(infoWindow)
	{
		//# marker = addMarker(position);
		infowindow = infoWindow;
		infowindow.close();
	}//if(infoWindow)
	if(map)	
	clearMarkers();
	*/
	if(FunPrintConsoleLog)
	console.log('SearchTagIdByMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		//var SelectedSectionId = "";
		//var SelectedCityId = "";
		var SetSelectSectionId = 0;
		var SetSelectCityId = 0;
		//SetSelectSectionId = SelectedSectionId;
		//SetSelectCityId = SelectedCityId;
	 
		if(!is_undefined(SelectedSectionId) && !is_empty(SelectedSectionId))
		{
			//val = trim_space(SelectedSectionId);
			val = Set_parseInt(SelectedSectionId);
			if(val > 0)
				SetSelectSectionId = val;
		}//if(!is_undefined(SelectedSectionId) && !is_empty(SelectedSectionId))
		
		if(!is_undefined(SelectedCityId) && !is_empty(SelectedCityId))
		{
			//val = trim_space(SelectedCityId);
			val = Set_parseInt(SelectedCityId);
			if(val > 0)
				SetSelectCityId = val;
		}//if(!is_undefined(SelectedCityId) && !is_empty(SelectedCityId))
		
		if(FunPrintConsoleLog)
		{
			console.log(' SearchTagIdByMap TagId' , TagId);
			//console.log(' SearchTagIdByMap SelectedSectionId' , SelectedSectionId);
			//console.log(' SearchTagIdByMap SelectedCityId' , SelectedCityId);
			
			//console.log(' SearchTagIdByMap SetSelectSectionId' , SetSelectSectionId);
			//console.log(' SearchTagIdByMap SetSelectCityId' , SetSelectCityId);
		}//if(FunPrintConsoleLog)
			
		
		var placesInfo = {};
		if(!is_undefined(ArrayFullDataResultsInfo.ResultsInfo)  && ArrayFullDataResultsInfo.ResultsInfo  && is_object(ArrayFullDataResultsInfo.ResultsInfo))
		placesInfo = ArrayFullDataResultsInfo.ResultsInfo;
		
		var RunFilterSearch = false;//true , false
		if(!is_undefined(ArrayFullDataResultsInfo.RunFilterSearch)  && ArrayFullDataResultsInfo.RunFilterSearch )// && is_boolean(ArrayFullDataResultsInfo.RunFilterSearch)
		RunFilterSearch = ArrayFullDataResultsInfo.RunFilterSearch;
	
		var CityGoogleLatLngInfo = {};
		if(!is_undefined(ArrayFullDataResultsInfo.CityGoogleLatLngInfo)  && ArrayFullDataResultsInfo.CityGoogleLatLngInfo  && is_object(ArrayFullDataResultsInfo.CityGoogleLatLngInfo))
		CityGoogleLatLngInfo = ArrayFullDataResultsInfo.CityGoogleLatLngInfo;
	
		//if(typeof GetObjectLength != "undefined" && typeof GetObjectLength =='function')
		//	Length = GetObjectLength(CityGoogleLatLngInfo);
	
		//if(is_object(CityGoogleLatLngInfo) && CityGoogleLatLngInfo && !jQuery.isEmptyObject(CityGoogleLatLngInfo))	
		if(RunFilterSearch)
		{
			var ReSetDefaultsOptions = {"RunFilterSearch": false };////true , false 
			ArrayFullDataResultsInfo = $.extend({},ReSetDefaultsOptions, ArrayFullDataResultsInfo);
			//$("[SearchButton=1]").click();
			if(FunPrintConsoleLog)
			console.log('SearchTagIdByMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		}//RunFilterSearch
		
		
		
		var ServicePointsGoogleLatLngInfo = {};
		if(!is_undefined(ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo)  && ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo  && is_object(ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo))
		ServicePointsGoogleLatLngInfo = ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo;
		
		
		
		
		var CategoryServicePointsGoogleLatLngInfo = [];
		if(!is_undefined(ArrayFullDataResultsInfo.ResultsCategoryServicePointsGoogleLatLngInfo)  && ArrayFullDataResultsInfo.ResultsCategoryServicePointsGoogleLatLngInfo  && is_object(ArrayFullDataResultsInfo.ResultsCategoryServicePointsGoogleLatLngInfo))
		CategoryServicePointsGoogleLatLngInfo = ArrayFullDataResultsInfo.ResultsCategoryServicePointsGoogleLatLngInfo;
	
		if(FunPrintConsoleLog)
		console.log('SearchTagIdByMap placesInfo' , placesInfo);
		if(FunPrintConsoleLog)
		console.log('SearchTagIdByMap CityGoogleLatLngInfo' , CityGoogleLatLngInfo);
	
		if(FunPrintConsoleLog)
		console.log('SearchTagIdByMap ServicePointsGoogleLatLngInfo' , ServicePointsGoogleLatLngInfo);
		if(FunPrintConsoleLog)
		console.log('SearchTagIdByMap CategoryServicePointsGoogleLatLngInfo' , CategoryServicePointsGoogleLatLngInfo);
		 
		 
		 
		//var ReSetDefaultsMapOptions  = false;//true , false
		//# FunPrintConsoleLog = true;//false , true; 
		//# ReSetDefaultsMapOptions  = true;//true , false
				
		var SetDefaultsZoom = null;
		var SetDefaultsLongitude = null;
		var SetDefaultsLatitude = null;
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapZoom))
		{
			zoom = Set_parseInt(ArrayFullDataResultsInfo.DefaultsMapZoom);
			if(zoom != 0)
				SetDefaultsZoom = zoom;
		}//if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapZoom))
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLongitude))
			SetDefaultsLongitude =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLongitude);	
			
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLatitude))
			SetDefaultsLatitude =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLatitude);
		
		//# ReSetDefaultsMapOptions  = true;//true , false
		if(ReSetDefaultsMapOptions)
		{
			ReSetDefaultsMapOptions  = false;//true , false
			//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
			//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsLongitude' , SetDefaultsLongitude);
			//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsLatitude' , SetDefaultsLatitude);
			
			if(SetDefaultsLongitude && SetDefaultsLatitude && !is_empty(SetDefaultsLongitude) && !is_empty(SetDefaultsLatitude))
			{
				latitude = Set_parseFloat(SetDefaultsLatitude);
				longitude = Set_parseFloat(SetDefaultsLongitude);
				if(latitude != 0 && longitude != 0)
				{
					//if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLongitude))
					//longval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLongitude);	
					
					//if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLatitude))
					//latval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLatitude);	

					//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
					//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsLongitude' , SetDefaultsLongitude);
					//console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsLatitude' , SetDefaultsLatitude);
					
					//var pyrmont = {lat: latval, lng: longval};
					//var myLatlng = new google.maps.LatLng(latval, longval);
					//var c = map.getCenter();
					//x = c.lng().toFixed(5);
					//y = c.lat().toFixed(5);
					
					//x = latitude;//.toFixed(5);
					//y = longitude;//.toFixed(5);
					
					//var XandY = x + ' , ' + y;
					//console.log(' SearchTagIdByMap  x , y' , XandY);
					var pyrmont = {lat: latitude, lng: longitude};
					//console.log(' SearchTagIdByMap  pyrmont ' , pyrmont);
					//map.setCenter(new google.maps.LatLng(y, x)); 
					//console.log(' initMap pyrmont ' , pyrmont); 
					
					map.setCenter(new google.maps.LatLng(latitude, longitude));
					if(SetDefaultsZoom && SetDefaultsZoom != 0)
					{
						map.setZoom(SetDefaultsZoom);
						SetDefaultsZoom = null;
					}
					/* 
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					var XandY = x + ' , ' + y;
					console.log(' SearchTagIdByMap x , y' , XandY);
					
					Zoom = map.getZoom();
					console.log(' SearchTagIdByMap  Zoom' , Zoom);
					*/
					
					/*
					//pos = { lat: 15.3691, lng: 44.1895 };
					//var pyrmont = {lat: latitude, lng: longitude};
					var pyrmont = new google.maps.LatLng(latitude, longitude);
				
					var bounds = new google.maps.LatLngBounds();
					////bounds.union(place.geometry.viewport);
					//// bounds.extend(place.geometry.location);
					////bounds.union(pyrmont);
					bounds.extend(pyrmont);
					//map.fitBounds(bounds);
					*/
					
				}//if(latitude != 0 && longitude != 0)
			}//if(SetDefaultsLongitude && SetDefaultsLatitude && !is_empty(SetDefaultsLongitude) && !is_empty(SetDefaultsLatitude))
				
			
			if(SetDefaultsZoom && SetDefaultsZoom != 0)
			{
				//Zoom = map.getZoom();
				////map.setZoom(map.getZoom());
				map.setZoom(SetDefaultsZoom);
				console.log('SearchTagIdByMap ReSetDefaultsMapOptions SetDefaultsZoom' , SetDefaultsZoom);
			}//if(SetDefaultsZoom && SetDefaultsZoom != 0)
				
		}//if(ReSetDefaultsMapOptions)
			
		 
		if(infoWindow)
		{
			//# marker = addMarker(position);
			infowindow = infoWindow;
			infowindow.close();
		}//if(infoWindow)
		if(map)	
		clearMarkers();
		 
		
		if(!geocoder)
		geocoder = new google.maps.Geocoder;

		if(!infowindow)
		infowindow = new google.maps.InfoWindow;
				
		var HasDataRowInfo = false;//true , false
		$.each( placesInfo, function(row_key, row){
			//var Info =  "Name: " + row_key + ", row: " + row ;
			//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo row_key' , row_key);
			//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo row' , row);

			if(!is_undefined(row)  && row  && is_object(row))
			{
				var title = null;
				var address = null;
				var latitude = null;
				var longitude = null;
				//var RowCategory = null;
				var RowSectionId = null;
				var RowCityId = null;
				var GetRowInfo = false;//true , false
				//zoom = trim_space(zoom);
				//zoom = Set_String(zoom);
				//zoom = Set_parseInt(zoom);
				//zoom = Set_parseFloat(zoom);
				
				//# if(!is_undefined(row.category)   && !is_empty(row.category))
				//# RowCategory = trim_space(row.category);
			
				if(!is_undefined(row.city_id) && !is_empty(row.city_id))
				RowCityId = Set_parseInt(row.city_id);
				if(!is_undefined(row.section_id) && !is_empty(row.section_id))
				RowSectionId = Set_parseInt(row.section_id);
				if(!is_undefined(row.title) && !is_empty(row.title))
				title = trim_space(row.title);
				if(!is_undefined(row.address) && !is_empty(row.address))
				address = trim_space(row.address);
				//if(is_empty(title)  && !is_empty(address))
				//	title = trim_space(address);

				if(!is_undefined(row.latitude) && !is_empty(row.latitude))
				latitude = trim_space(row.latitude);
				if(!is_undefined(row.longitude) && !is_empty(row.longitude))
				longitude = trim_space(row.longitude);

				//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo title' , title);
				//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo address' , address);
				//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo latitude' , latitude);
				//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo longitude' , longitude);
				
				GetRowInfo = true;//true , false
				var RowShowMarker = false;
				if(!is_undefined(row.ShowMarker) && !is_empty(row.ShowMarker))
				RowShowMarker = Set_parseInt(row.ShowMarker);
				
				/*
				if(SetSelectSectionId > 0 && SetSelectCityId > 0)
				{
					if((RowCityId &&  !is_empty(RowCityId) && SetSelectCityId > 0 && RowCityId == SetSelectCityId) && (RowSectionId && !is_empty(RowSectionId) && SetSelectSectionId > 0 && RowSectionId == SetSelectSectionId))
					GetRowInfo = true;//true , false
				}
				else if(SetSelectSectionId > 0 && SetSelectCityId == 0)
				{
					if(RowSectionId && !is_empty(RowSectionId) && SetSelectSectionId > 0 && RowSectionId == SetSelectSectionId)
					GetRowInfo = true;//true , false
				}
				else if(SetSelectSectionId == 0 && SetSelectCityId > 0)
				{
					if(RowCityId &&  !is_empty(RowCityId) && SetSelectCityId > 0 && RowCityId == SetSelectCityId)
					GetRowInfo = true;//true , false
				}
				else //if(SetSelectSectionId == 0 && SetSelectCityId == 0)
				{
					GetRowInfo = true;//true , false
				}
				*/
				
				/*
				if(RowCityId &&  !is_empty(RowCityId) && SetSelectCityId > 0 && RowCityId == SetSelectCityId)
				GetRowInfo = true;//true , false
				
				if(RowSectionId && !is_empty(RowSectionId) && SetSelectSectionId > 0 && RowSectionId == SetSelectSectionId)
				GetRowInfo = true;//true , false
			
				if(!GetRowInfo && SetSelectSectionId == 0 && SetSelectCityId == 0)
					GetRowInfo = true;//true , false
				*/
				if(GetRowInfo)
				{ 
					if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
					{
						latitude = Set_parseFloat(latitude);
						longitude = Set_parseFloat(longitude);
						if(latitude != 0 && longitude != 0)
						{
							//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo RowCityId' , RowCityId);
							//console.log('SearchTagIdByMap ArrayFullDataResultsInfo placesInfo RowSectionId' , RowSectionId);
							HasDataRowInfo = true;//true , false
							 
							//pos = { lat: 15.3691, lng: 44.1895 };
							//var pyrmont = {lat: latitude, lng: longitude};
							var pyrmont = new google.maps.LatLng(latitude, longitude);
							//FullLatLngBounds.push(pyrmont);
							 
						 
							// map.fitBounds(bounds);
							//map.setZoom(zoom);
							////map.setZoom(map.getZoom());
						 
							 
							//var bounds = new google.maps.LatLngBounds();
							////bounds.union(place.geometry.viewport);
							//// bounds.extend(place.geometry.location);
							////bounds.union(pyrmont);
							//bounds.extend(pyrmont);
							//map.fitBounds(bounds);
							
							var marker_title = title;
							////if(is_empty(title)  && !is_empty(address))
							////marker_title = trim_space(address);

							var html = '';//'<b>اليمن</b>';
							if(!is_empty(title))
							html += '<div><b>'+title+'</b></div>';
							if(!is_empty(address))
							html += '<div><b>'+address+'</b></div>';


							//var marker_title = "";
							//var html = "";
							//if(!is_undefined(row.info) && !is_empty(row.info))
							//html = trim_space(row.info);
							
							if(RowShowMarker)
							{
								if(!is_empty(html))
								{
									if(!is_empty(marker_title))
									marker = addMarker(pyrmont, infowindow, html , marker_title)
									else
									marker = addMarker(pyrmont, infowindow, html)
								}
								else
								{
									marker = addMarker(pyrmont);
								}
							}//if(RowShowMarker)
							//AddImageIcon = false;//true , false
							SetMarkerImageIcon = "";
							//var image = "";			
							if (trim_space(row.image_icon) != '')
							{
								SetMarkerImageIcon = trim_space(row.image_icon);
								//AddImageIcon = true;//true , false
							}
							//icon: SetMarkerImageIcon,					 
							 //infowindow.close();

						}//if(latitude != 0 && longitude != 0)
							
					}//if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
					 
				
				}//if(GetRowInfo)
			}//if(!is_undefined(row)  && row  && is_object(row))
		});//$.each( placesInfo, function(row_key, row){
		 
	
		
		
		//if(SetSelectSectionId > 0 && SetSelectCityId > 0)
		
		//console.log(' SearchTagIdByMap SetSelectCityId' , SetSelectCityId);
		//console.log(' SearchTagIdByMap SetSelectSectionId' , SetSelectSectionId);
			
		//return;
		//SetSelectCityId = 0;
		//SetSelectSectionId = 0;
		if(SetSelectCityId > 0)
		{
			

			var Info = {}; 
			if(!TestKeyInArray(CityGoogleLatLngInfo,SetSelectCityId))
			{
				GoogleLatLngInfo = CityGoogleLatLngInfo[SetSelectCityId];
				if(is_object(GoogleLatLngInfo))
				{
					Info = GoogleLatLngInfo;
				}//if(is_object(GoogleLatLngInfo))
			}//if(!TestKeyInArray(CityGoogleLatLngInfo,SetSelectCityId))
				
			
			if(FunPrintConsoleLog)
			console.log('SearchTagIdByMap CityGoogleLatLngInfo[SetSelectCityId] Info' , Info);
			
		
			/*
			if(is_object(Info) && Info && typeof GetObjectLength != "undefined" && typeof GetObjectLength =='function')
			{
				Length = GetObjectLength(Info);
				if(FunPrintConsoleLog)
				console.log('SearchTagIdByMap CityGoogleLatLngInfo[SetSelectCityId]  GetObjectLength Info Length' , Length);
			}//if(is_object(Info) && Info && typeof GetObjectLength != "undefined" && typeof GetObjectLength =='function')
				
			if(is_object(Info) && Info && !jQuery.isEmptyObject(Info))
			{
				if(FunPrintConsoleLog)
				console.log('SearchTagIdByMap CityGoogleLatLngInfo[SetSelectCityId] isEmptyObject Info');
			}
			*/
			
			if(is_object(Info) && Info && !jQuery.isEmptyObject(Info))
			{
				
				
				 
				var map_latitude = null;
				var map_longitude = null;
				var map_google_address = null;
				var map_address_id = null;
				var DefaultsMapZoom = null;
				//var GetRowInfo = false;//true , false
				
				 
				if(!is_undefined(Info.google_address) && !is_empty(Info.google_address))
				map_google_address = trim_space(Info.google_address);
				if(!is_undefined(Info.map_address_id) && !is_empty(Info.map_address_id))
				map_address_id = trim_space(Info.map_address_id);
				
				//RowCityId = Set_parseInt(Info.city_id);
				if(!is_undefined(Info.latitude) && !is_empty(Info.latitude))
				map_latitude = trim_space(Info.latitude);
				if(!is_undefined(Info.longitude) && !is_empty(Info.longitude))
				map_longitude = trim_space(Info.longitude);
				
				if(!is_undefined(Info.DefaultsMapZoom))//&& !is_empty(Info.DefaultsMapZoom)
				{
					zoom = Set_parseInt(Info.DefaultsMapZoom);
					if(zoom != 0)
						DefaultsMapZoom = zoom;
				}//if(!is_undefined(Info.DefaultsMapZoom))
				
			
				//console.log('SearchTagIdByMap CityGoogleLatLngInfo[SetSelectCityId] Info' , Info);
		 
				//# FunPrintConsoleLog = true;//false , true; 
				//# ReSetDefaultsMapOptions  = true;//true , false
				
				var SetDbRowInfoGoogleLatLngInfo = true;//true , false
				if(SetDbRowInfoGoogleLatLngInfo)
				{ 
					var SetRowInfoZoom = false;//true , false
					var SetRowInfoLatLng = false;//true , false
					
					//console.log('SearchTagIdByMap City DefaultsMapZoom' , DefaultsMapZoom);
					//console.log('SearchTagIdByMap City map_longitude' , map_longitude);
					//console.log('SearchTagIdByMap City map_latitude' , map_latitude);
							
					if(map_longitude && map_latitude && !is_empty(map_longitude) && !is_empty(map_latitude))
					{
						latitude = Set_parseFloat(map_latitude);
						longitude = Set_parseFloat(map_longitude);
						if(latitude != 0 && longitude != 0)
						{
							map.setCenter(new google.maps.LatLng(latitude, longitude)); 
							/*
							var c = map.getCenter();
							x = c.lng().toFixed(5);
							y = c.lat().toFixed(5);
							var XandY = x + ' , ' + y;
							console.log(' SearchTagIdByMap  City x , y' , XandY);
							
							Zoom = map.getZoom();
							console.log(' SearchTagIdByMap  City Zoom' , Zoom);
							*/
							
							/*
							//pos = { lat: 15.3691, lng: 44.1895 };
							//var pyrmont = {lat: latitude, lng: longitude};
							var pyrmont = new google.maps.LatLng(latitude, longitude);
						
							var bounds = new google.maps.LatLngBounds();
							////bounds.union(place.geometry.viewport);
							//// bounds.extend(place.geometry.location);
							////bounds.union(pyrmont);
							bounds.extend(pyrmont);
							//map.fitBounds(bounds);
							*/
							SetRowInfoLatLng  = true;//true , false
						}//if(latitude != 0 && longitude != 0)
					}//if(longitude && latitude && !is_empty(longitude) && !is_empty(latitude))
						
					
					if(DefaultsMapZoom && DefaultsMapZoom != 0)
					{
						//Zoom = map.getZoom();
						////map.setZoom(map.getZoom());
						map.setZoom(DefaultsMapZoom);
						SetRowInfoZoom = true;//true , false
					}//if(DefaultsMapZoom && DefaultsMapZoom != 0)
						
					if(SetRowInfoZoom && SetRowInfoLatLng)
					{
						ReSetDefaultsMapOptions  = true;//true , false
						map_address_id = null;
					}//if(SetRowInfoZoom && SetRowInfoLatLng)
				}//if(SetDbRowInfoGoogleLatLngInfo)
	 
				if(map_address_id && !is_empty(map_address_id))
				{
					if(FunPrintConsoleLog)
					console.log('SearchTagIdByMap CityGoogleLatLngInfo[SetSelectCityId] Info.map_address_id' , map_address_id);
				
					if(!geocoder)
					geocoder = new google.maps.Geocoder;

					if(!infowindow)
					infowindow = new google.maps.InfoWindow;
				
					//# FunPrintConsoleLog = true;//false , true; 
					ReSetDefaultsMapOptions  = true;//true , false
					
					Live_latitude = null;
					Live_longitude = null;
					Live_MapZoom = null;
					Live_google_address = null;
					Live_map_address_id = null;
					//# geocodePlaceId(map_address_id, geocoder, map, infowindow);
					
					geocodePlaceId(map_address_id, geocoder, map); 
				}//if(map_address_id && !is_empty(map_address_id))
				
				
				
			 
			
			}//if(is_object(Info) && Info && !jQuery.isEmptyObject(Info))
		}//if(SetSelectCityId > 0)
			
		if(SetSelectSectionId > 0 && SetSelectCityId == 0)
		{ 
			var Info = {};
			//if(!is_empty(SetSelectSectionId) && !TestKeyInArray(CategoryServicePointsGoogleLatLngInfo,SetSelectSectionId))
			if(SetSelectSectionId > 0 && !TestKeyInArray(CategoryServicePointsGoogleLatLngInfo,SetSelectSectionId))
			{
				GoogleLatLngInfo = CategoryServicePointsGoogleLatLngInfo[SetSelectSectionId];
				if(is_object(GoogleLatLngInfo))
				{
					 Info = GoogleLatLngInfo;
				}//if(is_object(GoogleLatLngInfo))
			}//if(SetSelectSectionId > 0 && !TestKeyInArray(CategoryServicePointsGoogleLatLngInfo,SetSelectSectionId))
				
			//console.log('SearchTagIdByMap Info' , Info);
		
			
			//if(map)	
			//clearMarkers();
			
			
			//console.log('SearchTagIdByMap ServicePointsGoogleLatLngInfo' , ServicePointsGoogleLatLngInfo);
			//console.log('SearchTagIdByMap CategoryServicePointsGoogleLatLngInfo Info' , Info);
			var RowInfo = {};
			var CategoryHasDataRowInfo = false;//true , false
			
			//if(!is_empty(SetSelectSectionId) && !TestKeyInArray(CategoryServicePointsGoogleLatLngInfo,SetSelectSectionId))
			if(SetSelectSectionId > 0 &&!TestKeyInArray(CategoryServicePointsGoogleLatLngInfo,SetSelectSectionId))
			{
				RowInfo = Info;
				CategoryHasDataRowInfo = true;//true , false
			}
			else
			{
				RowInfo = ServicePointsGoogleLatLngInfo;
			}
			if(!is_undefined(RowInfo.MaxLongitude) && !is_undefined(RowInfo.MaxLatitude) && !is_undefined(RowInfo.MinLongitude) && !is_undefined(RowInfo.MinLatitude))
			{
				
		
				var MaxLongitude = 0;
				var MaxLatitude = 0;
				var MinLongitude = 0;
				var MinLatitude = 0;
				
				if(!is_empty(RowInfo.MaxLongitude))
				MaxLongitude = Set_parseFloat(RowInfo.MaxLongitude);
				if(!is_empty(RowInfo.MaxLatitude))
				MaxLatitude = Set_parseFloat(RowInfo.MaxLatitude);
				if(!is_empty(RowInfo.MinLongitude))
				MinLongitude = Set_parseFloat(RowInfo.MinLongitude);
				if(!is_empty(RowInfo.MinLatitude))
				MinLatitude = Set_parseFloat(RowInfo.MinLatitude);
				
				if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
				{
					MaxLongitude = MaxLongitude.toFixed(5);
					MaxLatitude = MaxLatitude.toFixed(5);
					MinLongitude = MinLongitude.toFixed(5);
					MinLatitude = MinLatitude.toFixed(5);
				}//if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
				
				if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
				{
					//CategoryHasDataRowInfo = true;//true , false
					var SetZoom = null;
					if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapZoom))
					SetZoom =  trim_space(ArrayFullDataResultsInfo.DefaultsMapZoom);
					if(SetZoom != null)
					SetZoom = Set_parseInt(SetZoom);
				
					var MaxMapsZoom = null;
					var MinMapsZoom = null;
				
					if(!is_undefined(ArrayFullDataResultsInfo.MaxZoom))
					MaxMapsZoom =  trim_space(ArrayFullDataResultsInfo.MaxZoom);
					if(MaxMapsZoom != null)
					MaxMapsZoom = Set_parseInt(MaxMapsZoom);
					
					if(SetZoom == null && MaxMapsZoom != null)
					SetZoom = MaxMapsZoom;
					if(MaxMapsZoom == null && SetZoom != null)
					MaxMapsZoom = SetZoom;
				
					if(!is_undefined(ArrayFullDataResultsInfo.MinZoom))
					MinMapsZoom =  trim_space(ArrayFullDataResultsInfo.MinZoom);
					if(MinMapsZoom != null)
					MinMapsZoom = Set_parseInt(MinMapsZoom);
					
					
					if(CategoryHasDataRowInfo)
					{
						if(MinMapsZoom != null)
						SetZoom = MinMapsZoom;
					}//if(CategoryHasDataRowInfo)
					else{
						if(MaxMapsZoom != null)
						SetZoom = MaxMapsZoom;
						//if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLongitude))
						//longval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLongitude);	
						
						//if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLatitude))
						//latval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLatitude);	
					}//if(CategoryHasDataRowInfo)	
					 
				
				 // map.fitBounds(bounds);
					//map.setZoom(zoom);
					////map.setZoom(map.getZoom());
					
					//var bounds = new google.maps.LatLngBounds();
					////bounds.union(place.geometry.viewport);
					//// bounds.extend(place.geometry.location);
					////bounds.union(pyrmont);
					//bounds.extend(pyrmont);
					//map.fitBounds(bounds);
					//console.log(' SearchTagIdByMap bounds' , bounds);
						
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					
					/*
					var XandY = x + ' , ' + y;
					console.log(' SearchTagIdByMap 1 x , y' , XandY);
					Zoom = map.getZoom();
					console.log(' SearchTagIdByMap  1 Zoom' , Zoom);
					*/	
					////var MaxMapsZoom = null;
					////var MinMapsZoom = null;
					//if(MaxMapsZoom == null)
					//	MaxMapsZoom = Zoom;
					//if(MinMapsZoom == null)
					//	MinMapsZoom = Zoom;
					
					// map.setCenter(new google.maps.LatLng(y, x));
					//map.setCenter(new google.maps.LatLng(MaxLatitude, MaxLongitude));
					//map.setCenter(new google.maps.LatLng(MinLongitude, MinLatitude)); 
					
					//# map.setCenter(new google.maps.LatLng(MaxLatitude, MaxLongitude));
					
					//console.log(' SearchTagIdByMap MinLongitude' , MinLongitude);
					//console.log(' SearchTagIdByMap MaxLongitude' , MaxLongitude);
					//console.log(' SearchTagIdByMap MinLatitude' , MinLatitude);
					//console.log(' SearchTagIdByMap MaxLatitude' , MaxLatitude);
					 
					if (x < MinLongitude) x = MinLongitude;
					if (x > MaxLongitude) x = MaxLongitude;
					if (y < MinLatitude) y = MinLatitude;
					if (y > MaxLatitude) y = MaxLatitude;
					
					//var XandY = x + ' , ' + y;
					//console.log(' SearchTagIdByMap 2 x , y' , XandY);
					
					map.setCenter(new google.maps.LatLng(y, x));
					  
					//Zoom = map.getZoom();
					if(SetZoom != null)
						map.setZoom(SetZoom);
							
 
					var bounds = new google.maps.LatLngBounds();
  
					//map.fitBounds(bounds);
					
					var offset = 0.002;     
					var center = bounds.getCenter();                            
					bounds.extend(new google.maps.LatLng(center.lat() + offset, center.lng() + offset));
					bounds.extend(new google.maps.LatLng(center.lat() - offset, center.lng() - offset));
 
					/* 						  
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					
					var XandY = x + ' , ' + y;
					console.log(' SearchTagIdByMap 3 x , y' , XandY);
					Zoom = map.getZoom();
					console.log(' SearchTagIdByMap 3 Zoom' , Zoom); 
					*/
					
					//# FunPrintConsoleLog = true;//false , true; 
					ReSetDefaultsMapOptions  = true;//true , false
					 
				}//if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
			}//if(!is_undefined(RowInfo.MaxLongitude) && !is_undefined(RowInfo.MaxLatitude) && !is_undefined(RowInfo.MinLongitude) && !is_undefined(RowInfo.MinLatitude))
			
		}//if(SetSelectSectionId > 0 && SetSelectCityId == 0)
			
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
}//function SearchTagIdByMap(TagId) 
  
 
 
function codeAddress() {
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	var address = document.getElementById('pac-input').value;
	geocoder.geocode({
		'address': address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0].geometry.viewport) {
				map.fitBounds([
					[results[0].geometry.viewport.getSouthWest().lat(),
						results[0].geometry.viewport.getSouthWest().lng()
					],
					[results[0].geometry.viewport.getNorthEast().lat(),
						results[0].geometry.viewport.getNorthEast().lng()
					]
				]);
				map.setZoom(18);
			} else if (results[0].geometry.bounds) {
				map.fitBounds([
					[results[0].geometry.bounds.getSouthWest().lat(),
						results[0].geometry.bounds.getSouthWest().lng()
					],
					[results[0].geometry.bounds.getNorthEast().lat(),
						results[0].geometry.bounds.getNorthEast().lng()
					]
				]);
			} else { // give up, pick an arbitrary zoom level
				map.panTo(results[0].geometry.location);
				map.setZoom(15);
			}
		} else {
			$('#result').html('Geocode was not successful for the following reason: ' + status);
		}
	});
} //function codeAddress() 


// This function is called when the user clicks the UI button requesting
// a geocode of a place ID.
function geocodePlaceId(placeId , geocoderMap, resultsMap, infowindow)
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	//var placeId = document.getElementById('place-id').value;

	//parent_latitude = null;
	//parent_longitude = null;
	//parent_MapZoom = null;
	//parent_google_address = null;
	//parent_map_address_id = null;
	
	//Live_latitude = null;
	//Live_longitude = null;
	//Live_MapZoom = null;
	//Live_google_address = null;
	//Live_map_address_id = null;

	if(is_undefined(placeId) && !is_undefined(Live_map_address_id) && Live_map_address_id)
	placeId = Live_map_address_id;

	if(is_undefined(placeId) && !is_undefined(parent_map_address_id) && parent_map_address_id)
	placeId = parent_map_address_id;

	 
	if(is_undefined(resultsMap) && !is_undefined(map) && map)
	resultsMap = map;

	if(is_undefined(geocoderMap) && !is_undefined(geocoder) && geocoder)
	geocoderMap = geocoder;

	if(is_undefined(placeId) || is_empty(placeId) || is_undefined(geocoder) || is_undefined(map))
	return null;


	geocoder = geocoderMap;
	map = resultsMap;

	var Zoom =  map.getZoom();
	//console.log('geocodePlaceId map.getZoom ' , Zoom);
	//console.log('geocodePlaceId Live_MapZoom ' , Live_MapZoom);
	//console.log('geocodePlaceId parent_MapZoom ' , parent_MapZoom);
	var GetZoom = true;
	// !is_empty(placeId) &&
	if(!is_undefined(Live_MapZoom) && Live_MapZoom && Live_MapZoom > 0)
	{
		GetZoom = false;
		Zoom = Live_MapZoom;
	}
	if(GetZoom && !is_undefined(parent_MapZoom) && parent_MapZoom)
		Zoom = parent_MapZoom;

	Zoom = Set_parseInt(Zoom);
	//Zoom = Set_parseFloat(Zoom);
	 
	//console.log('geocodePlaceId Live Zoom ' , Zoom);
 
	Live_latitude = null;
	Live_longitude = null;
	Live_MapZoom = null;
	Live_google_address = null;
	Live_map_address_id = null;
	
		 
	if(FunPrintConsoleLog)
	console.log('geocodePlaceId geocoder ' , geocoder);	
	//map.setZoom(map.getZoom());
	geocoder.geocode({'placeId': placeId}, function(results, status) {
	  if (status === 'OK') {
		if (results[0]) {
		  
		  //map.setZoom(11);
			
			//console.log('geocodePlaceId typeof map.setZoom' , typeof map.setZoom);
			map.setZoom(Zoom);
			 
			if(FunPrintConsoleLog) 
			console.log('geocodePlaceId results' , results);
			if(FunPrintConsoleLog)
			console.log('geocodePlaceId results[0]' , results[0]);
			//set_geometry_location = results[0].geometry.location;
			
		 
		  if (results[0].geometry.viewport) {
				//map.fitBounds([
				//	[results[0].geometry.viewport.getSouthWest().lat(),
				//		results[0].geometry.viewport.getSouthWest().lng()
				//	],
				//	[results[0].geometry.viewport.getNorthEast().lat(),
				//		results[0].geometry.viewport.getNorthEast().lng()
				//	]
				//]);
				set_geometry_location =[
					[results[0].geometry.viewport.getSouthWest().lat(),
						results[0].geometry.viewport.getSouthWest().lng()
					],
					[results[0].geometry.viewport.getNorthEast().lat(),
						results[0].geometry.viewport.getNorthEast().lng()
					]
				];
				//console.log('set_geometry_location' , set_geometry_location);
				//map.setZoom(18);
			} else if (results[0].geometry.bounds) {
				//map.fitBounds([
				//	[results[0].geometry.bounds.getSouthWest().lat(),
				//		results[0].geometry.bounds.getSouthWest().lng()
				//	],
				//	[results[0].geometry.bounds.getNorthEast().lat(),
				//		results[0].geometry.bounds.getNorthEast().lng()
				//	]
				//]);
				set_geometry_location = [
					[results[0].geometry.bounds.getSouthWest().lat(),
						results[0].geometry.bounds.getSouthWest().lng()
					],
					[results[0].geometry.bounds.getNorthEast().lat(),
						results[0].geometry.bounds.getNorthEast().lng()
					]
				];
			} else { // give up, pick an arbitrary zoom level
				set_geometry_location = results[0].geometry.location;
				
				//map.panTo(results[0].geometry.location);
				//map.setZoom(15);
			}
			
			 
			
			set_geometry_location = results[0].geometry.location;
			
			if(FunPrintConsoleLog)
			console.log('geocodePlaceId set_geometry_location' , set_geometry_location);
			//console.log('geocodePlaceId results[0].geometry.location' , results[0].geometry.location);
		 
			//map.setCenter(results[0].geometry.location);
			map.setCenter(set_geometry_location);
			
			if(!is_undefined(infowindow))
			{

				//# deleteMarkers();
				//addMarker(set_geometry_location);

				//marker = addMarker(myLatlng);
				// marker.setVisible(false);

				//marker.setPosition(place.geometry.location);
				//marker.setVisible(true);


				// map.panTo(set_geometry_location);
				var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
				});

				var addressContent = '';
				if (results[0].address_components)
				{
				addressContent = [
				(results[0].address_components[0] && results[0].address_components[0].short_name || ''),
				(results[0].address_components[1] && results[0].address_components[1].short_name || ''),
				(results[0].address_components[2] && results[0].address_components[2].short_name || '')
				].join(' ');
				}//if (results[0].address_components)

				if(is_empty(addressContent))
				addressContent = results[0].formatted_address;


				var placeAddress = '';
				if(!is_undefined(Live_google_address) && Live_google_address && !is_empty(Live_google_address))
				placeAddress = Live_google_address;

				if(is_empty(placeAddress) && !is_undefined(parent_google_address) && parent_google_address && !is_empty(parent_google_address))
				placeAddress = parent_google_address;

				if(!is_empty(placeAddress) && is_empty(addressContent))
				addressContent = placeAddress;


				addressContent = trim_space(addressContent);
				if(infowindow)
				{
					//infowindow.close();
					infowindow.setContent(addressContent);
					infowindow.open(map, marker);
				}//if(infowindow)
				


				markers.push(marker);
			}//if(!is_undefined(infowindow))	



		   
		   
		   
		   
		   
		   
		   return true;
		}//if (results[0])
		else {
		  window.alert('No results found');
		}
	  }//if (status === 'OK')  
	  else {
		window.alert('Geocoder failed due to: ' + status);
	  }
	});//geocoder.geocode({'placeId': placeId}, function(results, status) {

	return false;
	/*

	 if (results[0].geometry.viewport) {
					map.fitBounds([
						[results[0].geometry.viewport.getSouthWest().lat(),
							results[0].geometry.viewport.getSouthWest().lng()
						],
						[results[0].geometry.viewport.getNorthEast().lat(),
							results[0].geometry.viewport.getNorthEast().lng()
						]
					]);
					map.setZoom(18);
				} else if (results[0].geometry.bounds) {
					map.fitBounds([
						[results[0].geometry.bounds.getSouthWest().lat(),
							results[0].geometry.bounds.getSouthWest().lng()
						],
						[results[0].geometry.bounds.getNorthEast().lat(),
							results[0].geometry.bounds.getNorthEast().lng()
						]
					]);
				} else { // give up, pick an arbitrary zoom level
					map.panTo(results[0].geometry.location);
					map.setZoom(15);
				}
	*/
	
}//function geocodePlaceId(placeId , geocoderMap, resultsMap)





function geocodePlaceAddress(placeAddress , geocoderMap, resultsMap, infowindow)
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	//var placeAddress = document.getElementById('address').value;

	//parent_latitude = null;
	//parent_longitude = null;
	//parent_MapZoom = null;
	//parent_google_address = null;
	//parent_map_address_id = null;
	
	//Live_latitude = null;
	//Live_longitude = null;
	//Live_MapZoom = null;
	//Live_google_address = null;
	//Live_google_address = null;

	if(is_undefined(placeAddress) && !is_undefined(Live_google_address) && Live_google_address)
	placeAddress = Live_google_address;

	if(is_undefined(placeAddress) && !is_undefined(parent_google_address) && parent_google_address)
	placeAddress = parent_google_address;

	 
	if(is_undefined(resultsMap) && !is_undefined(map) && map)
	resultsMap = map;

	if(is_undefined(geocoderMap) && !is_undefined(geocoder) && geocoder)
	geocoderMap = geocoder;

	if(is_undefined(placeAddress) || is_empty(placeAddress) || is_undefined(geocoder) || is_undefined(map) || is_undefined(infowindow))
	return null;


	geocoder = geocoderMap;
	map = resultsMap;

	var Zoom =  map.getZoom();
	//console.log('geocodePlaceAddress map.getZoom ' , Zoom);
	//console.log('geocodePlaceAddress Live_MapZoom ' , Live_MapZoom);
	//console.log('geocodePlaceAddress parent_MapZoom ' , parent_MapZoom);
	var GetZoom = true;
	//is_empty(placeAddress)
	if(!is_undefined(Live_MapZoom) && Live_MapZoom && Live_MapZoom > 0)
	{
		GetZoom = false;
		Zoom = Live_MapZoom;
	}
	if(GetZoom && !is_undefined(parent_MapZoom) && parent_MapZoom)
		Zoom = parent_MapZoom;

	Zoom = Set_parseInt(Zoom);
	//Zoom = Set_parseFloat(Zoom);
	 
	//console.log('geocodePlaceAddress Live Zoom ' , Zoom);

	Live_latitude = null;
	Live_longitude = null;
	Live_MapZoom = null;
	Live_google_address = null;
	Live_map_address_id = null;
		
	//console.log('geocodePlaceAddress geocoder ' , geocoder);	
	//map.setZoom(map.getZoom());
	geocoder.geocode({'address': placeAddress}, function(results, status) {
	  if (status === 'OK') {
		if (results[0]) {
		  
		  //map.setZoom(11);
			
			//console.log('geocodePlaceAddress typeof map.setZoom' , typeof map.setZoom);
			map.setZoom(Zoom);
			 
			//console.log('geocodePlaceAddress results' , results);
			//console.log('geocodePlaceAddress results[0]' , results[0]);
			//set_geometry_location = results[0].geometry.location;
			
		 
		  if (results[0].geometry.viewport) {
				//map.fitBounds([
				//	[results[0].geometry.viewport.getSouthWest().lat(),
				//		results[0].geometry.viewport.getSouthWest().lng()
				//	],
				//	[results[0].geometry.viewport.getNorthEast().lat(),
				//		results[0].geometry.viewport.getNorthEast().lng()
				//	]
				//]);
				set_geometry_location =[
					[results[0].geometry.viewport.getSouthWest().lat(),
						results[0].geometry.viewport.getSouthWest().lng()
					],
					[results[0].geometry.viewport.getNorthEast().lat(),
						results[0].geometry.viewport.getNorthEast().lng()
					]
				];
				//console.log('set_geometry_location' , set_geometry_location);
				//map.setZoom(18);
			} else if (results[0].geometry.bounds) {
				//map.fitBounds([
				//	[results[0].geometry.bounds.getSouthWest().lat(),
				//		results[0].geometry.bounds.getSouthWest().lng()
				//	],
				//	[results[0].geometry.bounds.getNorthEast().lat(),
				//		results[0].geometry.bounds.getNorthEast().lng()
				//	]
				//]);
				set_geometry_location = [
					[results[0].geometry.bounds.getSouthWest().lat(),
						results[0].geometry.bounds.getSouthWest().lng()
					],
					[results[0].geometry.bounds.getNorthEast().lat(),
						results[0].geometry.bounds.getNorthEast().lng()
					]
				];
			} else { // give up, pick an arbitrary zoom level
				set_geometry_location = results[0].geometry.location;
				
				//map.panTo(results[0].geometry.location);
				//map.setZoom(15);
			}
			
			 
			
			set_geometry_location = results[0].geometry.location;
			//console.log('geocodePlaceAddress set_geometry_location' , set_geometry_location);
			//console.log('geocodePlaceAddress results[0].geometry.location' , results[0].geometry.location);
			
			deleteMarkers();
			//addMarker(set_geometry_location);
			
			//marker = addMarker(myLatlng);
			// marker.setVisible(false);
			
			//marker.setPosition(place.geometry.location);
			//marker.setVisible(true);
			
			//map.setCenter(results[0].geometry.location);
			map.setCenter(set_geometry_location);
		 
		 // map.panTo(set_geometry_location);
		  var marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location
		  });
		  
		   
			var addressContent = '';
			/*
			if (results[0].address_components)
			{
				addressContent = [
					(results[0].address_components[0] && results[0].address_components[0].short_name || ''),
					(results[0].address_components[1] && results[0].address_components[1].short_name || ''),
					(results[0].address_components[2] && results[0].address_components[2].short_name || '')
				].join(' ');
			}//if (results[0].address_components)
			
			if(is_empty(addressContent))
				addressContent = results[0].formatted_address;
			*/
			//if(is_empty(addressContent))
			addressContent = placeAddress;		
		  addressContent = trim_space(addressContent);
		  //infowindow.close();
		  infowindow.setContent(addressContent);
		  //infowindow.setContent(placeAddress);
		  infowindow.open(map, marker);
		  
		  
		   markers.push(marker);
		   return true;
		}//if (results[0])
		else {
		  window.alert('No results found');
		}
	  }//if (status === 'OK') 
	  else {
		alert('Geocode was not successful for the following reason: ' + status);;
	  }
	});//geocoder.geocode({'address': placeAddress}, function(results, status) {

	return false;
	 
}//function geocodePlaceAddress(placeAddress , geocoderMap, resultsMap, infowindow)



function geocodeAddress(address , geocoderMap, resultsMap) 
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	//var address = document.getElementById('address').value;
	//parent_latitude = null;
	//parent_longitude = null;
	//parent_MapZoom = null;
	//parent_google_address = null;
	//parent_map_address_id = null;
	if(is_undefined(address) && !is_undefined(parent_google_address) && parent_google_address)
	address = parent_google_address;

	if(is_undefined(resultsMap) && !is_undefined(map) && map)
	resultsMap = map;

	if(is_undefined(geocoderMap) && !is_undefined(geocoder) && geocoder)
	geocoderMap = geocoder;

	if(is_undefined(address) || is_undefined(resultsMap) || is_undefined(resultsMap))
	return null;
		
		
	geocoder = geocoderMap;
	//map = resultsMap;
	var Zoom =  map.getZoom();
	if(!is_undefined(parent_MapZoom) && parent_MapZoom)
		Zoom = parent_MapZoom;

	geocoder.geocode({'address': address}, function(results, status) {
	if (status === 'OK') {
	resultsMap.setCenter(results[0].geometry.location);
	var marker = new google.maps.Marker({
	  map: resultsMap,
	  position: results[0].geometry.location
	});
	} else {
	alert('Geocode was not successful for the following reason: ' + status);
	}
	});
}//function geocodeAddress(address , geocoderMap, resultsMap) 











var MyLocationInfoWindow = null;
var MyLocationCoords = null;
var MyLocationMap = null;
function getMyLocationAction(action,HomeObject)
{
	if (typeof action == "undefined")
		return null;
	//if (typeof action == "undefined")
	//var action = "";
	//clearMarkers();
	//deleteMarkers();
	var SetAction = "";
	
	
	
	
	
	
	/*
	if(is_undefined(map))
	map = null;
	var pos_address = '';
    markers = [];
    markers_infowindow = [];
    markers_infowindowHtml = [];
    markers_latlng = [];
    index_markers = 0;
	image =  null;
	
	MyLocationMap =  null;
	
	

	*/
	
	if(!map)
	{
		var ElementId = 'map';  
		if(Length_document_object('#map') > 0)
		ElementId = 'map';
		else if(Length_document_object('#ATMs-map') > 0)
		ElementId = 'ATMs-map';
		else if(Length_document_object('#Branches-map') > 0)
		ElementId = 'Branches-map';
			
		map = new google.maps.Map(document.getElementById(ElementId), {
			  //center: {lat: -34.397, lng: 150.644},
			  center: {lat: 15.3691, lng: 44.1895},
			  //lat : 15.093339 , lng :46.845703
			  //zoom: 7
			  zoom: 13
		});
	}//if(!map)
	if(!map)
	return SetAction;

	MyLocationMap = map;
	MyLocationInfoWindow = new google.maps.InfoWindow;
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		//console.log(navigator.geolocation);
	   navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
		  lat: position.coords.latitude,
		  lng: position.coords.longitude
		};
		
		//# console.log("getMyLocationAction position",position);
		//# console.log("getMyLocationAction pos",pos);
	 
		//# MyLocationInfoWindow.setPosition(map.getCenter());
		//# MyLocationInfoWindow.setContent('يتم البحث عن اقرب اماكن من موقعك الحالي...');	
		//# MyLocationInfoWindow.open(map);
		
		var PositionAction = "";
		//_get_json_locationsNearby(aq_action)  {//,latitude,longitude
		PositionAction += '&latitude=' + position.coords.latitude;
		PositionAction += '&longitude=' + position.coords.longitude;
		
		//# console.log("getMyLocationAction PositionAction",PositionAction);
		
		//setTimeout(SetMyLocationAction,(1 * 60 * 1000) , 'انتهت مهلة طلب الحصول عن اقرب اماكن من موقعك الحالي. حاول مرة أخرى..');
		//return null;
		//return _get_json_locationsNearby(action,MyLocationInfoWindow);// , position.coords.latitude,position.coords.longitude
		
		
		
		//var action = "";
		//var SetAction = "";
		var SetAction = "";
		if(!is_empty(action) && !is_empty(PositionAction))
		{
			////if(Get_Has_Index_Search(action,'[\?]','gi'))
			SetAction = action +"?"+ PositionAction;	
			SetAction = FixingAction(SetAction);
			
			//LoadData = null;
			//var ArrayStore = [];
			//if(!is_empty(SetAction))
			 
			LoadData = GetAjaxLoadDataMap(SetAction,HomeObject);
			//# //LoadData = GetAjaxLoadDataMap(SetAction,FormObject,ArrayStore);
			//# //# //# console.log("getMyLocationAction LoadData",LoadData);
 
		}//if(!is_empty(action) && !is_empty(PositionAction))
		else	
		SetAction = PositionAction;
		
		//console.log("getMyLocationAction PositionAction",PositionAction);
		//console.log("getMyLocationAction action",action);
		//console.log("getMyLocationAction SetAction",SetAction);
		
	 
		
		//return SetAction;
	  }, function() {
		//# handleLocationError(true, MyLocationInfoWindow, map.getCenter());
		//# //handleLocationError_old(true, MyLocationInfoWindow, map.getCenter());
	  });
	  
	} else {
		//# MyLocationInfoWindow.setPosition(map.getCenter());
		//# MyLocationInfoWindow.setContent('متصفحك لا يدعم تحديد الموقع الجغرافي.')  
		//# MyLocationInfoWindow.open(map);
	  //# // Browser doesn't support Geolocation
	 //#  //handleLocationError(false, MyLocationInfoWindow, map.getCenter());
	  //# //handleLocationError_old(false, MyLocationInfoWindow, map.getCenter());
	}
	
	return SetAction;
}//function getMyLocationAction(action,HomeObject)

 
function SetMyLocationAction(SetInFoWindowMsg)
{
	if(!is_undefined(MyLocationMap) && !is_null(MyLocationMap) && !is_undefined(SetInFoWindowMsg) && is_string(SetInFoWindowMsg) && !is_empty(SetInFoWindowMsg) )
	{
		MyLocationInfoWindow.setPosition(MyLocationMap.getCenter());
		//MyLocationInfoWindow.setContent('لا توجد أماكن قريبة منك');
		MyLocationInfoWindow.setContent(SetInFoWindowMsg); 	
		MyLocationInfoWindow.open(MyLocationMap);
		//infowindow_open = MyLocationInfoWindow;
		//MyLocationInfoWindow = null;
		// MyLocationCoords = null;
		// MyLocationMap = null;
	}
}//function SetMyLocationAction(SetInFoWindowMsg)



var MyLocationInfoWindowAuto = null;
var MyLocationCoordsAuto = null;
var MyLocationMapAuto = null;
function getMyLocationAuto() 
{
	//chrome://settings/content/location
	//http://127.0.0.1/js/GoogleMap/geolocation/
	// if (typeof action == "undefined")
	var action = "";

	//# _Array_locations_Info = [];//_Array_locations_Info_initStart;
	//clearMarkers();
	//deleteMarkers();
	
	// console.log("getMyLocationAuto");
	if(is_undefined(map))
	map = null;
	/*
	var pos_address = '';
    markers = [];
    markers_infowindow = [];
    markers_infowindowHtml = [];
    markers_latlng = [];
    index_markers = 0;
	image =  null;
	MyLocationMapAuto =  null;
	*/
	/*
	 var address = '15.093339: 46.845703';
	//var address = '15.3691: 46.1895';
	var address = '-34.397: 150.644';
	//var address = '15.412655162637535: 412655162637535';
    var latlngStr = address.split(':', 2);
    //15.39709: 44.22615
    var latlng = {
        lat: parseFloat((latlngStr[0])),
        lng: parseFloat((latlngStr[1]))
    };
	
 
	 
	map = new google.maps.Map(document.getElementById('ATMs-map'), {
        //center: {lat: -34.397, lng: 150.644},
        center: latlng,
        zoom: 7
    });
	*/
	
	 
	// Try HTML5 geolocation.
	if (navigator.geolocation) 
	{
		
		//if(is_undefined(map))
		//map = null;
		if(!map)
		{
			var ElementId = 'map';  
			if(Length_document_object('#map') > 0)
			ElementId = 'map';
			else if(Length_document_object('#ATMs-map') > 0)
			ElementId = 'ATMs-map';
			else if(Length_document_object('#Branches-map') > 0)
			ElementId = 'Branches-map';
			map = new google.maps.Map(document.getElementById(ElementId), {
			  center: {lat: -34.397, lng: 150.644},
			   //# center: {lat: 15.3691, lng: 44.1895},
			  //lat : 15.093339 , lng :46.845703
			  //zoom: 7
			  //zoom: 13
			   zoom: 9
			});
		}//if(!map)
		
		//return;
		if(!map)
		return;

		MyLocationMapAuto = map;
		MyLocationInfoWindowAuto = new google.maps.InfoWindow;
	
		//console.log(navigator.geolocation);
	  navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
		  lat: position.coords.latitude,
		  lng: position.coords.longitude
		};
		
		
		
		var HtmlLocationAuto = "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
		
		//var Length = Length_document_object('#parent_latitude');
		//parent_longitude = get_val_object('#parent_longitude');	
		//<div id="getMyLocationAuto">getMyLocationAuto</div>
		//if($("#getMyLocationAuto").length > 0)	
		//document.getElementById("getMyLocationAuto").innerHTML = HtmlLocationAuto;
		
		var ContentLocationAuto = "Latitude: " + position.coords.latitude + "\n Longitude: " + position.coords.longitude;
		//console.log("getMyLocationAuto HtmlLocationAuto",HtmlLocationAuto);
		//console.log("getMyLocationAuto position",position);
		//console.log("getMyLocationAuto pos",pos);
 
 
		action += '&latitude=' + position.coords.latitude;
		action += '&longitude=' + position.coords.longitude;
		
		//console.log("getMyLocationAuto action",action);
		
		
		
		//# MyLocationInfoWindowAuto.setPosition(map.getCenter());
		//# MyLocationInfoWindowAuto.setContent('يتم البحث عن اقرب اماكن من موقعك الحالي...');	
		//# MyLocationInfoWindowAuto.open(map);
		
		MyLocationInfoWindowAuto.setPosition(pos);
		//# MyLocationInfoWindowAuto.setContent('يتم البحث عن اقرب اماكن من موقعك الحالي...');
		//# MyLocationInfoWindowAuto.setContent('Location found.');
		MyLocationInfoWindowAuto.setContent(HtmlLocationAuto);
		//# MyLocationInfoWindowAuto.setContent(ContentLocationAuto);
		MyLocationInfoWindowAuto.open(map);
		MyLocationInfoWindowAuto.setCenter(pos);
			
		//# setTimeout(SetMyLocationAuto,(1 * 60 * 1000) , 'انتهت مهلة طلب الحصول عن اقرب اماكن من موقعك الحالي. حاول مرة أخرى..');
		return action;
		//# return _get_json_locationsNearby(action,MyLocationInfoWindowAuto);// , position.coords.latitude,position.coords.longitude
	  }, function() {
		handleLocationError(true, MyLocationInfoWindowAuto, map.getCenter());
		//handleLocationError_old(true, MyLocationInfoWindowAuto, map.getCenter());
	  });
	  
	} //if (navigator.geolocation)
	else 
	{
		if(!map)
		return action;
		MyLocationInfoWindowAuto.setPosition(map.getCenter());
		MyLocationInfoWindowAuto.setContent('متصفحك لا يدعم تحديد الموقع الجغرافي.')  
		MyLocationInfoWindowAuto.open(map);
	  // Browser doesn't support Geolocation
	  //handleLocationError(false, MyLocationInfoWindowAuto, map.getCenter());
	  //handleLocationError_old(false, MyLocationInfoWindowAuto, map.getCenter());
	}
	
	return action;
}//function getMyLocationAuto()

$(document).ready(function() {
	//<div id="getMyLocationAuto">getMyLocationAuto</div>
	//# if($("#getMyLocationAuto").length > 0)	
	//# setTimeout( function () {getMyLocationAuto();},100);
	
	//#  setTimeout( function () {getMyLocationAuto();},2000);
	//# setTimeout( function () {getMyLocationAuto();},500);
});//$(document).ready(function() {	


function SetMyLocationAuto(SetInFoWindowMsg) 
{
	if(!is_undefined(MyLocationMapAuto) && !is_null(MyLocationMapAuto) && !is_undefined(SetInFoWindowMsg) && is_string(SetInFoWindowMsg) && !is_empty(SetInFoWindowMsg) )
	{
		MyLocationInfoWindowAuto.setPosition(MyLocationMapAuto.getCenter());
		//MyLocationInfoWindowAuto.setContent('لا توجد أماكن قريبة منك');
		MyLocationInfoWindowAuto.setContent(SetInFoWindowMsg); 	
		MyLocationInfoWindowAuto.open(MyLocationMapAuto);
		//infowindow_open = MyLocationInfoWindowAuto;
		//MyLocationInfoWindowAuto = null;
		// MyLocationCoordsAuto = null;
		// MyLocationMapAuto = null;
	}
 
}//function SetMyLocationAuto(SetInFoWindowMsg)


function getMyLocationbyPlaces()
{
	// Initialize variables
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
  //return null;
  bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow;
  currentInfoWindow = infoWindow;
  // TODO: Step 4A3: Add a generic sidebar 

  // Try HTML5 geolocation
  if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(position => {
	  pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	  };
	  
	  
	var ElementId = 'map';  
	if(Length_document_object('#map') > 0)
	ElementId = 'map';
	else if(Length_document_object('#ATMs-map') > 0)
	ElementId = 'ATMs-map';
	else if(Length_document_object('#Branches-map') > 0)
	ElementId = 'Branches-map';
	  
	  map = new google.maps.Map(document.getElementById(ElementId), {
		center: pos,
		zoom: 13
	  });
	  bounds.extend(pos);

	  infoWindow.setPosition(pos);
	  //# infoWindow.setPosition(map.getCenter());
	  //infoWindow.setContent('Location found.');
	  infoWindow.setContent('يتم البحث عن اقرب اماكن من موقعك الحالي...');
	  infoWindow.open(map);
	  map.setCenter(pos);

	
	//console.log("getMyLocationbyPlaces action",action);
	
	//# setTimeout(SetMyLocation,(1 * 60 * 1000) , 'انتهت مهلة طلب الحصول عن اقرب اماكن من موقعك الحالي. حاول مرة أخرى..');
	
	   // TODO: Step 3B2, Call the Places Nearby Search
	  // Call Places Nearby Search on user's location
	  getNearbyPlaces(pos);
	}, () => {
	  // Browser supports geolocation, but user has denied permission
	  handleLocationError(true, infoWindow, map.getCenter());
	});
  } else {
	  
	infoWindow.setPosition(map.getCenter());
	infoWindow.setContent('متصفحك لا يدعم تحديد الموقع الجغرافي.')  
	infoWindow.open(map);  
	// Browser doesn't support geolocation
	//# handleLocationError(false, infoWindow, map.getCenter());
  }

}//function getMyLocationbyPlaces()




//  TODO: Step 3B1, Call the Places Nearby Search
// Perform a Places Nearby Search Request
function getNearbyPlaces(position) 
{
	/*
  let request = {
	location: position,
	rankBy: google.maps.places.RankBy.DISTANCE,
	keyword: 'sushi'
  };
	
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
  */
  
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;

  //# marker = addMarker(position);
  infowindow = infoWindow;
  infowindow.close();
  //# return null;
  if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		
		  
		 //var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
		 //console.log('initMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		 var placesInfo = {};
		 if(!is_undefined(ArrayFullDataResultsInfo.ResultsInfo)  && ArrayFullDataResultsInfo.ResultsInfo  && is_object(ArrayFullDataResultsInfo.ResultsInfo))
			placesInfo = ArrayFullDataResultsInfo.ResultsInfo;
		
		
			
			$.each( placesInfo, function(row_key, row){
			  //var Info =  "Name: " + row_key + ", row: " + row ;
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row_key' , row_key);
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row' , row);
			  
			  if(!is_undefined(row)  && row  && is_object(row))
			  {
				   var title = null;
				   var address = null;
				   var latitude = null;
				   var longitude = null;
				   
				   
				   //zoom = trim_space(zoom);
				//zoom = Set_String(zoom);
				//zoom = Set_parseInt(zoom);
				//zoom = Set_parseFloat(zoom);
				 if(!is_undefined(row.title)   && !is_empty(row.title))
				 title = trim_space(row.title);
				if(!is_undefined(row.address)   && !is_empty(row.address))
				 address = trim_space(row.address);
				//if(is_empty(title)  && !is_empty(address))
				//	title = trim_space(address);
				
				if(!is_undefined(row.latitude)   && !is_empty(row.latitude))
				 latitude = trim_space(row.latitude);
				if(!is_undefined(row.longitude)   && !is_empty(row.longitude))
				 longitude = trim_space(row.longitude);
			 
				//console.log('initMap ArrayFullDataResultsInfo placesInfo title' , title);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo address' , address);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo latitude' , latitude);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo longitude' , longitude);
				if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
				{
					latitude = Set_parseFloat(latitude);
					longitude = Set_parseFloat(longitude);
					if(latitude != 0 && longitude != 0)
					{
						 
						
						//pos = { lat: 15.3691, lng: 44.1895 };
						//var pyrmont = {lat: latitude, lng: longitude};
						var pyrmont = new google.maps.LatLng(latitude, longitude);
						//FullLatLngBounds.push(pyrmont);
						 
					 
						// map.fitBounds(bounds);
						//map.setZoom(zoom);
						////map.setZoom(map.getZoom());
					 
						 
						//var bounds = new google.maps.LatLngBounds();
						////bounds.union(place.geometry.viewport);
						//// bounds.extend(place.geometry.location);
						////bounds.union(pyrmont);
						//bounds.extend(pyrmont);
						//map.fitBounds(bounds);
						var marker_title = title;
						//if(is_empty(title)  && !is_empty(address))
						//marker_title = trim_space(address);

						 var html = '';//'<b>اليمن</b>';
						 if(!is_empty(title))
							 html += '<div><b>'+title+'</b></div>';
						 if(!is_empty(address))
							 html += '<div><b>'+address+'</b></div>';
						 
						 
						if(!is_empty(html))
						{
							if(!is_empty(marker_title))
							marker = addMarker(pyrmont, infowindow, html , marker_title)
							else
							marker = addMarker(pyrmont, infowindow, html)
						}
						else
						{
							marker = addMarker(pyrmont);
						}
					 
						 //infowindow.close();
			
					 
					}//if(latitude != 0 && longitude != 0)
				}//if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
					
			  }//if(!is_undefined(row)  && row  && is_object(row))
			});//$.each( placesInfo, function(row_key, row){
		 
		 
			//Zoom = map.getZoom();
			//console.log(' initMap  1 Zoom' , Zoom);
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))	
	
}//function getNearbyPlaces(position)

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
	createMarkers(results);
  }
}

// TODO: Step 3C, Generate markers for search results
// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach(place => {
	let marker = new google.maps.Marker({
	  position: place.geometry.location,
	  map: map,
	  title: place.name
	});

	// TODO: Step 4B: Add click listeners to the markers 

	// Adjust the map bounds to include the location of this marker
	bounds.extend(place.geometry.location);
  });
 // Once all the markers have been placed, adjust the bounds of the map to
  // show all the markers within the visible area.
  map.fitBounds(bounds);
}



function handleLocationError(error, infoWindow, pos) {
		//errorContent = "An unknown error occurred.";
		errorContent ="حدث خطأ غير معروف";
		switch(error.code) {
			case error.PERMISSION_DENIED:
				//errorContent = "User denied the request for Geolocation.";
				errorContent = "فشلت خدمة تحديد الموقع الجغرافي - نرجو السماح بالتحديد";
				//errorContent = (error.message ? error.message : '(empty)');
				break;
			case error.POSITION_UNAVAILABLE:
				//errorContent = "Location information is unavailable.";
				errorContent = "معلومات الموقع الجغرافي غير متوفرة.";
				//errorContent = (error.message ? error.message : '(empty)');
				break;
			case error.TIMEOUT:
				//errorContent = "The request to get user location timed out.";
				errorContent = "انتهت مهلة طلب الحصول على الموقع الجغرافي المستخدم . حاول مرة أخرى.";
				//errorContent = (error.message ? error.message : '(empty)');
				break;
			/*case error.UNKNOWN_ERROR:
				//errorContent = "An unknown error occurred.";
				errorContent ="حدث خطأ غير معروف";
				//errorContent = (error.message ? error.message : '(empty)');
				break;*/
		}
		infoWindow.setPosition(pos);
		infoWindow.setContent(errorContent);
		infoWindow.open(map);
	}


//var ReCallNo = 0;	
var ReCallInitMap = true;
var ReCallNo = 0;
var ReCallNoAddSetRunTimeout = 0;
var SetRunTimeout = 20;
var setTimeoutArrayFullDataResultsInfo = function()
{
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	//console.log('setTimeoutArrayFullDataResultsInfo ReCallInitMap' , ReCallInitMap);
	//console.log(' function setTimeoutArrayFullDataResultsInfo ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
	//console.log(' function setTimeoutArrayFullDataResultsInfo ReCallNo' , ReCallNo);
	//console.log(' function setTimeoutArrayFullDataResultsInfo ReCallNoAddSetRunTimeout' , ReCallNoAddSetRunTimeout);
	////console.log(' function setTimeoutArrayFullDataResultsInfo SetRunTimeout' , SetRunTimeout);
	ReCallNo += 1;
	ReCallNoAddSetRunTimeout += 1;
	var ReCall = true;
	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		 $.each( ArrayFullDataResultsInfo, function(row_key, row){
			 ReCall = false;
		 });//$.each( ArrayFullDataResultsInfo, function(row_key, row){
			 /*
		if(ReCallNo > 400)
		{
			$.each( ArrayFullDataResultsInfo, function(row_key, row){
				 ReCall = false;
			 });//$.each( ArrayFullDataResultsInfo, function(row_key, row){ 
		}//if(ReCallNo > 400)
			*/
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	 
	if(ReCallNoAddSetRunTimeout > 200)
	{
		ReCallNoAddSetRunTimeout = 0;
		if(SetRunTimeout > 50000)
			SetRunTimeout = 50000;
		if(SetRunTimeout < 50000)
		SetRunTimeout = (SetRunTimeout + (SetRunTimeout * (SetRunTimeout / 2)));
	}//if(ReCallNoAddSetRunTimeout > 200)
	SetRunTimeout = Set_parseInt(SetRunTimeout);	
	//console.log(' function setTimeoutArrayFullDataResultsInfo SetRunTimeout' , SetRunTimeout);
	if(ReCall)
	{
		setTimeout( function () {
			setTimeoutArrayFullDataResultsInfo();
		},SetRunTimeout);
		return null;
	}//if(ReCall)
		
	ReCallInitMap = false;
	return initMap() ;
}// var setTimeoutArrayFullDataResultsInfo = function()
		
function initMap() 
{//<script src="https://maps.googleapis.com/maps/api/js?key=MAPKey&libraries&libraries=places&callback=initMap&language=ar" async defer></script>	
	  //var address = '15.5188943: 52.674674';
		//address = '15.71824: 47.61475';
	
	//var object_map = get_val_object('#input_place_address');
	//if(!get_val_object('#input_place_address'))
	//	return null;
 
	//if(!Length_document_object('#map') == 0)
	//	return null;

	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
		
	var latval = "";//document.getElementById('latclicked').value;
    var longval = "";//document.getElementById('longclicked').value;
    var zoom = DefaultsMapZoom;//document.getElementById('zoomclicked').value;
 
	
	//var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
	//DefaultsOptions = DefaultsDataResultsInfoOptions;
	if(!is_undefined(DefaultsDataResultsInfoOptions) && is_object(DefaultsDataResultsInfoOptions))
	{
		 //console.log('initMap DefaultsDataResultsInfoOptions' , DefaultsDataResultsInfoOptions);
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapZoom))
			zoom =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapZoom);
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapLongitude))
			longval =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapLongitude);	
		 	
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapLatitude))
			latval =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapLatitude);	
	}//if(!is_undefined(DefaultsDataResultsInfoOptions) && is_object(DefaultsDataResultsInfoOptions))
		
	
		
	 //console.log('initMap ReCallInitMap' , ReCallInitMap);
	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		
		 
		 var ReCall = true;
		if(ReCallInitMap)
		{
			$.each( ArrayFullDataResultsInfo, function(row_key, row){
				 ReCall = false;
			 });//$.each( ArrayFullDataResultsInfo, function(row_key, row){
		}//if(ReCallInitMap)
	
	   if(ReCall && ReCallInitMap)
	   {
			setTimeoutArrayFullDataResultsInfo();
			//return null;
	   }// if(ReCall && ReCallInitMap)
	  

		   
		 //var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
		 //console.log('initMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapZoom))
			zoom =  trim_space(ArrayFullDataResultsInfo.DefaultsMapZoom);
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLongitude))
			longval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLongitude);	
		 	
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLatitude))
			latval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLatitude);	
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))		
	

	//zoom = 7;
	//latval = 17.48959;
	//longval = 47.06502;

	//zoom = trim_space(zoom);
	//zoom = Set_String(zoom);
	//zoom = Set_parseInt(zoom);
	//zoom = Set_parseFloat(zoom);
	zoom = Set_parseInt(zoom);
    //Set_parseFloat(n)
    if (zoom == '' || zoom == 0) {
        zoom = 12;
    }
    if ((latval == '' || longval == '') || (latval == 0 || longval == 0)) {
        latval = 15.3691, longval = 44.1895;
 
    }
	
 				
	 var pyrmont = {lat: latval, lng: longval};
	//console.log(' initMap pyrmont ' , pyrmont);
    var myLatlng = new google.maps.LatLng(latval, longval);
    //DefaultsMapZoom
    var mapOptions = {
        zoom: zoom,
        //maxZoom: 7 ,
        //minZoom: 7,
        center: myLatlng,
        mapTypeId: 'roadmap'
    }
	
	
	//return null;
 
	if(Length_document_object('#map') > 0)
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
	else if(Length_document_object('#ATMs-map') > 0)
    map = new google.maps.Map(document.getElementById('ATMs-map'), mapOptions);
	else if(Length_document_object('#Branches-map') > 0)
	map = new google.maps.Map(document.getElementById('Branches-map'), mapOptions);
	else
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
	//marker = addMarker(myLatlng);
	////return null; 
	setTimeout( function () {SetAoutReRunEvent();},2000);
	
	var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();
 
	var service = new google.maps.places.PlacesService(map);
	
	var map_address_id = "";
	//if($('#input_place_id').length > 0)	
	if(get_val_object('#input_place_id'))	
	map_address_id = Set_String($("#input_place_id").val());
	//# console.log(' initMap map_address_id ' , map_address_id);
	
	//if(!geocoder)
	//geocoder = new google.maps.Geocoder;
	if(map_address_id != "")					
	geocodePlaceId(map_address_id, geocoder, map); 	
	//return null; 
	
	/*
	var card = document.getElementById('map-pac-card');
	var input = document.getElementById('map-pac-input');
	// # var countries = document.getElementById('map-country-selector');


	var searchBox = new google.maps.places.SearchBox(input);

	var service = new google.maps.places.PlacesService(map);
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
	var autocomplete = new google.maps.places.Autocomplete(input);
	// Set initial restrict to the greater list of countries.
	autocomplete.setComponentRestrictions({
	'country': ['ye']
	}); //'us', 'pr', 'vi', 'gu', 'mp'
	//'(cities)'
	//autocomplete.setComponentRestrictions({'country': ['us', 'pr', 'vi', 'gu', 'mp']});
	*/
	
	/*
	var c = map.getCenter();
	x = c.lng().toFixed(5);
	y = c.lat().toFixed(5);
	var XandY = x + ' , ' + y;
	console.log(' initMap x , y' , XandY);
	
	Zoom = map.getZoom();
	console.log(' initMap  Zoom' , Zoom);
	*/
	
 	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		
		  
		 //var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
		 //if(FunPrintConsoleLog)
		 //console.log('initMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		 var placesInfo = {};
		 if(!is_undefined(ArrayFullDataResultsInfo.ResultsInfo)  && ArrayFullDataResultsInfo.ResultsInfo  && is_object(ArrayFullDataResultsInfo.ResultsInfo))
			placesInfo = ArrayFullDataResultsInfo.ResultsInfo;
	  
			
			$.each( placesInfo, function(row_key, row){
			  //var Info =  "Name: " + row_key + ", row: " + row ;
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row_key' , row_key);
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row' , row);
			  
			  if(!is_undefined(row)  && row  && is_object(row))
			  {
				   var title = null;
				   var address = null;
				   var latitude = null;
				   var longitude = null;
				   
				   
				   //zoom = trim_space(zoom);
				//zoom = Set_String(zoom);
				//zoom = Set_parseInt(zoom);
				//zoom = Set_parseFloat(zoom);
				 if(!is_undefined(row.title)   && !is_empty(row.title))
				 title = trim_space(row.title);
				if(!is_undefined(row.address)   && !is_empty(row.address))
				 address = trim_space(row.address);
				//if(is_empty(title)  && !is_empty(address))
				//	title = trim_space(address);
				
				if(!is_undefined(row.latitude)   && !is_empty(row.latitude))
				 latitude = trim_space(row.latitude);
				if(!is_undefined(row.longitude)   && !is_empty(row.longitude))
				 longitude = trim_space(row.longitude);
			 
				//console.log('initMap ArrayFullDataResultsInfo placesInfo title' , title);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo address' , address);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo latitude' , latitude);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo longitude' , longitude);
				if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
				{
					latitude = Set_parseFloat(latitude);
					longitude = Set_parseFloat(longitude);
					if(latitude != 0 && longitude != 0)
					{
						
						// map.fitBounds(bounds);
						//map.setZoom(zoom);
						////map.setZoom(map.getZoom());
						//var pyrmont = {lat: latitude, lng: longitude};
						 var pyrmont = new google.maps.LatLng(latitude, longitude);
						 
						 
						//var bounds = new google.maps.LatLngBounds();
						////bounds.union(place.geometry.viewport);
						//// bounds.extend(place.geometry.location);
						////bounds.union(pyrmont);
						//bounds.extend(pyrmont);
						//map.fitBounds(bounds);
						var marker_title = title;
						//if(is_empty(title)  && !is_empty(address))
						//marker_title = trim_space(address);

						 var html = '';//'<b>اليمن</b>';
						 if(!is_empty(title))
							 html += '<div><b>'+title+'</b></div>';
						 if(!is_empty(address))
							 html += '<div><b>'+address+'</b></div>';
						 
						 
						if(!is_empty(html))
						{
							if(!is_empty(marker_title))
							marker = addMarker(pyrmont, infowindow, html , marker_title)
							else
							marker = addMarker(pyrmont, infowindow, html)
						}
						else
						{
							marker = addMarker(pyrmont);
						}
						
						
			
						/*var marker = new google.maps.Marker({
						position: pyrmont,
						map: map,
						title: title
						}); 
						*/
						//markers.push(marker);
						 
					}//if(latitude != 0 && longitude != 0)
				}//if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
				  	
			  }//if(!is_undefined(row)  && row  && is_object(row))
			});//$.each( placesInfo, function(row_key, row){
		 
		 
		 
		 
			
			var RunFilterSearch = false;//true , false
			if(!is_undefined(ArrayFullDataResultsInfo.RunFilterSearch)  && ArrayFullDataResultsInfo.RunFilterSearch )// && is_boolean(ArrayFullDataResultsInfo.RunFilterSearch)
			RunFilterSearch = ArrayFullDataResultsInfo.RunFilterSearch;
		
			var CityGoogleLatLngInfo = {};
			if(!is_undefined(ArrayFullDataResultsInfo.CityGoogleLatLngInfo)  && ArrayFullDataResultsInfo.CityGoogleLatLngInfo  && is_object(ArrayFullDataResultsInfo.CityGoogleLatLngInfo))
			CityGoogleLatLngInfo = ArrayFullDataResultsInfo.CityGoogleLatLngInfo;
		
		
			var ServicePointsGoogleLatLngInfo = {};
			if(!is_undefined(ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo)  && ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo  && is_object(ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo))
			ServicePointsGoogleLatLngInfo = ArrayFullDataResultsInfo.ResultsServicePointsGoogleLatLngInfo;
			//console.log(' initMap ServicePointsGoogleLatLngInfo' , ServicePointsGoogleLatLngInfo);
			
			//if(is_object(CityGoogleLatLngInfo) && CityGoogleLatLngInfo && !jQuery.isEmptyObject(CityGoogleLatLngInfo))	
			if(RunFilterSearch)
			{
				$("[SearchButton=1]").click();
			}//RunFilterSearch
			
				
			
			RowInfo = ServicePointsGoogleLatLngInfo;
			if(!is_undefined(RowInfo.MaxLongitude) && !is_undefined(RowInfo.MaxLatitude) && !is_undefined(RowInfo.MinLongitude) && !is_undefined(RowInfo.MinLatitude))
			{
				var MaxLongitude = 0;
				var MaxLatitude = 0;
				var MinLongitude = 0;
				var MinLatitude = 0;
				
				if(!is_empty(RowInfo.MaxLongitude))
				MaxLongitude = Set_parseFloat(RowInfo.MaxLongitude);
				if(!is_empty(RowInfo.MaxLatitude))
				MaxLatitude = Set_parseFloat(RowInfo.MaxLatitude);
				if(!is_empty(RowInfo.MinLongitude))
				MinLongitude = Set_parseFloat(RowInfo.MinLongitude);
				if(!is_empty(RowInfo.MinLatitude))
				MinLatitude = Set_parseFloat(RowInfo.MinLatitude);
				
				if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
				{
					/*
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					
					var XandY = x + ' , ' + y;
					console.log(' initMap 1 x , y' , XandY);
					Zoom = map.getZoom();
					console.log(' initMap  1 Zoom' , Zoom);
					
					// map.setCenter(new google.maps.LatLng(y, x));
					//map.setCenter(new google.maps.LatLng(MaxLatitude, MaxLongitude));
					//map.setCenter(new google.maps.LatLng(MinLongitude, MinLatitude)); 
					map.setCenter(new google.maps.LatLng(MaxLatitude, MaxLongitude));
					
					var c = map.getCenter();
					x = c.lng().toFixed(5);
					y = c.lat().toFixed(5);
					
					var XandY = x + ' , ' + y;
					console.log(' initMap 2 x , y' , XandY);
					Zoom = map.getZoom();
					console.log(' initMap 2 Zoom' , Zoom); 
					*/
					/*
					x = 0;//c.lng().toFixed(5);
					y = 0;//c.lat().toFixed(5); 
					//var maxX = longval,
					//var maxY = latval,
					//var minX = longval,
					//var minY = latval;
					var maxX = MaxLongitude,
					var maxY = MaxLatitude,
					var minX = MinLongitude,
					var minY = MinLatitude;
					//var pyrmont = {lat: latval, lng: longval};
					//var myLatlng = new google.maps.LatLng(latval, longval);
					
					if (x < minX || x > maxX || y < minY || y > maxY)
					{
					  if (x < minX) x = minX;
					  if (x > maxX) x = maxX;
					  if (y < minY) y = minY;
					  if (y > maxY) y = maxY;
					  map.setCenter(new google.maps.LatLng(y, x));
					  // alert('y='+y +'\n x='+x);
					  
					  var c = map.getCenter();
						x = c.lng().toFixed(5);
						y = c.lat().toFixed(5);
						
						var XandY = x + ' , ' + y;
						console.log(' initMap 2 x , y' , XandY);
						Zoom = map.getZoom();
						console.log(' initMap 2 Zoom' , Zoom);
					}//if (x < minX || x > maxX || y < minY || y > maxY)
					//map.setCenter(new google.maps.LatLng(y, x));
					*/ 
				}//if(MaxLongitude > 0 && MaxLatitude > 0 && MinLongitude > 0 && MinLatitude > 0)
			}//if(!is_undefined(RowInfo.MaxLongitude) && !is_undefined(RowInfo.MaxLatitude) && !is_undefined(RowInfo.MinLongitude) && !is_undefined(RowInfo.MinLatitude))
				
			
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))	
	 
	/*
	map.addListener('bounds_changed', function(event) {
		//var infowindow2 = new google.maps.InfoWindow;
		var c = map.getCenter(),
		x = c.lng().toFixed(5),
		y = c.lat().toFixed(5)
		
		
		var XandY = x + ' , ' + y;
		console.log(' initMap  map.addListener  bounds_changed x , y' , XandY);
		Zoom = map.getZoom();
		console.log(' initMap  map.addListener  bounds_changed Zoom' , Zoom);
	 
    }); //map.addListener('bounds_changed', function(event) {
	*/	
		
		 // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
		//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
		//# //# $(".js-item").filter(".active").click();
		$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
		//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);
	  
    }); //map.addListener('click', function(event) {		
		
}//function initMap() 

 


function initMapFixed() 
{//<script src="https://maps.googleapis.com/maps/api/js?key=MAPKey&libraries&libraries=places&callback=initMapFixed&language=ar" async defer></script>	
	  //var address = '15.5188943: 52.674674';
		//address = '15.71824: 47.61475';
	
	//var object_map = get_val_object('#input_place_address');
	//if(!get_val_object('#input_place_address'))
	//	return null;
 
	//if(!Length_document_object('#map') == 0)
	//	return null;

	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	
	var latval = "";//document.getElementById('latclicked').value;
    var longval = "";//document.getElementById('longclicked').value;
    var zoom = DefaultsMapZoom;//document.getElementById('zoomclicked').value;
	 
	 
	//var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
	//DefaultsOptions = DefaultsDataResultsInfoOptions;
	if(!is_undefined(DefaultsDataResultsInfoOptions) && is_object(DefaultsDataResultsInfoOptions))
	{
		 //console.log('initMap DefaultsDataResultsInfoOptions' , DefaultsDataResultsInfoOptions);
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapZoom))
			zoom =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapZoom);
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapLongitude))
			longval =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapLongitude);	
		 	
		if(!is_undefined(DefaultsDataResultsInfoOptions.DefaultsMapLatitude))
			latval =  trim_space(DefaultsDataResultsInfoOptions.DefaultsMapLatitude);	
	}//if(!is_undefined(DefaultsDataResultsInfoOptions) && is_object(DefaultsDataResultsInfoOptions))
		
	//console.log('initMap ReCallInitMap' , ReCallInitMap);
	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		
		 
		 var ReCall = true;
		if(ReCallInitMap)
		{
			$.each( ArrayFullDataResultsInfo, function(row_key, row){
				 ReCall = false;
			 });//$.each( ArrayFullDataResultsInfo, function(row_key, row){
		}//if(ReCallInitMap)
	
	   if(ReCall && ReCallInitMap)
	   {
			setTimeoutArrayFullDataResultsInfo();
			//return null;
	   }// if(ReCall && ReCallInitMap)
	  

		   
		 //var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
		 //console.log('initMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapZoom))
			zoom =  trim_space(ArrayFullDataResultsInfo.DefaultsMapZoom);
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLongitude))
			latval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLongitude);	
		 	
		if(!is_undefined(ArrayFullDataResultsInfo.DefaultsMapLatitude))
			longval =  trim_space(ArrayFullDataResultsInfo.DefaultsMapLatitude);	
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))		
	
	//zoom = trim_space(zoom);
	//zoom = Set_String(zoom);
	//zoom = Set_parseInt(zoom);
	//zoom = Set_parseFloat(zoom);
	zoom = Set_parseInt(zoom);
    //Set_parseFloat(n)
    if (zoom == '' || zoom == 0) {
        zoom = 12;
    }
    if ((latval == '' || longval == '') || (latval == 0 || longval == 0)) {
        latval = 15.3691, longval = 44.1895;
 
    }
	
 
	 var pyrmont = {lat: latval, lng: longval};
    var myLatlng = new google.maps.LatLng(latval, longval);
    //DefaultsMapZoom
    var mapOptions = {
        zoom: zoom,
        //maxZoom: 7 ,
        //minZoom: 7,
        center: myLatlng,
        mapTypeId: 'roadmap'
    }
	
	if(Length_document_object('#map') > 0)
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
	else if(Length_document_object('#ATMs-map') > 0)
    map = new google.maps.Map(document.getElementById('ATMs-map'), mapOptions);
	else if(Length_document_object('#Branches-map') > 0)
	map = new google.maps.Map(document.getElementById('Branches-map'), mapOptions);
	else
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//marker = addMarker(myLatlng);
	////return null; 
	setTimeout( function () {SetAoutReRunEvent();},2000);
	
	var geocoder = new google.maps.Geocoder;
	var infowindow = new google.maps.InfoWindow();

	var service = new google.maps.places.PlacesService(map);

	var map_address_id = "";
	//if($('#input_place_id').length > 0)	
	if(get_val_object('#input_place_id'))	
	map_address_id = Set_String($("#input_place_id").val());
	//# console.log(' initMap map_address_id ' , map_address_id);
	
	//if(!geocoder)
	//geocoder = new google.maps.Geocoder;
	if(map_address_id != "")					
	geocodePlaceId(map_address_id, geocoder, map); 
	//	return null;
	/*
	var card = document.getElementById('map-pac-card');
	var input = document.getElementById('map-pac-input');
	// # var countries = document.getElementById('map-country-selector');


	var searchBox = new google.maps.places.SearchBox(input);

	var service = new google.maps.places.PlacesService(map);
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
	var autocomplete = new google.maps.places.Autocomplete(input);
	// Set initial restrict to the greater list of countries.
	autocomplete.setComponentRestrictions({
	'country': ['ye']
	}); //'us', 'pr', 'vi', 'gu', 'mp'
	//'(cities)'
	//autocomplete.setComponentRestrictions({'country': ['us', 'pr', 'vi', 'gu', 'mp']});
	*/
	
	
 	if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))
	{
		
		  
		 //var DefaultsDataResultsInfoOptions = {"DefaultsMapZoom": '8',"DefaultsMapLongitude": '15.3691',"DefaultsMapLatitude": '44.1895',"ResultsInfo": null];//"ResultsInfo": null // [{}]
		 // //if(FunPrintConsoleLog)
		 //console.log('initMap ArrayFullDataResultsInfo' , ArrayFullDataResultsInfo);
		 var placesInfo = {};
		 if(!is_undefined(ArrayFullDataResultsInfo.ResultsInfo)  && ArrayFullDataResultsInfo.ResultsInfo  && is_object(ArrayFullDataResultsInfo.ResultsInfo))
			placesInfo = ArrayFullDataResultsInfo.ResultsInfo;
	  
		
		
			
			$.each( placesInfo, function(row_key, row){
			  //var Info =  "Name: " + row_key + ", row: " + row ;
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row_key' , row_key);
			  //console.log('initMap ArrayFullDataResultsInfo placesInfo row' , row);
			  
			  if(!is_undefined(row)  && row  && is_object(row))
			  {
				   var title = null;
				   var address = null;
				   var latitude = null;
				   var longitude = null;
				   
				   
				   //zoom = trim_space(zoom);
				//zoom = Set_String(zoom);
				//zoom = Set_parseInt(zoom);
				//zoom = Set_parseFloat(zoom);
				 if(!is_undefined(row.title)   && !is_empty(row.title))
				 title = trim_space(row.title);
				if(!is_undefined(row.address)   && !is_empty(row.address))
				 address = trim_space(row.address);
				//if(is_empty(title)  && !is_empty(address))
				//	title = trim_space(address);
				
				if(!is_undefined(row.latitude)   && !is_empty(row.latitude))
				 latitude = trim_space(row.latitude);
				if(!is_undefined(row.longitude)   && !is_empty(row.longitude))
				 longitude = trim_space(row.longitude);
			 
				//console.log('initMap ArrayFullDataResultsInfo placesInfo title' , title);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo address' , address);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo latitude' , latitude);
				//console.log('initMap ArrayFullDataResultsInfo placesInfo longitude' , longitude);
				if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
				{
					latitude = Set_parseFloat(latitude);
					longitude = Set_parseFloat(longitude);
					if(latitude != 0 && longitude != 0)
					{
						
						// map.fitBounds(bounds);
						//map.setZoom(zoom);
						////map.setZoom(map.getZoom());
						//var pyrmont = {lat: latitude, lng: longitude};
						 var pyrmont = new google.maps.LatLng(latitude, longitude);
						 
						 
						//var bounds = new google.maps.LatLngBounds();
						////bounds.union(place.geometry.viewport);
						//// bounds.extend(place.geometry.location);
						////bounds.union(pyrmont);
						//bounds.extend(pyrmont);
						//map.fitBounds(bounds);
						var marker_title = title;
						//if(is_empty(title)  && !is_empty(address))
						//marker_title = trim_space(address);

						 var html = '';//'<b>اليمن</b>';
						 if(!is_empty(title))
							 html += '<div><b>'+title+'</b></div>';
						 if(!is_empty(address))
							 html += '<div><b>'+address+'</b></div>';
						 
						 
						if(!is_empty(html))
						{
							if(!is_empty(marker_title))
							marker = addMarker(pyrmont, infowindow, html , marker_title)
							else
							marker = addMarker(pyrmont, infowindow, html)
						}
						else
						{
							marker = addMarker(pyrmont);
						}
						
						
			
						/*var marker = new google.maps.Marker({
						position: pyrmont,
						map: map,
						title: title
						}); 
						*/
						//markers.push(marker);
						 
					}//if(latitude != 0 && longitude != 0)
				}//if(latitude && longitude && !is_empty(latitude) && !is_empty(longitude))
				  	
			  }//if(!is_undefined(row)  && row  && is_object(row))
			});//$.each( placesInfo, function(row_key, row){
		 
	}//if(!is_undefined(ArrayFullDataResultsInfo) && is_object(ArrayFullDataResultsInfo))	
	 
 
 /*
	google.maps.event.addListener(map, 'bounds_changed', function(event) {
		
		//console.log(' initMap  google.maps.event.addListener bounds_changed event' , event);	
		//console.log(' initMap  google.maps.event.addListener bounds_changed map' , map);
		//console.log(' initMap  google.maps.event.addListener bounds_changed map.center' , map.center);
		//console.log(' initMap  google.maps.event.addListener bounds_changed map.zoom' , map.zoom);
	 
		var c = map.getCenter();
		x = c.lng().toFixed(5);
		y = c.lat().toFixed(5);
		
		var XandY = x + ' , ' + y;
		console.log(' initMap google.maps.event.addListener  bounds_changed x , y' , XandY);
		Zoom = map.getZoom();
		console.log(' initMap  google.maps.event.addListener  bounds_changed Zoom' , Zoom);
	  
		//# maxX = 53.11478,
		//# maxY = 19.12441,
		//# minX = 42.51709,
		//# minY = 12.09304;
		//# //if (x < minX || x > maxX || y < minY || y > maxY) {
		//# //  if (x < minX) x = minX;
		//# //  if (x > maxX) x = maxX;
		//# //  if (y < minY) y = minY;
		//# //  if (y > maxY) y = maxY;
		//# //  map.setCenter(new google.maps.LatLng(y, x));
		//# //  // alert('y='+y +'\n x='+x);
		//# //}
		//# map.setCenter(new google.maps.LatLng(y, x));
		//# document.getElementById('latspan').innerHTML = y;
		//# document.getElementById('lngspan').innerHTML = x;
		//# document.getElementById('latspanlngspan').innerHTML =y +': '+ x;
		//# document.getElementById('zoomspan').innerHTML = map.getZoom();
 
    }); //google.maps.event.addListener(map, 'bounds_changed', function(event) {
	*/	
 	

 
   //google.maps.event.addListener(map, 'bounds_changed', function() {
 map.addListener('bounds_changed', function(event) {
    //var infowindow2 = new google.maps.InfoWindow;
    var c = map.getCenter(),
    x = c.lng().toFixed(5),
    y = c.lat().toFixed(5)
	
	
	var XandY = x + ' , ' + y;
	console.log(' initMap  map.addListener  bounds_changed x , y' , XandY);
	Zoom = map.getZoom();
	console.log(' initMap  map.addListener  bounds_changed Zoom' , Zoom);
 /*
    maxX = 53.11478,
    maxY = 19.12441,
    minX = 42.51709,
    minY = 12.09304;
    //if (x < minX || x > maxX || y < minY || y > maxY) {
    //  if (x < minX) x = minX;
    //  if (x > maxX) x = maxX;
    //  if (y < minY) y = minY;
    //  if (y > maxY) y = maxY;
    //  map.setCenter(new google.maps.LatLng(y, x));
    //  // alert('y='+y +'\n x='+x);
    //}
    map.setCenter(new google.maps.LatLng(y, x));
    document.getElementById('latspan').innerHTML = y;
    document.getElementById('lngspan').innerHTML = x;
    document.getElementById('latspanlngspan').innerHTML =y +': '+ x;
    document.getElementById('zoomspan').innerHTML = map.getZoom();
 */
    }); //map.addListener('bounds_changed', function(event) {

	 // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
		//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
		//# //# $(".js-item").filter(".active").click();
		$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
		//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);
        var latlng = event.latLng,
			x = latlng.lng().toFixed(5),
			y = latlng.lat().toFixed(5);
			
		var XandY = x + ' , ' + y;
		console.log(' initMap  map.addListener  click x , y' , XandY);
		Zoom = map.getZoom();
		console.log(' initMap  map.addListener  click Zoom' , Zoom);
			 
    }); //map.addListener('click', function(event) {	
 
 
	 /*
	map.addListener('mousemove', function(event) {
        var latlng = event.latLng,
            x = latlng.lng().toFixed(5),
            y = latlng.lat().toFixed(5);
			
		var XandY = x + ' , ' + y;
		console.log(' initMap  map.addListener  mousemove x , y' , XandY);
		Zoom = map.getZoom();
		console.log(' initMap  map.addListener  mousemove Zoom' , Zoom);
		//document.getElementById('latspan').innerHTML = y;
		//document.getElementById('lngspan').innerHTML = x;
		//document.getElementById('latspanlngspan').innerHTML =y +': '+ x;
		//document.getElementById('zoomspan').innerHTML = map.getZoom();
    }); //map.addListener('bounds_changed', function(event) {	
 	*/
	
}//function initMapFixed() 

 


// Adds a marker to the map and push to the array.
function addMarkerV2(DavOptions)
{
    //https://developers.google.com/maps/documentation/javascript/markers
    //lat: map.getCenter().lat(),
    //lng: map.getCenter().lng(),
    //alert(map.getCenter().lng())
	
	//pos = { lat: 15.3691, lng: 44.1895 };
	////var pyrmont = {lat: latitude, lng: longitude};
	//var pyrmont = new google.maps.LatLng(latitude, longitude);
  
	//PrintConsoleLog = true;//false , true;
	var FunPrintConsoleLog = PrintConsoleLog;
	//FunPrintConsoleLog = true;//false , true;
	if(is_undefined(DavOptions) || is_null(DavOptions) || (is_object(DavOptions) && jQuery.isEmptyObject(DavOptions)))
	return null;


	var DefaultsDavOptions = {
        //position: {lat: beach[1], lng: beach[2]}, 
        position: null,
        map: null,
		infowindow: null,
		title:"",
		html:"",
        icon: "",
		RunEventMarkerClick: false,//false , true;
		//RunEventClickMarkerInfoContentHideActive: true,//false , true;
		ObjectMarkerInfo: null,
		//ObjectMarkerInfo: ArrayFullDataResultsInfo.ResultsInfo
		SetAqHomeObject: null
		
    };
	//https://api.jquery.com/jQuery.extend/			
	//$.extend( object1, object2 );// Merge object2 into object1
	//$.extend( true, object1, object2 );// Merge object2 into object1, recursively
	//var settings = $.extend( {}, defaults, options );// Merge defaults and options, without modifying defaults

	//# DavOptions = $.extend({},DefaultsDavOptions, DavOptions);	
	//FunPrintConsoleLog = true;//false , true;
	if(FunPrintConsoleLog)
	console.log('addMarkerV2 DavOptions' , DavOptions);
	
	
	var ObjectMarkerInfo = null; 
	var SetAqHomeObject = null; 
	
	var SetMapObject = null;
	var position = null;
	var infowindow = null;
	
	var html = "";
	var marker_title = "";
	//var SetMarkerImageIcon = null;
	var SetImageIcon = "";
	
 
	if(!is_undefined(DavOptions.ObjectMarkerInfo) && !is_null(DavOptions.ObjectMarkerInfo) && is_object(DavOptions.ObjectMarkerInfo))
	ObjectMarkerInfo = DavOptions.ObjectMarkerInfo;

	if(!is_undefined(DavOptions.SetAqHomeObject) && !is_null(DavOptions.SetAqHomeObject) && is_object(DavOptions.SetAqHomeObject))
	SetAqHomeObject = DavOptions.SetAqHomeObject;

	if(!is_undefined(DavOptions.position) && is_object(DavOptions.position))
	position=DavOptions.position;

	if(is_null(position) && !is_undefined(DavOptions.location) && is_object(DavOptions.location))
	position=DavOptions.location;

	if(!is_undefined(DavOptions.map) && DavOptions.map)
	SetMapObject=DavOptions.map;

	if(is_null(SetMapObject) && !is_undefined(map) && map)
	SetMapObject=map;
 
	
	if(is_null(SetMapObject) || !SetMapObject)
	return null;
	if(is_undefined(position) || is_null(position))//|| is_object(location)
	return null;
 

	if(!is_undefined(DavOptions.infowindow) && is_object(DavOptions.infowindow))//&& is_object(DavOptions.infowindow)
	infowindow=DavOptions.infowindow;

	if(!is_undefined(DavOptions.html) && !is_empty(DavOptions.html))
	html=DavOptions.html;
 
	if(!is_undefined(DavOptions.title) && !is_empty(DavOptions.title))
	marker_title=DavOptions.title;
	if(is_empty(marker_title) && !is_undefined(DavOptions.marker_title) && !is_empty(DavOptions.marker_title))
	marker_title=DavOptions.marker_title;
	if(is_empty(marker_title) && !is_undefined(DavOptions.markerTitle) && !is_empty(DavOptions.markerTitle))
	marker_title=DavOptions.markerTitle;


	if(!is_undefined(DavOptions.icon) && !is_empty(DavOptions.icon))
	SetImageIcon=DavOptions.icon;
	if(is_empty(SetImageIcon) && !is_undefined(DavOptions.image) && !is_empty(DavOptions.image))
	SetImageIcon=DavOptions.image;

	if(!is_undefined(DavOptions.icon) && !is_empty(DavOptions.icon))
	SetImageIcon=DavOptions.icon;
	if(is_empty(SetImageIcon) && !is_undefined(DavOptions.image) && !is_empty(DavOptions.image))
	SetImageIcon=DavOptions.image;

	if(is_empty(SetImageIcon) && !is_undefined(SetMarkerImageIcon) && !is_empty(SetMarkerImageIcon))
		SetImageIcon = SetMarkerImageIcon;
 
	
 
 
	

	//if(FunPrintConsoleLog)
	//console.log('addMarkerV2 location' , location);
	//console.log('addMarkerV2 infowindow' , infowindow);
	//console.log('addMarkerV2 html' , html);
	//console.log('addMarkerV2 marker_title' , marker_title);
	
	var OptionsMarker = {
        //position: {lat: beach[1], lng: beach[2]}, 
		position: position,
        //position: location,
        //title: html,
        //title:"Hello World!",
       // map: map,
		map: SetMapObject,
        //icon: image,
        animation: google.maps.Animation.DROP
    };
	
 
	if(!is_undefined(marker_title) && !is_empty(marker_title))
		OptionsMarker.title=marker_title;

	
	if(!is_undefined(SetImageIcon) && !is_empty(SetImageIcon))
		OptionsMarker.icon=SetImageIcon;

	
	//console.log('addMarkerV2 OptionsMarker' , OptionsMarker);
    var marker = new google.maps.Marker(OptionsMarker); //var marker = new google.maps.Marker({
	if(!is_undefined(infowindow) && infowindow && !is_undefined(html) && !is_empty(html))
	{
		//infowindow.setContent(html);
		marker.addListener('click', function() {

			//if(is_null(ObjectMarkerInfo) && is_object(ObjectMarkerInfo))
			//FunPrintConsoleLog = true;//false , true;
			
			//console.log('addMarkerV2 marker.addListener click html' , html);
			//FunPrintConsoleLog = true;//true,false
			if(FunPrintConsoleLog)
			console.log('addMarkerV2 marker.addListener click ObjectMarkerInfo' , ObjectMarkerInfo);		
			infowindow.setContent(html);
			//infowindow.open(map, marker);
			infowindow.open(SetMapObject, marker);
			
			var DoRunEventMarkerClick = false;//true,false
			if(!is_undefined(DavOptions.RunEventMarkerClick) && is_boolean(DavOptions.RunEventMarkerClick))
			DoRunEventMarkerClick = DavOptions.RunEventMarkerClick	
			
			//DoRunEventMarkerClick = true;//true,false
			if(DoRunEventMarkerClick)
			{		
				var RowLocationId = 0;
				if(!is_undefined(ObjectMarkerInfo.LocationId) && !is_empty(ObjectMarkerInfo.LocationId))
				RowLocationId = Set_parseInt(ObjectMarkerInfo.LocationId);
				var ParentLocationId = 0;
				if(!is_undefined(ObjectMarkerInfo.ParentLocationId) && !is_empty(ObjectMarkerInfo.ParentLocationId))
				ParentLocationId = Set_parseInt(ObjectMarkerInfo.ParentLocationId);
				
				//console.log('addMarkerV2 marker.addListener click ObjectMarkerInfo' , ObjectMarkerInfo);	
				//console.log('addMarkerV2 marker.addListener click SetAqHomeObject' , SetAqHomeObject);
				if(!is_empty(RowLocationId))
				{
					var TagId = "InfoTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
					//SetMapSearchResultsInfo(SetAqHomeObject,DoReSetSearchData,RowLocationId,TagId)
					var ReSetDoReSetSearchData = false;//true,false	
					//SetMapSearchResultsInfo(RowLocationId,ReSetDoReSetSearchData);
					SetMapSearchResultsInfo(SetAqHomeObject , RowLocationId , false , TagId);
					
					//var RunEventClickMarkerInfoContentHideActive  = false;//true , false
					//if(!is_undefined(RunEventClickMarkerInfoContentHideActive) && RunEventClickMarkerInfoContentHideActive)
					var RunEventClickMarkerInfoContentHideActive = true;//true , false
					if(!is_undefined(ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive))
					RunEventClickMarkerInfoContentHideActive = ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive;
					
					if(RunEventClickMarkerInfoContentHideActive)
					{
						//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
						//# //# $(".js-item").filter(".active").click();
						$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
						//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);	
					}//if(RunEventClickMarkerInfoContentHideActive)
					
				}//if(!is_empty(RowLocationId))
				/*				
				else if(!is_empty(ParentLocationId))
				{
					var TagId = "InfoTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
					//SetMapSearchResultsInfo(SetAqHomeObject,DoReSetSearchData,ParentLocationId,TagId)
					var ReSetDoReSetSearchData = false;//true,false	
					//SetMapSearchResultsInfo(ParentLocationId,ReSetDoReSetSearchData);
					SetMapSearchResultsInfo(SetAqHomeObject , ParentLocationId , false , TagId);
					
					//var RunEventClickMarkerInfoContentHideActive  = false;//true , false
					//if(!is_undefined(RunEventClickMarkerInfoContentHideActive) && RunEventClickMarkerInfoContentHideActive)
					var RunEventClickMarkerInfoContentHideActive = true;//true , false
					if(!is_undefined(ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive))
					RunEventClickMarkerInfoContentHideActive = ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive;
					
					if(RunEventClickMarkerInfoContentHideActive)
					{
						//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
						//# //# $(".js-item").filter(".active").click();
						$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
						//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);	
					}//if(RunEventClickMarkerInfoContentHideActive)
						
				}//else if(!is_empty(ParentLocationId))
				*/ 
			}//if(DoRunEventMarkerClick)
			
							
		});
	 
	}//if(!is_undefined(infowindow) && infowindow && !is_undefined(html) && !is_empty(html))
	else
	{
		marker.addListener('click', function() {
			
			//if(is_null(ObjectMarkerInfo) && is_object(ObjectMarkerInfo))
			//FunPrintConsoleLog = true;//false , true;
		 
			//SetMapSearchResultsInfo(object,DoReSetSearchData,SetIndexResultsInfo,TagId)
			//FunPrintConsoleLog = true;//true,false
			if(FunPrintConsoleLog)
			console.log('addMarkerV2 marker.addListener click ObjectMarkerInfo' , ObjectMarkerInfo);


			var DoRunEventMarkerClick = false;//true,false
			if(!is_undefined(DavOptions.RunEventMarkerClick) && is_boolean(DavOptions.RunEventMarkerClick))
			DoRunEventMarkerClick = DavOptions.RunEventMarkerClick	
			
			//DoRunEventMarkerClick = true;//true,false
			if(DoRunEventMarkerClick)
			{		
				var RowLocationId = 0;
				if(!is_undefined(ObjectMarkerInfo.LocationId) && !is_empty(ObjectMarkerInfo.LocationId))
				RowLocationId = Set_parseInt(ObjectMarkerInfo.LocationId);
				var ParentLocationId = 0;
				if(!is_undefined(ObjectMarkerInfo.ParentLocationId) && !is_empty(ObjectMarkerInfo.ParentLocationId))
				ParentLocationId = Set_parseInt(ObjectMarkerInfo.ParentLocationId);
				
				//console.log('addMarkerV2 marker.addListener click ObjectMarkerInfo' , ObjectMarkerInfo);	
				//console.log('addMarkerV2 marker.addListener click SetAqHomeObject' , SetAqHomeObject);
				if(!is_empty(RowLocationId))
				{
					var TagId = "InfoTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
					//SetMapSearchResultsInfo(SetAqHomeObject,DoReSetSearchData,RowLocationId,TagId)
					var ReSetDoReSetSearchData = false;//true,false	
					//SetMapSearchResultsInfo(RowLocationId,ReSetDoReSetSearchData);
					SetMapSearchResultsInfo(SetAqHomeObject , RowLocationId , false , TagId);
					
					//var RunEventClickMarkerInfoContentHideActive  = false;//true , false
					//if(!is_undefined(RunEventClickMarkerInfoContentHideActive) && RunEventClickMarkerInfoContentHideActive)
					var RunEventClickMarkerInfoContentHideActive = true;//true , false
					if(!is_undefined(ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive))
					RunEventClickMarkerInfoContentHideActive = ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive;
					
					if(RunEventClickMarkerInfoContentHideActive)
					{
						//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
						//# //# $(".js-item").filter(".active").click();
						$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
						//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);	
					}//if(RunEventClickMarkerInfoContentHideActive)
						
				}//if(!is_empty(RowLocationId))
				/*				
				else if(!is_empty(ParentLocationId))
				{
					var TagId = "InfoTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
					//SetMapSearchResultsInfo(SetAqHomeObject,DoReSetSearchData,ParentLocationId,TagId)
					var ReSetDoReSetSearchData = false;//true,false	
					//SetMapSearchResultsInfo(ParentLocationId,ReSetDoReSetSearchData);
					SetMapSearchResultsInfo(SetAqHomeObject , ParentLocationId , false , TagId);
					
					//var RunEventClickMarkerInfoContentHideActive  = false;//true , false
					//if(!is_undefined(RunEventClickMarkerInfoContentHideActive) && RunEventClickMarkerInfoContentHideActive)
					var RunEventClickMarkerInfoContentHideActive = true;//true , false
					if(!is_undefined(ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive))
					RunEventClickMarkerInfoContentHideActive = ObjectMarkerInfo.RunEventClickMarkerInfoContentHideActive;
					
					if(RunEventClickMarkerInfoContentHideActive)
					{
						//$("[EventClickGetInfoData=1]").filter("[IndexResultsInfo]").click();
						//# //# $(".js-item").filter(".active").click();
						$("[EventClickMarkerInfoContentHideActive=1]").filter(".active").click();
						//# console.log('addMarkerV2 marker.addListener click $([EventClickMarkerInfoContentHideActive=1]).filter(.active) RunEventClickMarkerInfoContentHideActive' , RunEventClickMarkerInfoContentHideActive);	
					}//if(RunEventClickMarkerInfoContentHideActive)
						
				}//else if(!is_empty(ParentLocationId))
				*/ 
			}//if(DoRunEventMarkerClick)
				
			
			//console.log( 'addMarkerV2 addListener 22  marker click');
			//if(typeof HomeObject != "undefined" && typeof HomeObject == 'object' && $index !== null)
			//console.log( 'addMarkerV2  marker click $index ',  $index );
		 
			//console.log( 'addMarkerV2 markers.length ', markers.length );
			//console.log('addMarkerV2 _Array_locations_Info.length', _Array_locations_Info.length );
        }); 
	}
	
	/*
	if(!is_empty(SetIndexResultsInfo))
	{
	var TagId = "IndexTagSelected";//InfoTagSelected,IndexTagSelected,AllSelected
	//SetMapSearchResultsInfo(object,DoReSetSearchData,SetIndexResultsInfo,TagId)
	var ReSetDoReSetSearchData = false;//true,false	
	//SetMapSearchResultsInfo(SetIndexResultsInfo,ReSetDoReSetSearchData);
	SetMapSearchResultsInfo(SetIndexResultsInfo , false , TagId);
	}//if(!is_empty(SetIndexResultsInfo))
	*/
	
	//console.log('addMarkerV2 1 markers' , markers);
	
	markers.push(marker);
	//console.log('addMarkerV2 2 markers' , markers);
	//FunPrintConsoleLog = true;//false , true;
	if(FunPrintConsoleLog)
	console.log('addMarkerV2 addMarkerV2 marker' , marker); 
		
    return marker;
} //function addMarkerV2(DavOptions)

 
// Adds a marker to the map and push to the array.
function addMarker(location, infowindow, html , marker_title) {
    //https://developers.google.com/maps/documentation/javascript/markers
    //lat: map.getCenter().lat(),
    //lng: map.getCenter().lng(),
    //alert(map.getCenter().lng())
	//console.log('addMarker location' , location);
	//console.log('addMarker infowindow' , infowindow);
	//console.log('addMarker html' , html);
	//console.log('addMarker marker_title' , marker_title);
	
	var OptionsMarker = {
        //position: {lat: beach[1], lng: beach[2]}, 
        position: location,
        //title: html,
        //title:"Hello World!",
        map: map,
        //icon: image,
        animation: google.maps.Animation.DROP
    };
	
 
	if(!is_undefined(marker_title) && !is_empty(marker_title))
		OptionsMarker.title=marker_title;

	
	if(!is_undefined(SetMarkerImageIcon) && !is_empty(SetMarkerImageIcon))
		OptionsMarker.icon=SetMarkerImageIcon;

	
	//console.log('addMarker OptionsMarker' , OptionsMarker);
    var marker = new google.maps.Marker(OptionsMarker); //var marker = new google.maps.Marker({
	if(!is_undefined(infowindow) && !is_undefined(html) && !is_empty(html))
	{
		//infowindow.setContent(html);
		marker.addListener('click', function() {
		  infowindow.setContent(html);
          infowindow.open(map, marker);
        });
	 
	}//if(!is_undefined(infowindow) && !is_undefined(html) && !is_empty(html))
	else
	{
		marker.addListener('click', function() {
			 
			//console.log( 'addMarker addListener 22  marker click');
			//if(typeof HomeObject != "undefined" && typeof HomeObject == 'object' && $index !== null)
			//console.log( 'addMarker  marker click $index ',  $index );
		 
			//console.log( 'addMarker markers.length ', markers.length );
			//console.log('addMarker _Array_locations_Info.length', _Array_locations_Info.length );
        }); 
	}
	markers.push(marker);
	
	 
		
    return marker;
} //function addMarker(location, infowindow , html) {

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    //is_array(a)
    if (is_undefined(map) || !is_object(map))
        return null;
    if (is_undefined(markers) || !is_array(markers))
        markers = [];
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
} //function setMapOnAll(map) {
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
} // function clearMarkers() {
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
} //function showMarkers() {
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
} //function deleteMarkers() {