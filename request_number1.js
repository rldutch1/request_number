var nbsp = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
function getRequestCCL(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
	xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXOject("Microsoft.XMLHTTP");
			}
		xmlhttp.onreadystatechange=function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		//document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		var arrayObject = xmlhttp.responseText;
		var SearchRequest = JSON.parse(arrayObject);
		qq = (String.fromCharCode(34));

    var i=0;
    var j=(SearchRequest.length);

		xyz = ["<hr>Translate the CCL Program by typing: " + qq + "<i>translate " + SearchRequest[i].CCL_Name + " go</i>" + qq + " then click " + qq + "Include/Compile" + qq + ". Do not save the program.<br /><hr />"];
    for(i=i;i<j;i++)
    	{
				xyz.push("<dl><dt><b>REQUEST NUMBER:</b> <i>" + SearchRequest[i].request_number + "</i><dt />"
				+ "<dd ><b>REQUEST NUMBER DESCRIPTION:</b> <i>" + SearchRequest[i].description + "</i><dd />"
				+ "<dd><b>CCL NAME:</b> <i>" + SearchRequest[i].CCL_Name + "</i><dd />"
				+ "<dd><b>TEXT Description:</b> <i>" + SearchRequest[i].text + "</i><dd /></dl>");
//    		xyz.push("CCL Name: " + SearchRequest[i].CCL_Name + "<br />");
//    		xyz.push("Request Number: " + SearchRequest[i].request_number + "<br />");

    	}
    RLH=xyz.join("");
    document.getElementById("myDiv").innerHTML=RLH;
		}
	}

var x=document.forms["req_numForm"]["req_num"].value;
if (x==null || x=="")
  {
  alert("Request number field must not be blank!");
  return false;
  }

	var SearchToSend=document.req_numForm.req_num.value

	xmlhttp.open("POST","request_number.js",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("req_num="+x+"");
//	xmlhttp.send();
	xmlhttp.close();
}


function validateForm()
{
var x=document.forms["req_numForm"]["req_num"].value;
if (x==null || x=="")
  {
  alert("Request number field must not be blank!");
  return false;
  }
}
