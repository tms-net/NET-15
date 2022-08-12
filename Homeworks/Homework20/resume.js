// Используйте объект document для поиска и создания элементов DOM
// Используйте объекты Element для создания дерева DOM
// Используйте свойство style объектов Element для изменения стилей

var myName = document.querySelector('h1');
myName.textContent = 'Alexandr Usenko';

var header = document.getElementsByClassName('.header');
header.textContent = 'Not full copy from LI';

var mobile = document.querySelector('pMobile');
mobile.textContent = '+375259987575';

var textTitle2 = document.querySelector('title2');
textTitle2.textContent = 'TeachMeSkills';

var grayStyle = document.querySelector('pGray');
