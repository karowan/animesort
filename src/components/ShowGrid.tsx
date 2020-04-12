import React from "react"
import ShowSelection from "./ShowSelection"
import { Grid } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./ShowGrid.css"
import { showProps }from "../types/types"


type props = {
    anime: showProps[],
    trackedShows: boolean[]
}

type state = {
    trackedShows: boolean[],
    Shows: JSX.Element[]
}


export class ShowGrid extends React.Component<props> {
    state: state
    constructor(props: props) {
        super(props)
        this.state = {
            trackedShows: props.trackedShows,
            Shows: this.getShows(props.anime, this.props.trackedShows)
        }
    }


    getShows = (animeList: showProps[], selected: boolean[]): JSX.Element[] => {
        return animeList.map((anime, idx) => {
            return (
                <Grid.Column key={idx} mobile="16" tablet="8" computer="4" widescreen="3">
                    <ShowSelection index={idx} title={anime.title} url={anime.url} image_url={anime.image_url} selected={selected}/>
                </Grid.Column>
            )
        })
    }

    render() {
        return (
            <div className="ShowGrid-container">
                <div className="ui stackable grid padded relaxed">
                    {this.state.Shows}
                </div>
            </div>
        )
    }
}

export default ShowGrid
