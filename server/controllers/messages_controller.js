
const messages = [];
let id = 0;

const createMessage = (req,res,next) => {
	messages.push({
		name: req.body.name,
		id: id,
		time: req.body.time,
		text: req.body.text
	})
	id++
	res.json(messages)
}

const readMessages = (req,res,next) => {
	res.json(messages)
}

const updateMessages = (req,res,next) => {
	const index = messages.findIndex(message => +message.id === +req.params.id)
	messages[index] = {...messages[index],...req.body}
	res.json(messages)
}

const deleteMessage = (req,res,next) => {
	const index = messages.findIndex(message => +message.id === +req.params.id)
	messages.splice(index,1)
	res.json(messages)
}


module.exports = {
	messages,
	id,
	createMessage,
	readMessages,
	updateMessages,
	deleteMessage
}