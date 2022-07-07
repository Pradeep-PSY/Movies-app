


let searchM = async (search, num) => {
    try {

        let resww = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a8048c88841d1947ea18a343448e4679&language=en-US&include_adult=false&query=${search}&page=${num}`)

        let data = await resww.json()
        console.log(data.results)
        return data.results
        // append(data.results)
    } catch (e) {
        console.log(e);
    }
}


const append = (data, movies) => {
    //   let movies =  document.getElementById('movies')
    movies.innerHTML = null;
    console.log(data.length);
    if(data.length == 0){
        let imy = document.createElement('img')
        imy.setAttribute('id','error')
        imy.src='https://media3.giphy.com/media/j9XoexYMmd7LdntEK4/200w.webp?cid=ecf05e47a86nctotztxlcpweylw3gxu5ir654m140ldjqkm2&rid=200w.webp&ct=g'
        movies.append(imy)
    }else{

    data.forEach(({ original_name, title, poster_path, vote_average, overview, release_date }) => {


        let box1 = document.createElement("div");
        box1.setAttribute("class", 'info');
        let box = document.createElement("div");
        box.setAttribute("class", 'overview');
        let div = document.createElement("div");
        div.setAttribute("class", 'arrange')
        let image = document.createElement("img");
        let Title = document.createElement("h2");
        let para1 = document.createElement("p");
        let recom = document.createElement("div");
        let para3 = document.createElement("p");
        let para2 = document.createElement("p");
        para2.setAttribute('class', color(vote_average));
        para3.innerText = `Released : ${release_date}`
        let para4 = document.createElement("h6");
        para4.innerText = 'Recommended'
        recom.append(para4)
            console.log(vote_average)
        function color(vote) {
            if (vote >= 8) {
                box.append(para1, para3, recom)
                return 'green';
            }
            if (vote >= 5) {
                return 'orange';
            }
            else
                return 'red';
        }


        image.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
        Title.innerText = title;
        if (title == undefined) {
            Title.innerText = original_name;
        };
        para1.innerText = overview;
        para2.innerText = vote_average.toFixed(1);

        box1.append(Title, para2);
        box.append(para1, para3);

        div.append(image, box1, box);
        movies.append(div);


    })
}

}

async function showtrending() {
    try {

        const data = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=a8048c88841d1947ea18a343448e4679`);

        const load = await data.json();

        // console.log(load);
        // append(load.results)
        return load.results
    } catch (err) {
        console.log(err);
    }

}


export { searchM, append, showtrending }