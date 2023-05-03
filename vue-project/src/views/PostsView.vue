<script setup>
import Layout from "@/components/Layout.vue";
import AddPostForm from "@/components/AddPostForm.vue";
import {categoryStore} from "@/stores/categoryStore";
import {userStore} from "@/stores/userStore";
import {getStorage, storeItem} from "@/composables/localStorage";
import {ref, watch} from "vue";

let storedCategories = categoryStore();
let storedUsers = userStore()

let posts = ref([])

posts.value = getStorage('posts')
let newPost = ref({})

watch(newPost, (changed) => {
  posts.value = storeItem('posts', newPost.value)
})
</script>

<template>

    <Layout>
      <template #sidebarFooter>
        <div class="p-4 rounded-xl bg-white uppercase mb-4">
          <AddPostForm
              :users="storedUsers.users"
              @submitPost="submitted => newPost = submitted"/>
        </div>

      </template>
      <template #heading><h2>Posts</h2></template>

      <template #content>

          <div v-if="posts.length" class="cardHolder grid block post cards p-0 lg:px-10">
            <div
                v-for="post in posts" :key="posts.id"
                class="postCard bg-white rounded-lg p-8"
                :class="post.colorClass"
            >
              <h4>{{ post.title }}</h4>
              <p>{{ post.content.substring(0, 30) + '...' }}</p>
              <div class="cardFooter">
                <span class="category">{{ storedCategories.getCategoryName(post.postCategory) }}</span>
                <span class="user">{{ storedUsers.getUserName(post.user) }}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <p>No posts</p>
          </div>


      </template>

    </Layout>


</template>
