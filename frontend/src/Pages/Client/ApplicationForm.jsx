import React from 'react'
import ClientApplicationForm from '../../components/ClientHome/ClientApplicationForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const ApplicationForm = () => {
  return (
    <div>
        <Header/>
            <ClientApplicationForm />
        <Footer/>
    </div>
  )
}

export default ApplicationForm