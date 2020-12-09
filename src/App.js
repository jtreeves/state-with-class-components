import './App.css'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    increment = () => {
        const currentCount = this.state.count
        const newCount = currentCount + 1
        this.setState({ count: newCount })
    }

    decrement = () => {
        const currentCount = this.state.count
        const newCount = currentCount - 1
        this.setState({ count: newCount })
    }

    double = () => {
        const currentCount = this.state.count
        const newCount = currentCount * 2
        this.setState({ count: newCount })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.double}>*</button>
            </div>
        )
    }
}

export default App