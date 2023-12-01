import { defineStore } from 'pinia'
import { urls, getData } from '../../api/'

export const useEpisodesStore = defineStore({
  id: 'episodes',
  state: () => ({
    page: 0,
    next: null,
    list: [],
  }),
  getters: {},
  actions: {
    async getList(url = urls.episode) {
      const data = await getData(url)
      this.next = data.info.next
      this.list.push(...data.results)
    }
  } 
})

export default useEpisodesStore