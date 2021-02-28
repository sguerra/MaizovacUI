<template>
    <div>
        <h2>Services Playground</h2>
        <BinaryService title="Adition">
            <i class="bx bx-plus"></i>
        </BinaryService>
        <BinaryService title="Substraction">
            <i class="bx bx-minus"></i>
        </BinaryService>
        <BinaryService title="Muliplication">
            <i class="bx bx-x"></i>
        </BinaryService>
        <BinaryService title="Division">
            <i class="fake-icon">/</i>
        </BinaryService>
        <ServiceCard title="Square Root">
            <vs-col w="2">
                <vs-input block label-placeholder="number" type="number"/>
            </vs-col>
            <vs-col w="1">
                <vs-row justify="center">
                    <vs-button flat icon><i class="fake-icon">=</i></vs-button>
                </vs-row>
            </vs-col>
            <vs-col w="2">
                <vs-input block readonly placeholder="result" type="number"/>
            </vs-col>
        </ServiceCard>
        <ServiceCard title="Random string">
            <vs-col w="1">
                <vs-input block label-placeholder="length" type="number"/>
            </vs-col>
            <vs-col w="2">
                <vs-checkbox>Digits (0-9)</vs-checkbox>
            </vs-col>
            <vs-col w="2">
                <vs-checkbox>Uppercase (A-Z)</vs-checkbox>
            </vs-col>
            <vs-col w="1">
                <vs-row justify="center">
                    <vs-button flat icon><i class="fake-icon">=</i></vs-button>
                </vs-row>
            </vs-col>
            <vs-col w="2">
                <vs-input block readonly placeholder="result" type="number"/>
            </vs-col>
        </ServiceCard>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import BinaryService from '../components/services/BinaryService.vue'

export default Vue.extend({
    components: { BinaryService, ServiceCard },   
    
})
</script>