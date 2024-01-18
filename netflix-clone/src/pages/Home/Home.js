import React from 'react'
import Header from '../../componets/Header/Header'
import Footer from '../../componets/Footer/Footer'
import Banner from '../../Banner/Banner'
import RowList from '../../componets/Rows/RowList/RowList'

function Home() {
  return (
    <div>
        <Header />
        <Banner/>
        <RowList/>
        <Footer />
    </div>
  )
}

export default Home