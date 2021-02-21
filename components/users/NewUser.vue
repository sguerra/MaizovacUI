<template>
    <div>
        <vs-button @click="active = !active">New User</vs-button>
        <vs-dialog v-model="active">
            <template #header>
                <h3>New user</h3>
            </template>

            <div>
                <vs-input block class="form-field" v-model="user.names" label-placeholder="Name" />
                <vs-input block class="form-field" v-model="user.username" label-placeholder="Username" />
                <vs-input block class="form-field" v-model="user.role" label-placeholder="Role" />
                <vs-input block class="form-field" v-model="user.status" label-placeholder="Status" />
            </div>

            <template #footer>
                <vs-button block @click="onSave"> Sign In </vs-button>
            </template>
        </vs-dialog>
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { IUser } from '@/types'

export default Vue.extend({
    props: {
        user: {
            type: Object as PropType<IUser>,
            default: (): IUser => {
                return {
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
            active: false,
        }
    },

    methods: {
        onSave() {
            this.active = false;
            this.$emit('saved')
        },
    },
})
</script>
<style lang="stylus"></style>
