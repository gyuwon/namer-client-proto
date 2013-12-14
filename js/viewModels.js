/**
 * Application View-Models
 * 
 * Creator: Gyuwon
 * Date: 12/14/2013
 */

var viewModels = {
    /**
     * Initialize new instance of function MainViewModel.
     * 
     * Parameters
     * - ko: Knockout framework.
     * - service: An object that provides application services.
     */
    MainViewModel: function (ko, service) {
        var self = this;
        self.contents = ko.observableArray([]);
        self.fetchContents = function () {
            service.getContents(function (contents) {
                self.contents(contents);
            });
        };
    }
};
