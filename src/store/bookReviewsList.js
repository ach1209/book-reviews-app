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
    }
  }
})