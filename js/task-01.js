// console.log(
//   "Number of categories: " +
//     document.getElementById("categories").getElementsByClassName("item").length
// );

// const doc = document.getElementById("categories").children;

// for (let i = 0; i < doc.length; i++) {
//   let category = doc[i].getElementsByTagName("h2")[0].innerHTML;
//   console.log("Category: " + category);

//   let count = doc[i].getElementsByTagName("li").length;
//   console.log("Count: " + count);
// }


"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Count: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

