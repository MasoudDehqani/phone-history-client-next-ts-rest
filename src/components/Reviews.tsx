import { useState } from "react";
import { PhoneReviewType, ReviewType } from "~utils/types";
import AddReviewInput from "./AddReviewInput/AddReviewInput";
import ReviewsContext from "./Context/ReviewsContext";
import useReviewsContext from "./Hooks/useReviewsContext";

export default function Reviews({ data } : { data: PhoneReviewType[] }) {
  
  // const [reviews, setReviews] = useState<PhoneReviewType[]>(data)
    
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl m-3 text-center">{`${data[0].brand} ${data[0].model} Reviews`}</h1>
      {data.map(({ rate, review_text, review_id }) =>
        <div className="m-5 bg-blue-500 p-3 shadow-lg rounded-md" key={review_id}>
          {/* <h2 className="font-bold">{`${brand} ${model}`}</h2> */}
          <span>Rate: {rate}</span>
          <p>{review_text}</p>
        </div> 
      )}
      <AddReviewInput />
    </div>
  )
}
