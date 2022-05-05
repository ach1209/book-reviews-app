import { defineStore } from 'pinia'

export const getResults = defineStore({
  id: 'searchResults',
  state: () => ({
    searchResults: []
  }),
  getters: {
    getAllSearchResults() {
      return this.searchResults
    }
  },
  actions: {
    async fetchSearchResults(searchTerm) {
      if (this.searchResults) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`)
        const results = await response.json()
        this.searchResults = results.items
      } else {
        throw new Error('No matching results were found')
      }
    },
    resetSearchResults() {
      if (this.searchResults) this.searchResults.length = 0
    }
  }
})