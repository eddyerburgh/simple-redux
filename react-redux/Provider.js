import React, { Component } from 'React'
import Context from './Context'

export default class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeState: props.store.getState()
    }
  }
  componentDidMount() {
    const store = this.props.store

    store.subscribe(() => {
      const newStoreState = store.getState()
      this.setState(providerState => {
        if (providerState.storeState === newStoreState) {
          return null
        }
        return {
          storeState: newStoreState
        }
      })
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
