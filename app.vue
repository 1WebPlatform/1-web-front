<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import { useComponentsStore } from "~/src/store/components";
import { eventComponent } from "./src/service/eventComponent";
import { LoaderScreen } from "./src/service/callback/all/loaderScreen";

(async () => {
  // Зона тестов
  const storeComponents = useComponentsStore();
  const id = 1;
  await LoaderScreen(id);
  await eventComponent(id.toString(), "create");
  storeComponents.saveContext(2, { id: 2 });
  console.log(storeComponents.getDataset("1"));
  await eventComponent("2", "click");

})();
</script>