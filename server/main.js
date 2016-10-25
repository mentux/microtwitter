import { Meteor } from 'meteor/meteor';
import {listaDeMensagens} from '/lib/collection.js';

Meteor.startup(() => {
    //Removendo todas as entradas na lista de mensagens
    listaDeMensagens.remove({});
    console.log("Rodando MicroTwitter");
});

