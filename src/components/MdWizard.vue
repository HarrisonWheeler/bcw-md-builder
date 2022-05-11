<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-md-8">
        <div class="bg-light shadow rounded step-wizard-height">
          <div class="row step-progress-row p-2">
            <div class="col-12 d-flex justify-content-center">
              <h4>Put step progress here</h4>
            </div>
          </div>
          <div class="row p-2 justify-content-center h-75">
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
          <!-- TODO do i really need to have steps here? -->
          <!-- <div class="row justify-content-end mt-auto">
            <div class="col-md-3 offset-md-8">
              <div class="d-flex">
                <button
                  class="btn btn-danger square-right"
                  @click="modifyStep('decrease')"
                >
                  Previous
                </button>
                <button
                  class="btn btn-success square-left"
                  @click="modifyStep('increase')"
                >
                  Next
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let currentStep = ref(0);
    const formType = ref("");
    return {
      currentStep,
      formType,
      // modifyStep(modification) {
      //   if (modification == "increase") {
      //     currentStep.value++;
      //   } else {
      //     currentStep.value--;
      //   }
      //   console.log(currentStep);
      // },
    };
  },
};
</script>


<style lang="scss" scoped>
.full-height {
  height: 100vh;
}

.step-wizard-height {
  height: 75vh;
}

.step-progress-row {
  height: 20vh;
}
</style>
