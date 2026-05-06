<script setup lang="ts">
  import DatabaseComponent from '@/components/DatabaseComponent.vue'
  import DatalistComponent from '@/components/DatalistComponent.vue';
  import GapComponent from '@/components/GapComponent.vue';
</script>
<template>
  <div class="layout">
    <div class="header">1</div>
    <div class="mainContent">
      <DatabaseComponent class="databaseComponent" />
      <GapComponent />
      <DatalistComponent class="datalistComponent" />
    </div>
  </div>
</template>
<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .header {
    height: var(--primary-header-height);
    background: #eee;
  }

  .mainContent {
    display: flex;
    height: calc(100% - var(--primary-header-height));
  }

  .databaseComponent {
    width: 300px;
    height: 100%;
    overflow: scroll;
  }

  .datalistComponent {
    flex: 1;
  }
</style>
