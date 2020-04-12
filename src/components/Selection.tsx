import React, {useState, SyntheticEvent, MouseEvent } from "react"
import { Dropdown, Button, DropdownItemProps, DropdownProps } from "semantic-ui-react"
import Main from "./Main"
import "semantic-ui-css/semantic.min.css"
import "./Selection.css"



export function Selection() {
    
    const [submitPressed, setSubmitPressed] = useState(false)
    
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

    // Edit this when sooner years are supported
    const minYear = 2009

    

    let yearOptions = ((): DropdownItemProps[] => {
        let options: DropdownItemProps[] = []
        for (let i = defaultYear; i >= minYear; i--) {
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
        console.log(year, season);
        
        event.preventDefault()
        setSubmitPressed(true)
    }

    
    
    if(!submitPressed) {
        return (
            <div className="center-dropdown">
                <div className="season dropdown">
                    <Dropdown
                    defaultValue={defaultSeason}
                    fluid
                    selection
                    onChange={handleSeasonChange}
                    options={seasonOptions}
                    />
                </div>
                <div className="year dropdown">
                    <Dropdown
                    defaultValue={`${defaultYear}`}
                    fluid
                    selection
                    onChange={handleYearChange}
                    options={yearOptions}
                    />
                </div>
                <div className="dropdown-button dropdown">
                    <Button 
                    size="big"
                    compact
                    color="vk"
                    fluid
                    onClick={handleSubmit}
                    >
                        Get Shows
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <Main year={year} season={season.toLowerCase()} />
    )

}

export default Selection