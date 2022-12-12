<template>
    <div>
        <vs-row justify="space-between" align="center">
            <h2>User Balances</h2>
        </vs-row>
        <GenericTable :columns="columns" :dataset="records" keywordFilterOn="username"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userBalancesApi } from '../api'
import GenericTable, { ColumnConfig } from '~/components/GenericTable.vue'

type UserBalanceRow = {
    username: string
    balance: number
}

const TABLE_COLUMNS: ColumnConfig<UserBalanceRow>[] = [
    {
        key: 'username',
        header: 'Username',
    },
    {
        key: 'balance',
        header: 'Balance',
    },
]

export default Vue.extend({
    components: { GenericTable },

    data() {
        return {
            records: [] as UserBalanceRow[],
            columns: TABLE_COLUMNS,
        }
    },

    fetch() {
        this.fetchUsers()
    },

    methods: {
        async fetchUsers() {
            const userBalances = await userBalancesApi.findAll()
            this.records = userBalances.map((record) => {
                return {
                    username: record.User.username,
                    balance: record.balance,
                }
            })
        },
    },
})
</script>

<style></style>
