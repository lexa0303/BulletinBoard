/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";

Vue.component("board-menu-search", {
    props: ["items"],
    template: `
        <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <input v-model="searchValue" type="text" class="form-control" placeholder="Search">
            </div>
            <button @click="search" type="submit" class="btn btn-default">Submit</button>
        </form>
    `,
    data(){
        "use strict";
        return {
            searchValue: ""
        }
    },
    methods:{
        search(){
            "use strict";
            this.items.map((item) => {
                 item.hidden = (Boolean)(item.title.indexOf(this.searchValue) === -1);
            });
        }
    }
});