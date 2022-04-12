const sharp = require('sharp'); 

function flipX(imgName){
	sharp(imgName)
     		.flip(true)
     		.toFile('./x_output.jpg',err => {
        			if(err) console.log('x error');
                			console.log(err);
     		})
}

function flipY(imgName){
	sharp(imgName)
     		.flop(true)
     		.toFile('./y_output.jpg',err => {
        			if(err) console.log('y error');
                		console.log(err);
     		})
}



module.exports = {flipX, flipY};