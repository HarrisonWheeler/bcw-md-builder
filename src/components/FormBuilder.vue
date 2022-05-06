<template>
  <div class="col-12">
    <div class="row justify-content-center">
      <div class="col-md-8 current-step text-center">
        <h4>What are you building today?</h4>
        <form>
          <select
            name="formType"
            id="formType"
            class="form-control mt-3"
            v-model="formType"
          >
            <option disabled selected>Choose one....</option>
            <option value="outline">Outline</option>
            <option value="assignment">Assignment</option>
            <option value="checkpoint">Checkpoint</option>
          </select>
        </form>
      </div>
      <!-- TODO come back and dial in styling later -->
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    currentStep: {
      type: Number,
    },
  },
  setup() {
    const formType = ref("");
    return {
      formType,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
