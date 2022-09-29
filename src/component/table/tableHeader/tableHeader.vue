<template >
    <div class="table-header">
        <div v-for="schema in cms.schema" :key="schema.id">
            <TableTh :id="id" :schema="schema" />
        </div>
    </div>
</template>
<script lang="ts">
import TableTh from '../tableTh/tableTh.vue';
import { tableHeader } from './tableHeader';
export default {
    components: { TableTh },
    props: {
        id: { type: Number }
    },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...tableHeader(id)
        }
    }
}
</script>
<style lang="">
    
</style>