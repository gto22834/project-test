<template>
  <nav class="navigator">
    <ul>
      <li v-for="nav in list" :key="nav.value">
        {{ nav.name }}
        <a> dfadsfasdf </a>
      </li>
    </ul>
  </nav>
</template>

<!--執行一次 -->
<script></script>
<!-- 每次執行 -->
<script lang="ts" setup>
interface Navigator {
  name: string;
  value: string;
}

const list: Navigator[] = [
  {
    name: 'Phaser-editor-core',
    value: 'phaserEditorCore',
  },
];
</script>
