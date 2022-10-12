<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <AlertWrapper />
    <Table :id="1"></Table>
  </div>
</template>
<script setup lang="ts">
import { useComponentsStore } from "~/src/store/components";
import { LoaderScreen } from "./src/service/callback/all/loaderScreen";
import AlertWrapper from "./src/component/alert/alert-wrapper/alert-wrapper.vue";
import { useAlertStore } from "./src/store/alert";
import { onMounted } from "vue";
import Button from "./src/component/button/button.vue";
import Table from "./src/component/table/table.vue";
onMounted(async () => {
  const storeComponents = useComponentsStore();
  const id = 1;
  await LoaderScreen(id);
  // const storeAlert = useAlertStore();
  // storeAlert.save({id:1, name: "ошибка!!", description: "lorem!!!", type: "error"});
  // const alertStore = useAlertStore();
  // alertStore.save({ id: 4, name: "удачно добавлено", type: "success", description: "удачно удален проект" });
});
(async () => {
  const storeComponents = useComponentsStore();
  const id = 1;
  await LoaderScreen(id);
})();

</script>