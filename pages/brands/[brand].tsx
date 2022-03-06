import App from '../../src/components/App'
import { PhoneType } from '~utils/types'
export { getServerSideProps } from '../../src/utils/handleServerSideRequest'

export default function Brand({ data } : { data: PhoneType[] }) {
  return (
    <div>
      <App data={data} />
    </div>
  )
}
