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
    selected: boolean[],
    Shows?: JSX.Element[]
}

export interface Anime {
    url: string,
    title: string,
    image_url: string
}


const seasons: Record<string, Anime[]> = Seasons

export class ShowList extends React.Component<props> {
    state: state
    constructor(props: props) {
        super(props)
        let selected: boolean[] = new Array<boolean>(seasons[`${props.season}_${props.year}`].length)
        for (let i = 0; i < selected.length; i++) {
            selected[i] = false
        }
        
        this.state = {
            selected: selected,
            Shows: this.getShows(props.year, props.season, selected)
        }
    }


    getShows = (year: string, season: string, selected: boolean[]): JSX.Element[] => {
        return seasons[`${season}_${year}`].map((anime, idx) => {
            return (
                <div key={idx} className="sixteen wide mobile eight wide tablet four wide computer column">
                    <Show index={idx} title={anime.title} url={anime.url} image_url={anime.image_url} selected={selected}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="showlist-container">
            <div className="ui stackable grid padded relaxed">
                {this.state.Shows}
            </div>
            </div>
        )
    }
}

export default ShowList
