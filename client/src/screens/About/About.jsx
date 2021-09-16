import Layout from "../../components/Layout/Layout"
import "./About.css"
export default function About(props) {
  return (
    <Layout user={props.user}>
      <div className="about-container">
        <div className="first-about">
          <div className="info-about">
            <h1>About Us</h1>
            <h4 className="info">
              We are a small grassroots company brought together by our passion
              of jam. g'JAM is proud to say that all of our ingredients come
              directly from us or local farms and fruit curators. We can always
              guarantee the freshest of fruits and spicies due to this and it is
              something we are commited to stand by. We believe that everyone is
              unique, so why shouldn’t your jam be unique too? GJAM began one
              day right in our backyards when we were pushed to action by the
              over sugared, super overpreserved jams that saturate the market
              today. Grab any store brand and dip a spoon in and enjoy your
              single scoop sugar overdose. Then taste ours once you have
              recovered and the decision will be made for you, you will never go
              back! The one thing we hear most from our satisified customers is
              that they do not expierence the cloying taste that is so often
              assosicated with store brand. Basically ours is better in
              everyway. Our jam is a must for any health food snob that can't go
              a day without telling someone how they should switch over to
              organic and locally sourced so they can get that brief sense of
              superiorty that brightens an otherwise dull life for a just a
              moment.
            </h4>
          </div>
          <img
            className="first-image"
            src="https://i.imgur.com/48ffGSy.png"
            alt="picture of jam"
          />
        </div>
        <div className="second-about">
          <img
            className="second-image"
            src="https://i.imgur.com/48ffGSy.png"
            alt="picture of jam"
          />
          <div className="info-process">
            <h1>Our Process</h1>
            <h4 className="info">
              Our superb chef Josh curates all of our jam flavors by combining
              his knowledge of great flavor combinations with his obsession for
              taking risks. We spend time in the completely seperate test
              kitchen for awhile, then the products, if not taking from our own
              garden, are procured through local farmers, supporting our region
              and sticking it to the corporations. Believe it or not, canning
              our jams is the most important step in our process. Every single
              jam is jarred by our jam-jarring expert Jexica. The jars are
              sanatized and filled in hot, and then we stick it upside down for
              awhile. Why do we do this? Basically sanatation and it prevents
              oxygen from getting into our stellar jam. This makes it possible
              for the jars to sit on a shelf for up to a year without spoiling.
              But honestly, if our jam sits on your shelf for up to a year just
              lose our number, we don't want your business. All of our jams are
              made by hand by Casey in very small batches. We cook our jams in
              one of two ways: slow cooking, to produce a thick non-cloying
              buttery spread, or quick cooking, to retain as much color and
              flavor in the fruit as possible. We add no sugar, gone with the
              pectin and we will literally die before putting preservatives in
              our jam. Enjoy with a spoon, spread on toast or bread. Or
              Garrett's personal favorite, just open it and use your hand as a
              scoop.
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}
