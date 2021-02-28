<template>
    <ServiceCard title="Square Root" @executed="executeOperation" :loading="loading" :error="error">
        <vs-col w="2">
            <vs-input block label-placeholder="number" type="number" v-model="operand"/>
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat icon><i class="fake-icon">=</i></vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2">
            <vs-input block readonly state="primary" placeholder="result" type="number" v-model="result"/>
        </vs-col>
    </ServiceCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { squareRootService } from '~/api'
import ServiceCard from './ServiceCard.vue'

export default Vue.extend({
    components: { ServiceCard },

    data() {
        return {
            operand: '',
            result: '',
            loading: false,
            error: ''
        }
    },

    methods: {
        async executeOperation() {            
            try {
                this.loading = true;                
                const result = await squareRootService.execute(Number(this.operand))
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
