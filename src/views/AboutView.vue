<template>
  <div class="about">
    <h1 v-bold>{{ pageName }}</h1>
    <p v-font.orange.bold="60">{{ pageDes }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      pageName: "About us",
      pageDes: "This is About us Page",
    };
  },
  directives: {
    bold: {
      bind: function (el) {
        el.style.fontWeight = "bold";
      },
    },
  },
  name: "AboutView",
};
</script>
