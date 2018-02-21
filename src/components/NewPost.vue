<template>

  <div class="posts">

   <router-link v-bind:to="{name: 'Posts'}">
     Posts List
   </router-link>

     <br/>
     <h1>Add new Post</h1>

      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="post.title">
        </div>
        <div>
             <input type="text" name="author" placeholder="AUTHOR" v-model="post.author">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="post.description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" :disabled="isEmpty" @click.prevent="addPost">Add</button>
        </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        author: "",
        description: ""
      }
    };
  },
  methods: {
    addPost() {
      this.$store.dispatch("ADD_POST", this.post);
      this.$router.push({ name: "Posts" });
    }
  },
  computed: {
    isEmpty() {
      return (
        this.post.title == "" ||
        this.post.description == "" ||
        this.post.author == ""
      );
    }
  }
};
</script>

<style type="text/css" scoped>
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
button[disabled] {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
