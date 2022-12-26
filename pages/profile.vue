<template>
    <div v-if="$auth.loggedIn && userProfile">
        <vs-row justify="space-between" align="center">
            <h2>My Profile</h2>
            <vs-row align="center" class="profile-card">
                <vs-col w="6">
                    <vs-row class="card-row">
                        <vs-col w="2" class="label">E-mail:</vs-col>
                        <vs-col w="3">{{ getUserInfo().username }}</vs-col>
                    </vs-row>
                    <vs-row class="card-row">
                        <vs-col w="2" class="label">Role:</vs-col>
                        <vs-col w="3">{{ getUserInfo().role }}</vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col w="2" class="label">Status:</vs-col>
                        <vs-col w="3">{{ getUserInfo().status }}</vs-col>
                    </vs-row>
                </vs-col>
                <vs-col w="6" align="center">
                    <div class="balance-wrapper">
                        <strong>Balance:</strong>
                        <div class="balance">${{ getUserProfile().balance }}</div>
                    </div>
                </vs-col>
            </vs-row>
        </vs-row>
        <vs-row justify="space-between" align="center">
            <h2>My Records</h2>
        </vs-row>
        <GenericTable :columns="columns" :dataset="records" keywordFilterOn="serviceType" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { recordsApi, userBalancesApi } from '../api'
import Record from '~/models/Record'
import GenericTable, { ColumnConfig } from '~/components/GenericTable.vue'
import { IUserBalance } from '~/api/balances'

const TABLE_COLUMNS: ColumnConfig<Record>[] = [
    {
        key: 'serviceType',
        header: 'Service Type',
    },
    {
        key: 'username',
        header: 'Username',
    },
    {
        key: 'cost',
        header: 'Cost',
    },
    // {
    //     key: 'userBalance',
    //     header: 'User Balance',
    // },
    {
        key: 'date',
        header: 'Date',
    },
    {
        key: 'serviceResponse',
        header: 'Response',
    },
]

export default Vue.extend({
    components: { GenericTable },
    data() {
        return {
            records: [] as Record[],
            userProfile: undefined as IUserBalance | undefined,
            columns: TABLE_COLUMNS,
            userBalance: null as IUserBalance | null,
        }
    },

    fetch() {
        this.fetchData()
    },

    methods: {
        async fetchData() {
            this.records = await recordsApi.findCurrent()
            this.userProfile = await userBalancesApi.findCurrent()
        },

        getUserProfile() {
            return this.userProfile
        },

        getUserInfo() {
            return this.getUserProfile()?.User
        },
    },
})
</script>
<style scoped>
.profile-card {
    border: solid 3px #0B4619;
    border-radius: 0.75rem;
    padding: 2rem;
    background-color: #FFCC1D44;
}

.card-row {
    margin-bottom: 1rem;
}

.balance-wrapper{
    color: #0B4619;
    width: 250px;
    justify-self: center;
    border: solid 2px #0B4619;
    background-color: #FFCC1D;
    border-radius:1rem;
    padding: 0.5rem;
}

.balance {
    font-size: 2rem;
}

.label {
    font-weight: bold;
}
</style>
