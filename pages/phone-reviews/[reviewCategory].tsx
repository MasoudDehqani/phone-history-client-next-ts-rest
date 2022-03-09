import { useRouter } from 'next/router'
import React from 'react'
import Reviews from '~components/Reviews'
import { handleReviewsServerSideRequests } from "~utils/handleServerSideRequest"
import { PhoneReviewType, ReviewType } from '~utils/types'
import ReviewsContext from '~components/Context/ReviewsContext'

export default function ReviewCategory({ reviews } : { reviews: PhoneReviewType[] }) {

  const router = useRouter()
  const refreshReviews = () => {
    router.replace(router.asPath)
  }
  return (
    <ReviewsContext.Provider value={{ refreshReviews }}>
      <Reviews data={reviews} />
    </ReviewsContext.Provider>
  )
}

export const getServerSideProps = handleReviewsServerSideRequests()