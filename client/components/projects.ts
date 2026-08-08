export interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  path: string;
}

export const PROJECTS_LIST: Project[] = [
  {
    id: "archivia",
    title: "Archivia",
    subtitle: "Pen holder",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e",
    path: "/archivia",
  },
  {
    id: "pizzamente",
    title: "PizzaMente",
    subtitle: "Academic Workshop",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
    path: "/pizzamente",
  },
  {
    id: "nando",
    title: "Nando",
    subtitle: "Hyperplastic cutlery handle",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088",
    path: "/nando",
  },
  {
    id: "snake",
    title: "Snake",
    subtitle: "Hockey stickhandling trainer",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e",
    path: "/snake",
  },
  {
    id: "wafflemaker",
    title: "Waffle Maker",
    subtitle: "Waffle Maker analysis",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
    path: "/wafflemaker",
  },
  {
    id: "prop",
    title: "Prop",
    subtitle: "3D-Printed Emergency Crutch",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
    path: "/prop",
  },
  {
    id: "ttable",
    title: "T-Table",
    subtitle: "Interactive feeding-friendly table",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc",
    path: "/ttable",
  },
];