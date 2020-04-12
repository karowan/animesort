import React from "react"
import { showProps } from "../types/types"
import { List, Item  } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./ShowListElement.css"

type indexedShowType = showProps & {place: number}

export class ShowListElement extends React.Component<indexedShowType> {
    render() {
        return (
            <List.Item className="show-list-element">
                <Item.Group>
                    <Item>
                        <Item.Image as="a" size="tiny" src={this.props.image_url} href={this.props.url} rel="noopener noreferrer" target="_blank" />
                        <Item.Content>
                            <Item.Content as="h1" className="list-item-title" href={this.props.url}>{this.props.title}</Item.Content>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </List.Item>
            
        )
    }

}

export default ShowListElement