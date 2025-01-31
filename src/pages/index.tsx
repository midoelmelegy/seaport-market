import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Features from '../components/Features'
import Examples from '../components/Examples'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Layout noFooter={true}>
        <Head>
          <title>Seaport | The ultimate NFT liquidity marketplace</title>
          <meta
            name="description"
            content="Seaport is a blockchain protocol and framework NFT marketplace with a global pool of NFT liquidity."
          />
          <meta name="keywords" content="NFT, API, Market" />
          {/* Twitter */}
          {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
          <meta
            name="twitter:image"
            content="https://www.seaport.market/og.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site:domain"
            content="https://www.seaport.market/"
          />
          <meta
            name="twitter:url"
            content="https://www.seaport.market/"
          />
          {/* should be between 30-60 characters, with a maximum of 70 */}
          <meta
            name="twitter:title"
            content="Seaport Market: A global pool of NFT liquidity."
          />
          {/* should be between 55 and 200 characters long */}
          <meta
            name="twitter:description"
            content="Seaport is a blockchain protocol and framework NFT marketplace with a global pool of NFT liquidity."
          />
          <meta name="twitter:site" content="@Seaport_market" />

          {/* OG - https://ogp.me/ */}
          {/* https://www.opengraph.xyz/ */}
          {/* should be between 30-60 characters, with a maximum of 90 */}
          <meta
            name="og:title"
            content="Seaport Market: A global pool of NFT liquidity."
          />
          <meta property="og:type" content="website" />
          <meta property="og:determiner" content="the" />
          <meta property="og:locale" content="en" />
          {/* Make sure the important part of your description is within the first 110 characters, so it doesn't get cut off on mobile. */}
          <meta
            property="og:description"
            content="Seaport is a blockchain protocol and framework NFT marketplace with a global pool of NFT liquidity."
          />
          <meta property="og:site_name" content="Reservoir Protocol" />
          <meta
            property="og:url"
            content="https://www.seaport.market/"
          />
          {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
          <meta
            property="og:image"
            content="https://www.seaport.market/og.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta property="og:image:alt" content="Seaport Market banner" />
        </Head>
        <div
          className="mx-auto bg-black"
          style={{
            backgroundImage: 'url(/home/bg.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top 15%',
          }}
        >
          <main className="container px-2 pb-24 text-white">
            <div className="grid place-content-center lg:h-screen">
              <motion.div
                className="mt-20 mb-6 text-center text-3xl font-black md:text-[50px] md:leading-[67px] lg:mt-28 lg:text-[60px] lg:leading-[77px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                NFT apps
                <br />
                powered by liquidity
              </motion.div>
              <motion.div
                className="mx-auto mb-16 max-w-2xl text-center text-lg text-[#95a2b3] lg:mb-20 lg:text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
              >
                Seaport gives open and permissionless access to aggregated NFT
                liquidity, unlocking powerful new use cases
              </motion.div>
              <motion.div
                className="mb-14 grid justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 4 }}
                viewport={{ once: true }}
              >
                <a
                  className="mb-24 flex items-center gap-2 rounded-lg py-5 px-11 font-bold text-white hover:text-white hover:no-underline lg:text-lg"
                  style={{
                    background:
                      'linear-gradient(96.53deg, #BD00FF -4.49%, #7000FF 88.79%)',
                  }}
                  href="/docs/api/overview"
                >
                  View the API docs
                  <HiArrowRight />
                </a>
              </motion.div>

              <motion.div
                className="mx-auto mb-36 grid grid-cols-2 gap-4 text-[#f7f8f8] lg:grid-cols-4 lg:justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                viewport={{ once: true }}
              >
                {[
                  'Seaport Marketplace',
                  'Drop-in Buy & Sell',
                  'Portfolio Tracker',
                  'Trait Explorer',
                  'Decentralized Order Book',
                  'Market Maker Bot',
                  'Price Prediction',
                  'NFT Analytics',
                ].map((item) => (
                  <div className="flex items-center gap-2 pl-3">
                    <HiCheckCircle className="h-4 w-4 flex-none" />
                    <div key={item} className="px-3">
                      {item}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />

            <Features />
            <Examples />
            {/* <Faq /> */}
            <Contact />
            <Footer />
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Home
