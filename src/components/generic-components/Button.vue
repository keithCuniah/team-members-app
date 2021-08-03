<template>
  <div>
    <button type='button' @click="$emit('userClicked')">
      <slot name="buttonLabel"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'buttonCustom',
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon2);
  border: none;
  padding: 0.25em 1em;
  background: none;
  font-size: 1rem;
}

button:hover {
  color: var(--clr-neon);
  cursor: pointer;
  border-radius: 0.5em;
}
</style>
