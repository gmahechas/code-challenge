/* While a user is downloading a file which is X bytes in size, your job is to provide a function to estimate the time remaining in minutes.The system has a record of the amount(in bytes) B downloaded each minute.

If the file is not completely downloaded, estimate the rate by taking the simple average of the last Z observations.

that returns the amount of time remaining in minutes.X is an integer representing the file size.B is an array of integers listing the bytes downloaded at each minute starting from the beginning of the download until now.Return an integer representing the number of minutes remaining.Z is an integer.You may assume that all the values are reasonable. */

/* function solution(X, B, Z) {
	const downloaded = B.reduce((acc, curr) => acc + curr, 0);
	const remain = X - downloaded;
	const avg = (B.slice(-2).reduce((acc, curr) => acc + curr, 0)) / Z;
	return remain / avg;
} */


const https = require('https');

/* const getData = async () => {

	return new Promise((resolve, reject) => {
	https.get('https://coderbyte.com/api/challenges/json/age-counting', (res) => {

		console.log(res);
	})
	})

}  */

const request = https.get('https://coderbyte.com/api/challenges/json/age-counting', (res) => {

	let data = '';
	res.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	res.on('end', () => {
		const body = JSON.parse(data);
		let split = body.data.split(',');

		let count = 0;
		for (const item of split) {
			let arr = item.trim().split('=');
			if (arr[0] == 'age') {
				if(parseInt(arr[1]) >= 50) {
					count++;
				}
			}
		}
		console.log(count);
	});
})

request.end();
