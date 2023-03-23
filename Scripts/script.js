function menuOpen(){
    let opt = document.querySelector('.info');

    if(opt.style.display == 'none'){
        opt.style.display = 'flex';
    } else {
        opt.style.display = 'none';
    }

}

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
document.querySelector('#year').innerHTML = `Em desenvolvimento por Dian Luca desde: ${anoAtual}` ;


//Alteração Social Medias Links


function changeSocialMediaLinks() {
    const SocialMedia = {
        youtube: '',
        facebook: '',
        instagram: 'dianluca1',
        twitter: ''
    };

    for (let li of socialLinks.children){
        const social = li.getAttribute('class');
        console.log(social);
        li.children[0].href = `https://${social}.com/${SocialMedia[social]}`;
    }
}
changeSocialMediaLinks()
