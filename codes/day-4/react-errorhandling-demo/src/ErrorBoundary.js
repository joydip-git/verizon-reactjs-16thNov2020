import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        errorInfo: null
    }
    static getDerivedStateFromError(error) {
        return {
            errorInfo: error
        }
    }
    render() {
        if (this.state.errorInfo !== null) {
            return <span>Error Occurred...</span>
        } else
            return this.props.children;
    }
    componentDidCatch(error, info) {
        this.props.errorhandler(error, info);
    }
}
