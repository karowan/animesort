import React, { MouseEvent } from "react"
import Show from "./Show"
import "semantic-ui-css/semantic.min.css"
import "./ShowList.css"
import Seasons from "../variables/seasons.json"


interface props {
    season: string,
    year: string
}

interface state {
    selected?: number[],
    Shows?: JSX.Element[]
}

interface Anime {
    url: string,
    title: string,
    image_url: string
}


const seasons: Record<string, Anime[]> = Seasons

export class ShowList extends React.Component<props> {
    state: state
    constructor(props: props) {
        super(props)
        this.state = {
            selected: [],
            Shows: this.getShows(props.year, props.season)
        }
    }


    getShows = (year: string, season: string): JSX.Element[] => {
        return seasons[`${season}_${year}`].map(anime => {
            return (
                <div className="sixteen wide mobile eight wide tablet four wide computer column">
                    <Show title={anime.title} url={anime.url} image_url={anime.image_url}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="showlist-container">
            <div className="ui stackable grid padded relaxed">
                    <div className="sixteen wide mobile eight wide tablet four wide computer column">
                        <Show 
                            url="https://myanimelist.net/anime/40902/Shokugeki_no_Souma__Gou_no_Sara"
                            title="Shokugeki no Souma: Gou no Sara" 
                            image_url="https://cdn.myanimelist.net/images/anime/1813/106300.jpg"/>
                    </div>
                    <div className="sixteen wide mobile eight wide tablet four wide computer column">
                        <Show 
                            url="https://myanimelist.net/anime/40540/Sword_Art_Online__Alicization_-_War_of_Underworld_2nd_Season" 
                            title="Sword Art Online: Alicization - War of Underworld 2nd Season" 
                            image_url="https://cdn.myanimelist.net/images/anime/1438/105106.jpg"/>
                    </div>
                    <div className="sixteen wide mobile eight wide tablet four wide computer column">
                        <Show 
                            title="Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen" 
                            url="https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen" 
                            image_url = "https://cdn.myanimelist.net/images/anime/1764/106659.jpg"/>
                    </div>
                    <div className="sixteen wide mobile eight wide tablet four wide computer column">
                        <Show 
                            url="https://myanimelist.net/anime/40221/Kami_no_Tou" 
                            title="Kami no Tou" 
                            image_url="https://cdn.myanimelist.net/images/anime/1702/106229.jpg"/>
                    </div>
            </div>
            </div>
        )
    }
}

export default ShowList
