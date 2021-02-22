<template>
    <div>
        <vs-row justify="center">
            <vs-col w="8">
                <vs-row justify="space-between" align="center">
                    <h2>Users</h2>
                    <vs-button @click="newUser" icon><i class="bx bx-plus"></i>New User</vs-button>
                </vs-row>
                <vs-table class="table">
                    <template #header>
                        <vs-input block v-model="search" border placeholder="Search" />
                    </template>
                    <template #thead>
                        <vs-tr>
                            <vs-th sort @click="users = $vs.sortData($event, users, 'id')"> Id </vs-th>
                            <vs-th sort @click="users = $vs.sortData($event, users, 'name')"> Name </vs-th>
                            <vs-th sort @click="users = $vs.sortData($event, users, 'username')"> Username </vs-th>
                            <vs-th sort @click="users = $vs.sortData($event, users, 'role')"> Role </vs-th>
                            <vs-th sort @click="users = $vs.sortData($event, users, 'status')"> Status </vs-th>
                            <vs-th> </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="user.id" v-for="user in $vs.getPage(applyFilters(), page, max)" :data="user">
                            <vs-td>
                                {{ user.id }}
                            </vs-td>
                            <vs-td>
                                {{ user.name }}
                            </vs-td>
                            <vs-td>
                                {{ user.username }}
                            </vs-td>
                            <vs-td>
                                {{ user.role }}
                            </vs-td>
                            <vs-td>
                                {{ user.status }}
                            </vs-td>
                            <vs-td>
                                <vs-row justify="space-between" align="center">
                                    <vs-button border @click="editUser(user)"> Edit </vs-button>
                                    <vs-button border danger @click="deleteUser(user)"> Remove </vs-button>
                                </vs-row>
                            </vs-td>
                        </vs-tr>
                    </template>
                    <template #footer>
                        <vs-pagination v-model="page" :length="$vs.getLength(applyFilters(), max)" />
                    </template>
                </vs-table>
                <NewUser @saved="handleUserSaved" :user="currentUser" :open="openEditModal" :onClose="onClose" />
            </vs-col>
        </vs-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '@/types'
import { usersApi } from '../api'
import NewUser from '../components/users/NewUser.vue'

export default Vue.extend({
    components: { NewUser },
    data() {
        return {
            page: 1,
            max: 3,
            search: '',
            users: [] as IUser[],
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

        newUser() {
            this.toggleEditModal(true)
            this.currentUser = undefined
        },

        editUser(user: IUser) {
            this.toggleEditModal(true)
            this.currentUser = {
                ...user,
            }
        },

        async deleteUser(user: IUser) {
            await usersApi.delete(user)
            this.fetchUsers()
        },

        onClose() {
            this.toggleEditModal(false)
        },

        toggleEditModal(open: boolean) {
            this.openEditModal = open
        },

        applyFilters() {
            return this.users.filter((user) => user.username.includes(this.search))
        },
    },
})
</script>

<style></style>
