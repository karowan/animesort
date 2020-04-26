import React from "react"
import ShowSelection from "./ShowSelection"
import { Grid } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./ShowGrid.css"
import { showProps }from "../types/types"


type props = {
    showList: showProps[],
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
            Shows: this.getShows(props.showList, this.props.trackedShows)
        }
    }


    getShows = (showList: showProps[], selected: boolean[]): JSX.Element[] => {
        return showList.map((show, idx) => {
            return (
                <Grid.Column key={idx} mobile="16" tablet="8" computer="4" widescreen="3">
                    <ShowSelection index={idx} title={show.title} url={show.url} image_url={show.image_url} selected={selected}/>
                </Grid.Column>
            )
        })
    }

    render() {
        return (
                <div style={{display: "block"}} className="ShowGrid ui stackable grid">
                    {this.state.Shows}
                </div>
        )
    }
}

export default ShowGrid
