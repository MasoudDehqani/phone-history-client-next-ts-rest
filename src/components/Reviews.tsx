import { ReviewType } from "~utils/types";
import AddReviewInput from "./AddReviewInput/AddReviewInput";

export default function Reviews({ data } : { data: ReviewType[] }) {
  console.log(data)
  return (
    <div>
      {data.map(({ rate, review_text, review_id }) =>
        <div key={review_id}>
          <h2>{rate}</h2>
          <p>{review_text}</p>
        </div> 
      )}
      <AddReviewInput />
    </div>
  )
}
