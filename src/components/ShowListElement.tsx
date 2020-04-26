import React from "react"
import { showProps } from "../types/types"
import { Item, Grid  } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./ShowListElement.css"

type indexedShowType = showProps & {place: number, image: boolean}

export class ShowListElement extends React.Component<indexedShowType> {
    render() {
        return (
            <Grid.Column className="show-list-element ui center aligned">
                <Item.Group>
                    <Item>
                        {this.props.image && <Item.Image as="a" size="tiny" src={this.props.image_url} href={this.props.url} rel="noopener noreferrer" target="_blank" />}
                        <Item.Content>
                            <Item.Content as="h1" className="list-item-title ui center aligned" href={this.props.url}>
                                {!this.props.image && (this.props.place + ". ")}{this.props.title}</Item.Content>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
            
        )
    }

}

export default ShowListElement