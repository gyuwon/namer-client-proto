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
        
        var contentPrototype = {
            isImage: function () { return this.content_type === 'IMAGE'; },
            isMovie: function () { return this.content_type === 'MOVIE'; },
            isSound: function () { return this.content_type === 'SOUND'; },
            isEnrolled: function () { return this.content_status === 'ENROLLED'; },
            isConfirmed: function () { return this.content_status === 'CONFIRMED'; }
        };
        
        self.contents = ko.observableArray([]);
        self.fetchContents = function () {
            service.getContents(function (contents) {
                for (var i in contents) {
                    var content = contents[i];
                    content.__proto__ = contentPrototype;
                }
                self.contents(contents);
            });
        };
        
        self.newContent = {
            tagName: ko.observable(),
            contentLink: ko.observable()
        };
        
        self.registerContent = function () {
            var content = {
                creator_id: 2,
                tag_name: self.newContent.tagName(),
                content_type: 'IMAGE',
                content_status: 'ENROLLED',
                category_id: 1,
                share_cnt: 0,
                content_link: self.newContent.contentLink()
            };
            self.newContent.tagName('');
            self.newContent.contentLink('');
            service.postContent(content, function () {
                self.fetchContents();
            });
        };
    }
    
};
