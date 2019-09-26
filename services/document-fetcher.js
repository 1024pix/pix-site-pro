import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'

export default function(i18n = { defaultLocale: 'fr-fr' }) {
  const language = i18n.locale || i18n.defaultLocale
  return {
    getTermsOfService: () => {
      return getSingle('cgu_page')
    },
    getStats: () => {
      return getSingle('statistiques')
    },
    getIndex: () => {
      return getSingle('index')
    },
    getNavigation: () => {
      return getSingle('navigation')
    },
    getMediation: () => {
      return getSingle('mediation')
    },
    getHigherEducation: () => {
      return getSingle('higher-education')
    },
    getKeyNumbers: () => {
      return getSingle('key_numbers')
    },
    getEmployers: () => {
      return getSingle('employers')
    },
    getSchoolEducation: () => {
      return getSingle('school-education')
    },
    getAbout: () => {
      return getSingle('about')
    },
    getSkills: () => {
      return getSingle('competences')
    },
    findNewsItems: async ({ page, pageSize } = { page: 1, pageSize: 20 }) => {
      const api = await getApi()
      const documents = await api.query(
        Prismic.Predicates.at('document.type', 'news_item'),
        {
          page,
          pageSize,
          orderings: '[my.news_item.date desc]',
          lang: language
        }
      )
      return documents.results
    },
    getNewsItemByUid: async (slug) => {
      const api = await getApi()
      const document = await api.query(
        Prismic.Predicates.at('my.news_item.uid', slug),
        { lang: language }
      )
      return document.results[0]
    }
  }

  async function getSingle(type) {
    const api = await getApi()
    return api.getSingle(type, { lang: language })
  }

  function getApi() {
    return Prismic.getApi(PrismicConfig.apiEndpoint)
  }
}
