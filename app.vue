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

(async () => {
  // Зона тестов
  const store = useComponentsStore();
  const data =  await ComponentApi(1);
  store.save(data.component);
  const cms = store.getId(1);
  const body = findData(cms.event.create[0].params);
  const dataset = await ProceduresApi(body as ProceduresDto);
  console.log(dataset);
})();
</script>