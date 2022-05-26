<template>
  <div class="sidebar-widgets">
    <!-- <h1>{{ title | lowercase }}</h1> -->
    <h2>{{ Title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-widgets {
  height: 176px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  data: function () {
    return {
      title: "Testing",
    };
  },
  props: ["Title"],
  name: "blog_sidebar",
  filters: {
    lowercase: function (v) {
      return v.toLowerCase();
    },
  },
};
</script>
