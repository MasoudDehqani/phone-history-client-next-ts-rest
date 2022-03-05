import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import App from '../src/components/App'
import { Data, PhoneType } from '~utils/types'
import styles from '../styles/Home.module.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import usePhoneContext from '~components/Hooks/usePhoneContext'
import { PhoneDataContext } from '~components/Context/MainDataContext'
import phoneReducer from '~components/Reducers/phoneReducer'
import usePhoneReducer from '~components/Hooks/usePhoneReducer'
export { getServerSideProps } from "../src/utils/handleServerSideRequest"

const Home = ({ data } : { data: PhoneType[] }) => {

  useEffect(() => {
    
  }, [])

  return (
    // <PhoneDataContext.Provider value={{ phonesData, dispatch }}>
      <div>
        <App data={data} />
      </div>
    // </PhoneDataContext.Provider>
  )
}

export default Home
