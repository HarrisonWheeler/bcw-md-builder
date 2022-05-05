<template>
  <div class="container-fluid full-height">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-8">
        <div class="bg-light shadow rounded step-wizard-height">
          <div class="row step-progress-row p-2">
            <div class="col-12 d-flex justify-content-center">
              <h4>Put step progress here</h4>
            </div>
          </div>
          <div class="row current-step">
            <router-view />
          </div>
          <div class="row justify-content-end">
            <div class="col-3">
              <div class="d-flex justify-content-center">
                <button
                  class="btn btn-danger square-right"
                  @click="previousStep()"
                >
                  Previous
                </button>
                <button class="btn btn-success square-left" @click="nextStep()">
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
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    let currentStep = 0;
    return {
      currentStep,
      nextStep() {
        currentStep++;
        if (route.name == "ThirdStepPage") {
          currentStep = 0;
        }
        router.push("/" + currentStep);
      },
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

.current-step {
  height: 50vh;
}
</style>
