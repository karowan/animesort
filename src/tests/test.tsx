import React from "react"
import Seasons from "../variables/seasons.json"

let year = "2017"
let season = "winter"

interface Anime {
    url: string,
    title: string,
    image_url: string
}

const seasons: Record<string, Anime[]> = Seasons


export class Test extends React.Component {
    

    


    componentDidMount() {
        console.log(seasons[`${season}_${year}`][0].url);
    }

    render() {
        return (
            <p>test</p>
        )
    }
}

export default Test