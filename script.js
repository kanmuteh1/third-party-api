fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
        .then((response) => response.json())
        .then((data) => {
            var keys = data.recipes
            keys.forEach((items,index) => {
                document.getElementById('container').insertAdjacentHTML
                ('beforeend', `
                <div>
                    <ul>
                        <li>Publisher: ${items.publisher}</li>
                        <li>Title: ${items.title}</li>
                        <li>Source URL: <a href="${items.source_url}">This links to the source</a></li>
                        <li>Recipe ID: ${items.recipe_id}</li>
                        <li>Image: <br><img src="${items.image_url}" width ="200px" height ="100"/></li>
                        <li>Source Rank: ${items.social_rank}</li>
                        <li>Publisher url: <a href="${items.publisher_url}">This links to the publisher</a></li>
                        
                    </ul>
                </div>
                `)
            })
        })