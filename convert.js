const csv=require("csvtojson")
const http = require('http')
const fs = require('fs')
const path = require('path')


//const defurl = 'https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+3T2018+type@asset+block/customer-data.csv'

//define the main function
const converter = (file = 'customer-data.csv') => {
	console.log('Opening file name: ', file)
	csv()
	.fromFile(file)
	.then((jsonObj)=>{ 

				// stringify JSON Object
				var jsonContent = JSON.stringify(jsonObj);
 
				fs.writeFile("customer-data.json", jsonContent, 'utf8', function (err) {
    				if (err) {
        				console.log("An error occured while writing JSON Object to File.");
        				return console.log(err);
    				}
 
    				console.log("JSON file has been saved.");
});
		
		
		})
}
converter(process.argv[2])