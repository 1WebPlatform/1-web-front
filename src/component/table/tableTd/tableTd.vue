<template>
  <div class="table-td" :style="style">
    {{text}}
  </div>
</template>
<script lang="ts">
import { tableTd } from "~/src/component/table/tableTd/tableTd";

export default {
  props: {
    text: {},
    schema: {},
    id: { type: Number }
  },
  setup(props) {
    const { id, schema } = toRefs(props);
    return {
      ...tableTd(id, schema)
    }
  }
}
</script>
<style lang="scss">

</style>