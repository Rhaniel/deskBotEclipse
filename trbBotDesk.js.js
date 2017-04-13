require('dotenv').load();
var imp = require('./impressora');
var vnoc = require('./vnoc');
var express = require('express');
var Botkit = require('botkit');
var flag = 0;

var middleware = require('botkit-middleware-watson')({
  username: process.env.CONVERSATION_USERNAME,
  password: process.env.CONVERSATION_PASSWORD,
  workspace_id: process.env.WORKSPACE_ID,
  version_date: '2017-02-07'
});

// Configure your bot
var controller = Botkit.botframeworkbot({
    require_delivery: true,
  });

var Bot = controller.spawn({
        appId: process.env.app_id,
        appPassword: process.env.app_password
});

// if you are already using Express, you can use your own server instance...
// see "Use BotKit with an Express web server"
controller.setupWebserver(3979,function(err,webserver) {
  controller.createWebhookEndpoints(controller.webserver, Bot, function() {
      console.log('This bot is online!!!');
  });
});


controller.hears(['.*'], ['direct_message','message_received','direct_mention', 'mention'], function(bot, message) {
  controller.log('Message received');
  middleware.interpret(bot, message, function(err) {
    if (!err){
      //intent identificada 	
      if(!(typeof message.watsonData.intents[0] == "undefined")){
        //Nó visitado não é o start_conversation
        if(message.watsonData.output.nodes_visited != "Start_Conversation"){
        	//tratativa da intent
        	switch(message.watsonData.intents[0].intent){
          		case 'Impressora':
          			if(!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "instalar"
          				|| (!(typeof message.watsonData.entities[1] == "undefined") && message.watsonData.entities[1].value == "instalar")){
          				imp.Impressora(bot,message);
          			}else if(!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "cartucho"
          				|| (!(typeof message.watsonData.entities[1] == "undefined") && message.watsonData.entities[1].value == "cartucho")){
          					imp.ImpressoraSuprimentos(bot,message);
          			}else{
          				imp.impressoraUndefined(bot,message);
          			}    
            		break;
          		case 'Saudação': 
              		bot.reply(message,message.watsonData.output.text.join('\n'));
            		break;
            	case 'Vnoc':	
            		if((!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "Celular")
            			|| (!(typeof message.watsonData.entities[1] == "undefined") && message.watsonData.entities[1].value == "Celular")){
            				vnoc.vnocCel(bot,message,flag);
            				flag = 0; //flag para identificar o indice das msg do watson
            			}else{
            				vnoc.vnocUndefined(bot,message);
            				flag = 1;
            			}	
            		break;
          		default:
            		bot.reply(message, message.watsonData.output.text.join('\n'));
            		break;
        	}
        	//Start Conversation
        }else{
        	bot.reply(message, message.watsonData.output.text.join('\n'));
        }
      }else{
        //Não identifica uma intent mais idenntifica uma entities
        if(!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "instalar"){
 			imp.Impressora(bot,message);
        }else if(!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "Celular"){
        	vnoc.vnocCel(bot,message,flag);
        	flag = 0;
        }else if(!(typeof message.watsonData.entities[0] == "undefined") && message.watsonData.entities[0].value == "cartucho"){
        	imp.ImpressoraSuprimentos(bot,message);
        }else{
        	bot.reply(message, message.watsonData.output.text.join('\n'));	
        }
      }
    }//IF ERR
  });
});