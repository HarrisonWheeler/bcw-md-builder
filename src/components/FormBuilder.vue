<template>
  <div class="col-12 mt-3">
    <div class="row justify-content-center">
      <Outline :outline="outlineSchema" v-if="formType == 'outline'" />
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { Outline } from "../models/Outline";
export default {
  props: {
    formType: {
      type: String,
    },
  },
  setup() {
    return {
      outlineSchema: computed(() => new Outline()),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
