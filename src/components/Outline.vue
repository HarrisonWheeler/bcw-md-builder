<template>
  <!-- TODO refactor this with an iterator -->
  <div class="col-md-10">
    <form>
      <div class="form-group p-2">
        <input
          type="text"
          class="form-control"
          placeholder="Outline Header"
          v-model="editableOutline.outlineHeader"
          required
        />
      </div>
      <div class="form-group p-2">
        <input
          type="text"
          class="form-control"
          placeholder="Morning Challenge"
          v-model="editableOutline.morningChallenge"
          required
        />
      </div>
      <div class="form-group p-2">
        <textarea
          class="form-control"
          placeholder="Morning Challenge Description"
          required
        />
      </div>
      <div class="form-group p-2">
        <input
          type="text"
          class="form-control"
          placeholder="Daily Lecture"
          v-model="editableOutline.dailyProject"
          required
        />
      </div>
      <div class="form-group p-2">
        <textarea
          class="form-control"
          placeholder="Daily Lecture Description"
          v-model="editableOutline.dailyProjectDescription"
          required
        />
      </div>
      <div class="form-group p-2">
        <input
          type="text"
          class="form-control"
          placeholder="Fireside"
          v-model="editableOutline.fireside"
          required
        />
      </div>
      <div class="form-group p-2">
        <textarea
          class="form-control"
          placeholder="Fireside Description"
          v-model="editableOutline.firesideDescription"
          required
        />
      </div>
    </form>
    <div class="p-2 text-end">
      <button class="btn btn-primary square-right">Preview</button>
      <button class="btn btn-success square-left">Save</button>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/runtime-core";
export default {
  props: {
    outline: {
      type: Object,
    },
  },
  setup(props) {
    let editableOutline = ref({});
    // watchEffect(() => {
    //   editableOutline = { ...props.outline };
    // });
    return {
      editableOutline,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
