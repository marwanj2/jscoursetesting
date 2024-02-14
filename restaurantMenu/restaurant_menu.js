const breakfastMenu = ["Pancakes",'Egges Benedict', 'Oatmeal','Frittata'];
const maincourseMenu = ['Steak','Pasta','Burger','Salmon'];
const dessertMenu = ['Cake','Ice Cream', 'Pudding','Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let maincourseItem = '';
maincourseMenu.forEach((item, index) => maincourseItem += `<p>Item ${index+1}: ${item}</p>`);
document.getElementById('maincourseMenuItems').innerHTML = maincourseItem;

let dessertItem = '';
for (let i=0; i<dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
