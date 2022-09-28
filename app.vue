<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <AlertWrapper />
  </div>
</template>
<script setup lang="ts">
import { useComponentsStore } from "~/src/store/components";
import { eventComponent } from "./src/service/eventComponent";
import { LoaderScreen } from "./src/service/callback/all/loaderScreen";
import AlertWrapper from "./src/component/alert/alert-wrapper/alert-wrapper.vue";
import { useAlertStore } from "./src/store/alert";
import { onMounted } from "vue";
onMounted(async () => {
  const alertStore = useAlertStore();
  const storeComponents = useComponentsStore();
  console.log('start!');

  alertStore.save({ id: 4, name: "удачно добавлено", type: "success", description: "удачно удален проект" });
});
  // (async () => {
    // Зона тестов

    // const id = 1;
    // await LoaderScreen(id);
    // await eventComponent(id.toString(), "create");
    // storeComponents.saveContext(2, { id: 2 });
    // await eventComponent("2", "click");

  // })();
</script>