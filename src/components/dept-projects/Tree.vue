<template>
  <Toast />
  <Tree
    v-model:selectionKeys="selectedKey"
    :filter="true"
    :value="nodes"
    selectionMode="checkbox"
    class="w-full"
    @input="onInput"
  ></Tree>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NodeService } from "@/service/NodeService";
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
  NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
  toast.add({
    severity: "success",
    summary: "Node Selected",
    detail: node.label,
    life: 3000,
  });
};

const onNodeUnselect = (node) => {
  toast.add({
    severity: "success",
    summary: "Node Unselected",
    detail: node.label,
    life: 3000,
  });
};

const onInput = (value) => {
  console.log(selectedKey);
};
</script>
