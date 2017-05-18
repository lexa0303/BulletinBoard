/**
 * Created by alex on 17.05.17.
 */

let Vue = require('vue');
let VueMaterial = require('vue-material');
Vue.use(VueMaterial);

import board_list from 'components/board_list';
import board_menu from 'components/board_menu';
import board_add_item from 'components/board_add_item';

let app = new Vue({
    el: "#root",
    data: {
        items:[
            {
                title: "Title1",
                body: "Body1",
                link: "#",
                hidden: false
            },
            {
                title: "Title2",
                body: "Body2",
                link: "#",
                hidden: false
            },
        ],
        menu:[
            {
                href: "#",
                text: "Link1",
                isActive: true
            },
            {
                href: "#",
                text: "Link2",
                isActive: false
            }
        ]
    },
    methods: {
    }
});