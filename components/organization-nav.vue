<template>
  <div class="nav-switch">
    <div class="container padding-container">
      <img
        alt="Accueil du site pix.fr"
        class="logo-pro"
        src="/images/logo-pix_pro_279x114.png"
      />
      <div
        v-for="item in organizationNavItems"
        :key="item.id"
        class="text text-xs text-left regular text-black"
      >
        <pix-link :field="item.primary.link">
          {{ $prismic.richTextAsPlain(item.primary.title) }}
        </pix-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    organizationNavItems: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
