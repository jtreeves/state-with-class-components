import './App.css'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>NUMBER WILL GO HERE</h1>
                <button>+</button>
            </div>
        )
    }
}

export default App