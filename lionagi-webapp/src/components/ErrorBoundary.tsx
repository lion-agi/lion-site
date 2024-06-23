// src/components/ErrorBoundary.tsx
import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#111111] text-white">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-xl mb-8">We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-[#D4AF37] text-[#111111] px-6 py-2 rounded-md hover:bg-[#c9b436] transition-colors"
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
