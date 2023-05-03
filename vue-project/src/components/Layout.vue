<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="bg-green-100">
    <div class="grid content container mx-auto p-8">
      <div id="sidebar">
        <Sidebar/>
        <slot name="sidebarFooter"></slot>
      </div>
      <main>
        <slot name="content"></slot>
      </main>
    </div>
  </div>

</template>