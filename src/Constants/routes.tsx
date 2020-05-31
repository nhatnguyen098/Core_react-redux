import React, { lazy, Suspense } from "react";
const HomePage = lazy(() => import("../Containers/Home"));
const AboutPage = lazy(() => import("../Containers/About"));
const ProductList = lazy(() => import("../Containers/ProductList"));
const ProductDetail = lazy(() => import("../Containers/ProductDetail"));
const NotFound = lazy(() => import("../Containers/NotFound"));
const LoginPage = lazy(() => import("../Containers/Login"));
const UserProfile = lazy(() => import("../Containers/UserProfile"));
interface IRoutes {
  match: any;
  history: any;
}
export const NavbarMenu = [
  {
    id: 1,
    path: "/",
    label: "Home",
    exact: true,
    children: [],
    main: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: "/product",
    label: "Product",
    exact: true,
    children: [],
    main: (routes: IRoutes) => (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: 3,
    path: "/about",
    label: "About",
    exact: true,
    children: [],
    main: (routes: IRoutes) => (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: 4,
    path: "/product/:id",
    exact: true,
    children: [],
    main: (routes: IRoutes) => (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: 5,
    path: "/userProfile",
    exact: true,
    children: [],
    main: (routes: IRoutes) => (
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfile match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: 6,
    path: "/login",
    exact: true,
    children: [],
    main: (routes: IRoutes) => (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: -1,
    path: "",
    exact: false,
    children: [],
    main: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
];
