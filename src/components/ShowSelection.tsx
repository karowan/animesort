import React, { MouseEvent } from "react"
import { Container } from "semantic-ui-react"
import Show from "./Show"
import "semantic-ui-css/semantic.min.css"
import "./ShowSelection.css"


interface props {
    index: number,
    url: string,
    title: string,
    image_url: string,
    selected: boolean[]
}


export class ShowSelection extends React.Component<props> {
    state: props
    constructor(props: props) {
        super(props)
        this.state = {
            index: props.index,
            url: props.url,
            title: props.title,
            image_url: props.image_url,
            selected: props.selected
        }
    }


    handleClick = (event: MouseEvent) => {
        let selected = this.state.selected
        selected[this.state.index] = !selected[this.state.index] 
        this.setState({ selected: selected })
    }


    render() {
        return (
            <div className="show-container" onClick = {this.handleClick}>
                <Container className={`selected-${this.state.selected[this.state.index]}`}>
                    <Show url={this.state.url} title={this.state.title} image_url={this.state.image_url} />
                </Container>
            </div>
        )
    }
}

export default ShowSelection