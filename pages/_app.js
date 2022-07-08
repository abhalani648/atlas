import '../styles/index.css'
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/global.css';
import '../public/assets/css/home.css';

function MyApp({ Component, pageProps }){  
  return(
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp