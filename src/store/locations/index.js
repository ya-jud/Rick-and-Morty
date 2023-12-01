import { defineStore } from 'pinia'
import { urls, getData } from '../../api/'

export const useLocationsStore = defineStore({
  id: 'locations',
  state: () => ({
    page: 0,
    next: null,
    list: [],
  }),
  getters: {},
  actions: {
    async getList(url = urls.location) {
      const data = await getData(url)
      this.next = data.info.next
      this.list.push(...data.results)
    }
  } 
})

export default useLocationsStore