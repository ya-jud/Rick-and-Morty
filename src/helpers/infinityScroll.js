export class InfinityScroll {
  constructor(store) {
    this.store = store
  }
  
  addInfinityScroll() {
    // not universal but ok for now
    let oldPos = 0
    let oldLength = 0
    let isLoading = true
    window.addEventListener('scroll', () => {
      // scroll down only
      if(oldPos >= window.scrollY) return
      oldPos = window.scrollY
      
      // check new data from store
      if(oldLength != this.store.list.length) {
        oldLength = this.store.list.length
        isLoading = false
      }

      // if true return nothing
      if(isLoading) return

      if(
        document.documentElement.offsetHeight + 100 -
        (window.scrollY + window.outerHeight)
        <= 100
      ) {
        if(this.store.next === null) return console.log('Data is done!')
        this.store.getList(this.store.next)
        isLoading = true
      }
    })
  }
}