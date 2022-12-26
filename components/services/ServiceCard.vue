<template>
    <div v-bind:class="cardClasses">
        <h3>
            {{ title }}
            <span class="beta-badge" v-if="service.status === 'beta'">BETA</span>
            <span class="inactive-badge" v-if="service.status === 'inactive'">INACTIVE</span>
        </h3>
        <vs-row justify="space-between" align="center">
            <slot></slot>
            <vs-col w="2" offset="1">
                <vs-button
                    block
                    icon
                    color="#FFCC1D"
                    class="dark-text"
                    disabled
                    v-if="service.status === 'inactive'"
                    >Try for <strong>${{ service.cost }}</strong> USD</vs-button
                >
                <vs-button
                    block
                    @click="onTryClick"
                    icon
                    color="#FFCC1D"
                    class="dark-text"
                    :loading="loading"
                    v-else
                    >Try for <strong>${{ service.cost }}</strong> USD</vs-button
                >
            </vs-col>
        </vs-row>
        <div v-if="error" class="error">
            <strong>{{ error }}</strong>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Service from '~/models/Service'

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true,
        },
        service: {
            type: Service,
            required: true,
        },
        error: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        cardClasses(): any {
            return {
                card: true,
                active: this.service.status === 'active',
                inactive: this.service.status === 'inactive',
                beta: this.service.status === 'beta',
            }
        },
    },

    methods: {
        onTryClick() {
            this.$emit('executed')
        },
    },
})
</script>

<style>
.card {
    border: 2px solid #0B4619;
    padding: 1.5rem;
    border-radius: 30px;
    margin-bottom: 1rem;
    background-color: #FFCC1D44;
}

.card h3 {
    margin-bottom: 1rem;
    color: #333;
    display: flex;
}

.fake-icon {
    font-size: 22px;
    width: 18px;
    height: 18px;
}

.dark-text {
    color: black;
    border: 2px solid black;
}

strong {
    margin: 0 0.5rem;
}

.error {
    color: red;
    margin-top: 0.5rem;
    font-size: 1rem;
}

.beta-badge {
    background-color: red;
    color: white;
    padding: 2px 4px;
    font-size: 0.75rem;
    border-radius: 4px;
    margin-left: 0.5rem;
}

.inactive-badge {
    background-color: #666;
    color: white;
    padding: 2px 4px;
    font-size: 0.75rem;
    border-radius: 4px;
    margin-left: 0.5rem;
}
</style>
