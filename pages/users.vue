<template>
    <div>
        <vs-row justify="center">
            <vs-col w="8">
                <vs-row justify="space-between" align="center">
                    <h2>Users</h2>
                    <vs-button @click="newUser" icon><i class="bx bx-plus"></i>New User</vs-button>
                </vs-row>
                <vs-table class="table">
                    <template #thead>
                        <vs-tr>
                            <vs-th> Id </vs-th>
                            <vs-th> Username </vs-th>
                            <vs-th> Name </vs-th>
                            <vs-th> Role </vs-th>
                            <vs-th> Status </vs-th>
                            <vs-th> </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="user.id" v-for="user in $vs.getPage(users, page, max)" :data="user">
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
                        <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
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
    },
})
</script>

<style></style>
