<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <AlertWrapper />
    <Message :id="messageId" v-if="messageId !== null" />
    <Table :id="1"></Table>
  </div>
</template>
<script setup lang="ts">
import { useComponentsStore } from "~/src/store/components";
import { useMessageStore } from "~/src/store/message";
import { LoaderScreen } from "./src/service/callback/all/loaderScreen";
import AlertWrapper from "./src/component/alert/alert-wrapper/alert-wrapper.vue";
import { onMounted } from "vue";
import Table from "./src/component/table/table.vue";
import Message from "./src/component/message/message.vue";
import { headCss } from "~~/src/libs/headCss"
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
const storeMessage = useMessageStore();
const messageId = computed(() => {
  return storeMessage.get
})
headCss();

</script>