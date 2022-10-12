<template >
    <div :data-nc="schema.nc" class="table-th" :style="style">
        {{schema.name}}
    </div>
</template>
<script lang="ts">
import { tableTh } from "~~/src/component/table/tableTh/tableTh"
export default {
    props: {
        id: { type: Number },
        schema: { type: Object }
    },
    setup(props) {
        const { id, schema } = toRefs(props);
        return {
            ...tableTh(id, schema)
        }
    }
}
</script>