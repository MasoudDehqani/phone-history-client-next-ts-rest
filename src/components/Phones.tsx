import { useRouter } from "next/router";
import { Dispatch, useContext, useEffect } from "react";
import { PhonesDataType, PhoneType } from "~utils/types";
import AddPhoneInputs from "./AddPhoneInput/AddPhoneInputs";
import { PhonesDataContext } from "./Context/PhonesDataContext";
// import MainDataContextProvider from "./Context/MainDataContext";
import Header from "./Header/Header";
import usePhoneContext from "./Hooks/usePhoneContext";
import usePhoneReducer from "./Hooks/usePhoneReducer";
import { PhoneStateActions } from "./Reducers/phoneReducer";
import Table from "./Table/Table";

export default function Phones({ data } : { data: PhoneType[] }) {

  const [phonesData, dispatch] = usePhoneReducer(data)
  const router = useRouter()

  // useEffect(() => {
  //   dispatch({ type: PhoneStateActions.FILL, payload: { arrayToFill: data } })
  // }, [data, dispatch])

  return (
    <PhonesDataContext.Provider value={{ phonesData, dispatch }}>
      <Header text="Mobile History" />
      {router.asPath === "/" ? <AddPhoneInputs /> : null}
      <Table />
    </PhonesDataContext.Provider>
  )
}