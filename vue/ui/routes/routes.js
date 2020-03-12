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

import IndexBulma from "./../vaahnuxt/bulma/pages/layouts/container";
import container from "./../vaahnuxt/bulma/pages/layouts/container";
import level from "./../vaahnuxt/bulma/pages/layouts/level";
import mediaobject from "./../vaahnuxt/bulma/pages/layouts/mediaobject";
import hero from "./../vaahnuxt/bulma/pages/layouts/hero";
import tiles from "./../vaahnuxt/bulma/pages/layouts/tiles";
import footer from "./../vaahnuxt/bulma/pages/layouts/footer";
import general from "./../vaahnuxt/bulma/pages/forms/general";
import inputbulma from "./../vaahnuxt/bulma/pages/forms/input";
import textareabulma from "./../vaahnuxt/bulma/pages/forms/textarea";
import selectbulma from "./../vaahnuxt/bulma/pages/forms/select";
import checkboxbulma from "./../vaahnuxt/bulma/pages/forms/checkbox";
import radiobulma from "./../vaahnuxt/bulma/pages/forms/radio";
import filebulma from "./../vaahnuxt/bulma/pages/forms/file";
import box from "./../vaahnuxt/bulma/pages/elements/box";
import buttonbulma from "./../vaahnuxt/bulma/pages/elements/buttons";
import content from "./../vaahnuxt/bulma/pages/elements/content";
import deletebulma from "./../vaahnuxt/bulma/pages/elements/delete";
import iconbulma from "./../vaahnuxt/bulma/pages/elements/icon";
import image from "./../vaahnuxt/bulma/pages/elements/image";
import notificationbulma from "./../vaahnuxt/bulma/pages/elements/notification";
import progressbar from "./../vaahnuxt/bulma/pages/elements/progressbar";
import tablebulma from "./../vaahnuxt/bulma/pages/elements/table";
import tagbulma from "./../vaahnuxt/bulma/pages/elements/tag";
import titlebulma from "./../vaahnuxt/bulma/pages/elements/title";
import breadcrumbsbulma from "./../vaahnuxt/bulma/pages/components/breadcrumbs";
import cardsbulma from "./../vaahnuxt/bulma/pages/components/cards";
import dropdownbulma from "./../vaahnuxt/bulma/pages/components/dropdown";
import menubulma from "./../vaahnuxt/bulma/pages/components/menu";
import messagebulma from "./../vaahnuxt/bulma/pages/components/message";
import modalbulma from "./../vaahnuxt/bulma/pages/components/modal";
import navbarbulma from "./../vaahnuxt/bulma/pages/components/navbar";
import paginationbulma from "./../vaahnuxt/bulma/pages/components/pagination";
import panelbulma from "./../vaahnuxt/bulma/pages/components/panel";
import tabsbulma from "./../vaahnuxt/bulma/pages/components/tabs";



routes_list =     {
    path: '/ui/bulma',
    component: UiBulma,
    props: true,
    children: [
        {
            path: '/',
            name: 'bulma.index',
            component: IndexBulma,
            props: true,
        },
        {
            path: 'container',
            name: 'bulma.container',
            component: container,
            props: true,
        },
        {
            path: 'level',
            name: 'bulma.level',
            component: level,
            props: true,
        },
        {
            path: 'mediaobject',
            name: 'bulma.mediaobject',
            component: mediaobject,
            props: true,
        },
        {
            path: 'hero',
            name: 'bulma.hero',
            component: hero,
            props: true,
        },
        {
            path: 'footer',
            name: 'bulma.footer',
            component: footer,
            props: true,
        },
        {
            path: 'tiles',
            name: 'bulma.tiles',
            component: tiles,
            props: true,
        },
        {
            path: 'general',
            name: 'bulma.general',
            component: general,
            props: true,
        },
        {
            path: 'input',
            name: 'bulma.input',
            component: inputbulma,
            props: true,
        },
        {
            path: 'textarea',
            name: 'bulma.textarea',
            component: textareabulma,
            props: true,
        },
        {
            path: 'select',
            name: 'bulma.select',
            component: selectbulma,
            props: true,
        },
        {
            path: 'checkbox',
            name: 'bulma.checkbox',
            component: checkboxbulma,
            props: true,
        },
        {
            path: 'radio',
            name: 'bulma.radio',
            component: radiobulma,
            props: true,
        },
        {
            path: 'file',
            name: 'bulma.file',
            component: filebulma,
            props: true,
        },
        {
            path: 'box',
            name: 'bulma.box',
            component: box,
            props: true,
        },
        {
            path: 'button',
            name: 'bulma.button',
            component: buttonbulma,
            props: true,
        },
        {
            path: 'content',
            name: 'bulma.content',
            component: content,
            props: true,
        },
        {
            path: 'delete',
            name: 'bulma.delete',
            component: deletebulma,
            props: true,
        },
        {
            path: 'icon',
            name: 'bulma.icon',
            component: iconbulma,
            props: true,
        },
        {
            path: 'image',
            name: 'bulma.image',
            component: image,
            props: true,
        },
        {
            path: 'notification',
            name: 'bulma.notification',
            component: notificationbulma,
            props: true,
        },
        {
            path: 'progressbar',
            name: 'bulma.progressbar',
            component: progressbar,
            props: true,
        },
        {
            path: 'table',
            name: 'bulma.table',
            component: tablebulma,
            props: true,
        },
        {
            path: 'tag',
            name: 'bulma.tag',
            component: tagbulma,
            props: true,
        },
        {
            path: 'title',
            name: 'bulma.title',
            component: titlebulma,
            props: true,
        },
        {
            path: 'breadcrumbs',
            name: 'bulma.breadcrumbs',
            component: breadcrumbsbulma,
            props: true,
        },
        {
            path: 'cards',
            name: 'bulma.cards',
            component: cardsbulma,
            props: true,
        },
        {
            path: 'dropdown',
            name: 'bulma.dropdown',
            component: dropdownbulma,
            props: true,
        },
        {
            path: 'menu',
            name: 'bulma.menu',
            component: menubulma,
            props: true,
        },
        {
            path: 'message',
            name: 'bulma.message',
            component: messagebulma,
            props: true,
        },
        {
            path: 'modal',
            name: 'bulma.modal',
            component: modalbulma,
            props: true,
        },
        {
            path: 'navbar',
            name: 'bulma.navbar',
            component: navbarbulma,
            props: true,
        },
        {
            path: 'pagination',
            name: 'bulma.pagination',
            component: paginationbulma,
            props: true,
        },
        {
            path: 'panel',
            name: 'bulma.panel',
            component: panelbulma,
            props: true,
        },
        {
            path: 'tabs',
            name: 'bulma.tabs',
            component: tabsbulma,
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
import loginform from "./../vaahnuxt/page-layouts/pages/login-form";
import formpagev1 from "./../vaahnuxt/page-layouts/pages/form-page-v1";
import formpagev2 from "./../vaahnuxt/page-layouts/pages/form-page-v2";
import formpagev3 from "./../vaahnuxt/page-layouts/pages/form-page-v3";
import formpagev4 from "./../vaahnuxt/page-layouts/pages/form-page-v4";
import crmpage from "./../vaahnuxt/page-layouts/pages/crm-page";
import pointofsalepage from "./../vaahnuxt/page-layouts/pages/point-of-sale-page";
import applistviewsmall from "./../vaahnuxt/page-layouts/pages/app-list-view-small";
import postpage from "./../vaahnuxt/page-layouts/pages/post-page";
import postdetailsv1 from "./../vaahnuxt/page-layouts/pages/post-details-v1";
import postdetailsv2 from "./../vaahnuxt/page-layouts/pages/post-details-v2";


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
        },
        {
            path: 'layout-v1',
            name: 'pagelayouts.layoutv1',
            component: layoutv1,
            props: true,
        },
        {
            path: 'login-form',
            name: 'pagelayouts.loginform',
            component: loginform,
            props: true,
        },
        {
            path: 'form-page-v1',
            name: 'pagelayouts.formpagev1',
            component: formpagev1,
            props: true,
        },
        {
            path: 'form-page-v2',
            name: 'pagelayouts.formpagev2',
            component: formpagev2,
            props: true,
        },
        {
            path: 'form-page-v3',
            name: 'pagelayouts.formpagev3',
            component: formpagev3,
            props: true,
        },
        {
            path: 'form-page-v4',
            name: 'pagelayouts.formpagev4',
            component: formpagev4,
            props: true,
        },
        {
            path: 'crm-page',
            name: 'pagelayouts.crmpage',
            component: crmpage,
            props: true,
        },
        {
            path: 'point-of-sale-page',
            name: 'pagelayouts.pointofsalepage',
            component: pointofsalepage,
            props: true,
        },
        {
            path: 'app-list-view-small',
            name: 'pagelayouts.applistviewsmall',
            component: applistviewsmall,
            props: true,
        },
        {
            path: 'post-page',
            name: 'pagelayouts.postpage',
            component: postpage,
            props: true,
        },
        {
            path: 'post-details-v1',
            name: 'pagelayouts.postdetailsv1',
            component: postdetailsv1,
            props: true,
        },
        {
            path: 'post-details-v2',
            name: 'pagelayouts.postdetailsv2',
            component: postdetailsv2,
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
import cheatsheet from "./../vaahnuxt/blocks/pages/cheatsheet";



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
        },
        {
            path: 'cheatsheet',
            name: 'blocks.cheatsheet',
            component: cheatsheet,
            props: true,
        }
    ]
};

routes.push(routes_list);

export default routes;
