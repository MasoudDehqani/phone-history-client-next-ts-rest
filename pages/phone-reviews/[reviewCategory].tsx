import React from 'react'
import Reviews from '~components/Reviews'
import { handleReviewsServerSideRequests } from "~utils/handleServerSideRequest"
import { ReviewType } from '~utils/types'

export default function ReviewCategory({ reviews } : { reviews: ReviewType[] }) {
  return (
    <Reviews data={reviews} />
  )
}

export const getServerSideProps = handleReviewsServerSideRequests()