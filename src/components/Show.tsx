import React, { MouseEvent } from "react"
import { Header, Image, Icon, Container } from "semantic-ui-react"
import Anime from "./ShowList"
import "semantic-ui-css/semantic.min.css"
import "./Show.css"


interface props {
    index: number,
    url: string,
    title: string,
    image_url: string,
    selected: boolean[]
}

interface state {
    index: number
    url: string,
    title: string,
    image_url: string,
    selected: boolean[]
}

export class Show extends React.Component<props> {
    state: state
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
                    <Container className="show-text">
                        <Header as="h3" textAlign="center">{this.state.title}</Header>
                    </Container>
                    <Image className="show-image" src={this.state.image_url} alt={this.state.title} bordered={this.state.selected[this.state.index]} />
                </Container>
            </div>
        )
    }
}

export default Show