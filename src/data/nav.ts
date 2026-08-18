export type NavItem = { label: string; href: string; children?: NavItem[] };

export const MENU: NavItem[] = [
  {
    label: "About Us",
    href: "/about/",
    children: [
      { label: "Clients", href: "/clients/" },
      { label: "Catalogue", href: "/download-catalogue/" },
      { label: "Blogs", href: "/blogs/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Certificates", href: "/certificates/" },
    ],
  },
  {
    label: "Tents",
    href: "/tents-suppliers-in-uae/",
    children: [
      { label: "Arcum Tent", href: "/arcum-tent-manufacturers/" },
      { label: "Event Tent", href: "/event-tent-rental-shade-suppliers/" },
      { label: "Steel Tent", href: "/steel-structure-manufacturer-and-suppliers/" },
      { label: "Aluminium Tent", href: "/aluminium-tent-suppliers/" },
      { label: "Wedding Tent", href: "/wedding-tent-rentals/" },
      { label: "High Peak Tent", href: "/hight-peak-tent-manufacturers/" },
      { label: "Labour Tent", href: "/labour-tent-manufacturers/" },
      { label: "Gazebo Tent", href: "/gazebo-tent-manufacturers/" },
      { label: "Dome Tent", href: "/dome-tent-manufacturers/" },
    ],
  },
  {
    label: "Pergola",
    href: "/pergola-shade-suppliers-in-dubai/",
    children: [
      {
        label: "Pergola Shade Designs",
        href: "/new-pergola-shade-designs/",
        children: [
          { label: "Motorized Pergola", href: "/new-motorized-pergola-in-dubai/" },
          { label: "Automatic Pergola", href: "/new-automatic-pergola-in-dubai/" },
          { label: "Smart Pergola", href: "/new-smart-pergola-in-dubai/" },
          { label: "Retractable Pergola", href: "/new-retractable-pergola-in-dubai/" },
          { label: "Flat Roof Pergola", href: "/new-flat-roof-pergola-in-dubai/" },
          { label: "Bioclimatic Pergola", href: "/new-bioclimatic-pergola-in-dubai/" },
        ],
      },
      { label: "Aluminum Pergola", href: "/aluminum-pergola-shade-supplliers/" },
      { label: "Outdoor Pergola", href: "/new-outdoor-pergola-suppliers/" },
      { label: "Fiberglass Pergola", href: "/new-fiberglass-pergola-suppliers/" },
      { label: "Carparking Pergola", href: "/car-parking-pergola-suppliers/" },
      { label: "Flat Fabric Pergola", href: "/new-flat-fabric-pergola-suppliers/" },
      { label: "Transparent Pergola", href: "/new-transparent-pergola-shade-in-dubai/" },
      { label: "Swimming Pool Pergola", href: "/new-swimming-pool-pergola-suppliers/" },
      { label: "Wooden Pergola", href: "/new-wooden-pergola-supplier-in-uae/" },
    ],
  },
  {
    label: "Parking Shades",
    href: "/car-parking-shade-suppliers-uae/",
    children: [
      { label: "Cantilever Parking", href: "/new-cantilever-car-parking-shade/" },
      { label: "Arch Design Parking", href: "/new-arch-design-car-parking-shade/" },
      { label: "Conical Single Pole Parking", href: "/new-conical-single-pole-parking-shade/" },
      { label: "Conical Double Pole Parking", href: "/new-conical-double-pole-parking-shade/" },
      { label: "Top Support Parking", href: "/new-top-support-parking-shades/" },
      { label: "Bottom Support Parking Shade", href: "/bottom-support-car-parking-shade/" },
      { label: "Wave Design Parking", href: "/new-wave-design-parking-shade/" },
      { label: "Pyramid Arch Parking", href: "/new-pyramid-arch-parking-shade/" },
      { label: "New Sail Type Parking", href: "/new-sail-type-parking-shade/" },
      { label: "Pyramid Top Support Parking", href: "/new-pyramid-top-support-parking-shades/" },
    ],
  },
  {
    label: "Shades",
    href: "/new-sun-shade-suppliers-in-dubai/",
    children: [
      { label: "Awning Shade", href: "/new-awning-shades-in-dubai/" },
      { label: "Swimming Pool Shades", href: "/new-swimming-pool-shades-in-dubai/" },
      { label: "Pergola Shades", href: "/pergola-suppliers-in-dubai/" },
      { label: "Umbrella Shades", href: "/umbrella-shades-in-uae/" },
      { label: "Tensile Shades", href: "/tensile-shade-strucutres-in-dubai/" },
    ],
  },
  { label: "Contact", href: "/we-are-here-to-help/" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "All kind of Pergola Shades", href: "/pergola-suppliers-in-dubai/" },
  { label: "All kind of Parking Shades", href: "/car-parking-shade-suppliers-uae/" },
  { label: "All kind of Tensile Shades", href: "/new-sun-shade-suppliers-in-dubai/" },
  { label: "New Awning Shades", href: "/new-awning-shades-in-dubai/" },
  { label: "New Umbrella Shades", href: "/umbrella-shades-in-uae/" },
];

export const CONTACT = {
  company: "Master Tents and Shades LLC",
  mobile: "+971 56 222 1906",
  office: "+971 4 220 3352",
  officeTel: "tel:+97142203352",
  mobileTel: "tel:+971562221906",
  email: "info@mastertentsandshades.com",
  addressLines: ["# 601, Abraj Almamzar", "P.O.Box: 99160, Dubai", "United Arab Emirates"],
  officeTime: "09-00 : 18:00",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=971545410602&text=Hello%0D%0AHow+can+we+help%21&type=phone_number&app_absent=0",
  linkedin: "https://www.linkedin.com/company/mastershades23/",
  instagram: "https://www.instagram.com/mastershade23/",
  twitter: "https://twitter.com/mastershade23",
  facebook: "https://www.facebook.com/mastershade23",
};
