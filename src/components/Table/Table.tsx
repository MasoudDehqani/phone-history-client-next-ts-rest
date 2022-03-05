import Link from "next/link"
import { Dispatch, useContext, useEffect } from "react"
import usePhoneContext from "~components/Hooks/usePhoneContext"
import type { PhoneType } from "~utils/types"

export default function Table({ phones, dispatch } : { phones: PhoneType[], dispatch: Dispatch<any> }) {

  // const { dispatch } = usePhoneContext()

  const handleDeletePhone = (id: string) => {
    return async () => {
      console.log(id)
      console.log(JSON.stringify({ id }))
      try {
        const response = await fetch('http://localhost:5001/api/v1/phones', {
          method: "DELETE",
          body: JSON.stringify({ id }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
  
        const data = await response.json()
        dispatch({ type: "DELETE", payload: { id } })
      } catch(err) {
        console.log(err)
      }
    }
  }

  // useEffect(() => {
  //   handleDeletePhone()
  // }, [])

  const mapPhonesToTableRows = ({ id, brand, model, price_range } : PhoneType) => {

    // let handleDeleteData = () => {
    //   setMainData(prev => prev |> Js.Array.filter((ph) => ph.id !== id))
    // }

    // let priceRangeSymbol = switch price_range {
    //   | #1 => "$"
    //   | #2 => "$$"
    //   | #3 => "$$$"
    //   | #4 => "$$$$"
    //   | #5 => "$$$$$"
    // }

    // let priceRangeString = switch price_range {
    //   | #1 => "1"
    //   | #2 => "2"
    //   | #3 => "3"
    //   | #4 => "4"
    //   | #5 => "5"
    // }

    const tdClassName = "border text-center px-8 py-4"
    const priceRangeSymbol = "$"

    return (
      <tr key={id}>
        <td className={tdClassName}>
          <Link href={`/brands/${brand}`}>
            <a>{brand}</a>
          </Link>
        </td>
        <td className={tdClassName}>
          <Link href={`/phones/${model}`}>
            <a>{model}</a>
          </Link>
        </td>
        <td className={tdClassName}>
          <Link href={`/price-ranges/${price_range}`}>
            <a>{priceRangeSymbol.repeat(price_range)}</a>
          </Link>
        </td>
        <td className={tdClassName}>
          <button onClick={handleDeletePhone(id)}>DELETE</button>
        </td>
      </tr>
    )
  }

  return (
    <div className="flex justify-center w-full">
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-center px-8 py-4">Brand</th>
            <th className="bg-blue-100 border text-center px-8 py-4">Model</th>
            <th className="bg-blue-100 border text-center px-8 py-4">Price Range</th>
          </tr>
        </thead>
        <tbody>
          {phones.map(mapPhonesToTableRows)}
        </tbody>
      </table>
    </div>
  )
}