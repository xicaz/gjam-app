import Layout from "../../components/Layout/Layout"
import Banner from "../../components/Banner/Banner"
import FeaturedJams from "../../components/FeaturedJams/FeaturedJams"
import JamModal from "../../components/JamModal/JamModal"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <FeaturedJams />
      <JamModal />
    </Layout>
  )
}
