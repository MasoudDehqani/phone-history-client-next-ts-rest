import Link from "next/link"
import { Dispatch, useContext, useEffect } from "react"
import usePhoneContext from "~components/Hooks/usePhoneContext"
import type { PhoneType } from "~utils/types"

export default function Table({ phones, dispatch } : { phones: PhoneType[], dispatch: Dispatch<any> }) {

  // handleAddPhone = () => {

  // }

  const handleDeletePhone = (id: string) => {
    return async () => {
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

  const mapPhonesToTableRows = ({ id, brand, model, price_range } : PhoneType) => {

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
          <button className="text-red-600" onClick={handleDeletePhone(id)}>DELETE</button>
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