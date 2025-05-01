import '../styles/globals.css'
import Layout from "../components/layout/Layout";
//_app.js is a special file
// acts as a root component in nextjs
function MyApp({ Component, pageProps }) {
  // adding Layout here ensure that the navbar is visible to all component and page routes
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
