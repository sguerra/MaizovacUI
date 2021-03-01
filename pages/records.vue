<template>
    <div>
        <vs-row justify="space-between" align="center">
            <h2>Records</h2>
        </vs-row>
        <GenericTable :columns="columns" :dataset="records" keywordFilterOn="username" @row-clicked="viewUser"/>
        <EditRecord
            @saved="handleUserSaved"
            :user="currentRecord"
            :open="openEditModal"
            :onClose="onEditModalClose"
            @deleted="handleUserDeleted"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { recordsApi } from '../api'
import EditRecord from '../components/records/EditRecord.vue'
import { ColumnConfig } from '~/components/GenericTable.vue'
import Record from '~/models/Record'

const TABLE_COLUMNS: ColumnConfig<Record>[] = [
    {
        key: 'uuid',
        header: 'Id',
    },
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
    components: { EditRecord },
    data() {
        return {
            records: [] as Record[],
            columns: TABLE_COLUMNS,
            currentRecord: undefined as Record | undefined,
            openEditModal: false,
        }
    },

    fetch() {
        this.fetchUsers()
    },

    methods: {
        async fetchUsers() {
            this.records = await recordsApi.find()            
        },

        async handleUserSaved(record: Record) {
            this.toggleEditModal(false)
            await recordsApi.save(record)
            this.fetchUsers()
        },

        async handleUserDeleted(record: Record) {
            this.toggleEditModal(false)
            await recordsApi.destroy(record)
            this.fetchUsers()
        },

        newUser() {
            this.toggleEditModal(true)
            this.currentRecord = undefined
        },

        viewUser(record: Record) {
            this.toggleEditModal(true)
            this.currentRecord = {
                ...record,
            }
        },

        onEditModalClose() {
            this.toggleEditModal(false)
        },

        toggleEditModal(open: boolean) {
            this.openEditModal = open
        },
    },
})
</script>

<style></style>
