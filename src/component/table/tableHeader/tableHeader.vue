<template >
    <div class="table-header">
        <template v-for="schema in cms.schema" :key="schema.id">
            <TableTh v-if="schema.visible" :id="id" :schema="schema" />
        </template>
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