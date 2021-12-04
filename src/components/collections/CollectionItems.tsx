// napravi da se cena automatski kalkulise ako postoji procenat od stare cene
// dodaj slike za svaki produkt u jedan array

export type collectionItems = {
  link: string;
  company: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  oldPrice: string;
  gender: string;
  collection: string;
  type: string;
};

export const CollectionData: collectionItems[] = [
  {
    link: 'asd',
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptatum nesciunt amet tenetur voluptates facilis eius aliquid animi accusamus dolorem.',
    price: '$125.00',
    discount: '50%',
    oldPrice: '$250.00',
    gender: 'women',
    collection: 'fall',
    type: 'sneakers',
  },
];
