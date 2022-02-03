import Head  from 'next/head';
import theme from '../theme';
import CssBaseline        from '@mui/material/CssBaseline';
import { ThemeProvider }  from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-responsive-modal/styles.css';

import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/styles.css" />
            </Head>
            <ThemeProvider theme={theme}>
                <Nav />
                <CssBaseline />
                <ToastContainer position='bottom-center' />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp;