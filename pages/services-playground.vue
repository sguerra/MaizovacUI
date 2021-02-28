<template>
    <div>
        <h2>Services Playground</h2>
        <BinaryService title="Adition" operation="addition">
            <i class="bx bx-plus"></i>
        </BinaryService>
        <BinaryService title="Substraction" operation="substraction">
            <i class="bx bx-minus"></i>
        </BinaryService>
        <BinaryService title="Muliplication" operation="multiplication">
            <i class="bx bx-x"></i>
        </BinaryService>
        <BinaryService title="Division" operation="division">
            <i class="fake-icon">/</i>
        </BinaryService>
        <SquareRootService/>
        <RandomStringService/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import BinaryService from '../components/services/BinaryService.vue'
import SquareRootService from '../components/services/SquareRootService.vue'
import RandomStringService from '../components/services/RandomStringService.vue'

export default Vue.extend({
    components: { BinaryService, ServiceCard, SquareRootService, RandomStringService },   
    
})
</script>