<template>
  <div>
    <NuxtWelcome/>
  </div>
</template>
<script setup lang="ts">
import {ComponentApi} from "~/src/api/component";
import {useComponentsStore} from "~/src/store/components";

(async () => {
  // Зона тестов
  const store = useComponentsStore();
  await store.loader(1);
  console.log(store.get);
})();
</script>