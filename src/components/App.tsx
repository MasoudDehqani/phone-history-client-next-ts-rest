import { useRouter } from "next/router";
import { Dispatch, useContext } from "react";
import { PhoneType } from "~utils/types";
import AddPhoneInputs from "./AddPhoneInput/AddPhoneInputs";
// import MainDataContextProvider from "./Context/MainDataContext";
import Header from "./Header/Header";
import usePhoneContext from "./Hooks/usePhoneContext";
import usePhoneReducer from "./Hooks/usePhoneReducer";
import Table from "./Table/Table";

export default function App({ data } : { data: PhoneType[] }) {

  const [phonesData, dispatch] = usePhoneReducer(data)
  const router = useRouter()

  return (
    <div>
      <Header text="Mobile History" />
      {router.asPath === "/" ? <AddPhoneInputs dispatch={dispatch} /> : null}
      <Table phones={phonesData} dispatch={dispatch} />
    </div>
  )
}