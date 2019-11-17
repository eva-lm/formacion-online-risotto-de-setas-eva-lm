"use strict";

const url = "./service/data.json";

const getData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};
getData();
