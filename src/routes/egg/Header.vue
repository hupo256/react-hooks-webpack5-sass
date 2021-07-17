<template>
  <div>
    <h1>这是个标题{{ name }}</h1>
    <h2>SUCCESSED ~~</h2>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>