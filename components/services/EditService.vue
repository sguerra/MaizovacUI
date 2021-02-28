<template>
    <div>
        <vs-dialog prevent-close v-model="active" v-on:close="onClose">
            <template #header>
                <h3>Edit Service</h3>
            </template>
            <vs-row justify="space-between" class="modal-actions" align="center">
                <vs-col w="3">
                    <vs-switch v-model="editable"> Edit </vs-switch>
                </vs-col>
            </vs-row>
            <div>
                <vs-input
                    block
                    class="form-field"
                    v-model="service.cost"
                    label-placeholder="Cost"
                    :disabled="!editable"
                />
                <vs-select label-placeholder="Status" v-model="service.status" class="form-field" :disabled="!editable" block>
                    <vs-option label="Active" value="active">
                        Active
                    </vs-option>
                    <vs-option label="Beta" value="beta">
                        Beta
                    </vs-option>
                    <vs-option label="Inactive" value="inactive">
                        Inactive
                    </vs-option>
                </vs-select>
            </div>

            <template #footer>
                <vs-button block @click="onSave" :disabled="!editable"> Save </vs-button>
            </template>
        </vs-dialog>
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import Service from '~/models/Service'

export default Vue.extend({
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        onClose: {
            type: Function,
        },
        service: {
            type: Object as PropType<Service>,
            default: (): Service => {
                return {
                    uuid: '',
                    cost: 0,
                    type: 'addition',
                    status: 'active',
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
            this.$emit('saved', this.service)
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
