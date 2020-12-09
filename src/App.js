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
        const amountToAdd = prompt('How much do you want to add?')
        const newCount = this.state.count + parseInt(amountToAdd)
        this.setState({ count: newCount })
    }

    decrement = () => {
        const amountToAdd = prompt('How much do you want to subtract?')
        const newCount = this.state.count - parseInt(amountToAdd)
        this.setState({ count: newCount })
    }

    double = () => {
        this.setState({ count: this.state.count * 2 })
    }

    triple = () => {
        this.setState({ count: this.state.count * 3 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.double}>*2</button>
                <button onClick={this.triple}>*3</button>
            </div>
        )
    }
}

export default App