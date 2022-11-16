import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import AffiliatesModule from "../components/AffiliatesModule/AffiliatesModule"
import Affiliate from "../components/AffiliatesModule/Affiliate"
import Services from "../components/Services/Services"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Northwest Technique"
          subTitle="AmSAT Certified Alexander Techique teacher in Oregon, US."
        />
        <BasicTextModule
          title="Aut culpa adipisci in sequi libero ex galisum nihil 33 laboriosam voluptas."
          content="Lorem ipsum dolor sit amet. Aut nobis quasi est necessitatibus fugit id dolores itaque quo reiciendis unde hic esse laborum ea quis perferendis ea tempore error."
          link="/services"
          linkText="View Services"
        />
        <AffiliatesModule>
          <Affiliate title="The Title" content="The content" />
        </AffiliatesModule>
        <Services
          title="Featured Services From Northwest Technique."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Northwest Technique"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
