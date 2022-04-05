import { defineStore } from 'pinia'

export const bookCollections = defineStore({
  id: 'collections',
  state: () => ({
    collectionsList: []
  }),
  getters: {
    getCollections() {
      return this.collectionsList
    }
  },
  actions: {
    addToCollection(id, ...details) {
      // check if book already exists before adding
      if (this.collectionsList.length > 0) {
        this.collectionsList.find(entry => {
          if (entry.id === id) return null
        })
        this.addBookDetails(id, ...details)
      } else {
        this.addBookDetails(id, ...details)
      }
    },
    addBookDetails(id, title, img, status) {
      this.collectionsList.push(
        {
          id: id,
          title: title,
          image: img,
          isInCollection: status
        }
      )
    }
  }
})