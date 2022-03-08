import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Phones from '../src/components/Phones'
import { PhoneType } from '~utils/types'
import styles from '../styles/Home.module.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import usePhoneContext from '~components/Hooks/usePhoneContext'
import phoneReducer, { PhoneStateActions } from '~components/Reducers/phoneReducer'
import usePhoneReducer from '~components/Hooks/usePhoneReducer'
import { handlePhonesServerSideRequests } from "../src/utils/handleServerSideRequest"
import { PhonesDataContext } from '~components/Context/PhonesDataContext'

export default function Home({ phones } : { phones: PhoneType[] }) {
  return (
    <Phones data={phones} />
  )
}

export const getServerSideProps = handlePhonesServerSideRequests()