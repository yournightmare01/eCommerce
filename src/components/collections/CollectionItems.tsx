// napravi da se cena automatski kalkulise ako postoji procenat od stare cene
// dodaj slike za svaki produkt u jedan array

export type collectionItems = {
  link: string;
  company: string;
  title: string;
  description: string;
  price: string;
  discount?: string;
  oldPrice?: string;
  gender: string;
  collection: string;
  type: string;
  image?: string;
};

export const CollectionData: collectionItems[] = [
  {
    link: '1',
    company: 'Nike',
    title: 'Nike Air Max BOLT',
    description:
      'Nike Air Max Bolt su muške patike za svakodnevno nošenje inspirisane trčanjem, koje istovremeno pružaju kvalitet i komfor',
    price: '$110.0',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/CU4/CU4151-102/images/thumbs_600/CU4151-102_600_600px.jpg',
  },

  {
    link: '2',
    company: 'Nike',
    title: 'Nike Venture Runner',
    description:
      'Podižući stil originalnog modela na viši nivo, sa udobnim uloškom i gornjištem od antilopa, Nike Venture Runner muške lifestyle patike odaju počast ikoničnim patikama za trčanje iz 80-ih godina.',
    price: '$98.00',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/CQ4/CQ4557-400/images/thumbs_600/CQ4557-400_600_600px.jpg',
  },

  {
    link: '3',
    company: 'Nike',
    title: 'Nike Crate Remixa',
    description:
      'Nike Crate Remixa muške patike dizajnirane su da podrže svaki vaš korak. Napravljene su od najmanje 20% recikliranog materijala. Super mekani srednji đon od Crater pene stvoriće utisak da hodate kao po oblacima',
    price: '$96.30',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/DC6/DC6916-001/images/thumbs_600/DC6916-001_600_600px.jpg',
  },

  {
    link: '4',
    company: 'Nike',
    title: 'Nike Air Max Invigor',
    description:
      'Nike Air Max Invigor su muške patike vrhunskog dizajna. Ovo je super lagani model patika sa osećajem stalne cirkulacije vazduha',
    price: '$140.70',
    oldPrice: '$180.00',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/CW2/CW2648-001/images/thumbs_600/CW2648-001_600_600px.jpg',
    discount: '20%',
  },

  {
    link: '5',
    company: 'Addidas',
    title: 'Addidas Kaptir 2.0',
    description:
      'adidas KAPTIR 2.0 muške patike za trčanje dizajnirane su za ultramekan korak, zahvaljujući jastučićima vrhunskog kvaliteta.Inspirisane nekadašnjim modelima, ove patike dobijaju novi, savremeniji dizajn kojim se ističete na stazi.',
    price: '$115.20',
    oldPrice: '$160.20',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/H00/H00279/images/thumbs_600/H00279_600_600px.jpg',
    discount: '30%',
  },
  {
    link: '6',
    company: 'Addidas',
    title: 'Addidas 8K 2020',
    description:
      'adidas 8K 2020 su muške patike za svaki dan čiji je dizajn inspirisan patikama za trčanje. Donose nostalgičan izgled sa retro detaljima koji se oslanja na legendarne modele adidas brenda.',
    price: '$62.88',
    oldPrice: '$92.12',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/EH1/EH1429/images/thumbs_600/EH1429_600_600px.jpg',
    discount: '20%',
  },
  {
    link: '7',
    company: 'Addidas',
    title: 'Addidas RACER TR21',
    description:
      'Ako ste u potrazi za vrhunskim patikama za trčanje, ovaj model će zadovoljiti vaše potrebe. Minimalistički dizajn postiže se elegantnim linijama. Unapređene Cloudfoam tehnologijom, ove patike poseduju mekane jastučiće, koji omogućavaju pokrete bez opterećenja i izuzetnu udobnost.',
    price: '$150.40',
    gender: 'man',
    collection: 'spring/summer',
    type: 'sneakers',
    image:
      'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/media/GZ8/GZ8185/images/thumbs_600/GZ8185_600_600px.jpg',
  },
];
