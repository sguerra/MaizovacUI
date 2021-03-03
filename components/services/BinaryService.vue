<template>
    <ServiceCard :title="title" @executed="executeOperation" :loading="loading" :error="error" :service="service">
        <vs-col w="2">
            <vs-input block label-placeholder="number" type="number" v-model="firstOperand" />
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat icon>
                    <slot></slot>
                </vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2">
            <vs-input block label-placeholder="number" type="number" v-model="secondOperand" />
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat readonly icon><i class="fake-icon">=</i></vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2">
            <vs-input block readonly state="primary" placeholder="result" type="number" v-model="result" />
        </vs-col>
    </ServiceCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { binaryServiceApi } from '~/api'
import BinaryOperation, { BinaryOperationTypes } from '~/models/BinaryOperation'
import Service from '~/models/Service'
import ServiceCard from './ServiceCard.vue'
import {} from './ServiceCard.vue'

export default Vue.extend({
    components: { ServiceCard },

    props: {
        title: {
            type: String,
        },
        service: {
            type: Service,
            required: true
        },
    },

    data() {
        return {
            firstOperand: '',
            secondOperand: '',
            result: '',
            loading: false,
            error: ''
        }
    },

    methods: {
        async executeOperation() {
            
            const operation = new BinaryOperation(
                Number(this.firstOperand),
                Number(this.secondOperand),
                this.service.type as BinaryOperationTypes
            )

            try {
                this.loading = true;
                const result = await binaryServiceApi.execute(operation)
                this.result = result.toString()
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false;
            }
        },
    },
})
</script>
