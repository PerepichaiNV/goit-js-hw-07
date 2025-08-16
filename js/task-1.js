const listCategories = document.querySelector('#categories');
const itemsCategory = listCategories.querySelectorAll('.item');

console.log(`Number of categories: ${itemsCategory.length}`);

itemsCategory.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category Name: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});