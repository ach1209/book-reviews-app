import { defineStore } from 'pinia'

export const bookCollections = defineStore({
  id: 'collections',
  state: () => ({
    collectionsList: [
      {
        id: '23N1_vwJlVUC',
        title: 'The Adventures of Sherlock Holmes',
        image: 'http://books.google.com/books/content?id=vb5IAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isInCollection: true,
      },
      {
        id: 'yl4dILkcqm4C',
        title: 'The Lord Of The Rings',
        image: 'http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        isInCollection: true,
      },
      {
        id: '_Fw-xwEACAAJ',
        title: 'The Last Wish',
        image: 'http://books.google.com/books/content?id=_Fw-xwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isInCollection: true,
      },
    ]
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