<template>
  <ThemeSwitcher />
  <div class="card">
    <Splitter>
      <SplitterPanel :size="30" :minSize="20">
        <Tree />
      </SplitterPanel>
      <SplitterPanel :size="70" :minSize="50">
        <Projects />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup>
import Projects from "@/components/dept-projects/Projects.vue";
import Tree from "@/components/dept-projects/Tree.vue";
</script>
