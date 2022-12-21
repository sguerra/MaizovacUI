<template>
    <ServiceCard
        title="Random String"
        @executed="executeOperation"
        :loading="loading"
        :error="error"
        :service="service"
    >
        <vs-col w="1">
            <vs-input block label-placeholder="length" type="number" v-model="length" />
        </vs-col>
        <vs-col w="2">
            <vs-checkbox v-model="includeDigits">Digits (0-9)</vs-checkbox>
        </vs-col>
        <vs-col w="2">
            <vs-checkbox v-model="includeUppercase">Uppercase (A-Z)</vs-checkbox>
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat icon><i class="fake-icon">=</i></vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2">
            <vs-input block readonly state="primary" placeholder="result" v-model="result" />
        </vs-col>
    </ServiceCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { randomStringServiceApi } from '~/api'
import RandomStringOperation from '~/models/RandomStringOperation'
import Service from '~/models/Service'
import ServiceCard from './ServiceCard.vue'

export default Vue.extend({
    components: { ServiceCard },

    props: {
        service: {
            type: Service,
            required: true,
        },
    },

    data() {
        return {
            length: 5,
            includeDigits: false,
            includeUppercase: false,
            result: '',
            error: '',
            loading: false,
        }
    },

    methods: {
        async executeOperation() {
            try {
                this.loading = true
                const operation = new RandomStringOperation(
                    Number(this.length),
                    this.includeDigits,
                    this.includeUppercase
                )
                this.result = await randomStringServiceApi.execute(operation)
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        },
    },
})
</script>
