import React from "react"
import Main from "./Main"
import "./Main.css"
import { showProps } from "../types/types"
import Seasons from "../variables/seasons.json"

type Props = {
    season: string,
    year: string
}

type State = {
    showList: showProps[]
}

export class DatabaseWrapper extends React.Component<Props> {
    state: State
    constructor(props: Props) {
        super(props)
        const seasons: Record<string, showProps[]> = Seasons
        this.state = {
            showList: seasons[`${props.season}_${props.year}`],
        }
    }

    render() {
        return (
            <div>
                <h1 className="title-header" >{this.props.season} {this.props.year} Anime Season</h1>
                <Main showList={this.state.showList} />
            </div>
        )
    }
} 

export default DatabaseWrapper