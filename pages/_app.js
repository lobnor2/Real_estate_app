import "../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import { chakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
