<template>
    <div v-if="services.length">
        <h2>Services Playground</h2>
        <BinaryService title="Adition" operation="addition" :cost="getServiceByType('addition').cost">
            <i class="bx bx-plus"></i>
        </BinaryService>
        <BinaryService title="Substraction" operation="substraction" :cost="getServiceByType('substraction').cost">
            <i class="bx bx-minus"></i>
        </BinaryService>
        <BinaryService title="Muliplication" operation="multiplication" :cost="getServiceByType('multiplication').cost">
            <i class="bx bx-x"></i>
        </BinaryService>
        <BinaryService title="Division" operation="division" :cost="getServiceByType('division').cost">
            <i class="fake-icon">/</i>
        </BinaryService>
        <SquareRootService :cost="getServiceByType('square_root').cost" />
        <RandomStringService :cost="getServiceByType('random_string').cost" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Service, { ServiceTypes } from 'models/Service'
import ServiceCard from '../components/services/ServiceCard.vue'
import BinaryService from '../components/services/BinaryService.vue'
import SquareRootService from '../components/services/SquareRootService.vue'
import RandomStringService from '../components/services/RandomStringService.vue'
import { servicesApi } from '~/api'

export default Vue.extend({
    components: { BinaryService, ServiceCard, SquareRootService, RandomStringService },
    data() {
        return {
            services: [] as Service[],
        }
    },

    async fetch() {
        this.services = await servicesApi.fetch()
    },

    methods: {
        getServiceByType(serviceType: ServiceTypes) {
            return this.services.find((s) => s.type === serviceType)
        },
    },
})
</script>
