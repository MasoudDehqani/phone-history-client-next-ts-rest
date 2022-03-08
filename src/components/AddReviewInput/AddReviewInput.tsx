import BaseUrls from "constants/baseUrls"
import { useRouter } from "next/router"
import { useState } from "react"
import { CrudMethods } from "~utils/types"

export default function AddReviewInput() {

  const router = useRouter()
  console.log(router)
  const [rateInput, setRateInput] = useState(1.0)
  const [reviewInput, setReviewInput] = useState("")
  const [reviewId, setReviewId] = useState("")
  console.log(reviewId)

  const handleAddReview = async () => {
    console.log(`${BaseUrls.ReviewsBaseUrl}${router.query.reviewCategory}`)
    const response = await fetch(`${BaseUrls.ReviewsBaseUrl}${router.query.reviewCategory}`, {
      method: CrudMethods.POST,
      body: JSON.stringify({
        id: "",
        rate: rateInput,
        review_text: reviewInput
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json()
    console.log(data)
    setReviewId(data.data.id)
  }

  return (
    <div>
      <span>RATE: </span>
      <input onChange={(e) => setRateInput(Number(e.target.value))} value={rateInput} type="number" step={0.1} min={1.0} max={5.0} />
      <span>REVIEW: </span>
      <input onChange={(e) => setReviewInput(e.target.value)} value={reviewInput} type="text" />
      <button onClick={handleAddReview} className="bg-purple-400 rounded-md p-2 mx-2">SEND REVIEW</button>
    </div>
  )
}
