import Layout from "../../components/Layout/Layout";
import FeaturedJams from "../../components/FeaturedJams/FeaturedJams";

export default function Home(props) {
  return (
    <Layout user={props.user} banner={true}>
      <FeaturedJams user={props.user}/>
    </Layout>
  );
}
