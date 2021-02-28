<template>
    <ServiceCard :title="title">
        <vs-col w="2">
            <vs-input block label-placeholder="number" type="number" v-model="firstOperand"/>
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat icon>
                    <slot></slot>
                </vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2" >
            <vs-input block label-placeholder="number" type="number" v-model="secondOperand"/>
        </vs-col>
        <vs-col w="1">
            <vs-row justify="center">
                <vs-button flat icon><i class="fake-icon">=</i></vs-button>
            </vs-row>
        </vs-col>
        <vs-col w="2">
            <vs-input block readonly placeholder="result" type="number"  v-model="result"/>
        </vs-col>
    </ServiceCard>
</template>

<script lang="ts">
import Vue from 'vue'
import ServiceCard from './ServiceCard.vue'

export default Vue.extend({
    components: { ServiceCard },
    
    props: {
        title: {
            type: String
        },
        operator: {
            type: String
        },
    },

    data(){
        return {
            firstOperand: '',
            secondOperand: '',
            result: ''
        }
    }
})
</script>