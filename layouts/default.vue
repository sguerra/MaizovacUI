<template>
    <div>
        <vs-navbar center-collapsed not-line color="primary" text-white shadow square>
            <template #left>
                <div class="logo">
                    <i class='bx bx-calculator app-icon'></i>
                    MaizoVAC
                </div>
            </template>
            <vs-navbar-item :active="false" v-if="loggedIn()">
                <NuxtLink tag="li" to="/profile">My Profile</NuxtLink>
            </vs-navbar-item>
            <vs-navbar-item :active="false" v-if="loggedIn()">
                <NuxtLink tag="li" to="/services-playground">Playground</NuxtLink>
            </vs-navbar-item>
            <vs-navbar-item :active="false" v-if="isAdmin()">
                <NuxtLink tag="li" to="/services">Services</NuxtLink>
            </vs-navbar-item>
            <vs-navbar-item :active="false" v-if="isAdmin()">
                <NuxtLink tag="li" to="/records">Records</NuxtLink>
            </vs-navbar-item>
            <vs-navbar-item :active="false" v-if="isAdmin()">
                <NuxtLink tag="li" to="/user-balances">User Balances</NuxtLink>
            </vs-navbar-item>
            <vs-navbar-item :active="false" v-if="isAdmin()">
                <NuxtLink tag="li" to="/users">Users</NuxtLink>
            </vs-navbar-item>
            <template #right v-if="loggedIn()">
                <vs-avatar size="30" color="rgb(234,154,62)" class="avatar">
                    <template #text>
                    {{$auth.user.profileInfo.User.username}}
                    </template>
                </vs-avatar>
                {{$auth.user.profileInfo.User.username}}
                <vs-button @click="$auth.logout()">Logout</vs-button>
            </template>
        </vs-navbar>
        <vs-row class="main-container" justify="center">
            <vs-col w="9">
                <Nuxt />
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
export default {
    methods: {
        loggedIn(){
            return this.$auth.loggedIn;
        },
        isAdmin(){
            // TODO: implement role check
            return this.$auth.loggedIn && this.$auth.user.isAdmin;
        }
    }   
}
</script>

<style>
  :root {
    --vs-primary: 67, 147, 74;
  }

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
    margin-top: 80px;
}

.vs-navbar {
    padding: .5rem 10px;
}

.logo {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
}

.logo i {
    margin-right: .5rem;
    font-size: 1.5rem;
}


.avatar {
    margin-right: .5rem;
}
</style>
