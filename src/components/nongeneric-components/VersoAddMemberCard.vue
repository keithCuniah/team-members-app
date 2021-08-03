<template>
  <div>
    <CardFormular :inputs="member" :isButtonCancel="false" :updateOrAdd="'add'"/>
  </div>
</template>

<script>
import CardFormular from './CardFormular.vue';

export default {
  name: 'VersoCard',
  components: {
    CardFormular,
  },
  data() {
    return {
      member: {
        id: 0,
        name: 'N/A',
        role: 'N/A',
        city: 'N/A',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
