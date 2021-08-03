<template>
  <div class="card-show-data">
    <span class="frontcard-item">ID : {{inputs.id}}</span>
    <span class="frontcard-item">Name : {{inputs.name}}</span>
    <span class="frontcard-item">Role : {{inputs.role}}</span>
    <span class="frontcard-item">City : {{inputs.city}}</span>
    <div class="frontcard-item">
      <CustomButton @userClicked="removeMembers(inputs.id)">
        <template v-slot:buttonLabel>
          Remove
        </template>
      </CustomButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CustomButton from '../generic-components/Button.vue';

export default {
  name: 'CardShowData',
  props: {
    inputs: {
      type: Object,
    },
  },
  components: {
    CustomButton,
  },
  methods: {
    ...mapActions(['removeMembers']),
  },
};
</script>

<style lang="scss" scoped>
.card-show-data{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1em
}

.frontcard-item {
  text-align: center;
  overflow-wrap: anywhere;
}
</style>
