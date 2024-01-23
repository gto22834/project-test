<template>
  <section class="main">
    <NavigatorMain />
    <div class="text">
      {{ $t('123123') }}
      sadfafa
    </div>
  </section>
</template>

<script lang="ts" setup>
import { NavigatorMain } from '~/components/navigator';
</script>

<style scoped lang="postcss">
.test {
  --width: 100px;
  top: 0;
  left: 0;
  display: flex;

  width: 200px;
  height: 200px;

  background-color: blue;

  & > .text {
    display: flex;

    font-size: 24px;
  }
}
</style>
