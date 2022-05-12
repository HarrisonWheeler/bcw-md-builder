<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-md-11">
        <div class="bg-light shadow rounded step-wizard-height">
          <div class="row p-2 justify-content-center">
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
            <FormBuilder :formType="formType" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const formType = ref("");
    return {
      formType,
    };
  },
};
</script>


<style lang="scss" scoped>
.full-height {
  height: 100vh;
}

.step-wizard-height {
  min-height: 95vh;
  max-height: 95vh;
  // overflow-y: auto;
}
</style>
