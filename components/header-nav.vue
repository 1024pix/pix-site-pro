<template>
  <div class="nav">
    <header>
      <client-only>
        <push-menu :width="'230'">
          <burger-menu-nav
            :top-items="topItems"
            :bottom-items="bottomItems"
            :middle-items="middleItems"
          />
        </push-menu>
      </client-only>
      <div class="nav-principal tablet">
        <div class="container padding-container">
          <div class="switch">
            <nuxt-link to="/">
              <img
                alt="Accueil du site pix.fr"
                class="logo"
                src="/images/pix-logo.svg"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div id="page-wrap">
        <div class="nav-principal desktop">
          <div class="container padding-container">
            <nuxt-link to="/">
              <img
                alt="Accueil du site pix.fr"
                class="logo"
                src="/images/pix-logo.svg"
              />
            </nuxt-link>
            <div class="desktop">
              <main-nav :main-nav-items="mainNavItems" />
            </div>
          </div>
        </div>
        <organization-nav :organization-nav-items="organizationNavItems" />
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainNav from '~/components/main-nav'
import BurgerMenuNav from '~/components/burger-menu-nav'
import OrganizationNav from '~/components/organization-nav'

export default {
  name: 'HeaderNav',
  components: {
    MainNav,
    BurgerMenuNav,
    OrganizationNav
  },
  computed: mapState([
    'organizationNavItems',
    'mainNavItems',
    'topItems',
    'bottomItems',
    'middleItems'
  ])
}
</script>

<style scoped></style>
