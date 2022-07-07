import { append,showtrending } from '../comp/fetch.js';
import {navbar} from '../comp/navbar.js';
document.getElementById('navbar').innerHTML = navbar();

let input = document.getElementById('input_search')
input.addEventListener('keydown',function(){
 search(event)
})

function search(e) {
    if(e.key == 'Enter') {
        console.log(input.value)
        localStorage.setItem('search', JSON.stringify(input.value))
        window.location.href='search.html'
    }
}

showtrending().then(data => {
    append(data,movies)
})

