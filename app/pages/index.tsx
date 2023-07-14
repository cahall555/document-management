import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../src/aws-exports";
import 'tailwindcss/tailwind.css'
import EditAccounts from './componets/edit-accounts'
import AccountsTable from './componets/accountsTable'
import Header from './componets/header'
import Menu from './componets/menu'
import Footer from './componets/footer'
import Buttons from './componets/buttons'
import React from 'react'

Amplify.configure({ ...awsExports, ssr: true });


const Home = ()=> {
  return (
    <>
    <div>
    <AmplifyAuthenticator>
	  <div className="flex flex-row mx-auto">
	  <div className="basis-1/3">
	  <Menu/>
	  </div>
	  <div className="">
      <AccountsTable/>
	  </div>
	  </div>
      <Footer/>
	<EditAccounts/>
    </AmplifyAuthenticator>
    </div>
      
    </>
    
  )
}
export default Home;
