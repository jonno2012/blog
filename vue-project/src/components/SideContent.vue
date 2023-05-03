<script setup>
defineProps({
  items: Array
})
</script>


<template>
<div
    v-if="items.length"
    class="p-4 rounded-xl bg-white uppercase mb-4"
>
  <h3 class="mb-2 font-semibold">Categories</h3>
  <a
      class="grid justify-center md:block"
      v-for="item in items"
      :key="item.id"
      href="#">{{ item.name }}
  </a>
</div>
</template>