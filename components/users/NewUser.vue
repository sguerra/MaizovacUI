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
                    :disabled="!editable"
                />
                <vs-input block class="form-field" v-model="user.role" label-placeholder="Role" :disabled="!editable" />
                <vs-input
                    block
                    class="form-field"
                    v-model="user.status"
                    label-placeholder="Status"
                    :disabled="!editable"
                />
            </div>

            <template #footer>
                <vs-button block @click="onSave" :disabled="!editable"> Save </vs-button>
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
    },

    watch: {
        open: function (val) {
            this.active = val
            this.editable = this.isNew()
        },
    },
})
</script>
