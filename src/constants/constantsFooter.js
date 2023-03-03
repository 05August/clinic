import { ROUTE } from "./constantsGlobal";
export const WIDGET_DATA = {
  quickLink: [
    {
      title: "About Us",
      path: ROUTE.ABOUT_US,
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

export const SOCIAL_LIST = [
  {
    url: "http://facebook.com",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAY1BMVEUAAABHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZO78QseAAAAIHRSTlMA8vpnK/TcqmHXcmlb6cK57eGzoZd8VBTIrJElHx4cETFoB1QAAACcSURBVCjPjdLdDoIwDAXgQ9nGgKEICP7r+z+lnTHTUZt4rrp8SXcuCvi6kKlbIDx+p0SnSA9ShGDz9+TnOcQ9FsU31BfEbHgsMqEFiozgLGezE1IyhPixEP/eJKVl2aoySKmMubPcjDGHXPZIGVRZtZ4SXCkXci4AODnXy26N2rpkqf4Qq4gFKULoVnJM27zolub2c2+eZXxNrsETzpIz2qSkL9QAAAAASUVORK5CYII=",
    alt: "facebook",
  },
  {
    url: "http://twitter.com",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAclBMVEUAAAADqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfRwDYv8AAAAJXRSTlMAb/l2EwjkuMsk3dHGoptjKPHt2LuulZBNRT85NDAdFw2lh2dX/mUM0wAAALJJREFUKM+t0dcSgyAQQNEFRMQee9cU/v8XA4OC7S25Tzt7xoER+ENtHRGuhhmg43ZPmVARTvIJwM2oEU9sNbMU4acrJAZCRqSoz7UwYSoBoFSDj5yDVCBz9IyLV2KPQQpS9DCLg1Ac3EgDsljc5OhzroX6rkN4kTfoPuwEeIXFvd5sLT1BACZeYGwBO7BryK30YJtQYPbuuG37yPOFLbaPtez+YxaPcIi2pHpGNeoo/NgXMxwp+PXS8X4AAAAASUVORK5CYII=",
    alt: "twitter",
  },
  {
    url: "http://instagram.com",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACwVBMVEUAAAD/PQDpAGTxAEjtAFL/dADpR4vmAHToAGv/uAD/hwD/fQDlAH3sAVr/kQD/aADjAIbuAVH/XgDhAI//pgDxAUP/FgD/sAD/SgDdAJ//ugD/AAn+ADX/NQD6ASrkAJX/LgD8AR//BQL/AFD/MAD/IADbALT/KQDiAI3/MAD/mQD/OgDlAIXrAHn7ACr/TwD/bwDfAMr/jAD/RQDzADnpAGf/WwD/AgL/AE3/ABP/CQDjAJ3+AA3/FAD8ARPqAGP/cwD/nADXAKzeAJ/qAGP/cwD/nAD/FADwAUj7ARD/1AD/VAD/VAD+ADrfAJjfAJj/0QDxAT//RADWAK3/RAD/AADzATb+ADr7ABP+AC/9AEb/FAD/tAD/TgD/PwDdAKH0ATb/OAD/TwD9AET/QAD+ADD/AQ//FQD2AS7ZAKnqAJj/xAD/wgDbAKr/AAD6ARn/HgD9AE3/QwD/AEL/rgD/WAD/rwD/WwD9AE7/HwD/AADfAJzuAI//XwD/YgDsAIr+ARr/AC74AST/AQb/BwD/zwD3ASTeAI7/MwD/zQD4ASP/pAD/ACv/qQD+ASj/KgD/ARn1AC34ASf/LwD/mgDvAHn/BwD0ATb/AAT/2gD/hwD/fgD/XwDmAIX/2QDlAHP/IQD/XQD/ABn3AIL7AHn/XgD/HQD/rwD/tAD/HAD/2wDaAKj/AAj/xAD/IgD/CgDdAJ/9AEv2ASn4AR7/AQH/XAD/TgDhAI7jAITsAH7lAHznAHLpAGrqAGDtAVjwAUb9AEPyAT7+ADj0ATT+AC7+ASb+AR7/ART/uQD/pAD/mgD/kAD/hQD/ewD/cAD/WAD/UgD/RwD/QgD/NgD/NAD/LAD/KgD/GQDYALLfAJffAJXoAInxAHnuAVDuAU/9AET9AEH7ARH/AwH/zgD/rgD/rQD/ZwD/ZgD/TQD/PgD/PQC8CZerAAAAq3RSTlMA2UVFPDsH+Pj4+Pj39/f39vb28fHt7Onp3NnU0baonZyTiX5ybmxjVlFLS0pIRkZFRD8/Pjw7OjAqGg8L+/r5+ff29vb29PTz8/Lx8O3r5ubl5eLi4d/c3Nva2tnZ1dTT0c/NzcvLx8G/u7W1raulpaKhoKCgmZmXlpaUkIB8e3t4dnVycG5ra2hkY2JiYGBfV1dWUlFRTUlIR0VFQD89PTY0MiwoIx4UDwqN856xAAAB2klEQVQoz2XJU2MbUAAG0C/Jktp2u9Xa1m5dNdu2bdu2rdpt2Ki2bdv4Fc29zUva83pAvLM9stXEQGeFupq2vtHmwxedOaAW7JGIxQV5OV3ZWZkZ6akpbSLu9rk0+nl9l199/c1isZhMppen62s7EbeVlKlwZwBUBVlwl3HgIlgYCBWP7RC0nOsMm+YrquGV1nEO90VnwWh0ARXgcHL38Tv+iOlMewDXdguYj7nReF5SXFSY35M8C9E/Ac+UTdhQ50HihZRn9eTTU+teRSmEphrBsHY2gLgW4SUQ13OT/QGEp+tDT0bGXrAfk6xzrwKYn6GNlSMhABhNTsr5kL+PTKYatKrnANjW4KYc78KNAGZkqUOziszB+jfK+VK0l0z2YuhW/gdwU35IOaeKbcl062BVxT8AsTXyazTu8UqiAMzLMYBxuTsUHslGTzh+dzotlM4Embw1MCv7AeJhjby+oUnQQgPeBSawHHwPKvL2sR1H7SNAfRPvwoXSG5jOQXIGb/kaCdMieK3kGTjr+Afip0SgFW9RMBA2wNe49dHdx4fNZvv5+fp6fL67Wij9A4W/W/ilQ2XlFZVV1cOy2rrxxmaB6S9QSS/PW5oZL9XV1FqiZ7jenGHjmAhgAoiZoDeT/QKtAAAAAElFTkSuQmCC",
    alt: "instagram",
  },
  {
    url: "http://linkedin.com",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAhLH////2+/zR6fFottEvm799bY6GAAAAMUlEQVQY02MgHwgKoPAEcfMCBQgYxSRoANcnKCIIJOE8EBBA8ARQeAyMKDwGGvHIBgCHpQW6rT569gAAAABJRU5ErkJggg==",
    alt: "linkedin",
  },
];

export const ICON_ANIMATION_DATA = [
  {
    url: "https://i.postimg.cc/jjFtfytV/wave.png",
    className: "wave",
    style: { top: 100, left: 130, zIndex: 1 },
  },
  {
    url: "https://i.postimg.cc/cHv1kXX4/updown.png",
    className: "updown",
    style: { bottom: 180, left: 30 },
  },
  {
    url: "https://i.postimg.cc/jjFtfytV/wave.png",
    className: "wave",
    style: { bottom: 120, right: 60 },
  },
  {
    url: "https://i.postimg.cc/BnCvj8js/rotate.png",
    className: "rotate",
    style: { top: 180, right: 40 },
  },
];
