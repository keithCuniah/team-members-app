<template>
  <div class="dataviz">
    <Card>
      <template v-slot:frontCard>
        <div>Add a member ?</div>
      </template>
      <template v-slot:backCard>
        <VersoAddMemberCard />
      </template>
    </Card>
    <Card :id="`idCard${member.id}`" :key="member.id" v-for="member in members">
      <template v-slot:frontCard>
        <span class="frontcard-item">{{member.name}}</span>
      </template>
      <template v-slot:backCard>
        <VersoCard :member="member" />
      </template>
    </Card>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Card from '../generic-components/Card.vue';
import VersoCard from './VersoCard.vue';
import VersoAddMemberCard from './VersoAddMemberCard.vue';

export default {
  name: 'Dataviz',
  components: {
    Card,
    VersoCard,
    VersoAddMemberCard,
  },
  computed: {
    ...mapState(['members']),
  },
};
</script>

<style lang="scss" scoped>
.dataviz {
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
}
.frontcard-item {
  text-align: center;
  overflow-wrap: anywhere;
}
</style>
