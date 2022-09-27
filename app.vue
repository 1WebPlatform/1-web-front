<template>
  <div>
    <NuxtWelcome/>
  </div>
</template>
<script setup lang="ts">
import {ComponentApi} from "~/src/api/component";
import {useComponentsStore} from "~/src/store/components";
import {LoaderTableData} from "~/src/service/callback/table/loader_table_data";
import {findData} from "~/src/service/findData";
import {ProceduresApi} from "~/src/api/procedures";
import {ProceduresDto} from "~/src/model/proceduresDto";
import { useScreenStore } from "./src/store/screen";

(async () => {
  // Зона тестов
  const storeComponents = useComponentsStore();
  const storeScreen = useScreenStore();
  const data =  await ComponentApi(1);
  storeComponents.save(data.component);
  storeScreen.save(data.screen);   
  const cms = storeComponents.getId("1"); 
  const body = findData(cms.event.create[0].params);
  const dataset = await ProceduresApi(body as ProceduresDto);
  console.log(dataset);  
})();
</script>