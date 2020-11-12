const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

/* const creatImagesList = images =>{
    const containerImagesRef = document.createElement(`ul`); //создает элемент ul
    const linkImagesRef = document.createElement(`li`); //создает элемент списка li
    linkImagesRef.textContent = images; //добавляет в список текст-содержимое
    containerImagesRef.append(linkImagesRef); //добавляет li в ul
    return containerImagesRef;
}
    
const creatImagesListRootRef = document.querySelector('#gallery');//добавляет созданный элемент в DOM
    
creatImagesListRootRef.insertAdjacentHTML('afterbegin', <li>containerImagesRef</li>) */
/* const containerImagesRef = document.createElement(`ul`); //создает элемент ul
console.log(containerImagesRef);
const linkImagesRef = document.createElement(`li`); //создает элемент списка li
console.log(linkImagesRef);

const image1 = document.createElement('image');
image1.setAttribute('src', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
image1.setAttribute('alt', 'White and Black Long Fur Cat');
console.log(image1);

const image2 = document.createElement('image');
image2.setAttribute('src', 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
image2.setAttribute('alt', 'Orange and White Koi Fish Near Yellow Koi Fish');
console.log(image2);

const image3 = document.createElement('image');
image3.setAttribute('src', 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
image3.setAttribute('alt', 'Group of Horses Running');
console.log(image3);

const creatImagesListRootRef = document.querySelector('#gallery');//добавляет созданный элемент в DOM
creatImagesListRootRef.insertAdjacentHTML('afterbegin', '<li>image1</li>'); */

const creatImagesListRootRef = document.querySelector('#gallery');
images.forEach(element => {
    console.log(element);
    const linkListImagesRef = document.createElement(`li`); //создает элемент списка li
    const linkImagesRef = document.createElement(`img`); //создает элемент списка img
    linkImagesRef.insertAdjacentHTML('afterbegin', element);
    creatImagesListRootRef.append(linkListImagesRef);
    linkListImagesRef.append(linkImagesRef);
    linkImagesRef.setAttribute('src', element.url);
    linkImagesRef.setAttribute('alt', element.src);
}    
)