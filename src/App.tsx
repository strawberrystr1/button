import { Button } from "./Button";
import { ReactComponent as Icon } from "./assets/react.svg";

function App() {
  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <Button>Button</Button>
      <Button variant="outline" stateColor="error">
        Button
      </Button>
      <Button variant="outline" stateColor="success">
        Button
      </Button>
      <Button variant="outline" stateColor="warning">
        Button
      </Button>
      <Button variant="outline" stateColor="info">
        Button
      </Button>
      <Button size="lg" variant="outline">
        Button
      </Button>
      <Button variant="ghost">Button</Button>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="primary" isLoading={true}>
        Button
      </Button>
      <Button variant="primary" disabled={true}>
        Button
      </Button>
      <Button variant="light">Button</Button>
      <Button variant="outline" leftIcon={<Icon />}>
        Button
      </Button>
      <Button variant="outline" rightIcon={<Icon />} iconSize="md">
        Button
      </Button>
    </div>
  );
}

export default App;
