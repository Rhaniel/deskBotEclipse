//método quando identifica intent impressora e entitie instalar
exports.Impressora = function(bot,message){
    bot.startConversation(message,function(err,conv){
    conv.say({
        attachmentLayout: "carousel",
        text: "Vamos lá "+ message.watsonData.context.name,
        attachments: [
            {   
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text:message.watsonData.output.text[1],
                    title: "1) Primeira Carga",
                    subtitle: "",
                    images: [
                        { url: "http://image.prntscr.com/image/a8c5d5c2f8624361acb5732cb2a9da4a.png" }
                    ],
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[3],
                    title: "2) Download",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img1 }
                    ],
                    buttons: [
                        {
                            type: "openUrl",
                            title: "Clique para acessar o link",
                            value: "https://www.goo.gl/5dVAOD"
                        }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[4],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img2 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[5],
                    title: "3) Instalação",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img3 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[6],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img4 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[7],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img5 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[8],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img6 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[9],
                    title: "4) Configuração USB",
                    subtitle: ""
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[10],
                    title: "5) Configuração Bluetooth",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img7 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[11],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img8 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[12],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img9 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[13],
                    title: "",
                    subtitle: "",
                    images: [
                        { url: message.watsonData.context.Img10 }
                    ]
                }
            },{
                contentType: 'application/vnd.microsoft.card.hero',
                content: {
                    text: message.watsonData.output.text[14],
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

//método utilizado quando identifica intent vnoc e entitie celular


//função utilizada quando se identifica a intent impressora mais não identifica nenhuma entitie
exports.impressoraUndefined = function(bot,message){
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
                            title: "Instalar/Configurar",
                            value: "Instalar/Configurar"
                        },{
                            type: "imBack",
                            title: "Solicitar Suprimentos",
                            value: "Suprimentos"
                        }

                    ]
                }
            }
        ]
    });
          });
}

//Função que trata intent Impressora e entities cartucho
exports.ImpressoraSuprimentos = function(bot,message){
    bot.reply(message,message.watsonData.output.text[0]+"\n\n"+message.watsonData.output.text[1]+"\n\n"
        +message.watsonData.output.text[2]+"\n\n"+message.watsonData.output.text[3]+"\n\n"
            +message.watsonData.output.text[4]+"\n\n"+message.watsonData.output.text[5]+"\n\n"
                +message.watsonData.output.text[6]+"\n\n"+message.watsonData.output.text[7]+"\n\n");
}
