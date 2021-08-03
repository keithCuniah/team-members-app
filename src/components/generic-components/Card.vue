<template>
  <div class="card">
    <div class="front">
      <div class="content">
        <slot name="frontCard"></slot>
      </div>
    </div>
    <div class="back">
      <div class="content">
        <slot name="backCard"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 13em;
  min-height: 19.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--clr-neon);
  border: 4px solid currentColor;
  border-radius: 0.5em;
  text-shadow: 0 0 0.25em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
  transform-style: preserve-3d;
  transition: transform 1s linear;
  -webkit-transition: transform 1s linear;
  position: relative;
}
.card:hover {
  color: white;
  text-shadow: 0 0 0.25em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon2), 0 0 0.5em 0 var(--clr-neon2);
  border: 4px solid var(--clr-neon2);
  transform: rotateY(180deg);
}
.front {
  position: absolute;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
}

.back {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}

.content{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1em;
}

</style>
