import React from "react"
import { Image } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { showProps }from "../types/types"
import "./Show.css"


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
                <div className="show-text">
                        {this.props.title}
                </div>
                <Image className="show-image" src={this.props.image_url} alt={this.props.title} />
            </div>
        )
    }
}

export default Show