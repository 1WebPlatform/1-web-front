<template >
    <div class="table-th" :style="style">
    </div>
</template>
<script lang="ts">
import { tableTh } from "~~/src/component/table/tableTh/tableTh"
export default {
    props: {
        id: { type: Number },
        schema: {}
    },
    setup(props) {
        const { id, schema } = toRefs(props);
        return {
            ...tableTh(id, schema)
        }
    }
}
</script>