import { href } from "react-router-dom";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#services",
    isDropdown: true,
    subItems: [{
      id: 1,
      name: "Amazon FBA Prep & FBM",
      href: '/services/amazon-fba-fbm'
    },
    {
      id: 2,
      name: "WFS Prep Services",
      href: '/services/wfs-service'

    },
    {
      id: 3,
      name: "Courier & Delivery",
      href: '/services/courier-delivery'

    },
    {
      id: 3,
      name: "Warehouse Support",
      href: '/services/warehouse-support'

    },




    ]
  },
  { name: "Products", href: "/products" },
  { name: "Media", href: "/media" },
  { name: "Payment", href: "/payment" },
  { name: "Contact", href: "/contact" },
];