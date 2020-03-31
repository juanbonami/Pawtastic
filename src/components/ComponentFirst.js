import React, { Component } from 'react'


export default class ComponentFirst extends Component {
    render() {
        return (
            <div>
                <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
                <label>
                    Name
                    <input className="input" type="text" placeholder="Pet's name" />
                    </label>

                    <label>
                    Breed
                    <input className="input" type="text" placeholder="Pet's Breed" />
                    </label>

                    <label>
                    Birthday
                    <input className="input" type="text" placeholder="MM/DD/YYYY" />
                </label>
            </div>
        )
    }
}


