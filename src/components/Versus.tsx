import React from "react"
import { Grid, Header, List } from "semantic-ui-react"
import Show from "./Show"
import "semantic-ui-css/semantic.min.css"
import "./Versus.css"
import { showProps } from "../types/types"
import ShowListElement from "./ShowListElement"


interface Props {
    sortList: showProps[]
}

interface State {
    sortList: showProps[],
    j: number,
    i: number,
    done: boolean,
    temp: showProps
}

export class Versus extends React.Component<Props> {
    state: State
    constructor(props: Props) {
        super(props)
        this.state = {
            sortList: props.sortList,
            j: 0,
            i: 1,
            done: props.sortList.length <= 1 ? true : false,
            temp: props.sortList[1]
        }
    }

    insertionSort = (greater: boolean) => {
        let sortList = this.state.sortList
        if (this.state.j >= 0 && greater) {
            sortList[this.state.j + 1] = sortList[this.state.j]
            if (this.state.j !== 0) {
                this.setState(state => {
                    return {
                        j: this.state.j - 1,
                        sortList: sortList
                    }
                })
            } else {
                this.incrementForLoop(true)
            }
            
        } else {
            this.incrementForLoop(false)
        }

        if (this.state.i === this.state.sortList.length) {
            this.setState(state => {
                return {
                    done: true
                }
            })
        }

    }

    incrementForLoop = (finishedWhile:boolean) => {
        let { sortList, j, i } = this.state
        j = j - +!!finishedWhile
        sortList[j + 1] = this.state.temp
        i = i + 1
        j = i - 1
        let updateIndices = i !== sortList.length
        if (!updateIndices) {
            this.setState(state => {
                return {
                    sortList: sortList,
                    done: true
                }
            })
        } else {
            this.setState(state => {
                return {
                    sortList: sortList,
                    i: i,
                    j: j,
                    temp: sortList[i]
                }
            })
        }
        
    }
    


    handleA = (event: React.MouseEvent) => {
            event.preventDefault()
            this.insertionSort(true)
        } 

    handleB = (event: React.MouseEvent) => {
            event.preventDefault()
            this.insertionSort(false)
        } 


    createList = (): JSX.Element => {
        let list: JSX.Element[] = []
        for (let key = this.state.sortList.length - 1; key >= 0 ; key--) {
            const element = this.state.sortList[key];
            list.push(<ShowListElement 
                key={key}
                place={this.state.sortList.length - key} 
                url={element.url}
                title={element.title} 
                image_url={element.image_url}
                 />)
        }
        return (
            <div className="show-list">
                <List celled={true} divided={true} >
                    {list}
                </List>
            </div>
        )
    }


    isFinished = (done: boolean)  => {
        if (this.state.sortList.length === 0) {
            return (
                <div>You know how you got here and I won't style this text just for you.</div>
            )
        }
        if (done) {
            
            return (
                this.createList()
            )
        }

        return (
            <div className="versus">
                <Header as="h1" className="center-wrapper">Select the better of the two.</Header>
                <Grid className="ui" stackable padded relaxed columns={2} centered>
                    <Grid.Column mobile="16" tablet="8" computer="4" widescreen="3">
                        <div className="a option" onClick={this.handleA}>
                            <Show 
                                url={this.state.sortList[this.state.j].url} 
                                title={this.state.sortList[this.state.j].title}
                                image_url={this.state.sortList[this.state.j].image_url} 
                                />
                        </div>
                        
                    </Grid.Column>
                    <h1>Vs.</h1>
                    <Grid.Column mobile="16" tablet="8" computer="4" widescreen="3">
                        <div className="b option" onClick={this.handleB}>
                            <Show 
                                url={this.state.temp.url} 
                                title={this.state.temp.title}
                                image_url={this.state.temp.image_url} 
                                />
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


    render() {
        return this.isFinished(this.state.done)
    }

}

export default Versus