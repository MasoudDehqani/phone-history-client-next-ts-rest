import { useRouter } from 'next/router'
import usePhoneReducer from '~components/Hooks/usePhoneReducer'
import { PhoneType } from '~utils/types'
import App from '../../src/components/App'
export { getServerSideProps } from '../../src/utils/handleServerSideRequest'

export default function Brand({ data } : { data: PhoneType[] }) {

  const router = useRouter()
  
  return (
    <App data={data} />
  )
}

// export const getServerSideProps = async (ctx) => {
//   const data = await fetch(`http://localhost:5001/api/v1/phones/${ctx.params.priceRange}`);
//   const { data: { phones } } = await data.json()


//   return {
//     props: {
//       data: phones
//     }
//   }
// }