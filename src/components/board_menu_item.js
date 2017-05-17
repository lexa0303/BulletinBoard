/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";

Vue.component("board-menu-item", {
    props: ["item", "selectMenu"],
    template: `
        <li :class="{ 'active': item.isActive }">
            <a :href="item.href" @click="changeSelectedMenu(item)">{{ item.text }}</a>
        </li>
    `,
    methods:{
        changeSelectedMenu(item){
            "use strict";
            this.selectMenu(item);
        }
    }
});