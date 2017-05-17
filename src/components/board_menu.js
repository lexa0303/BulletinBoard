/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";
import board_menu_item from 'components/board_menu_item';
import board_menu_search from 'components/board_menu_search';

Vue.component("board-menu", {
    props: ["menu", "items"],
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button @click="burgerExpanded = !burgerExpanded;" type="button" class="navbar-toggle collapsed">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Main</a>
                </div>
                <div class="collapse navbar-collapse" :class="{ 'in': burgerExpanded}" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <board-menu-item v-for="item in menu" :item="item" :selectMenu="selectMenu"></board-menu-item>
                    </ul>
                    <board-menu-search :items="items"></board-menu-search>
                </div>
            </div>
        </nav>
    `,
    data(){
        "use strict";
        return {
            burgerExpanded: false
        }
    },
    methods: {
        selectMenu(selectedItem){
            "use strict";
            this.menu.forEach( item => {
                item.isActive = (selectedItem.text === item.text)
            })
        }
    }
});