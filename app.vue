<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <AlertWrapper />
    <Button :id="2" :context="{id:2}"></Button>
    <Table :id="1" />
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
  const alertStore = useAlertStore();
  alertStore.save({ id: 4, name: "удачно добавлено", type: "success", description: "удачно удален проект" });
});
(async () => {
  const storeComponents = useComponentsStore();
  const id = 1;
  await LoaderScreen(id);
  console.log(storeComponents.getId('1'));
})();
</script>