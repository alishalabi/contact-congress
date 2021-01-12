fetch("https://theunitedstates.io/congress-legislators/legislators-social-media.json")
  .then(res => res.json())
  .then(json => handleData(json))
  .catch(err => console.log(err.message))

function handleData(data) {
  getAllSocial(data, "R000600")
}

function getAllSocial(data, bioguide) {
  const result = data.filter(person => person.id.bioguide == bioguide)
  const twitter = result[0].social.twitter
  const facebook = result[0].social.facebook
  const youtube = result[0].social.youtube_id

  const rootTwitter = document.getElementById("twitter-span")
  const rootFacebook = document.getElementById("facebook-span")
  const rootYoutube = document.getElementById("youtube-span")



}
