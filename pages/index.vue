<template>
    <vs-row v-if="!$auth.loggedIn" justify="center">
        <vs-col w="9" align="center" class="login">
            <div class="intro">
                <p>In honor of the most basic calculator ever made:</p>
                <div class="image-wrapper">
                    <img src="~/assets/maizoro_calc.jpeg" />
                </div>
            </div>
            <vs-button @click="logIn()" class="login-button">Log In</vs-button>
        </vs-col>
    </vs-row>
    <vs-row v-else class="welcome" justify="center" align="center"> Welcome! </vs-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    auth: false,
    methods: {
        logIn: function () {
            this.$auth.login()
        },
    },
})
</script>

<style scoped>
.login-button {
    font-size: 1.5rem;
}

.intro img {
    width: inherit;
    height: auto;
}

.intro p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #116530;
    font-style: italic;
    font-weight:bold;
    width: auto;
}

.image-wrapper {
    width: 400px;
    aspect-ratio:1;
    border: 2px solid #116530;
    box-shadow: 0 0 3px 1px #BBB;
    border-radius: 0.75rem;
    overflow: hidden;
    margin-bottom: 2rem;
}

.welcome {
    font-size: 3rem;
    color: #666;
}
</style>
