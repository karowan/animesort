import React from "react"
import { Container, Header, Image } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { showProps }from "../types/types"


export class Show extends React.Component<showProps> {
    state: showProps
    constructor(props: showProps) {
        super(props)
        this.state = {
            url: props.url,
            title: props.title,
            image_url: props.image_url
        }
    }
    

    render() {
        return (
            <div >
                <Container className="show-text">
                    <Header as="h3" textAlign="center">
                        {this.props.title.length < 47 ? this.props.title : this.props.title.substr(0, 44) + "..."}
                    </Header>
                </Container>
                <Image className="show-image" src={this.props.image_url} alt={this.props.title} />
            </div>
        )
    }
}

export default Show