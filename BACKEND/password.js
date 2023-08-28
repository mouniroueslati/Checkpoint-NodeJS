const generatepassword = require("generate-password")


var password = generatepassword.generate({
	length: 15,
	numbers: true,
    uppercase: false
});

console.log(password);