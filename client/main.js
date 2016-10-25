import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {listaDeMensagens} from '/lib/collection.js';

import './main.html';

Template.formulario.events({
    'click #enviar': function (event, template) {
        //recuperando o conteúdo do elemento DOM "nome"
        var nome = template.find('#nome').value;
        //recuperando o conteúdo do elemento DOM "conteudo"
        var conteudo = template.find('#conteudo').value;

        //adicionando um novo objeto dentro da COLLECTION "Mensagem"
        listaDeMensagens.insert({
            //atributo "nome"
            nome: nome,
            //atributo "conteudo"
            conteudo: conteudo,
            //atributo "data"
            data: new Date().toLocaleString()
        });
        //limpando o valor do elemento DOM "nome"
        template.find('#nome').value = '';
        //limpando o valor do elemento DOM "conteudo"
        template.find('#conteudo').value = '';

        //ignorando/cancelando a execução de eventos de sequencia JS
        event.preventDefault();
    }
});

Template.mensagens.timeline = function () {
    //retornando a lista de mensagens da COLLECTION "Mensagem"
    return listaDeMensagens.find({},{sort: {data: -1}});
};
