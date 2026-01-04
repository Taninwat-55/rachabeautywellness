import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="bg-neutral min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h1 className="font-lora text-4xl font-bold text-primary mb-4">
                        Noget gik galt
                    </h1>
                    <p className="font-roboto text-lg text-text-light mb-8">
                        Beklager, der opstod en fejl. Prøv at genindlæse siden.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="font-lora bg-primary text-text-dark px-6 py-3 rounded hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                        Genindlæs siden
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
