import React from "react"
import { Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./Main.css"
import ShowGrid from "./ShowGrid"
import Seasons from "../variables/seasons.json"
import Versus from "./Versus"
import { showProps } from "../types/types"



type Props = {
    season: string,
    year: string
}

type State = {
    season: showProps[]
    trackedShows: boolean[]
    submitPressed: boolean,
    sortShows: showProps[]
}




export class Main extends React.Component<Props> {
    state: State
    constructor(props: Props) {
        super(props)
        const seasons: Record<string, showProps[]> = Seasons
        let selected: boolean[] = new Array<boolean>(seasons[`${props.season}_${props.year}`].length)
        for (let i = 0; i < selected.length; i++) {
            selected[i] = false
        }
        this.state = {
            season: seasons[`${props.season}_${props.year}`],
            trackedShows: selected,
            submitPressed: false,
            sortShows: []

        }
    }

    handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        this.setState({ 
            submitPressed: true,
            sortShows: this.getSortShows()
        })
    }


    getSortShows = () => {
        return this.state.season.filter((val, idx) => this.state.trackedShows[idx])
    }

    gridRoute = ():JSX.Element => {
        return (
            <div>
                <h1 className="title-header" >{this.props.season} {this.props.year} Anime Season</h1>
                <ShowGrid anime={this.state.season} trackedShows={this.state.trackedShows} />
                <div className="center-wrapper">
                    <Button 
                        size="massive" 
                        fluid 
                        className="submit-button" 
                        loading={this.state.submitPressed} 
                        disabled={this.state.submitPressed} 
                        onClick={this.handleClick}
                        color="vk">
                            Submit
                        </Button>
                </div>
        </div>
        )
    }



    route = (submitPressed: boolean):JSX.Element => {
        if (!submitPressed) {
            return this.gridRoute()
        } else {
            return (
                <Versus sortList={this.state.sortShows} />
            )
        }

    }

    render() {
        return (
            this.route(this.state.submitPressed)
        )
    }
}

export default Main