import { defineStore } from 'pinia'
import { urls, getData } from '../../api/'

export const useCharactersStore = defineStore({
  id: 'characters',
  state: () => ({
    page: 0,
    next: null,
    list: [],
    data: {}
  }),
  getters: {},
  actions: {
    async getList(url = urls.character) {
      const response = await getData(url)
      this.next = response.info.next
      this.list.push(...response.results)
    },
    async getData(url) {
      const response = await getData(url)
      this.data = response
    }
  } 
})

export default useCharactersStore