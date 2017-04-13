exports.vnocCel = function(bot,message,flag){
    bot.startConversation(message,function(err,conv){
        var i = 0;
        if(flag == 1)
            i = 1;
    conv.say({
        attachmentLayout: "carousel",
        text: message.watsonData.output.text[i++],
        attachments: [
            {   
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text:message.watsonData.output.text[i++],
                    title: "1) Download",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img1}
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "2) Permissões",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img2 }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "3) Perfil",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img3 }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "4) URI",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img4 }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "5) Tipo de Chamada",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img5 }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "6) PIN",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img6 }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[i++],
                    title: "",
                    subtitle: "",
                    buttons: [
                        {
                            type: "imBack",
                            title: "Sim",
                            value: "Sim"
                        },{
                            type: "imBack",
                            title: "Não",
                            value: "Não, obrigado!"
                        }
                    ]
                }
            }
        ]
    });
          });
}

//método usado quando idetifica intent vnoc mais nenhuma intenção
exports.vnocUndefined = function(bot,message,flag){
    bot.startConversation(message,function(err,conv){
    conv.say({
        attachmentLayout: "carousel",
        text: '',
        attachments: [
            {   
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text:message.watsonData.output.text[0],
                    title: "",
                    subtitle: "",
                    buttons:[
                         {
                            type: "imBack",
                            title: "Smarthphone",
                            value: "Smarthphone"
                        },{
                            type: "imBack",
                            title: "Computador",
                            value: "Computador"
                        }

                    ]
                }
            }
        ]
    });
          });
}