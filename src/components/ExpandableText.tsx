import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpandad] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          ml={2}
          size={"sm"}
          onClick={() => setExpandad(!expanded)}
          colorScheme="yellow"
          fontWeight="bold"
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
}

export default ExpandableText;
