/**
 *	This is a userscript to help extract a list of devices from Apple's developer portal.
 */

//	Grab the form containing the devices
var form = document.getElementsByClassName("rows");

// Pull out the devices inside of them.
var devices = form.getElementsByTagName("div");

//	Convert the NodeList into an array
devices = [].slice.call(devices);

//	Iterate the devices
devices.forEach(function(div){ 
	var name = div.getElementsByClassName("title")[0].innerText; 
	var device = div.getElementsByClassName("right")[0].innerText; 

	//	Wrap the results in an object
	var result = {
		"name": name,
		 "device" : device
		};
		output.push(result)
	});


//	Convert the output to a string
var outputString = "";

//	Build the output string
output.forEach(function(object){
	outputString += "\n" + object.name + "\t" + object.device; 
});

//	Output the content somewhere...
var outputBox = document.createElement('textarea');
outputBox.name = 'output';
outputBox.value = outputString;
document.getElementsByClassName("formContent")[0].parentNode.appendChild(outputBox);

/**
 *	That's it! Now copy the contents of the textarea to a file and save it.
 */

