//var myDB = new ACCESSdb("E:\\Software\\GitHub_Repos\\request_number\\Request_Number.mdb", {showErrors:true});
var myDB = new ACCESSdb("C:\\Users\\rlholland\\Downloads\\ACCESSdb-v0.9.2\\ACCESSdb\\Request_Number.mdb", {showErrors:true});

var SQL = "SELECT distinct(request_number), description, request_name, text FROM request_number where request_number in (11000,12000,13000,14000,15000,16000)";

	var resultSet = myDB.query(SQL);
         if(!myDB.query(SQL)) {
            alert("Oh no!");
         }

//request_number request_name description text
var rsJSON = myDB.query(SQL, {json:true});
		var SearchRequest = JSON.parse(rsJSON);
		var qq = (String.fromCharCode(34));
    var i=0;
    var j=(SearchRequest.length);

		var xyz = ["<hr>Translate the CCL Program by typing: <i>translate " + SearchRequest[i].request_name + " go</i> then click " + '"' + "Include/Compile" + '"' + " Do not save the program.<br /><hr />"];

    for(i=i;i<j;i++)
    	{
			xyz.push(SearchRequest[i].request_number," ",SearchRequest[i].description," <b><i>translate " + SearchRequest[i].request_name + " go</i></b> ",SearchRequest[i].text+"<br />");
			}
			RLH=xyz.join("");
			document.write(RLH);
			document.getElementById("myDiv").innerHTML=RLH;


//********************************************************


