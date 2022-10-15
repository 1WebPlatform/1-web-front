<template>
  <div @click="clickTd" :data-nc="schema.nc" class="table-td" :style="style">
    {{ data[schema.nc] }}
    <Button :context="data" v-if="schema.type == 'button'" :id="schema.id"></Button>
  </div>
</template>
<script lang="ts">
import { tableTd } from "~/src/component/table/tableTd/tableTd";
import Button from "../../button/button.vue";

export default {
  props: {
    data: { type: Object },
    schema: { type: Object },
    id: { type: Number }
  },
  setup(props) {
    const { id, schema } = toRefs(props);
    return {
      ...tableTd(id, schema)
    };
  },
  components: { Button }
}
</script>