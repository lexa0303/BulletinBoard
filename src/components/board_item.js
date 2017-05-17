/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";

Vue.component("board-item", {
    props: ["item", "index"],
    template: `
        <div class="list-group news-list__item" :class="{ 'hidden': item.hidden }">
            <button type="button" class="close" @click="$emit('delete-item');">×</button>
            <a :href="item.link" class="list-group-item">
                <h4 class="list-group-item-heading">{{ item.title }}</h4>
                <p class="list-group-item-text">{{ item.body }}</p>
            </a>
        </div>
    `
});