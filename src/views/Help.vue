<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      pageName: "Help",
      pageDes: "This is Help Page",
    };
  },
  name: "HelpMe",
};
</script>
