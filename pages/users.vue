<template>
    <div>
        <vs-row justify="space-between" align="center">
            <h2>Users</h2>
            <vs-button @click="newUser" icon><i class="bx bx-plus"></i>New User</vs-button>
        </vs-row>
        <GenericTable :columns="columns" :dataset="users" keywordFilterOn="username" @row-clicked="viewUser"/>
        <NewUser
            @saved="handleUserSaved"
            :user="currentUser"
            :open="openEditModal"
            :onClose="onClose"
            @deleted="handleUserDeleted"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '@/types'
import { usersApi } from '../api'
import NewUser from '../components/users/NewUser.vue'
import { ColumnConfig } from '~/components/GenericTable.vue'

const TABLE_COLUMNS: ColumnConfig<IUser>[] = [
    {
        key: 'uuid',
        header: 'Id',
    },
    {
        key: 'username',
        header: 'Username',
    },
    {
        key: 'role',
        header: 'Role',
    },
    {
        key: 'status',
        header: 'Status',
    },
]

export default Vue.extend({
    components: { NewUser },
    data() {
        return {
            page: 1,
            max: 3,
            search: '',
            users: [] as IUser[],
            columns: TABLE_COLUMNS,
            currentUser: undefined as IUser | undefined,
            openEditModal: false,
        }
    },

    fetch() {
        this.fetchUsers()
    },

    methods: {
        async fetchUsers() {
            this.users = await usersApi.find()            
        },

        async handleUserSaved(user: IUser) {
            this.toggleEditModal(false)
            await usersApi.save(user)
            this.fetchUsers()
        },

        async handleUserDeleted(user: IUser) {
            this.toggleEditModal(false)
            await usersApi.destroy(user)
            this.fetchUsers()
        },

        newUser() {
            this.toggleEditModal(true)
            this.currentUser = undefined
        },

        viewUser(user: IUser) {
            this.toggleEditModal(true)
            this.currentUser = {
                ...user,
            }
        },

        onClose() {
            this.toggleEditModal(false)
        },

        toggleEditModal(open: boolean) {
            this.openEditModal = open
        },
    },
})
</script>

<style></style>
