<template>
    <div>
        <vs-row justify="center">
            <vs-col w="8">
                <vs-row justify="space-between" align="center">
                    <h2>Users</h2>
                    <new-user @saved="handleUserSaved" />
                </vs-row>
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th> Id </vs-th>
                            <vs-th> Username </vs-th>
                            <vs-th> Name </vs-th>
                            <vs-th> Role </vs-th>
                            <vs-th> Status </vs-th>
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
                        </vs-tr>
                    </template>
                    <template #footer>
                        <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
                    </template>
                </vs-table>
                <vs-button v-on:click="fetchUsers()">Fetch users</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
import NewUser from '../components/users/NewUser'

export default {
    components: { NewUser },
    data: () => ({
        page: 1,
        max: 3,
        users: [],
    }),

    methods: {
        getCurrentPage() {
            return $vs.getPage(this.users, this.page, this.max)
        },

        fetchUsers() {
            const users = [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 4,
                    name: 'Patricia Lebsack',
                    username: 'Karianne',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 5,
                    name: 'Chelsey Dietrich',
                    username: 'Kamren',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 6,
                    name: 'Mrs. Dennis Schulist',
                    username: 'Leopoldo_Corkery',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 7,
                    name: 'Kurtis Weissnat',
                    username: 'Elwyn.Skiles',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 8,
                    name: 'Nicholas Runolfsdottir V',
                    username: 'Maxime_Nienow',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 9,
                    name: 'Glenna Reichert',
                    username: 'Delphine',
                    role: 'admin',
                    status: 'active',
                },
                {
                    id: 10,
                    name: 'Clementina DuBuque',
                    username: 'Moriah.Stanton',
                    role: 'admin',
                    status: 'active',
                },
            ]

            this.users = users
        },

        handleUserSaved() {
            console.log('Child has been created.')
        },
    },
}
</script>
