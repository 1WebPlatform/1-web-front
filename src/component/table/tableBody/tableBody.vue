<template>
    <div class="table-body">
         <TableTr :data="data" :id="id" v-for="data in cms.dataset" :key="data[cms.params.id_col]" />
    </div>
</template>
<script lang="ts">
import { tableBody } from './tableBody';
import TableTr from '../tableTr/tableTr.vue';

export default {
    props: {
        id: { type: Number }
    },
    components: { TableTr },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...tableBody(id)
        };
    },
}
</script>
<style lang="scss">

</style>