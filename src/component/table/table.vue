<template>
    <div class="table">
        <TableHeader :id="id" />
    </div>
</template>
<script lang="ts">
import TableHeader from "./tableHeader/tableHeader.vue";
export default {
    props: {
        id: { type: Number }
    },
    components: { TableHeader }
}
</script>
<style lang="scss">

</style>