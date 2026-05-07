<script setup lang="ts">
  import DatabaseComponent from '@/components/DatabaseComponent.vue';
  import DatalistComponent from '@/components/DatalistComponent.vue';
  import GapComponent from '@/components/GapComponent.vue';
  import { onMounted, ref } from 'vue';

  const defaultData = {
    databaseComponentStyleWidth: 200,
    databaseComponentMinWidth: 100,
  };

  const mainContent = ref<HTMLDivElement | null>(null);
  const databaseComponent = ref<HTMLDivElement | null>(null);

  onMounted(() => {
    if (mainContent.value) {
      const dataStyleWidth = localStorage.getItem('dataStyleWidth');
      if (dataStyleWidth) {
        databaseComponent.value!.style.width = dataStyleWidth;
      }
      const pressInfo = {
        isPressedGap: false,
        startX: 0,
        startY: 0,
      };
      window.addEventListener('mousedown', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('gapComponent')) {
          pressInfo.isPressedGap = true;
          pressInfo.startX = event.clientX;
          pressInfo.startY = event.clientY;
        }
      });
      window.addEventListener('mouseup', () => {
        pressInfo.isPressedGap = false;
      });
      window.addEventListener('mouseleave', () => {
        console.log('鼠标离开窗口');
        pressInfo.isPressedGap = false;
      });
      window.addEventListener('mousemove', (event) => {
        if (pressInfo.isPressedGap && databaseComponent.value) {
          const tempWidth = Math.min(Math.max(defaultData.databaseComponentMinWidth, event.clientX), window.innerWidth - defaultData.databaseComponentMinWidth);
          databaseComponent.value.style.width = `${tempWidth}px`;
          localStorage.setItem('dataStyleWidth', databaseComponent.value.style.width);
        }
      });
      window.addEventListener('resize', () => {
        if (databaseComponent.value) {
          const tempWidth = Math.min(Math.max(defaultData.databaseComponentMinWidth, parseInt(databaseComponent.value.style.width)), window.innerWidth - defaultData.databaseComponentMinWidth);
          databaseComponent.value.style.width = `${tempWidth}px`;
          localStorage.setItem('dataStyleWidth', databaseComponent.value.style.width);
        }
      });
    }
  });
</script>
<template>
  <div class="layout">
    <div class="header">1</div>
    <div class="mainContent" ref="mainContent">
      <div class="databaseComponent" :style="{ width: defaultData.databaseComponentStyleWidth + 'px' }"
        ref="databaseComponent">
        <DatabaseComponent />
      </div>
      <GapComponent class="gapComponent" />
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
    height: 100%;
    overflow: scroll;
  }

  .gapComponent {
    width: 2px;
    cursor: ew-resize;
  }

  .datalistComponent {
    flex: 1;
  }
</style>
