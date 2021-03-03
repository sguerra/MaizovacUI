<template>
    <div>
        <vs-dialog prevent-close v-model="active" v-on:close="onClose">
            <template #header>
                <h3>Record Info</h3>
            </template>
            <vs-row justify="space-between" class="modal-actions" align="center">
                <vs-col w="3"> </vs-col>
                <vs-col w="3">
                    <vs-row justify="flex-end">
                        <vs-button danger @click="onDelete"> Delete </vs-button>
                    </vs-row>
                </vs-col>
            </vs-row>
            <div>
                <vs-input
                    block
                    class="form-field"
                    v-model="record.serviceType"
                    label-placeholder="Service Type"
                    :disabled="true"
                />
                <vs-input
                    block
                    class="form-field"
                    v-model="record.username"
                    label-placeholder="Username"
                    :disabled="true"
                />
                <vs-input block class="form-field" v-model="record.cost" label-placeholder="Cost" :disabled="true" />
                <vs-input
                    block
                    class="form-field"
                    v-model="record.userBalance"
                    label-placeholder="User balance"
                    :disabled="!editable"
                />
                <!-- TODO: Add service response -->
                <!-- TODO: Add date -->
            </div>

            <template #footer>
                <vs-button block @click="onSave" :disabled="!editable"> Save </vs-button>
            </template>
        </vs-dialog>
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import Record from '~/models/Record'

export default Vue.extend({
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        onClose: {
            type: Function,
        },
        record: {
            type: Object as PropType<Record>,
            default: (): Record => {
                return {
                    uuid: '',
                    username: '',
                    userBalance: 0,
                    serviceType: 'addition',
                    date: '',
                    cost: 0,
                    serviceResponse: '',
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
            this.$emit('saved', this.record)
        },

        onDelete() {
            this.active = false
            this.$emit('deleted', this.record)
        },
    },

    watch: {
        open: function (val) {
            this.active = val
            this.editable = false
        },
    },
})
</script>
