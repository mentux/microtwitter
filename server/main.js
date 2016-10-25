import { Meteor } from 'meteor/meteor';
import {Mensagem} from '/lib/collection.js';

Meteor.startup(() => {
    Mensagem.remove({});
    console.log("Rodando MicroTwitter");
});

