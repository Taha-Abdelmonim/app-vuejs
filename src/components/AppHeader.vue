<template>
  <div class="header">
    <div class="logo">Taha</div>
    <nav>
      <!-- <router-link to="/" tag="li">Home</router-link> | -->
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/help">Help</router-link> |
      <router-link to="/blog">Blog</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  color: #010101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
  }
  nav {
    margin: 0;
    a {
      color: #fff;
      margin-right: 10px;
      margin-left: 10px;
      text-decoration: none;
      cursor: pointer;
      font-size: 18px;
      transition: 0.3s;
      &:hover,
      &.router-link-exact-active {
        color: #42b983 !important;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
</style>
