<template>
  <div class="blog">
    <h1>This is Blog Page</h1>
    <BlogPost v-for="post in posts" 
              :key="post.id" 
              :post="post"
              v-on:bigger-text="postFontSize += 0.1">
    </BlogPost>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'Blog',
  components: {BlogPost},
  data(){
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  }
}
</script>