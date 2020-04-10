import React, { MouseEvent } from "react"
import { Header, Image, Icon, Container } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./Show.css"


interface props {
    url: string,
    title: string,
    image_url: string,
    selected?: boolean
}

interface state {
    url?: string,
    title?: string,
    image_url?: string,
    selected?: boolean
}

export class Show extends React.Component<props> {
    state: state
    constructor(props: props) {
        super(props)
        this.state = {
            url: props.url,
            title: props.title,
            image_url: props.image_url,
            selected: false
        }
    }


    handleClick = (event: MouseEvent) => {
        this.setState({ selected: !this.state.selected})
    }


    render() {
        return (
            <div className="show-container" onClick = {this.handleClick}>
                <Container className={`selected-${this.state.selected}`}>
                    <Container className="show-text">
                        <Header as="h2" textAlign="center">{this.state.title}</Header>
                    </Container>
                    <Image className="show-image" src={this.state.image_url} alt={this.state.title} />
                </Container>
            </div>
        )
    }
}

export default Show