<template>
    <div>
        <vs-dialog prevent-close v-model="active" v-on:close="onClose">
            <template #header>
                <h3>{{ isNew() ? 'New User' : 'User Info'}}</h3>
            </template>
            <vs-row justify="space-between" class="modal-actions" align="center" v-if="!isNew()">
                <vs-col w="3">
                    <vs-switch v-model="editable"> Edit </vs-switch>
                </vs-col>
                <vs-col w="3">
                    <vs-row justify="flex-end">
                        <vs-button danger @click="onDelete" v-if="editable"> Delete </vs-button>
                    </vs-row>
                </vs-col>
            </vs-row>
            <div>
                <vs-input
                    block
                    class="form-field"
                    v-model="user.username"
                    label-placeholder="Username"
                    :disabled="!editable||required">
                    <template v-if="isValidUsername()" #message-success>
                        Valid username
                    </template>
                    <template v-if="!isValidUsername() && user.username !== ''" #message-danger>
                        Invalid username
                    </template>
                </vs-input>
                <vs-select block  
                    class="form-field" placeholder="Role" v-model="user.role" :disabled="!editable" >
                    <vs-option label="User" value="user">
                        User
                    </vs-option>
                    <vs-option label="Admin" value="admin">
                        Admin
                    </vs-option>
                </vs-select>
                <vs-select block  
                    class="form-field" placeholder="Role" v-model="user.status" :disabled="!editable" >
                    <vs-option label="Active" value="active">
                        Active
                    </vs-option>
                    <vs-option label="Trial" value="trial">
                        Trial
                    </vs-option>
                    <vs-option label="Inactive" value="inactive">
                        Inactive
                    </vs-option>
                </vs-select>
            </div>

            <template #footer>
                <vs-button block @click="onSave" :disabled="!editable||!isValidUsername()"> Save </vs-button>
            </template>
        </vs-dialog>
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { IUser } from '@/types'

export default Vue.extend({
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        onClose: {
            type: Function,
        },
        user: {
            type: Object as PropType<IUser>,
            default: (): IUser => {
                return {
                    uuid: null,
                    username: '',
                    status: '',
                    role: '',
                }
            },
        },
    },

    data() {
        return {
            active: this.open,
            editable: false,
            required: false
        }
    },

    methods: {
        onSave() {
            this.active = false
            this.$emit('saved', this.user)
        },

        onDelete() {
            this.active = false
            this.$emit('deleted', this.user)
        },

        //TODO: move to a computed property
        isNew() {
            return !this.user.uuid
        },

        isValidUsername(){
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user.username)
        },
    },

    watch: {
        open: function (val) {
            this.active = val
            this.editable = this.isNew()
            this.required = !this.isNew()
        },
    },

})
</script>
