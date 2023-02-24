const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile('File.txt',' World');
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const fileContent = await fs.readFile('File.txt')
	return fileContent.toString();
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile('File.txt',' World');
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return await fs.unlink('File.txt')
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
