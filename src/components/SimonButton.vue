<template>
  <button :class="buttonClasses" @click="handleClick" ref="button" />
</template>

<script>

</script>

<style scoped>
.simon-button {
  width: inherit;
  height: inherit;
  border: none;
  /* transition: background-color 0.1s ease-out; */
}

.simon-button:focus {
  box-shadow: inset 0px 0px 50px 0 rgba(0, 0, 0, 0.25);
  outline: none;
}

.simon-button.blue {
  background-color: rgb(37, 37, 202);
}

.simon-button.blue.active {
  background-color: rgb(42, 42, 153);
}

.simon-button.blue:hover {
  background-color: rgb(37, 37, 202, 0.8);
}

.simon-button.red {
  background-color: rgb(214, 57, 36)
}

.simon-button.red.active {
  background-color: rgb(160, 33, 33)
}

.simon-button.red:hover {
  background-color: rgb(220, 31, 31, 0.8)
}

.simon-button.yellow {
  background-color: rgb(243, 239, 17)
}

.simon-button.yellow.active {
  background-color: rgb(157, 155, 27)
}

.simon-button.yellow:hover {
  background-color: rgb(217, 255, 0, 0.8)
}

.simon-button.green {
  background-color: rgb(37, 197, 37)
}

.simon-button.green.active {
  background-color: rgb(82, 179, 82)
}

.simon-button.green:hover {
  background-color: rgb(37, 197, 37, 0.8)
}
</style>
