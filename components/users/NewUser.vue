<template>
    <div>
        <vs-dialog prevent-close v-model="active" v-on:close="onClose">
            <template #header>
                <h3>New user</h3>
            </template>

            <div>
                <vs-input block class="form-field" v-model="user.name" label-placeholder="Name" />
                <vs-input block class="form-field" v-model="user.username" label-placeholder="Username" />
                <vs-input block class="form-field" v-model="user.role" label-placeholder="Role" />
                <vs-input block class="form-field" v-model="user.status" label-placeholder="Status" />
            </div>

            <template #footer>
                <vs-button block @click="onSave"> Save </vs-button>
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
                    id: null,
                    name: '',
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
        }
    },

    methods: {
        onSave() {
            this.active = false
            this.$emit('saved', this.user)
        },
    },

    watch: {
        open: function (val) {
            this.active = val
        },
    },
})
</script>
<style lang="stylus"></style>
