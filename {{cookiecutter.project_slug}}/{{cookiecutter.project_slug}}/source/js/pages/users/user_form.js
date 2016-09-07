/*
 *   JS to support user_form.html
 */
'use strict';

// note the use of namespacing that matches folder structure and helps avoid name collisions
{{ cookiecutter.js_namespace }}.ns('{{ cookiecutter.js_namespace }}.users');


{{ cookiecutter.js_namespace }}.users.UserForm = function() {
    // private vars
    var _profileForm;
    var _user = {};

    return {
        init: function init(cfg) {
            var cfg = cfg || {};
            _user = (cfg.user === undefined) ? console.error('missing user') : cfg.user;
            this.initProfileForm();
        },
        initProfileForm: function initProfileForm() {
            _profileForm = new {{ cookiecutter.js_namespace }}.users.ProfileForm({
                name: 'profileForm',
                elem: '#container', // usually there's another wrapper element but right now there isn't
                formElem: '.user-profile-form',
                submitButtonElem: '.submit',
                user: _user
            });
        }
    };
}();
