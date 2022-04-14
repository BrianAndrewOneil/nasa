//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//query with my API key: https://api.nasa.gov/planetary/apod?api_key=mRrfgdVzMpGE2iQ7grTHwnvDwr5YEkIwD0A5eckB

document.querySelector('button').addEventListener('click', getNasaPic)
function getNasaPic(){
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=mRrfgdVzMpGE2iQ7grTHwnvDwr5YEkIwD0A5eckB&date=${date}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        document.querySelector('#title').innerText = (data.title)        
        document.querySelector('#description').innerText = (data.explanation)
        if(data.media_type==='video'){
            document.querySelector('img').src = ""
            document.querySelector('iframe').style.display = 'block'
            document.querySelector('iframe').src = (data.url)
        }else{
            document.querySelector('iframe').style.display = 'none'
            document.querySelector('img').src = (data.hdurl)
        }
    })
    .catch(err => {
        console.log(`error ${err}`)  
    });
}