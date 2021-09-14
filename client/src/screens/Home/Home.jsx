import Layout from "../../components/Layout/Layout"
import Banner from "../../components/Banner/Banner"
import FeaturedJams from "../../components/FeaturedJams/FeaturedJams"

export default function Home(props) {
  return (
    <Layout user={props.user}>
      <Banner />
      <FeaturedJams />
    </Layout>
  )
}
