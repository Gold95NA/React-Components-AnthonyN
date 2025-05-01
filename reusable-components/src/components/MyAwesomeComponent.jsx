import React from "react";
import Box from "./Box";
import Text from "./Text";
import Button from "./Button";

export default function MyAwesomeComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Box size="large">
      <Text size="large" color="#333">Hello from MyAwesomeComponent</Text>
      <Button color="purple" onClick={handleClick}>Click Me</Button>
    </Box>
  );
}