import '../styles/globals.css'
import { useEffect }  from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //Fixed SSR Material UI Styles
   // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[]);
  return <Component {...pageProps} />;
}

export default MyApp;
