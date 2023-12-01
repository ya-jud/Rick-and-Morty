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
      const data = await getData(url)
      this.next = data.info.next
      this.list.push(...data.results)
    },
    async getData(url) {
      const data = await getData(url)
      this.next = data.info.next
      this.list.push(...data.results)
    }
  } 
})

export default useCharactersStore