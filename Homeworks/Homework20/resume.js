// Используйте объект document для поиска и создания элементов DOM
// Используйте объекты Element для создания дерева DOM
// Используйте свойство style объектов Element для изменения стилей




var myResume = document.querySelector('h1');myResume.textContent = 'Резюме';

var myName = document.querySelector('myName');myName.textContent = 'Усенко Евгений Игоревич';


var myEmail = document.querySelector('myEmail');myEmail.textContent = 'ysen1997@gmail.com';

var myWork = document.querySelector('work');myWork.textContent = 'Работа:';

var myEducation = document.querySelector('education');myEducation.textContent = 'Образование:';

var myAboutMe = document.querySelector('aboutMe');myAboutMe.textContent ='О себе';

var colorArray = ["#24305E", "#116466", "#4F4A41", "#9D8D8F", "#27263D"]; 
var i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}