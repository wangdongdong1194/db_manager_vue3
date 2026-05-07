<script setup lang="ts">
  import type { IElTreeNode } from '@/type/type';
  import { computed, ref } from 'vue';

  defineOptions({
    name: 'ElTreeComponent',
  });

  const props = defineProps<IElTreeNode>();

  const expanded = ref(!!props.toggled);
  const hasChildren = computed(() => !!props.children?.length);
  const depth = computed(() => props.depth ?? 0);

  const toggleNode = () => {
    if (!hasChildren.value) {
      return;
    }

    expanded.value = !expanded.value;
  };
</script>
<template>
  <div class="treeNode" :style="{ paddingLeft: `${depth * 14}px` }">
    <div :class="['symbol', { selected: props.selected }]" @click="toggleNode">
      {{ hasChildren ? (expanded ? '-' : '+') : '•' }}
    </div>
    <div class="name">{{ props.name }}</div>
  </div>

  <div v-if="hasChildren && expanded" class="children">
    <ElTreeComponent v-for="(child, index) in props.children" :key="`${child.name}-${index}`" v-bind="child"
      :depth="depth + 1" />
  </div>
</template>
<style scoped>
  .treeNode {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }

  .symbol {
    width: 16px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    margin: 0 10px;
    flex: 1;
  }

  .selected {
    color: #00ff00;
    font-weight: bold;
  }

  .children {
    width: 100%;
  }
</style>
