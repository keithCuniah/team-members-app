<template>
  <div class="verso-card">
    <div class="update-button">
      <CustomButton @userClicked="showForm()" >
        <template v-slot:buttonLabel>
          <span v-if="!isForm" v-openForm>+</span>
          <span v-else v-openForm>-</span>
        </template>
      </CustomButton>
    </div>
    <CardFormular class="formular-component"
     v-if="isForm" :inputs="member" @cancelEdit="showForm()"/>
    <CardShowData class="showdata-component" v-else :inputs="member"></CardShowData>
  </div>
</template>

<script>
import CardFormular from './CardFormular.vue';
import CardShowData from './CardShowData.vue';
import CustomButton from '../generic-components/Button.vue';

export default {
  name: 'VersoCard',
  components: {
    CardFormular,
    CardShowData,
    CustomButton,
  },
  props: {
    member: {
      type: Object,
    },
  },
  data() {
    return {
      isForm: false,
    };
  },
  methods: {
    showForm() {
      this.isForm = !this.isForm;
    },
  },
};
</script>

<style lang="scss" scoped>
.update-button {
  position: absolute;
  right: 0;
  top: 0;
}

</style>
