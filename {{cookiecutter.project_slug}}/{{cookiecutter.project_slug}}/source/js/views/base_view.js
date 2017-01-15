'use strict';

{{ cookiecutter.js_namespace }}.ns('{{ cookiecutter.js_namespace }}.views');

// using john resig's simple class inheritence see http://ejohn.org/blog/simple-javascript-inheritance/
{{ cookiecutter.js_namespace }}.views.BaseView = Class.extend({
    init: function init(cfg) {
        var cfg = cfg || {};
        this.name = (cfg.name === undefined) ? console.error('name is undefined') : cfg.name;
        this.elem = (cfg.elem === undefined) ? console.error('elem is undefined') : $(cfg.elem);

    },
    show: function show() {
        this.elem.fadeIn();
    },
    hide: function hide() {
        this.elem.hide();
    }
});