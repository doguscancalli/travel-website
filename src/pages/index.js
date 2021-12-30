import React from 'react'

import Seo from '../components/Seo'
import Wrapper from '../components/ui/Wrapper'
import Divider from '../components/ui/Divider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TourTypes from '../components/TourTypes'
import CreateMemoriesText from '../components/CreateMemoriesText'
import ToursList from '../components/ToursList'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <Seo title="Anasayfa" />
    <Wrapper innerPadding>
      <Navbar />
    </Wrapper>
    <Divider />
    <Wrapper innerPadding>
      <Hero />
    </Wrapper>
    <Divider />
    <Wrapper innerPadding>
      <TourTypes />
    </Wrapper>
    <Divider />
    <Wrapper>
      <CreateMemoriesText />
      <ToursList />
    </Wrapper>
    <Divider />
    <Wrapper>
      <Instagram />
    </Wrapper>
    <Wrapper innerPadding>
      <Footer />
    </Wrapper>
  </>
)

export default IndexPage
