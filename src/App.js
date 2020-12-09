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
        // const amountToAdd = prompt('How much do you want to add?')
        // const newCount = this.state.count + parseInt(amountToAdd)
        this.setState({ count: this.state.count + parseInt(prompt('How much do you want to add?')) })
    }

    decrement = () => {
        const amountToAdd = prompt('How much do you want to subtract?')
        const newCount = this.state.count - parseInt(amountToAdd)
        this.setState({ count: newCount })
    }

    multiply = () => {
        const amountToAdd = prompt('How much do you want to multiply?')
        const newCount = this.state.count * parseInt(amountToAdd)
        this.setState({ count: newCount })
    }

    divide = () => {
        const amountToAdd = prompt('How much do you want to divide?')
        const newCount = this.state.count / parseInt(amountToAdd)
        this.setState({ count: newCount })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        )
    }
}

export default App