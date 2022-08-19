<script setup>
// other way don't work too:
// import { defineAsyncComponent } from 'vue';
// // eslint-disable-next-line import/no-unresolved
// const HomeView = defineAsyncComponent(() => import('b3/HomeView.vue'));

// eslint-disable-next-line import/no-unresolved
import HomeView from 'b3/HomeView.vue';
</script>

<template>
  b3
 <HomeView/>
</template>
