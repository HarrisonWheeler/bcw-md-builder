<template>
  <div class="container-fluid full-height">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-10">
        <div class="bg-light shadow rounded step-wizard-height">
          <div class="row step-progress-row p-2">
            <div class="col-12 d-flex justify-content-center">
              <h4>Put step progress here</h4>
            </div>
          </div>
          <div class="row">
            <router-view />
            <!-- first step component should go here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {};
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
