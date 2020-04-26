import React from "react"
import { Grid, Button, Container, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "./Versus.css"
import { showProps } from "../types/types"
import ShowListElement from "./ShowListElement"
import "./FinalList.css"


interface Props {
    sortList: showProps[]
}

interface State {
    buttonText: string
    viewAsList: boolean
}

class FinalList extends React.Component<Props> {
    state: State
    
    constructor(props: Props) {
        super(props)
        this.state = {
            viewAsList: false,
            buttonText: "List"
        }
    }

    createList = (): JSX.Element => {
        let list: JSX.Element[] = []
        for (let key = this.props.sortList.length - 1; key >= 0 ; key--) {
            const element = this.props.sortList[key];
            list.push(<ShowListElement 
                key={key}
                place={this.props.sortList.length - key} 
                url={element.url}
                title={element.title} 
                image_url={(this.state.viewAsList ? "" : element.image_url)}
                image={!this.state.viewAsList}
                 />)
        }
        return (
                <Container  className="show-list" textAlign="center">
                    <Grid  className="center aligned" columns="1" >
                        {list}
                    </Grid>
                </Container>
        )
    }

    handleClick = () => {
        this.setState(() => {
            return {
                buttonText: !this.state.viewAsList ? "Icons" : "List",
                viewAsList: !this.state.viewAsList
            }
        })
    }

    render() {
        return (
            <div>
                <Button 
                className="list-toggle-button"
                onClick={this.handleClick}
                >
                    <Icon name={this.state.viewAsList ? "images" :"list"}></Icon>
                    {this.state.buttonText}
                </Button>
                {this.createList()}
            </div>
        )
    }
}

export default FinalList