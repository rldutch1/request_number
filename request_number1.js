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

		var xyz = ["<hr>Translate the CCL Program by typing: <i>translate " + SearchRequest[i].request_name + " go</i> then click " + '"' + "Include/Compile" + '"' + " Do not save the program.<br /><hr />"];
    for(i=i;i<j;i++)
    	{
			xyz.push(
			SearchRequest[i].request_number," ",
			SearchRequest[i].description," <b><i>translate " + 
			SearchRequest[i].request_name + " go</i></b> ",
			SearchRequest[i].text+"<br />");
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
