<template>
    <vs-row class="login" justify="center" align="center">
        <vs-col justify="center" w="3">
            <form class="login__form">
                <vs-input block label-placeholder="User" class="form-field" />
                <vs-input block label-placeholder="Password" class="form-field" />
                <vs-button block>Login</vs-button>
            </form>
        </vs-col>
    </vs-row>
</template>

<style>
.login {
    width: 100vw;
    height: 100vh;
}
</style>
