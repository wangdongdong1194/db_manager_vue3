<script setup lang="ts">
  import type { IElTreeNode } from '@/type/type';
  import { ref } from 'vue';
  import ElTreeComponent from '@/components/ElTreeComponent.vue';

  const databases = ref<IElTreeNode[]>([
    { name: '数据库1', id: 1 }, { name: '数据库2', id: 2 },
    {
      name: '数据库3-0', id: 3, selected: true, children: [
        {
          name: '数据库3-0-0', id: 4, children: [
            { name: '数据库3-0-0-0', id: 5 },
            { name: '数据库3-0-0-1', id: 6, children: [{ name: '数据库3-0-0-1-0', id: 7 }] },
          ]
        },
        { name: '数据库3-0-1', id: 8 }
      ]
    },
    { name: '数据库4', id: 9 },
  ]);
  for (let i = 7; i <= 20; i++) {
    databases.value.push({ name: `数据库${i}`, id: i });
  }
</script>
<template>
  <div class="database">
    <ElTreeComponent v-for="(item, index) in databases" :key="index" v-bind="item" />
  </div>
</template>
<style scoped></style>
