export default {
  methods: {
    getMemberId() {
      let findId = false;
      let memberId = 0;
      do {
        memberId += 1;
        findId = this.getListOfMembersId.includes(memberId);
      } while (!!findId);
      return memberId;
    },
  },
};
