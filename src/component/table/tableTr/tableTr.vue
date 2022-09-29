<template>
    <div class="table-tr">
        <template v-for="schema in cms?.schema" :key="schema">
            <TableTd v-if="schema.visible" :id="id" :text="data[schema.nc]" />
        </template>
    </div>
</template>
<script lang="ts">
import { tableTr } from './tableTr';
import TableTd from '../tableTd/tableTd.vue';

export default {
    props: {
        // data: {},
        id: { type: Number }
    },
    components: { TableTd },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...tableTr(id)
        };
    },
}
</script>
<style lang="scss">

</style>