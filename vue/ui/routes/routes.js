let routes;
let routes_list;


routes= [
    { path: '*', redirect: '/' }
];



//----------Middleware
import GetAssets from './middleware/GetAssets'
import IsLoggedIn from './middleware/IsLoggedIn'
//----------LayoutApp




/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
import Default from "./../layouts/Default";

import Index from "./../pages/Index";

routes_list =     {
    path: '/',
    component: Default,
    props: true,
    children: [
        {
            path: '/',
            name: 'home',
            component: Index,
            props: true,
        }
    ]
};

routes.push(routes_list);

/*
|--------------------------------------------------------------------------
| Buefy Routes
|--------------------------------------------------------------------------
*/

import Ui from "./../layouts/Ui";

import button from "./../vaahnuxt/buefy/pages/button";
import carousel from "./../vaahnuxt/buefy/pages/carousel";
import collapse from "./../vaahnuxt/buefy/pages/collapse";
import dialog from "./../vaahnuxt/buefy/pages/dialog";
import dropdown from "./../vaahnuxt/buefy/pages/dropdown";
import loading from "./../vaahnuxt/buefy/pages/loading";
import menu from "./../vaahnuxt/buefy/pages/menu";
import message from "./../vaahnuxt/buefy/pages/message";
import modal from "./../vaahnuxt/buefy/pages/modal";
import navbar from "./../vaahnuxt/buefy/pages/navbar";
import notification from "./../vaahnuxt/buefy/pages/notification";
import pagination from "./../vaahnuxt/buefy/pages/pagination";
import progress from "./../vaahnuxt/buefy/pages/progress";
import snackbar from "./../vaahnuxt/buefy/pages/snackbar";
import steps from "./../vaahnuxt/buefy/pages/steps";
import table from "./../vaahnuxt/buefy/pages/table";
import toast from "./../vaahnuxt/buefy/pages/toast";
import tooltip from "./../vaahnuxt/buefy/pages/tooltip";
import tag from "./../vaahnuxt/buefy/pages/tag";
import tabs from "./../vaahnuxt/buefy/pages/tabs";
import icon from "./../vaahnuxt/buefy/pages/icon";
import autocomplete from "./../vaahnuxt/buefy/pages/formcontrol/autocomplete";
import checkbox from "./../vaahnuxt/buefy/pages/formcontrol/checkbox";
import clockpicker from "./../vaahnuxt/buefy/pages/formcontrol/clockpicker";
import datepicker from "./../vaahnuxt/buefy/pages/formcontrol/datepicker";
import datetimepicker from "./../vaahnuxt/buefy/pages/formcontrol/datetimepicker";
import field from "./../vaahnuxt/buefy/pages/formcontrol/field";
import input from "./../vaahnuxt/buefy/pages/formcontrol/input";
import numberinput from "./../vaahnuxt/buefy/pages/formcontrol/numberinput";
import radio from "./../vaahnuxt/buefy/pages/formcontrol/radio";
import rate from "./../vaahnuxt/buefy/pages/formcontrol/rate";
import select from "./../vaahnuxt/buefy/pages/formcontrol/select";
import slider from "./../vaahnuxt/buefy/pages/formcontrol/slider";
import switche from "./../vaahnuxt/buefy/pages/formcontrol/switch";
import taginput from "./../vaahnuxt/buefy/pages/formcontrol/taginput";
import timepicker from "./../vaahnuxt/buefy/pages/formcontrol/timepicker";
import upload from "./../vaahnuxt/buefy/pages/formcontrol/upload";



routes_list =     {
    path: '/ui/buefy',
    component: Ui,
    props: true,
    children: [
        {
            path: '/',
            name: 'bue.index',
            component: button,
            props: true,
        },
        {
            path: 'button',
            name: 'bue.button',
            component: button,
            props: true,
        },
        {
            path: 'carousel',
            name: 'bue.carousel',
            component: carousel,
            props: true,
        },
        {
            path: 'collapse',
            name: 'bue.collapse',
            component: collapse,
            props: true,
        },
        {
            path: 'dialog',
            name: 'bue.dialog',
            component: dialog,
            props: true,
        },
        {
            path: 'dropdown',
            name: 'bue.dropdown',
            component: dropdown,
            props: true,
        },
        {
            path: 'loading',
            name: 'bue.loading',
            component: loading,
            props: true,
        },
        {
            path: 'menu',
            name: 'bue.menu',
            component: menu,
            props: true,
        },
        {
            path: 'message',
            name: 'bue.message',
            component: message,
            props: true,
        },
        {
            path: 'modal',
            name: 'bue.modal',
            component: modal,
            props: true,
        },
        {
            path: 'navbar',
            name: 'bue.navbar',
            component: navbar,
            props: true,
        },
        {
            path: 'notification',
            name: 'bue.notification',
            component: notification,
            props: true,
        },
        {
            path: 'pagination',
            name: 'bue.pagination',
            component: pagination,
            props: true,
        },
        {
            path: 'progress',
            name: 'bue.progress',
            component: progress,
            props: true,
        },
        {
            path: 'snackbar',
            name: 'bue.snackbar',
            component: snackbar,
            props: true,
        },
        {
            path: 'steps',
            name: 'bue.steps',
            component: steps,
            props: true,
        },
        {
            path: 'table',
            name: 'bue.table',
            component: table,
            props: true,
        },
        {
            path: 'toast',
            name: 'bue.toast',
            component: toast,
            props: true,
        },
        {
            path: 'tooltip',
            name: 'bue.tooltip',
            component: tooltip,
            props: true,
        },
        {
            path: 'tag',
            name: 'bue.tag',
            component: tag,
            props: true,
        },
        {
            path: 'tabs',
            name: 'bue.tabs',
            component: tabs,
            props: true,
        },
        {
            path: 'icon',
            name: 'bue.icon',
            component: icon,
            props: true,
        },
        {
            path: 'autocomplete',
            name: 'bue.autocomplete',
            component: autocomplete,
            props: true,
        },
        {
            path: 'checkbox',
            name: 'bue.checkbox',
            component: checkbox,
            props: true,
        },
        {
            path: 'clockpicker',
            name: 'bue.clockpicker',
            component: clockpicker,
            props: true,
        },
        {
            path: 'datepicker',
            name: 'bue.datepicker',
            component: datepicker,
            props: true,
        },
        {
            path: 'datetimepicker',
            name: 'bue.datetimepicker',
            component: datetimepicker,
            props: true,
        },
        {
            path: 'field',
            name: 'bue.field',
            component: field,
            props: true,
        },
        {
            path: 'input',
            name: 'bue.input',
            component: input,
            props: true,
        },
        {
            path: 'numberinput',
            name: 'bue.numberinput',
            component: numberinput,
            props: true,
        },
        {
            path: 'radio',
            name: 'bue.radio',
            component: radio,
            props: true,
        },
        {
            path: 'rate',
            name: 'bue.rate',
            component: rate,
            props: true,
        },
        {
            path: 'select',
            name: 'bue.select',
            component: select,
            props: true,
        },
        {
            path: 'slider',
            name: 'bue.slider',
            component: slider,
            props: true,
        },
        {
            path: 'switch',
            name: 'bue.switch',
            component: switche,
            props: true,
        },
        {
            path: 'taginput',
            name: 'bue.taginput',
            component: taginput,
            props: true,
        },
        {
            path: 'timepicker',
            name: 'bue.timepicker',
            component: timepicker,
            props: true,
        },
        {
            path: 'upload',
            name: 'bue.upload',
            component: upload,
            props: true,
        }
    ]
};

routes.push(routes_list);


/*
|--------------------------------------------------------------------------
| Bulma Routes
|--------------------------------------------------------------------------
*/

import UiBulma from "./../layouts/Ui";

import container from "./../vaahnuxt/bulma/pages/layouts/container";



routes_list =     {
    path: '/ui/bulma',
    component: UiBulma,
    props: true,
    children: [
        {
            path: '/',
            name: 'bulma.index',
            component: container,
            props: true,
        }
    ]
};

routes.push(routes_list);


/*
|--------------------------------------------------------------------------
| Docs Routes
|--------------------------------------------------------------------------
*/

import UiDocs from "./../layouts/Ui";

import index from "./../vaahnuxt/docs/pages/index";



routes_list =     {
    path: '/ui/docs',
    component: UiDocs,
    props: true,
    children: [
        {
            path: '/',
            name: 'docs.index',
            component: index,
            props: true,
        }
    ]
};

routes.push(routes_list);




/*
|--------------------------------------------------------------------------
| Page Layouts Routes
|--------------------------------------------------------------------------
*/

import UiPageLayouts from "./../layouts/Ui";

import layoutv1 from "./../vaahnuxt/page-layouts/pages/layout-v1";



routes_list =     {
    path: '/ui/page-layouts',
    component: UiPageLayouts,
    props: true,
    children: [
        {
            path: '/',
            name: 'pagelayouts.layoutv1',
            component: layoutv1,
            props: true,
        }
    ]
};

routes.push(routes_list);





/*
|--------------------------------------------------------------------------
| Blocks Layouts Routes
|--------------------------------------------------------------------------
*/

import UiBlocks from "./../layouts/Ui";

import IndexBlocks from "./../vaahnuxt/blocks/pages/index";



routes_list =     {
    path: '/ui/blocks',
    component: UiBlocks,
    props: true,
    children: [
        {
            path: '/',
            name: 'blocks.indexblocks',
            component: IndexBlocks,
            props: true,
        }
    ]
};

routes.push(routes_list);

export default routes;
