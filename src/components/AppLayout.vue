<template>
  <ThemeSwitcher />
  <div class="card">
    <Splitter>
      <SplitterPanel :size="30" :minSize="20">
        <DeptTree />
      </SplitterPanel>
      <SplitterPanel :size="70" :minSize="50">
        <DeptProjects />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup>
import DeptProjects from "./DeptProjects.vue";
import DeptTree from "./DeptTree.vue";
</script>
