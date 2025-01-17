import {
  showError,
  showTable,
  enableLastPageButtons,
  disableLastPageButtons,
  enableFirstPageButtons,
  disableFirstPageButtons,
  enablePageInput,
} from "./render.js";

import {
  nextButton,
  prevButton,
  lastButton,
  firstButton,
  pageInput,
} from "./domRefs.js";

import { parseData, getPageSlice, fetchData } from "./data.js";

let data = null;
let dataSize = null;
let currPage = 1;
let timeout = null;
let totalPages = null;

const init = async () => {
  try {
    /**
     * Entire data is fetched initially as per requirement
     */
    data = await fetchData();
    dataSize = data.length;
    totalPages = Math.ceil(dataSize / 5);
    if (!dataSize) {
      return showError(
        "No data found. Please try again after sometime or contact support at example@support.com"
      );
    }
    pageInput.value = currPage;
    showTable(parseData(getPageSlice(currPage, data)));
    if (dataSize > 5) {
      enableLastPageButtons();
      enablePageInput();
    }
  } catch (err) {
    showError(err.message, false);
  }
};

init();

nextButton.addEventListener("click", () => {
  currPage = currPage + 1;
  if (currPage > 1) enableFirstPageButtons();
  if (currPage === totalPages) disableLastPageButtons();
  showTable(parseData(getPageSlice(currPage, data)));
});

prevButton.addEventListener("click", () => {
  currPage = currPage - 1;
  enableLastPageButtons();
  if (currPage === 1) {
    disableFirstPageButtons();
  }
  showTable(parseData(getPageSlice(currPage, data)));
});

firstButton.addEventListener("click", () => {
  currPage = 1;
  disableFirstPageButtons();
  enableLastPageButtons();
  showTable(parseData(getPageSlice(currPage, data)));
});

lastButton.addEventListener("click", () => {
  currPage = totalPages;
  enableFirstPageButtons();
  disableLastPageButtons();
  showTable(parseData(getPageSlice(currPage, data)));
});

pageInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    const userInput = Number(pageInput.value);
    if (userInput > totalPages || userInput < 1) return;
    currPage = userInput;
    showTable(parseData(getPageSlice(currPage, data)));
  }, 200);
});
