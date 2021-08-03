<template>
  <div id="app" class="team-members">
    <h1>Team Members app</h1>
    <Dataviz />
  </div>
</template>

<script>

import Dataviz from './components/nongeneric-components/Dataviz.vue';

export default {
  name: 'App',
  components: {
    Dataviz,
  },
  data() {
    return {
      isUpdate: false,
    };
  },
};
</script>

<style lang="scss">
:root {
  --clr-neon: hsl(317 100% 54%);
  --clr-neon2: aqua;
  --clr-bg: hsl(323 21% 16%);
}
html{
  height: 100%;
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 1em;
}
.team-members h1{
  text-align: center;
  color: var(--clr-neon2);
  text-shadow: 0 0 0.25em currentColor;
}

</style>
