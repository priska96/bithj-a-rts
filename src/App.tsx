import { Suspense, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./general/Router";
import { Loading } from "./components/Loading";

export const PageWithHeader = ({ children }: PropsWithChildren) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense" />
        </PageWithHeader>
      }
    >
      <div className="h-full">
        <Router />
      </div>
    </Suspense>
  </BrowserRouter>
);
