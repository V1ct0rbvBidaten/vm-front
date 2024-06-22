export const paginarArray = (array, pageNumber, itemsPerPage) => {
  // Calculate the starting index of the items on the current page
  const startIndex = (pageNumber - 1) * itemsPerPage;

  // Extract items for the current page
  const pageItems = array.slice(startIndex, startIndex + itemsPerPage);

  // Return the items for the current page
  return pageItems;
};
