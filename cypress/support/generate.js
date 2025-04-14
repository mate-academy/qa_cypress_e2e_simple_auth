const { faker } = require("@faker-js/faker");

function generateUser() {
	const randomNumber = Math.random().toString().slice(2, 8);
	const userName =
		faker.internet.userName().charAt(0).toLowerCase() + "-" + randomNumber;
	const email = userName + "@email.com";
	const password = `test1234`;

	return { userName, email, password };
}
module.exports = { generateUser };
