const categoriesElement = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesElement.length}`);

categoriesElement.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});