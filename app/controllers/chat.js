module.exports.iniciaChat = function(application, request, response) {
    var dadosForm = request.body;
    
    request.assert('apelido', 'Não não pode ser vazio').notEmpty();
    request.assert('apelido', 'Nome deve conter entre 3 15 caracteres.').len(3, 15);

    var error =  request.validationErrors();

    console.log(error);

    if (error) {
        response.render("index", {validacao : error});
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        { 
        apelido : dadosForm.apelido, 
        mensagem : 'Acabou de Entrar', 
        }
    );

    response.render("chat", {dadosForm :  dadosForm});
}