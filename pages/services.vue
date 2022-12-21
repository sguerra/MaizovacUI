<template>
    <div>
        <vs-row justify="space-between" align="center">
            <h2>Services</h2>
        </vs-row>
        <GenericTable :columns="columns" :dataset="services" keywordFilterOn="type" @row-clicked="viewService" />
        <EditService
            @saved="handleServiceSaved"
            :service="currentService"
            :open="openEditModal"
            :onClose="onEditModalClose"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { servicesApi } from '~/api'
import Service from '~/models/Service'
import GenericTable, { ColumnConfig } from '../components/GenericTable.vue'
import EditService from '../components/services/EditService.vue'

const TABLE_COLUMNS: ColumnConfig<Service>[] = [
    {
        key: 'uuid',
        header: 'uuid',
    },
    {
        key: 'type',
        header: 'Type',
    },
    {
        key: 'cost',
        header: 'Cost',
    },
    {
        key: 'status',
        header: 'Status',
    },
]

export default Vue.extend({
    components: { GenericTable, EditService },
    props: {},
    data() {
        return {
            services: [] as Service[],
            columns: TABLE_COLUMNS,
            currentService: undefined as Service | undefined,
            openEditModal: false,
        }
    },

    fetch() {
        this.fetchServices()
    },

    methods: {
        async fetchServices() {
            this.services = await servicesApi.fetchAll()
        },

        async handleServiceSaved(service: Service) {
            this.toggleEditModal(false)
            await servicesApi.save(service)
            this.fetchServices()
        },

        newService() {
            this.toggleEditModal(true)
            this.currentService = undefined
        },

        viewService(service: Service) {
            this.toggleEditModal(true)
            this.currentService = {
                ...service,
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
