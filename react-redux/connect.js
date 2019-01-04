import React, { PureComponent } from 'react'
import Context from './Context'
import shallowEqual from './shallow-equal'

// Creates new props by calling `mapStateToProps` with the new `state` object
// if the state has not changed, or the new props are shallow equal with the old
// props then the selector returns the previous props
//
// Redux has a selector with the same name that  uses `mapStateToProps`,
// `mapDispatchToProps`, `mergeProps`, and the Connect components own props to
// calculate the derivedProps
//
function makeDerivedPropsSelector(mapStateToProps) {
  let lastState
  let lastDerivedProps

  return function selectDerivedProps(state) {
    if (lastState === state) {
      return lastDerivedProps
    }

    lastState = state

    const nextProps = mapStateToProps(state)
    const propsChanged = !shallowEqual(lastDerivedProps, nextProps)

    if (propsChanged) {
      lastDerivedProps = nextProps
    }

    return lastDerivedProps
  }
}

// Returns the same child element if the derived props object has not changed
// since the last update. This avoids unnecessary re-renders of the
// WrappedComponent
function makeChildElementSelector(WrappedComponent) {
  let lastChildProps
  let lastChildElement

  return function selectChildElement(childProps) {
    if (childProps !== lastChildProps) {
      lastChildProps = childProps
      lastChildElement = <WrappedComponent {...childProps} />
    }
    return lastChildElement
  }
}

export default function connect(mapStateToProps) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends PureComponent {
      constructor(props) {
        super(props)
        this.selectDerivedProps = makeDerivedPropsSelector(mapStateToProps)
        this.selectChildElement = makeChildElementSelector(WrappedComponent)
        this.renderWrappedComponent = this.renderWrappedComponent.bind(this)
      }

      renderWrappedComponent({ storeState }) {
        let derivedProps = this.selectDerivedProps(storeState)
        return this.selectChildElement(derivedProps)
      }

      render() {
        return (
          <Context.Consumer>{this.renderWrappedComponent}</Context.Consumer>
        )
      }
    }
    return Connect
  }
}
