<template>
    <div class="card">
            <h3>{{title}}</h3>
            <vs-row justify="space-between" align="center">
                <slot></slot>
                <vs-col w="2" offset="1">
                    <vs-button block @click="onTryClick" icon relief>Try for $15 USD</vs-button>
                </vs-col>
            </vs-row>            
        </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        title: {
            type: String
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

</style>
