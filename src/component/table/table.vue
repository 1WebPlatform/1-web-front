<template>
    <div class="table" :style="{'--url_template': url}">
        <TableHeader :id="id" />
        <TableBody :id="id" />
    </div>
</template>
<script lang="ts">
import { table } from "./table";
import TableHeader from "./tableHeader/tableHeader.vue";
import TableBody from "./tableBody/tableBody.vue";
export default {
    props: {
        id: { type: Number }
    },
    components: { TableHeader, TableBody },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...table(id)
        }
    }
}
</script>