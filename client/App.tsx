import React, { Component, ReactNode } from "react";
import Index from "@/pages/Index";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "#ff5555", background: "#111", fontFamily: "sans-serif" }}>
          <h2>🚨 Errore di Rendering Rilevato!</h2>
          <pre style={{ background: "#222", padding: "16px", borderRadius: "8px", overflowX: "auto", color: "#fff", fontSize: "12px" }}>
            {this.state.error?.toString()}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Index />
    </ErrorBoundary>
  );
}
