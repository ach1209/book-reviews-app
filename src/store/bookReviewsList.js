import { defineStore } from 'pinia'

export const bookReviewsList = defineStore({
  id: 'reviewsList',
  state: () => ({
    reviewsList: []
  }),
  getters: {
    getBookReviews() {
      return this.reviewsList
    }
  },
  actions: {
    addUserReview(book, recommended, reviewText) {
      this.reviewsList.push(
        {
          bookId: book,
          reviewId: Math.random(),
          isRecommended: recommended,
          userReview: reviewText,
          helpfulCount: 0
        }
      )
    },
    incrementHelpfulCount(id) {
      const getCurrentBook = this.getBookReviews.find(book => book.bookId === id)
      getCurrentBook.helpfulCount += 1
    },
    decrementHelpfulCount(id) {
      const getCurrentBook = this.getBookReviews.find(book => book.bookId === id)
      if (getCurrentBook.helpfulCount === 0) {
        getCurrentBook.helpfulCount = 0
      } else {
        getCurrentBook.helpfulCount -= 1      
      }
    }
  }
})