<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import { ComponentApi } from "~/src/api/component";
import { useComponentsStore } from "~/src/store/components";
import { LoaderTableData } from "~/src/service/callback/table/loader_table_data";
import { findData } from "~/src/service/findData";
import { ProceduresApi } from "~/src/api/procedures";
import { ProceduresDto } from "~/src/model/proceduresDto";
import { useScreenStore } from "./src/store/screen";
import { eventComponent } from "./src/service/eventComponent";
import { LoaderScreen } from "./src/service/callback/all/loaderScreen";

(async () => {
  // Зона тестов
  const storeComponents = useComponentsStore();
  const id = 1;
  await LoaderScreen(id);
  await eventComponent(id.toString(), "create");
  console.log(storeComponents.getDataset("1"));
  
})();
</script>