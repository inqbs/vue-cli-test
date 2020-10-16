<template>
  <div class="blog">
    <div class="title row">
      <h1>This is Blog Page</h1>
    </div>
    <section class="row">
      <BlogPost v-for="post in posts" 
                :key="post.id" 
                :post="post"
                class="col-sm-4">
      </BlogPost>
    </section>
    <b-card-group columns class="mt-3">
      <b-card bg-variant="warning" text-variant="white">
          <blockquote class="card-blockquote">test</blockquote>
      </b-card>
      <b-card v-for="item in list"
              v-bind:key="item"
              title="item"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              >
        <b-card-text>
          {{item}}
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
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
      list: [1,2,3,4,5,6,7,8,9,10]
    }
  }
}
</script>