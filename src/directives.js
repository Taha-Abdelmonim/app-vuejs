import Vue from "vue";

// Make Font Custom Directive
Vue.directive("font", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
    // console.log(binding);
    // console.log(el);
    // console.log(binding.name);
    // console.log(binding.value);
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
    if (binding.modifiers.red) {
      el.style.color = "red";
    }
  },
});
