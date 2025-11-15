const services = [
  {
    name: "Hot Stone Massage",
    description:
      "En afslappende behandling med opvarmede sten, der løsner muskelspændinger og forbedrer blodcirkulationen.",
    options: [
      { duration: "60 min", price: "650 DKK" },
      { duration: "90 min", price: "900 DKK" },
    ],
  },
  {
    name: "Varm Olie Massage",
    description:
      "En blid og beroligende massage med varm olie, perfekt til afstresning og velvære.",
    options: [
      { duration: "30 min", price: "300 DKK" },
      { duration: "60 min", price: "500 DKK" },
      { duration: "90 min", price: "750 DKK" },
      { duration: "120 min", price: "900 DKK" },
    ],
  },
  {
    name: "Aroma Massage",
    description:
      "En duftende oplevelse med æteriske olier, der bringer både krop og sind i balance.",
    options: [
      { duration: "30 min", price: "300 DKK" },
      { duration: "60 min", price: "500 DKK" },
      { duration: "90 min", price: "750 DKK" },
      { duration: "120 min", price: "900 DKK" },
    ],
  },
  {
    name: "Body Scrub + Damp (10 min gratis)",
    description:
      "En eksfolierende kropsbehandling med damp, der efterlader huden blød og fornyet.",
    options: [
      { duration: "60 min", price: "900 DKK" },
      { duration: "90 min", price: "1200 DKK" },
    ],
  },
  {
    name: "Traditionel Thai Massage",
    description:
      "En fast og energigivende behandling med stræk og trykpunkter, uden olie.",
    options: [
      { duration: "30 min", price: "300 DKK" },
      { duration: "60 min", price: "500 DKK" },
      { duration: "90 min", price: "750 DKK" },
      { duration: "120 min", price: "900 DKK" },
    ],
  },
  {
    name: "Olie Massage",
    description:
      "En klassisk afslappende massage med olie, ideel til at reducere stress og spændinger.",
    options: [
      { duration: "30 min", price: "300 DKK" },
      { duration: "60 min", price: "500 DKK" },
      { duration: "90 min", price: "750 DKK" },
      { duration: "120 min", price: "900 DKK" },
    ],
  },
  {
    name: "Deep Tissue & Sportsmassage",
    description:
      "En dybdegående behandling rettet mod muskelknuder og sportsrelaterede spændinger.",
    options: [
      { duration: "30 min", price: "400 DKK" },
      { duration: "60 min", price: "700 DKK" },
      { duration: "90 min", price: "1000 DKK" },
    ],
  },
  {
    name: "Hurtig / Fod / Nakke / Skulder Massage",
    description:
      "En kort og fokuseret behandling for dig med travlt eller lokale spændinger.",
    options: [
      { duration: "20 min", price: "200 DKK" },
      { duration: "30 min", price: "300 DKK" },
    ],
  },
  // {
  //   name: "Voksbehandlinger (Wax)",
  //   description: "Professionel voksbehandling til både mænd og kvinder.",
  //   options: [
  //     { duration: "25 min", label: "Hele arme", price: "385 DKK" },
  //     { duration: "15 min", label: "Underarme", price: "250 DKK" },
  //     { duration: "20 min", label: "Armhuler", price: "315 DKK" },
  //     { duration: "30 min", label: "Ryg inkl. skuldre", price: "395 DKK" },
  //     { duration: "25 min", label: "Bikini", price: "375 DKK" },
  //     { duration: "35 min", label: "Brazilian & tanga", price: "699 DKK" },
  //     { duration: "35 min", label: "Hele ben", price: "499 DKK" },
  //     { duration: "20 min", label: "Underben", price: "350 DKK" },
  //     { duration: "30 min", label: "Bryst", price: "375 DKK" },
  //     { duration: "40 min", label: "Bryst & mave", price: "459 DKK" },
  //     { duration: "15 min", label: "Øre og næsebor", price: "300 DKK" },
  //     { duration: "10 min", label: "Øre", price: "175 DKK" },
  //     { duration: "10 min", label: "Øre", price: "200 DKK" },
  //     { duration: "15 min", label: "Øre & næsebor", price: "300 DKK" },
  //     { duration: "15 min", label: "Overlæbe", price: "100 DKK" },
  //     { duration: "20 min", label: "Overlæbe & hage", price: "190 DKK" },
  //     { duration: "20 min", label: "Hals", price: "165 DKK" },
  //   ],
  // },
  {
    name: "Brude Makeup & Hårstyling",
    description:
      "En elegant brudeopsætning med makeup og hårstyling til din store dag.",
    options: [{ duration: "–", price: "1000 DKK" }],
  },
  {
    name: "Manicure & Pedicure",
    description:
      "Forkæl dine hænder og fødder med en skøn behandling for pleje og velvære.",
    options: [
      { duration: "–", label: "Polish manicure", price: "425 DKK" },
      { duration: "–", label: "Normal manicure", price: "250 DKK" },
      { duration: "–", label: "Pedicure", price: "250 DKK" },
    ],
  },
];

export default services;