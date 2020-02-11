<template>
  <div class="navigation">
    <a href="https://pix.fr" class="text text-xs text-left regular text-black">
      <p>
        Accueil
      </p>
    </a>
    <pix-link
      v-for="item in navItems"
      :key="item.id"
      :field="item.primary.link"
      class="text text-xs text-left regular text-black"
    >
      <prismic-rich-text :field="item.primary.title" />
    </pix-link>
  </div>
</template>

<script>
export default {
  name: 'NavPrincipal',
  props: {
    mainNavItems: {
      type: Array,
      default: null
    }
  },
  computed: {
    navItems() {
      return this.mainNavItems.filter((navItem) => {
        const [{ text }] = navItem.primary.title
        return text !== 'Accueil'
      })
    }
  }
}
</script>

<style>
.btn-nav {
  transition: all ease-in 0.2s;
}
</style>
