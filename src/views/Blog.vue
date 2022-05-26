<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <blog-posts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="siedebar">
            <blog-sidebar
              v-for="post in posts"
              :key="post.id"
              :Title="post.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/BlogPosts.vue";
import BlogSidebar from "@/components/BlogSidebar.vue";
import JsonPosts from "@/components/blog_posts.json";
export default {
  data: () => {
    return {
      pageName: "Blog us",
      pageDes: "Thsi is Blog Us Page",
      posts: JsonPosts,
    };
  },
  name: "BlogPage",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
