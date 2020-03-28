import React, { Component } from 'react'

export default class ComponentSecond extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="checkbox" id="toggle" class="checkbox" />  
                    <label for="toggle" class="switch">Gender</label>

                    <input type="checkbox" id="toggle" class="checkbox" />  
                    <label for="toggle" class="switch">Spayed or Neutured</label>

                    <input type="checkbox" id="toggle" class="checkbox" />  
                    <label for="toggle" class="switch">Weight</label>
                </form>
            </div>
        )
    }
}




        