<template>
  <div class="member-formular">
    <p>ID : {{cloneInputs.id}}</p>
    <form action="" >
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>
      <p>
        <label for="name">Name: </label>
        <input
          id="name"
          v-model="cloneInputs.name"
          type="text"
          name="name"
        >
      </p>
      <p>
        <label for="role">Role: </label>
        <input
          id="role"
          v-model="cloneInputs.role"
          type="text"
          name="role"
        >
      </p>
      <p>
        <label for="city">City: </label>
        <input
          id="city"
          v-model="cloneInputs.city"
          type="text"
          name="city"
        >
      </p>
      <div class="buttons-area">
        <p>
          <CustomButton @userClicked="submitForm()">
            <template v-slot:buttonLabel>
              Submit
            </template>
          </CustomButton>
        </p>
        <p>
          <CustomButton v-if="isButtonCancel" @userClicked="$emit('cancelEdit')">
            <template v-slot:buttonLabel>
              Cancel
            </template>
          </CustomButton>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { cloneDeep } from 'lodash';
import CustomButton from '../generic-components/Button.vue';

export default {
  name: 'CardFormular',
  props: {
    inputs: {
      type: Object,
    },
    isButtonCancel: {
      type: Boolean,
      default: true,
    },
    updateOrAdd: {
      type: String,
      default: 'update',
    },
  },
  data() {
    return {
      cloneInputs: {},
      errors: [],
    };
  },
  components: {
    CustomButton,
  },
  mounted() {
    // cloneInputs in order to not modify directly the value from the store
    this.cloneInputs = cloneDeep(this.inputs);
  },
  computed: {
    ...mapGetters(['getListOfMembersId']),
  },
  methods: {
    ...mapActions(['updateMembers', 'addMembers']),
    getMemberId() {
      let findId = false;
      let memberId = 0;
      do {
        memberId += 1;
        findId = this.getListOfMembersId.includes(memberId);
      } while (!!findId);
      return memberId;
    },
    submitForm() {
      if (this.updateOrAdd === 'update') {
        this.updateMembers(this.cloneInputs);
        this.$emit('cancelEdit');
      } else if (this.updateOrAdd === 'add') {
        this.cloneInputs.id = this.getMemberId();
        if (!this.getListOfMembersId.includes(this.cloneInputs.id)) {
          this.addMembers(this.cloneInputs);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons-area {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
