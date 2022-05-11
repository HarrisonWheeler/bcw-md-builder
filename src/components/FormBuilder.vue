<template>
  <div class="col-12">
    <div class="row justify-content-center">
      <div v-if="formType == 'outline'">
        {{ outlineSchema }}
      </div>
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
