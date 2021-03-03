<template>
    <div v-if="$auth.loggedIn">
        <vs-row justify="space-between" align="center">
            <h2>My profile</h2>
            <vs-row align="center" class="profile-card">
                <vs-col w="6">
                    <vs-row class="card-row">
                        <vs-col w="2" class="label">E-mail:</vs-col>
                        <vs-col w="3">{{getUserInfo().username}}</vs-col>
                    </vs-row>
                    <vs-row class="card-row">
                        <vs-col w="2" class="label">Role:</vs-col>
                        <vs-col w="3">{{getUserInfo().role}}</vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col w="2" class="label">Status:</vs-col>
                        <vs-col w="3">{{getUserInfo().status}}</vs-col>
                    </vs-row>
                </vs-col>
                <vs-col w="6" align="center">
                    <div>Balance:</div>
                    <div class="balance">${{getUserProfile().balance}}</div>
                </vs-col>
            </vs-row>
        </vs-row>
        <vs-row justify="space-between" align="center">
            <h2>My Records</h2>
        </vs-row>
        <GenericTable :columns="columns" :dataset="records" keywordFilterOn="serviceType"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { recordsApi } from '../api'
import Record from '~/models/Record'
import { ColumnConfig } from '~/components/GenericTable.vue'
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
    {
        key: 'userBalance',
        header: 'User Balance',
    },
    {
        key: 'date',
        header: 'Date',
    },
]

export default Vue.extend({
    components: {},
    data() {
        return {
            records: [] as Record[],
            columns: TABLE_COLUMNS,
            userBalance: null as IUserBalance | null
        }
    },

    fetch() {
        this.fetchData()
    },

    methods: {
        async fetchData() {      
            this.records = await recordsApi.findCurrent()           
        },
        
        getUserProfile(){
            return this.$auth.user?.profileInfo as IUserBalance
        },

        getUserInfo(){
            return this.getUserProfile().User;
        }
    },
})
</script>
<style scoped>
    .profile-card {
        border: 1px solid #ddd;
        box-shadow: 0 0 5px 1px #eee;
        border-radius: .75rem;
        padding: 2rem;
        background-color: rgb(234,154,62);
        color: white
    }

    .card-row {
        margin-bottom: 1rem;
    }

    .balance {
        font-size: 2rem;
    }

    .label {
        font-weight: bold;
    }
</style>