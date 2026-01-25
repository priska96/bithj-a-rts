import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { Portfolio } from "../portfolio/Portfolio.jsx";
import { ArtworkDetail } from "../portfolio/ArtworkDetail.jsx";
import { About } from "../about/About.jsx";
import { Commissions } from "../commissions/Commissions.jsx";
import { Contact } from "../contact/Contact.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

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
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
