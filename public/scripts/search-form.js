const searchForm = (data) => {
    const containerPosts = document.getElementById('containerPosts'),
    searchInput = document.getElementById('searchInput'),
    dataIteration = _.map( data, (post) => { return post.title }),
    awesompleteConfig = { maxItems: 7, minChars: 3, list: dataIteration},
    awesompleteObj = new Awesomplete(searchInput, awesompleteConfig),
    form = document.getElementById('form'),
    button = document.getElementById('submitBtn');
    let initialPosts = [];

    _.map(data, post => {
        if(initialPosts.length < 9){
            initialPosts.push(post);
        }
    });
    
    const buttonActivity = (event) => {
        event.preventDefault();
        if ( searchInput.value.length <= 2) {
            button.classList.add('disabled');
        } else {
            button.classList.remove('disabled');
        }
    };

    const createPost = (event) => {
        event.preventDefault();
        if (searchInput.value.length > 2) {
            let awesomeNodes = [];
            containerPosts.innerHTML = '';
            //containerPosts.innerHTML = 'Loading...';
            //awesomplete_list_1 is a default ul hidden from awesomplete.js plugin
            const childNodes = document.getElementById('awesomplete_list_1').childNodes;
            
            _.map( childNodes, node => {
                searchInput.value = node.textContent;
                awesomeNodes.push(searchInput.value);
             }) 
            
            _.map( data, posts => {
                _.map( awesomeNodes, option => {
                    if (option === posts.title) {
                        let card = 
                        `<div class="pure-u-1-3">
                            <img src="${posts.image}"><h2>${posts.title}</h2><p>${posts.teaser}</p>
                        </div>`;
                        $(containerPosts).html(card);
                   }
                })
            });
        }
    };

    _.map( initialPosts, post => {
        const containerPost = document.createElement('div'), image = document.createElement('img'),
        title = document.createElement('h2'),
        containerText = document.createElement('p'),
        titleText = document.createTextNode(post.title),
        teaser= document.createTextNode(post.teaser);
        
        image.src = post.image;
        containerPost.className = 'pure-u-1-3';
        containerPost.id = post.id;
       
        title.appendChild(titleText);
        containerText.appendChild(teaser);
        containerPost.appendChild(image);
        //console.log(image.src);
        containerPost.appendChild(title);
        containerPost.appendChild(containerText);
        containerPosts.appendChild(containerPost);
    });

    form.addEventListener('submit', createPost);
    searchInput.addEventListener('keyup', buttonActivity);
}
