const Axios = require("axios");
const fs = require('fs');
const filepath = "./src/variables/seasons.json"

let years = []
for (let i = 2009; i <= 2020; i++) {
  years.push(`${i}`)
}
const seasons = ["winter", "spring", "summer", "fall"]

const checkType = (year) => {
    return anime => anime.type === "TV" && anime.airing_start && anime.airing_start.substring(0,4) === year
}


const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let generateDB = async (years, seasons) => {
  for (const year of years) {
    for (const season of seasons) {
      await writeFile(year, season)
      await sleep(4000)
    }
  }
}

const writeFile = async (year, season) =>  {
  let res = await Axios.get(`https://api.jikan.moe/v3/season/${year}/${season}`)
  let anime = res.data.anime;
  
  anime = anime.filter(checkType(year)).map(show => {
    return {
      url: show.url,
      title: show.title,
      image_url: show.image_url
    }
  })
  

  fs.appendFileSync(filepath, `"${season}_${year}": `)
  fs.appendFileSync(filepath, JSON.stringify(anime))
  if (!(year === years[years.length - 1] && season === seasons[seasons.length - 1])) {
    fs.appendFileSync(filepath, ",\n")
  }
};

const main = async () => {
  fs.writeFileSync(filepath,"{")
  await generateDB(years, seasons)
  fs.appendFileSync(filepath,"}")
}


main()

