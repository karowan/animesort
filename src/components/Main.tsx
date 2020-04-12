import React from "react"
import { Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./Main.css"
import ShowGrid from "./ShowGrid"
import Versus from "./Versus"
import { showProps } from "../types/types"



type Props = {
    showList: showProps[]
}

type State = {
    showList: showProps[]
    trackedShows: boolean[]
    submitPressed: boolean,
    sortShows: showProps[]
}




export class Main extends React.Component<Props> {
    state: State
    constructor(props: Props) {
        super(props)
        let selected: boolean[] = new Array<boolean>(props.showList.length)
        for (let i = 0; i < selected.length; i++) {
            selected[i] = false
        }
        this.state = {
            showList: props.showList,
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
        return this.state.showList.filter((val, idx) => this.state.trackedShows[idx])
    }

    gridRoute = ():JSX.Element => {
        return (
            <div>
                <div className="center-wrapper-button">
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
                <div className="grid-position">
                    <ShowGrid showList={this.state.showList} trackedShows={this.state.trackedShows} />  
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