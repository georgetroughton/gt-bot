//requirements
let restify = require('restify'),
	builder = require('botbuilder');

//set up restify server
let server = restify.createServer();
server.listen(process.env.PORT || 3000, function(){
	console.log('%s listening to %s', server.name, server.url);
});

//create chat bot
let connector = new builder.ChatConnector({appId: '77f1758b-d740-4663-97dc-a3d2478afcae', appPassword: '0oMPrZu574gPwdUyjNvrzbo'});
let bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//create bot dialogs
bot.dialog('/', function(session){
	session.send("Hello World!");
});