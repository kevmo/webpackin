import $ from 'jquery';
import template from './Header.html';
import Mustache from 'mustache';
import './Header.scss';


export default class Header {
    constructor(title) {
        this.title = title;
    }

    render() {

        var h = Mustache.render(template, {text: this.title});

        var $body = $(document.body);


        $body.prepend(h);
    }
}