<template>
  <div class="error">
    <nuxt-link to="/">
      <img class="logo" src="/images/pix-logo.svg" alt="logo pix" />
    </nuxt-link>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$t('error-content')"></div>
  </div>
</template>
<script>
export default {
  layout: 'simple',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.error {
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  @include device-is('tablet') {
    width: 500px;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
