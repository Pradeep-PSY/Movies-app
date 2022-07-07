import { navbar } from '../comp/navbar.js';
import { searchM, append } from '../comp/fetch.js'
document.getElementById('navbar').innerHTML = navbar();

let search = JSON.parse(localStorage.getItem('search'))
let movies = document.getElementById('movies')
let input = document.getElementById('input_search')
let inp = document.getElementById('num')


searchM(search, inp.value).then(data => {
    console.log(data);
    append(data, movies)
})




inp.addEventListener('keydown', function () {
    solve(event)
})
function solve(e) {
    if (e.key == 'Enter') {
        console.log(inp.value)
        if (input.value == '') {

            searchM(search, inp.value).then(data => {
                console.log(data)
                append(data, movies)

            })
        }
        else {
            searchM(input.value, inp.value).then(data => {
                console.log(data)
                append(data, movies)

            })

        }
    }
}




input.addEventListener('keydown', function () {
    sea(event)
})
function sea(e) {
    if (e.key == 'Enter') {
        console.log(input.value)
        searchM(input.value, inp.value).then(data => {
            append(data, movies)
      
        })

    }
}