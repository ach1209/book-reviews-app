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
    addToCollection(id, title) {
      this.collectionsList.push(
        {
          id: id,
          title: title
        }
      )
    }
  }
})