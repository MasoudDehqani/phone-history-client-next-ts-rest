import { useContext } from "react";
import { PhoneDataContext } from "~components/Context/MainDataContext";

export default function usePhoneContext() {
  return useContext(PhoneDataContext)
}