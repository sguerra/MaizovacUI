<template>
    <div>
        <vs-navbar center-collapsed not-line color="primary" text-white shadow square>
            <template #left>
                <img src="/logo2.png" alt="" />
            </template>
            <vs-navbar-item :active="false"> <NuxtLink tag="li" to="/users">Users</NuxtLink> </vs-navbar-item>
            <vs-navbar-item :active="false"> <NuxtLink tag="li" to="/services-playground">Playground</NuxtLink> </vs-navbar-item>
            <vs-navbar-item :active="false"> <NuxtLink tag="li" to="/services">Services</NuxtLink> </vs-navbar-item>
            <vs-navbar-item :active="false"> <NuxtLink tag="li" to="/records">Records</NuxtLink> </vs-navbar-item>
            <template #right>
                <vs-button>Logout</vs-button>
            </template>
        </vs-navbar>
        <vs-row class="main-container" justify="center">
            <vs-col w="8">
                <Nuxt />
            </vs-col>
        </vs-row>
    </div>
</template>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

h2 {
    margin: 1rem 0;
}

/* Tables */
.vs-table__tr {
    cursor: pointer;
}

/* Form styles */
.form-field {
    margin-bottom: 1.5rem;
}

.modal-actions {
    margin-bottom: 2rem;
}

.main-container {
    margin-top: 50px;
}
</style>
