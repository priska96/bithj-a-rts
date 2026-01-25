import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home";
import { Portfolio } from "../portfolio/Portfolio";
import { ArtworkDetail } from "../portfolio/ArtworkDetail";
import { About } from "../about/About";
import { Commissions } from "../commissions/Commissions";
import { Contact } from "../contact/Contact";
import { NotFound } from "./NotFound";
import { Layout } from "./Layout";
import { FAQ } from "../faq/FAQ";

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
