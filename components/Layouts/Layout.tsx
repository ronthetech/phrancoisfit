import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar title="Phrancois Fit" />
      {children}
      <Footer title="Phrancois Fit" />
    </div>
  );
};

export default Layout;
