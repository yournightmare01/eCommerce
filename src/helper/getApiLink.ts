export const getApiLink = (sort?: 'asc' | 'desc', limit = 15) => {
  const sortExt = sort
    ? sort === 'asc'
      ? '&sort_on=price&sort_order=asc'
      : '&sort_on=price&sort_order=desc'
    : null;

  let apiLink = `https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179&limit=${limit}${
    sortExt || ''
  }`;
  return apiLink;
};
