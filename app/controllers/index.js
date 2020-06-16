module.exports.home = function(application, request, response) {
    response.render("index", {validacao: {}});
}