// import Button from './Components/Button';


if (document.querySelectorAll('a').length){

    require.ensure([], () => {
        const Button = require('./Components/Button').default;
        const button = new Button("google.com");

        button.render('a');
    });
}

if (document.querySelectorAll(document.body.length)) {
    require.ensure([], () => {

        const Header = require('./Components/Header').default;
        const header = new Header("webpack");

        header.render();
    })
}