import './App.css'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    increment() {
        const currentCount = this.state.count
        const newCount = currentCount + 1
        this.state = {
            count: newCount
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={increment}>+</button>
            </div>
        )
    }
}

export default App