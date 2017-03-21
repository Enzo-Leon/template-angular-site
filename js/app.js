var app = angular.module('WebsiteInfo',[]);

(function($){
    app.controller('pageinfo', function() {
       this.site = page; 
    });
    
    var page = {
        title : 'Welcome to the Site!',
        summary : 'Summary information of the site',
        content : 'Content section of the site'
    }
    
    
})(window.jQuery);