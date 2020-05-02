import React from 'react';
import HomePage from '../Containers/Home'
import AboutPage from '../Containers/About'

export const NavbarMenu = [
  {
    id: 1,
    path: '/',
    label: "Home",
    exact: true,
    children: [],
    main: () => <HomePage/>
  },
  {
    id: 2,
    path: '/about',
    label: "About",
    exact: true,
    children: [],
    main: () => <AboutPage/>
  },
  {
    id: 3,
    label: "Product",
    path: '/productList',
    children: [
      {
        childId: 31,
        childLabel: "Product List",
      },
      {
        childId: 32,
        childLabel: "Product Detail",
      },
    ],
  },
  {
    id: 4,
    label: "Pages",
    children: [
      {
        childId: 41,
        childLabel: "Login page",
        path: '/login',
      },
      {
        childId: 42,
        childLabel: "Sign up page",
        path: '/signup',
      },
      {
        childId: 43,
        childLabel: "Cart page",
        path: '/card',
      },
    ],
  },
  {
    id: 5,
    label: "Blog",
    children: []
  },
  {
    id: 6,
    label: "Contact",
    path: '/contact',
    children: [],
  },
];

