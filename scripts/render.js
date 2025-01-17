import {
  appLoader,
  errorWidget,
  errorText,
  dataTable,
  pageInput,
  firstButton,
  nextButton,
  prevButton,
  lastButton,
} from "./domRefs.js";

const hideElement = (el) => {
  el.classList.add("hidden");
};

const showElement = (el) => {
  el.classList.remove("hidden");
};

const showTable = (data) => {
  hideElement(appLoader);
  hideElement(errorWidget);
  let generatedHtml = "";
  data.forEach((el) => {
    generatedHtml += `<tr>
            <td>${el.sNo}</td>
            <td>${el.percentageFunded}</td>
            <td>${el.amountPledged}</td>
          </tr>`;
  });
  dataTable.querySelector("tbody").innerHTML = generatedHtml;
  showElement(dataTable);
};

const showError = (msg) => {
  hideElement(dataTable);
  hideElement(appLoader);
  errorText.innerHTML = msg;
  showElement(errorWidget);
};

nextButton.addEventListener("click", () => {});

const disableFirstPageButtons = () => {
  firstButton.disabled = true;
  prevButton.disabled = true;
};
const enableFirstPageButtons = () => {
  firstButton.disabled = false;
  prevButton.disabled = false;
};
const enableLastPageButtons = () => {
  nextButton.disabled = false;
  lastButton.disabled = false;
};
const disableLastPageButtons = () => {
  nextButton.disabled = true;
  lastButton.disabled = true;
};

const enablePageInput = () => {
  pageInput.disabled = false;
};

export {
  showError,
  showTable,
  enableLastPageButtons,
  disableLastPageButtons,
  enableFirstPageButtons,
  disableFirstPageButtons,
  enablePageInput,
};
