<template>
  <div>
    <h1>我来自vue的 sample 8081{{ name }}</h1>
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