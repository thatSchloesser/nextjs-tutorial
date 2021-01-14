//global styles
import '../styles/global.css';

//this top level component allows us to use global styles
//AND keep state when navigating between pages if desired.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
