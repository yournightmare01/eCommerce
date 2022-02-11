export const getApiLink = (sort?: 'asc' | 'desc' | 'created', limit = 20) => {
  const sortExt =
    sort === 'asc'
      ? '&sort_on=price&sort_order=asc'
      : sort === 'desc'
      ? '&sort_on=price&sort_order=desc'
      : sort === 'created'
      ? '&sort_on=created&sort_order=asc'
      : null;

  let apiLink = 'http://localhost:5000/';
  // let apiLink = `https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179&limit=${limit}${
  //   sortExt || ''
  // }`;

  return apiLink;
};

// import axios from 'axios';
// import { useEffect, useState } from 'react';
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/').then(function (response) {
//       setData(response.data);
//     });
//   }, []);

//   console.log(data);
