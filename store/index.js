import { documents, documentFetcher } from '~/services/document-fetcher'

export const state = () => ({
  organizationNavItems: [],
  mainNavItems: [],
  topItems: [],
  bottomItems: [],
  middleItems: [],
  resourcesNavItems: [],
  aboutNavItems: [],
  hotNews: null,
})
export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    commit('updateNavigation', await getNavigation(app.i18n))
    commit('updateHotNews', await getHotNews(app.i18n))
  },
  async updateNavigation({ commit }, i18n) {
    commit('updateNavigation', await getNavigation(i18n))
  },
}
export const mutations = {
  updateNavigation(state, navigations) {
    function navItems(response, type) {
      return response.data.body.filter((body) => body.primary.type === type)
    }

    state.organizationNavItems = navItems(
      navigations,
      'pix-pro-organizations-nav'
    )
    state.mainNavItems = navItems(navigations, 'main-nav')
    state.topItems = navItems(navigations, 'burger-menu-top')
    state.bottomItems = navItems(navigations, 'pix-pro-burger-menu-bottom')
    state.middleItems = navItems(navigations, 'pix-pro-burger-menu-middle')
    state.resourcesNavItems = navItems(navigations, 'ressources-nav')
    state.aboutNavItems = navItems(navigations, 'about-nav')
  },
  updateHotNews(state, hotNews) {
    state.hotNews = hotNews && hotNews.data ? hotNews.data.description : null
  },
}

function getNavigation(i18n) {
  return documentFetcher(i18n).get(documents.navigation)
}

function getHotNews(i18n) {
  return documentFetcher(i18n).get(documents.hotNews)
}
