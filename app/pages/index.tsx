import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../src/aws-exports";
import 'tailwindcss/tailwind.css'
import AccountsTable from './componets/accountsTable'
import Header from './componets/header'
import Footer from './componets/footer'
import Buttons from './componets/buttons'
import React from 'react'

Amplify.configure({ ...awsExports, ssr: true });


const Home = ()=> {
  return (
    <>
    <div>
    <AmplifyAuthenticator>
      <Header/>
      <AccountsTable/>
      <Buttons/>
      <Footer/>
    </AmplifyAuthenticator>
    </div>
      
    </>
    
  )
}
export default Home;