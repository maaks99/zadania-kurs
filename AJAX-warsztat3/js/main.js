let endOfThePage = 0;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

const getData = () => {
    
    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data =>{

        let body = document.body;
        let hr = document.createElement('hr');
        body.appendChild(hr);

        for(let user of data) {
            let pId = document.createElement('p');
            let pName = document.createElement('p');
            let pWebsite= document.createElement('p');

            pId.innerText = `User ID: ${user.id}`;
            pName.innerText = `User name: ${user.name}`;
            pWebsite.innerText = `User url: ${user.website} <br />---------`;

            body.appendChild(pId);
            body.appendChild(pName);
            body.appendChild(pWebsite);
            
        }

        hidePreloader();
    })
    .catch(error => {
        console.log(error);
    });

}


const scrollToEndOfPage = () => {
    
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;

    let sumaSctrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumaSctrollTopClientHeight: ${sumaSctrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log('==============');

    if(sumaSctrollTopClientHeight >= scrollHeight) {
        endOfThePage ++;
        console.log(`przeskrolowano do końca strony ${endOfThePage}`);

        showPreloader();
        getData();
    }

}
window.addEventListener('scroll', scrollToEndOfPage);