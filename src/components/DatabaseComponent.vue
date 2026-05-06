<script setup lang="ts">
  import type { IDatabase } from '@/type/type';
  import { ref } from 'vue';

  const databases = ref<IDatabase[]>([
    { name: '数据库1' }, { name: '数据库2' }, { name: '数据库3' }
  ]);
  for (let i = 4; i <= 20; i++) {
    databases.value.push({ name: `数据库${i}` });
  }
  // const handleNodeClick = (data: IDatabase) => {
  //   console.log(data)
  // }
</script>
<template>
  <div class="database">

  </div>
</template>
<style scoped></style>
