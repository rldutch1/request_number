
var myDB = new ACCESSdb("C:\\Users\\rlholland\\Downloads\\ACCESSdb-v0.9.2\\ACCESSdb\\Request_Number.mdb");
var myDB = new ACCESSdb("C:\\Users\\rlholland\\Downloads\\ACCESSdb-v0.9.2\\ACCESSdb\\Request_Number.mdb", {showErrors:true});
//var myDB = new ACCESSdb("\\\\bhs\\groups\\BCC_1\\Cerner\\Millennium\\DMAL\\Databases\\Request_Number\\Request_Number.mdb");
//var myDB = new ACCESSdb("\\\\bhs\\groups\\BCC_1\\Cerner\\Millennium\\DMAL\\Databases\\Request_Number\\Request_Number.mdb", {showErrors:true});

var SQL = "SELECT request_number, description, request_name, text FROM request_number where request_number = 11000";

	var resultSet = myDB.query(SQL);
         if(!myDB.query(SQL)) {
            alert("Oh no!");
         }


var rsJSON = myDB.query(SQL, {json:true});
		var yyy = JSON.parse(rsJSON);
		alert(yyy);
//		var obj = JSON.parse(yyy); alert(obj);
var xxx = (rsJSON.length);
document.write("{\"rsJSON\": "+rsJSON + "}<br />" + xxx);
var xrsJSON = ("{\"rsJSON\": "+rsJSON + "}");
//alert(xrsJSON);
    var i=0;
    var j=(rsJSON.length);
    alert(rsJSON[i].request_number);
    qq = (String.fromCharCode(34));
		xyz = ["<hr>Translate the CCL Program by typing: " + qq + "<i>translate " + rsJSON[i].request_name + " go</i>" + qq + " then click " + qq + "Include/Compile" + qq + ". Do not save the program.<br /><hr />"];
    for(i=i;i<j;i++)
    	{
				xyz.push("<dl><dt><b>REQUEST NUMBER:</b> <i>" + rsJSON[i].request_number + "</i><dt />"
				+ "<dd ><b>REQUEST NUMBER DESCRIPTION:</b> <i>" + rsJSON[i].description + "</i><dd />"
				+ "<dd><b>CCL NAME:</b> <i>" + rsJSON[i].request_name + "</i><dd />"
				+ "<dd><b>TEXT Description:</b> <i>" + rsJSON[i].text + "</i><dd /></dl>");
//    		xyz.push("CCL Name: " + rsJSON[i].request_name + "<br />");
//    		xyz.push("Request Number: " + rsJSON[i].request_number + "<br />");

    	}
    RLH=xyz.join("");
    document.getElementById("myDiv").innerHTML=RLH;
alert(rsJSON + "<br />" + xxx);

alert(RLH);
//********************************************************


