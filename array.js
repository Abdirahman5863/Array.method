const serviceItems = [
  { id: 1, text: "Tours & Experiences", url: "", imageUrl: "/icon.svg" },
  {
    id: 1,
    text: "Travel Concierge & Services",
    url: "/travel-and-coincierge",
    imageUrl: "/car.svg",
  },
  { id: 1, text: "Private chef & Meal Prep", url: "", imageUrl: "/chef.svg" },
  { id: 1, text: "Drinks", url: "", imageUrl: "/drinks.svg" },
  { id: 1, text: "Wellness & Grooming", url: "", imageUrl: "/massage.svg" },
  {
    id: 1,
    text: "Shopping & grocery runs",
    url: "",
    imageUrl: "/shopping.svg",
  },
  { id: 1, text: "Nanny Service", url: "", imageUrl: "/nanny.svg" },
  { id: 1, text: "Rentables", url: "", imageUrl: "/console.svg" },
  { id: 1, text: "Gift shop", url: "", imageUrl: "/gifts.svg" },
  { id: 1, text: "Luggage Shop", url: "", imageUrl: "/luggage.svg" },
  { id: 1, text: "Property Management", url: "", imageUrl: "/house.svg" },
  { id: 1, text: "Housekeeping", url: "", imageUrl: "/Hk.svg" },
];

<div>
  {serviceItems.map((item, index) => [
    <div key={index}>
      <div>{item.text}</div>
      {/* <div>{item.imageUrl}</div>
      <div>{item.url}</div> */}
    </div>,
  ])}
</div>;
const Array1 = ["A", "B", "C", "D"];
const Array2 = ["e", "f"];
const Array3 = [6, 7];

// console.dir(Array1.concat(Array2,Array3))

console.dir([].concat(Array1, Array2, Array3));
