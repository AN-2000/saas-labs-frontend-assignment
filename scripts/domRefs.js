const appLoader = document.getElementById("app-loader");

const errorWidget = document.getElementById("error-widget");
const errorText = errorWidget.querySelector(".error-text");

const dataTable = document.getElementById("data-table");
const tbody = dataTable.querySelector("tbody");

const pagination = document.getElementById("pagination");
const pageInput = pagination.querySelector(".page-input");
const firstButton = pagination.querySelector(".first-button");
const nextButton = pagination.querySelector(".next-button");
const prevButton = pagination.querySelector(".prev-button");
const lastButton = pagination.querySelector(".last-button");

export {
  appLoader,
  errorWidget,
  errorText,
  dataTable,
  tbody,
  pagination,
  pageInput,
  firstButton,
  nextButton,
  prevButton,
  lastButton,
};
