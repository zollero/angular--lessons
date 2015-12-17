angular.module("emailParser", []).config(['$interploateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol("_");
    $interpolateProvider.endSymbol("_");
}]).factory('EmailParser', function($interpolate){
    //处理解析的服务
    return {
        parse: function(text, context) {
            var template = $interpolate(text);
            return template(context);
        }
    };
});
