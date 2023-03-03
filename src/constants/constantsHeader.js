import { ROUTE } from "./constantsGlobal";

export const NAV_DATA = [
  {
    title: "Home",
    path: ROUTE.HOME,
  },
  {
    title: "Clinic",
    path: ROUTE.CLINIC,
  },
  {
    title: "Pages",
    path: ROUTE.HOME,
    dropData: [
      {
        title: "About Us",
        path: ROUTE.ABOUT_US,
      },
      {
        title: "Out Team",
        path: "/team",
      },
      {
        title: "Faq's",
        path: "/faq",
      },
      {
        title: "Booking",
        path: "/booking",
      },
      {
        title: "Error 404",
        path: "/error",
      },
      {
        title: "Login/Register",
        path: ROUTE.LOGIN,
      },
    ],
  },
  {
    title: "Services",
    path: ROUTE.HOME,
    dropData: [
      {
        title: "Service",
        path: "/service",
      },
      {
        title: "Service Detail",
        path: "/service-detail",
      },
    ],
  },
  {
    title: "Blog",
    path: "/blogs",
    dropData: [
      {
        title: "Blogs",
        path: "/blogs",
      },
      {
        title: "Blog Detail",
        path: "/blog-detail",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
