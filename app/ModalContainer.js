import React from 'react'
import { connect } from '../react-redux'

const Modal = ({ visible }) =>
  visible && (
    <div>
      <h1>Modal</h1>
    </div>
  )

const mapStateToProps = state => ({ visible: state.modal.visible })

export default connect(mapStateToProps)(Modal)
