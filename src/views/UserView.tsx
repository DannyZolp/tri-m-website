import { Container, Title, Text } from "@mantine/core";
import { FirebaseApp } from "firebase/app";

interface UserViewProps {
  app: FirebaseApp;
}

export const UserView = ({ app }: UserViewProps) => {
  return (
    <Container>
      <Title>WBHS Tri-M</Title>
      <Text color="dimmed">
        This is where you can get updates from what our Tri-M chapter is doing
        and sign up for activities!
      </Text>
    </Container>
  );
};
