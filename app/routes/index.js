module.exports = function(application){
    application.get('/', function(request, response){
        application.app.controllers.index.home(application, request, response);
    });
}