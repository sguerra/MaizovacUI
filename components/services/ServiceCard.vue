<template>
    <div class="card">
            <h3>{{title}}</h3>
            <vs-row justify="space-between" align="center">
                <slot></slot>
                <vs-col w="2" offset="1"> 
                    <vs-button block @click="onTryClick" icon relief color="#ffeb00" class="dark-text" :loading="loading">Try for <strong>${{cost}}</strong> USD</vs-button>
                </vs-col>
            </vs-row>
            <div v-if="error" class="error">
                {{error}}
            </div>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        error: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        onTryClick(){
            this.$emit('executed');
        }
    }
    
})
</script>

<style>
.card {
    border: 1px solid #ccc;
    padding: 1.5rem;
    border-radius: 30px;
    margin-bottom: 1rem;
}

.card h3 {
    margin-bottom: 1rem;
    color: #333;
}

.fake-icon {
    font-size: 22px;
    width: 18px;
    height: 18px;
}


.dark-text {
    color: black;
}

strong {
    margin: 0 .5rem;
}

.error {
    color: rgb(255, 71, 87);
    margin: .5rem 0;
    font-size: 12px;
}
</style>
