import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Phones from '../src/components/Phones'
import { PhoneType } from '~utils/types'
import styles from '../styles/Home.module.css'
import { handlePhonesServerSideRequests } from "../src/utils/handleServerSideRequest"

export default function Home({ phones } : { phones: PhoneType[] }) {
  return (
    <Phones data={phones} />
  )
}

export const getServerSideProps = handlePhonesServerSideRequests()