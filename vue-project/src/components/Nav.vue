<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <nav class="m-0 p-0 flex items-center justify-between" style="height: 100%;">
      <RouterLink to="/" class="hover:text-blue-500 transition duration-500">Home</RouterLink>
      <RouterLink to="/users" class="hover:text-blue-500 transition duration-500">users</RouterLink>
      <RouterLink to="/posts" class="hover:text-blue-500 transition duration-500">Posts</RouterLink>
      <RouterLink to="/comments" class="hover:text-blue-500 transition duration-500">Comments</RouterLink>
    </nav>
</template>

<style scoped>

</style>