const mix = require('laravel-mix');
let fs = require('fs');
const fs_extra = require('fs-extra');
let Visualizer = require('webpack-visualizer-plugin');



/*
 |--------------------------------------------------------------------------
 | CSS
 |--------------------------------------------------------------------------
 */

mix.setPublicPath('./assets/');

let theme_path = "./assets";

mix.sass('assets/scss/backend.scss', theme_path+'/css/');


let path_vue;

/*
 |--------------------------------------------------------------------------
 | UI Build
 |--------------------------------------------------------------------------
 */

path_vue = __dirname+"/vue/ui/app.js";
mix.js(path_vue,  theme_path+'/builds/ui.js');

/*
 |--------------------------------------------------------------------------
 | App Build
 |--------------------------------------------------------------------------
 */
/*

path_vue = __dirname+"/Resources/views/admin/vaahone/vue/app/app.js";
mix.js(path_vue,  theme_path+'/builds/app.js');

*/


//--------------------------------------------------------------------------

mix.webpackConfig({
    watchOptions: {
        aggregateTimeout: 2000,
        poll: 20,
        ignored: [
            '/node_modules/',
        ]
    },
    plugins: [
        new Visualizer()
    ],
});
