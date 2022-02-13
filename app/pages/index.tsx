import 'tailwindcss/tailwind.css'
import AccountsTable from './componets/accountsTable'
import Header from './componets/header'
import Footer from './componets/footer'
import Buttons from './componets/buttons'
// import { GetStaticProps } from "next";
// import superjson from 'superjson';
// import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import React from 'react'



const Home = ()=> {
  return (
    <>
    <div>
      <Header/>
      <AccountsTable/>
      <Buttons/>
      <Footer/>
    </div>
      
    </>
    
  )
}
export default Home;