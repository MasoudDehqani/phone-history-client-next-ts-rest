import { useContext } from "react";
import { PhonesDataContext } from "~components/Context/PhonesDataContext";

export default function usePhoneContext() {
  return useContext(PhonesDataContext)
}