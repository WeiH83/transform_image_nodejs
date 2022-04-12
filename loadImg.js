const axios = require('axios');
const fs = require('fs');
const img_input = './oImg.jpg'
const {flipX, flipY} = require("./flipImg.js");

let url = 'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg'


axios({url,responseType: 'stream'}).then((resp) => {

	const writer = fs.createWriteStream(img_input)
	resp.data.pipe(writer)

	writer.on('finish', () => {
		console.log('finish')
		flipX(img_input)
		flipY(img_input)
	})

	writer.on('error', () => {
		console.log('stream error')
	})
})



