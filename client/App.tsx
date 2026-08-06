import { Switch, Route } from "wouter";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}