import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { Portfolio } from "../pages/portfolio/Portfolio";
import { ArtworkDetail } from "../pages/portfolio/ArtworkDetail";
import { About } from "../pages/about/About";
import { Commissions } from "../pages/commissions/Commissions";
import { Contact } from "../pages/contact/Contact";
import { FAQ } from "../pages/faq/FAQ";
import { NotFound } from "./NotFound";
import { Layout } from "./Layout";
import { RoutePaths } from "./RoutePaths";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PORTFOLIO}
      element={
        <Layout>
          <Portfolio />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.ARTWORK_DETAIL}
      element={
        <Layout>
          <ArtworkDetail />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.ABOUT}
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.COMMISSIONS}
      element={
        <Layout>
          <Commissions />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CONTACT}
      element={
        <Layout>
          <Contact />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.FAQ}
      element={
        <Layout>
          <FAQ />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
