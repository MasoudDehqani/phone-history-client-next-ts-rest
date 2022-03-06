import { useState } from "react";

export default function useInputValues(inputId: string, newInputValue: string) {
  const [inputValues, setInputValues] = useState({
    brand: "",
    model: "",
    priceRange: 1
  })

  return { inputValues, setInputValues }
}
