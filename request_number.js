//var myDB = new ACCESSdb("E:\\Software\\GitHub_Repos\\request_number\\Request_Number.mdb", {showErrors:true});
var myDB = new ACCESSdb("C:\\Users\\rlholland\\Downloads\\ACCESSdb-v0.9.2\\ACCESSdb\\Request_Number.mdb", {showErrors:true});

var SQL = "SELECT distinct(request_number), description, request_name, text FROM request_number where request_number in (11000,12000,13000,14000,15000,16000)";

	var resultSet = myDB.query(SQL);
         if(!myDB.query(SQL)) {
            alert("Oh no!");
         }

//request_number request_name description text
var rsJSON = myDB.query(SQL, {json:true});
		var yyy = JSON.parse(rsJSON);
//		alert(yyy.length);
//		document.write(yyy[1].request_number," ",yyy[1].description," ",yyy[1].request_name," ",yyy[1].text);
//	var obj = JSON.parse(yyy); alert(obj);
//var xxx = (rsJSON.length);
//document.write("{\"rsJSON\": "+rsJSON + "}<br />" + xxx);
		var qq = (String.fromCharCode(34));
    var i=0;
    var j=(yyy.length);

		var xyz = ["<hr>Translate the CCL Program by typing: <i>translate " + yyy[i].request_name + " go</i> then click " + '"' + "Include/Compile" + '"' + " Do not save the program.<br /><hr />"];
		
    for(i=i;i<j;i++)
    	{
//		document.write(yyy[i].request_number," ",yyy[i].description," ",yyy[i].request_name," ",yyy[i].text+"<br />");
			xyz.push(yyy[i].request_number," ",yyy[i].description," <b><i>translate " + yyy[i].request_name + " go</i></b> ",yyy[i].text+"<br />");
			}
			RLH=xyz.join("");
			document.write(RLH);
			document.getElementById("myDiv").innerHTML=RLH;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo").innerHTML = fruits;
//********************************************************


