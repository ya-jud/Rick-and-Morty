import { defineStore } from 'pinia'

export const useCharactersStore = defineStore({
    id: 'characters',
    state: () => ({}),
    getters: () => ({}),
    actions: {
        consoletest() {
            console.log('Store is worked!')
        },
    } 
})

export default useCharactersStore