/**
 * Created by alex on 17.05.17.
 */

import Vue from "vue";

Vue.component("board-add-item", {
    props: ["items"],
    template: `
        <div>
            <div :class="{ 'show': isActive, 'hidden': !isActive}">
                <div class="modal" :class="{ 'show': isActive}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" @click="hideModal">&times;</button>
                                <h4 class="modal-title">Add new item</h4>
                            </div>
                            <div class="modal-body form-horizontal">
                                <fieldset>
                                    <div class="form-group">
                                        <label for="title" class="control-label">Title</label>
                                        <input id="title" type="text" class="form-control" v-model="title">
                                    </div>
                                    <div class="form-group">
                                        <label for="body" class="control-label">Text</label>
                                        <input id="text" type="text" class="form-control" v-model="body">
                                    </div>
                                </fieldset>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" @click="hideModal">Close</button>
                                <button type="button" class="btn btn-primary" @click="addItem">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-backdrop" @click="hideModal"></div>
            </div>
            <div class="align-right">
                <a href="#" class="btn btn-success" @click="openModal">Add</a>
            </div>
        </div>
    `,
    data(){
        "use strict";
        return {
            isActive: false,
            title: "",
            body: ""
        }
    },
    methods:{
        addItem(){
            "use strict";
            let newItem = {
                body: this.body,
                hidden: false,
                link: "#",
                title: this.title
            };
            this.items.push(newItem);

            this.body = "";
            this.title = "";
            this.isActive = false;
        },
        openModal(){
            "use strict";
            this.isActive = true;
            this.body = "";
            this.title = "";
        },
        hideModal(){
            "use strict";
            this.isActive = false;
            this.body = "";
            this.title = "";
        }
    }
});