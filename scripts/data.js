const fetchData = async () => {
  const response = await fetch("../frontend-assignment.json");
  if (!response.ok) {
    throw new Error(
      "Data couldn't be loaded. Please try again after sometime or contact support at example@support.com."
    );
  }
  const data = await response.json();
  return data;
};

/**
 * 5 record per page is hardcoded here as per requirement.
 */
const getPageSlice = (page, array) => {
  if (page < 1) {
    throw new Error("Page number must be 1 or greater.");
  }

  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;

  return array.slice(startIndex, endIndex);
};

const parseData = (data) => {
  return data.map((el) => {
    return {
      sNo: el["s.no"],
      amountPledged: el["amt.pledged"],
      percentageFunded: el["percentage.funded"],
    };
  });
};

export { parseData, getPageSlice, fetchData };
