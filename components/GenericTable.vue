<template>
    <vs-table class="table">
        <template #header>
            <vs-input block v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
            <vs-tr>
                <vs-th sort @click="dataset = $vs.sortData($event, dataset, column.key)" :key="column.key"
                v-for="column in columns"> {{ column.header }} </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr
                :key="row.id"
                v-for="row in $vs.getPage(applyFilters(), page, max)"
                :dataset="row"
                @click="rowClick(row)"
            >
                <vs-td :key="column.key"
                    v-for="column in columns"> {{ row[column.key]}}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(applyFilters(), max)" />
        </template>
    </vs-table>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type ColumnConfig<M> = {
    header: string;
    key: Extract<keyof M, string>;
}

export default Vue.extend({
    components: {},
    props: {
        columns: {
            type: Array as PropType<ColumnConfig<any>[]>,
            required: true
        },
        dataset: {
            type: Array as PropType<any[]>,
            required: true
        },
        keywordFilterOn: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            page: 1,
            max: 3,
            search: ''
        }
    },

    methods: {
        applyFilters() {            
            const keyword = this.search.toLowerCase();
            return this.dataset.filter((row) => {
                const targetColumn = row[this.keywordFilterOn].toLowerCase();
                return targetColumn.includes(keyword)
            })
        },

        rowClick(row: any){
            this.$emit('row-clicked', row)
        }
    },
})
</script>

<style></style>
