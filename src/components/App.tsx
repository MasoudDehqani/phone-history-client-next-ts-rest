import { Dispatch, useContext } from "react";
import { PhoneType } from "~utils/types";
// import MainDataContextProvider from "./Context/MainDataContext";
import Header from "./Header/Header";
import usePhoneContext from "./Hooks/usePhoneContext";
import usePhoneReducer from "./Hooks/usePhoneReducer";
import Table from "./Table/Table";

export default function App({ data } : { data: PhoneType[] }) {

  // const context = useContext(MainDataContext)
  // console.log(context)
  // const { phonesData, dispatch } = usePhoneContext()
  const [phonesData, dispatch] = usePhoneReducer(data)

  return (
    <div>
      <Header text="Mobile History" />
      <Table phones={phonesData} dispatch={dispatch} />
    </div>
  )
}