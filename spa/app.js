function main(){
    let hash;
    initRouting();
}

function loadPage(name){
    const contentContainer = document.querySelector('body article');
    contentContainer.innerHTML = 'Loading...';
    name = name ? name : 'about';
    console.log('loadPage detected', name);

    function reqListener () {
        contentContainer.innerHTML = this.responseText;
    }
      
    const xht = new XMLHttpRequest();
    xht.onload = reqListener;
    xht.open("get", `/spa/content/${name}`, true);
    xht.send();

}

function loadPageViaFetch(name){
    const contentContainer = document.querySelector('body article');
    contentContainer.innerHTML = 'Loading via Fetch...';
    name = name ? name : 'about';

    fetch(`/spa/content/${name}`).then(response=>{
        response.text().then(responseText=>{
            contentContainer.innerHTML = responseText;
        }).catch(e=>{
            contentContainer.innerHTML = e;
        })
        
    }).catch(e=>{
        contentContainer.innerHTML = e;
    });

}

function loadData(){
    const contentContainer = document.querySelector('body article');
    contentContainer.innerHTML = 'Loading data...';

    fetch('https://reqres.in/api/users?page=2').then(response=>{
        response.json().then(json=>{
            
            const container = document.createElement('div');
           
            json.data.forEach(element => {
                const item = document.createElement('div');
                const img = document.createElement('img');
                img.setAttribute('src', element.avatar);

                item.append(img);
                item.innerHTML += `<br /><b>${element.email}</b>`;

                container.append(item);
            });

            contentContainer.innerHTML = '';
            contentContainer.append(container);

        }).catch(e=>{
            contentContainer.innerHTML = e;
        })
        
    }).catch(e=>{
        contentContainer.innerHTML = e;
    });
}

function initRouting(){
    hash = location.hash.replace(/^#/,'');
    if(['news'].includes(hash)){
        loadPageViaFetch(hash);
    } else if(hash === 'get-data') {
        loadData();
    } else {
        loadPage(hash);
    }
    window.addEventListener('hashchange', ()=>{
        hash = location.hash.replace(/^#/,'');    
        if(['news'].includes(hash)){
            loadPageViaFetch(hash);
        } else if(hash === 'get-data') {
            loadData();
        } else {
            loadPage(hash);
        }
    });
}

document.onreadystatechange = () => {
    if(document.readyState === 'interactive'){
        main();
    }
}