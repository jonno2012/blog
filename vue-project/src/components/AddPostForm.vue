<script setup>
import {categoryStore} from "@/stores/categoryStore";
import {ref} from "vue";

defineProps({
  users: Object
})

let storedCategories = categoryStore()
let newPost = ref({title: '', content: '', postCategory: null, user: null})
let emitSubmitPost = defineEmits(['submitPost'])

function submit() {
  emitSubmitPost('submitPost', newPost.value)
  newPost.value = {title: '', content: '', postCategory: null}
}
</script>

<template>
  <slot name="heading"/>
  <form @submit.prevent>
    <div class="formGroup">
      <input v-model="newPost.title" type="text" placeholder="Title">
    </div>
    <div class="formGroup">
      <textarea v-model="newPost.content" placeholder="content"></textarea>
    </div>
    <div class="formGroup">
      <select
          v-model="newPost.postCategory"
          name="category">

        <option value="" selected>Select</option>
        <option
            v-for="category in storedCategories.categories"
            :key="category.id"
            :value="category.id"
        >{{ category.name }}
        </option>
      </select>
    </div>
    <div class="formGroup">
      <select
          v-model="newPost.user"
          name="user">

        <option value="" selected>Select</option>
        <option
            v-for="user in users"
            :key="user.id"
            :value="user.id"
        >{{ user.name }}
        </option>
      </select>
    </div>
    <div class="formGroup">
      <button @click="submit">Submit</button>
    </div>
  </form>
</template>