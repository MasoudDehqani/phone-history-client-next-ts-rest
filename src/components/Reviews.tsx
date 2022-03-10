import { useRouter } from "next/router";
import { useState } from "react";
import { PhoneReviewDataType, PhoneReviewType, ReviewType } from "~utils/types";
import AddReviewInput from "./AddReviewInput/AddReviewInput";
import ReviewsContext from "./Context/ReviewsContext";
import useReviewsContext from "./Hooks/useReviewsContext";

export default function Reviews({ data } : { data: PhoneReviewDataType }) {
  
  // const [reviews, setReviews] = useState<PhoneReviewType[]>(data)
  const sum = (f: number, s: PhoneReviewType): number => f + +s.rate;
  const { brand, model, noReview, reviews } = data;
  const avgRate = (reviews.reduce(sum, 0) / reviews.length).toFixed(1)
  console.log(reviews)

  const reviewsElements = reviews.map(({ rate, review_text, review_id }) =>
    <div className="m-5 bg-blue-500 p-3 shadow-lg rounded-md" key={review_id}>
      {/* <h2 className="font-bold">{`${brand} ${model}`}</h2> */}
      <span>Rate: {rate}</span>
      <p>{review_text}</p>
    </div> 
  )

  console.log(noReview)
    
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl m-3 text-center">{`${brand} ${model} Reviews`}</h1>
      <h3>{avgRate || 0}</h3>
      {!noReview ? reviewsElements : <h1>No Reviews Yet</h1>}
      <AddReviewInput />
    </div>
  )
}
