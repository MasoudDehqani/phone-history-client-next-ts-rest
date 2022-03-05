import { useRouter } from 'next/router'
import App from '../../src/components/App'
import { useState, useEffect, useContext, useCallback } from 'react'
// import { MainDataContext } from '../../src/components/Context/MainDataContext'
import { PhoneType } from '~utils/types'
import usePhoneReducer from '~components/Hooks/usePhoneReducer'
export { getServerSideProps } from '../../src/utils/handleServerSideRequest'

export default function Brand({ data } : { data: PhoneType[] }) {

  // const [mainData, setMainData] = useContext(MainDataContext)

  const router = useRouter()

  // const refreshData =  useCallback(() => {
  //   router.replace(router.asPath);
  // }, [router])

  // useEffect(() => {
  //   // setMainData(data)
  //   refreshData()
  // }, [refreshData])

  // console.log(state)


  // const refreshData = () => {
  //   router.replace(router.asPath);
  // }

  // const handleChangeData = () => {
  //   refreshData()
  // }
  
  return (
    <div>
      <App data={data} />
    </div>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const data = await fetch(`http://localhost:5001/api/v1/phones/${ctx.params.brand}`);
//   const { data: { phones } } = await data.json()


//   return {
//     props: {
//       data: phones
//     }
//   }
// }