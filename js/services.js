/**
 * Application Services
 * 
 * Creator: Gyuwon
 * Date: 12/14/2013
 */

var services = {
    
    /**
     * Define a mock service instance.
     */
    Mock: function () {
        var self = this;
        var contents = [
            {
                id: 1,
                creator_id: 1,
                tag_name: 'Hobbit',
                content_type: 'IMAGE',
                content_status: 'ENROLLED',
                category_id: 1,
                share_cnt: 10,
                content_link: 'http://2.bp.blogspot.com/-z2_XigD9I0U/UNpe57TlDjI/AAAAAAAAAo0/OoVEkLJGUfI/s1600/The-Hobbit-1024x1024.jpg'
            },
            {
                id: 2,
                creator_id: 1,
                tag_name: 'Bilbo',
                content_type: 'MOVIE',
                content_status: 'CONFIRMED',
                category_id: 1,
                share_cnt: 10,
                content_link: 'http://2.bp.blogspot.com/-z2_XigD9I0U/UNpe57TlDjI/AAAAAAAAAo0/OoVEkLJGUfI/s1600/The-Hobbit-1024x1024.jpg'
            },
            {
                id: 3,
                creator_id: 1,
                tag_name: 'My Tag',
                content_type: 'SOUND',
                content_status: 'ENROLLED',
                category_id: 1,
                share_cnt: 10,
                content_link: 'http://2.bp.blogspot.com/-z2_XigD9I0U/UNpe57TlDjI/AAAAAAAAAo0/OoVEkLJGUfI/s1600/The-Hobbit-1024x1024.jpg'
            },
            {
                id: 4,
                creator_id: 1,
                tag_name: 'My Tag',
                content_type: 'IMAGE',
                content_status: 'ENROLLED',
                category_id: 1,
                share_cnt: 10,
                content_link: 'http://2.bp.blogspot.com/-z2_XigD9I0U/UNpe57TlDjI/AAAAAAAAAo0/OoVEkLJGUfI/s1600/The-Hobbit-1024x1024.jpg'
            },
            {
                id: 5,
                creator_id: 1,
                tag_name: 'My Tag',
                content_type: 'IMAGE',
                content_status: 'ENROLLED',
                category_id: 1,
                share_cnt: 10,
                content_link: 'http://2.bp.blogspot.com/-z2_XigD9I0U/UNpe57TlDjI/AAAAAAAAAo0/OoVEkLJGUfI/s1600/The-Hobbit-1024x1024.jpg'
            }
        ];
        self.getContents = function (callback) {
            setTimeout(function () {
                callback(contents);
            });
        };
        self.newContent = function (content, callback) {
            setTimeout(function () {
                contents.push(content);
                content.id = contents.length;
                callback();
            })
        };
    },
    
    /**
     * The service instance for the development environment.
     */
    Development: function () {
        throw 'Not implemented';
    },
    
    /**
     * The service instance for the production environment.
     */
    Production: function () {
        throw 'Not implmeneted';
    }
    
};
