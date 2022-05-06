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
            <FormBuilder :currentStep="currentStep" />
          </div>
          <div class="row justify-content-end mt-auto">
            <div class="col-md-3 offset-md-8">
              <div class="d-flex">
                <button
                  class="btn btn-danger square-right"
                  @click="currentStep--"
                >
                  Previous
                </button>
                <button
                  class="btn btn-success square-left"
                  @click="currentStep++"
                >
                  Next
                </button>
              </div>
            </div>
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
    const currentStep = ref(0);
    return {
      currentStep,
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
