import React, {useState, SyntheticEvent, MouseEvent } from "react"
import { Dropdown, Button, DropdownItemProps, DropdownProps, Container } from "semantic-ui-react"
import Axios from "axios"
import "semantic-ui-css/semantic.min.css"
import "./Selection.css"
import { showProps } from "../types/types"
import { Main } from "./Main"

type Anime = showProps & {type: string, airing_start: string}

export function Selection() {
    
    // type showTypes = {

    // }

    const [isLoading, setIsLoading] = useState(false)

    const [submitPressed, setSubmitPressed] = useState(false)
    
    const emptyList: showProps[] = []
    const [showList, setShowList] = useState(emptyList)
    
    let defaultSeason = ((): string => {
        let month = (new Date()).getMonth()
        if (month < 3) {
            return "Fall"
        } else if (month < 6) {
            return "Winter"
        } else if (month < 9) {
            return "Spring"
        } else {
            return "Summer"
        }
        
    })()


    const [season, setSeason] = useState(defaultSeason)
    let todayYear = (new Date()).getFullYear()
    let defaultYear: number = season === "Fall" ? todayYear - 1 : todayYear
    const [year, setYear] = useState(`${defaultYear}`)

    const minYear = 1990

    

    let yearOptions = ((): DropdownItemProps[] => {
        let options: DropdownItemProps[] = []
        for (let i = (new Date()).getFullYear(); i >= minYear; i--) {
            options.push({
                key: `${i}`,
                text: `${i}`,
                value: `${i}`,
            })
        }
        return options
    })()

    let seasonOptions: DropdownItemProps[] = [
        {
            key: "Winter",
            text: "Winter",
            value: "Winter",  
        },
        {
            key: "Spring",
            text: "Spring",
            value: "Spring",  
        },
        {
            key: "Summer",
            text: "Summer",
            value: "Summer",  
        },
        {
            key: "Fall",
            text: "Fall",
            value: "Fall",  
        },
    ]


    const handleYearChange = function(event: SyntheticEvent, data: DropdownProps) {
        setYear(data.value as string)
    }

    const handleSeasonChange = function(event: SyntheticEvent, data: DropdownProps) {
        setSeason(data.value as string)
    }

    const handleSubmit = function(event: MouseEvent) {
        event.preventDefault()
        setSubmitPressed(true)
        setIsLoading(true)
        loadAPI()
    }

    const checkType: (year: string) => (anime: Anime) => boolean = (year: string) => {
        return (anime: Anime) => {
            return anime.type === "TV" && anime.airing_start != null && anime.airing_start.substring(0,4) === year
        }
    }

    const loadAPI = function() {
        Axios.get(`https://api.jikan.moe/v3/season/${year}/${season.toLowerCase()}`)
        .then(res => {
            let anime: Anime[] = res.data.anime;
        
        
            let ret = anime.filter(checkType(year)).map((show: Anime) => {
                return {
                    url: show.url,
                    title: show.title,
                    image_url: show.image_url
                }
            })
            setShowList(ret)
            setIsLoading(false)
        })
        

        
       
    }

    
    
    if(!submitPressed || isLoading) {
        return (
            <div className="center-dropdown">
                <div className="season dropdown">
                    <Dropdown
                    defaultValue={defaultSeason}
                    fluid
                    selection
                    onChange={handleSeasonChange}
                    options={seasonOptions}
                    button
                    className="big"
                    search={true}
                    />
                </div>
                <div className="year dropdown">
                    <Dropdown
                    defaultValue={`${defaultYear}`}
                    fluid
                    selection
                    onChange={handleYearChange}
                    options={yearOptions}
                    button
                    className="big"
                    search={true}
                    />
                </div>
                <div className="dropdown-button dropdown">
                    <Button 
                    size="big"
                    color="vk"
                    fluid
                    loading={isLoading}
                    disabled={isLoading}
                    onClick={handleSubmit}
                    >
                        Compare
                    </Button>
                </div>
                
            </div>
            
        )
    }

    return (
        <div>
            <Container textAlign="center">
                <Container as="h1" textAlign="center" >{season} {year} Anime Season</Container>
                <Main showList={showList} />

            </Container>
        </div>
    )

}

export default Selection