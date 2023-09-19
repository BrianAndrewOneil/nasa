//User enters a date and is rewarded with NASA's pic of the day for that date. See api rules here: https://api.nasa.gov/
//query with my API key: https://api.nasa.gov/planetary/apod?api_key=mRrfgdVzMpGE2iQ7grTHwnvDwr5YEkIwD0A5eckB

document.querySelector('button').addEventListener('click', getNasaPic)
function getNasaPic(){
    let date = document.querySelector('input').value
    let media = ''
    fetch(`https://api.nasa.gov/planetary/apod?api_key=mRrfgdVzMpGE2iQ7grTHwnvDwr5YEkIwD0A5eckB&date=${date}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        data.media_type=== 'video' ? 
            media = `<div class="videoWraper"><iframe src="${data.url}"  allowfullscreen></iframe></div>` 
            : 
            media = `<img src="${data.hdurl}" alt="${data.title}">`
        document.querySelector('#POD').innerHTML = `
        <section class="nasaPic">
                ${media}
		<section class="picDetails">
			<h2 id="title">${data.title}</h2>
			<p id="description">${data.explanation}</p>
		</section>
	</section>
        `
    })
    .catch(err => {
        console.log(`error ${err}`)  
        document.querySelector('#welcome').replaceWith("We're sorry, the NASA API is down. Please come back and try again soon.")      // document.querySelector('#welcome')
    });
}
