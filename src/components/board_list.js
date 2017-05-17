/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";
import board_item from 'components/board_item';

Vue.component("board-list", {
    props: ["items"],
    template: `
        <div class="news-list__wrap">
            <board-item v-for="(item, index) in items" :item="item" :index="index" @delete-item="deleteItem(index)"></board-item>
        </div>
    `,
    methods: {
        deleteItem(index) {
            this.rows.splice(index, 1);
        }
    }
});