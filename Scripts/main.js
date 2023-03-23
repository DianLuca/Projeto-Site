//Listagem das Tecnologias

let modalKey = 0;

const c = (el)=> document.querySelector(el);
const cs = (el)=> document.querySelectorAll(el);

tecJson.map((item, index) => {
    let tecItem = c('.models .tec-item').cloneNode(true);

    tecItem.setAttribute('data-key', index);
    tecItem.querySelector('.tec-item--name').innerHTML = item.name;
    tecItem.querySelector('.tec-item--desc').innerHTML = item.description;
    tecItem.querySelector('.tec-item--img img').src = item.img;
    tecItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.tec-item').getAttribute('data-key');
        modalKey = key;

        c('.tecBig img').src = tecJson[key].img;
        c('.tecInfo h1').innerHTML = tecJson[key].name;
        c('.tecInfo--desc').innerHTML = tecJson[key].description;

        c('.tecWindowArea').style.opacity = 0;
        c('.tecWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.tecWindowArea').style.opacity = 1;
        }, 200);

    });
    

    c('.tec-area').append( tecItem );
});

function closeModal(){
    c('.tecWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.tecWindowArea').style.display = 'none';
    }, 500);
}