export const ROUTE = {
  HOME: "/",
  NOT_FOUND: "*",
  LOGIN: "/login",
};

export const WIDGET_DATA = {
  quickLink: [
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Booking",
      path: "/booking",
    },
    {
      title: "Faq's",
      path: "/faq",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Out Team",
      path: "/team",
    },
  ],
  ourService: [
    {
      title: "Dental Care",
      path: "*",
    },
    {
      title: "Cardiac Clinic",
      path: "*",
    },
    {
      title: "Massege Therapy",
      path: "*",
    },
    {
      title: "Cardiology",
      path: "*",
    },
    {
      title: "Precise Diagnosis",
      path: "*",
    },
    {
      title: "Abmbulance Services",
      path: "*",
    },
  ],
};

export const NAV_DATA = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Pages",
    path: "/",
    dropData: [
      {
        title: "About Us",
        path: "/about-us",
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
        path: "/login",
      },
    ],
  },
  {
    title: "Services",
    path: "/",
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
