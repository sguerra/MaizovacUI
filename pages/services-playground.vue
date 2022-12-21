<template>
    <div v-if="services.length">
        <h2>Services Playground</h2>
        <BinaryService title="Addition" :service="getServiceByType('addition')">
            <i class="bx bx-plus"></i>
        </BinaryService>
        <BinaryService title="Subtraction" :service="getServiceByType('subtraction')">
            <i class="bx bx-minus"></i>
        </BinaryService>
        <BinaryService title="Muliplication" :service="getServiceByType('multiplication')">
            <i class="bx bx-x"></i>
        </BinaryService>
        <BinaryService title="Division" :service="getServiceByType('division')">
            <i class="fake-icon">/</i>
        </BinaryService>
        <SquareRootService :service="getServiceByType('square_root')" />
        <RandomStringService :service="getServiceByType('random_string')" />
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
        this.services = await servicesApi.fetchAll()
    },

    methods: {
        getServiceByType(serviceType: ServiceTypes) {
            const service = this.services.find((s) => s.type === serviceType)
            return service
        },
    },
})
</script>
