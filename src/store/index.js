import Vue from 'vue';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: [
      {
        id: 1, name: 'John Doe', role: 'viewer', city: 'Paris',
      },
      {
        id: 2, name: 'Sponge Bob', role: 'absorbant', city: 'Lyon',
      },
      {
        id: 3, name: 'Daniel Tiger', role: 'roarer', city: 'NYC',
      },
    ],
  },
  getters: {
    getListOfMembersId: (state) => {
      const listId = state.members.map((member) => member.id);
      return listId;
    },
  },
  mutations: {
    setMembers(state, payload) {
      state.members = payload;
    },
  },
  actions: {
    removeMembers(context, memberId) {
      const newMembers = context.state.members.filter((member) => member.id !== memberId);
      context.commit('setMembers', newMembers);
      console.log(`ID : ${memberId} is removed !`);
    },
    updateMembers(context, updateMember) {
      const oldMembers = cloneDeep(context.state.members);
      // find the member with the same id in members as the update one
      const indexMember = oldMembers.findIndex((obj) => obj.id === updateMember.id);
      // replace by updated Member
      oldMembers[indexMember] = updateMember;
      context.commit('setMembers', oldMembers);
      console.log(`ID : ${updateMember.id} is updated !`);
    },
    addMembers(context, newMember) {
      const oldMembers = cloneDeep(context.state.members);
      oldMembers.push(cloneDeep(newMember));
      context.commit('setMembers', oldMembers);
      console.log(`ID : ${newMember.id} is added !`);
    },
  },
  modules: {
  },
});
