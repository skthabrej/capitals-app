import { Component } from "react";
import './index.css'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
  

class Capitals extends Component {
    state = {
        countryId:countryAndCapitalsList[0].id,
        country:countryAndCapitalsList[0].country
    }

    selectedCountry = event => {
        const resultsCountry = countryAndCapitalsList.filter(eachCountry =>
            eachCountry.id === event.target.value
            )
        this.setState({
            countryId:event.target.value,
            country:resultsCountry[0].country
        })
    }

    render() {
        const {countryId,country} = this.state
        return (
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Countries and Capitals</h1>
                    <div className="options-container">
                        <select className="select" value={countryId} onChange={this.selectedCountry}>
                            {countryAndCapitalsList.map(eachCountry => (
                                <option className="option" key={eachCountry.id} value={eachCountry.id}>
                                    {eachCountry.capitalDisplayText}
                                </option>
                            ))}
                        </select>
                        <p className="paragraph">is capital of which country</p>
                    </div>
                    <p className="country">{country}</p>
                </div>
            </div>
        )
    }
}
export default Capitals