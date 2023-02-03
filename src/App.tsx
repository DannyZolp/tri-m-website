import { AppShell, Center, Group, Header, MediaQuery, Image } from "@mantine/core";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useState } from "react";

interface AppProps {
  app: FirebaseApp;
}

function App({ app }: AppProps) {
  const auth = getAuth(app);

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <AppShell
      padding="md"
      header={
        <Header height={80} p="xs">
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Center>
              <Image
                src={"logo.png"}
                alt="west bend high school bands tri m logo"
                height={50}
                width={100}
              />
            </Center>
          </MediaQuery>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <img
                src={"logo.png"}
                alt="west bend high school bands tri m logo"
                height="100%"
              />

              {loading ? null : (
                <User
                  image={auth.currentUser?.photoURL ?? ""}
                  name={userData?.name ?? ""}
                  instrument={userData?.instrument ?? ""}
                  logout={() => auth.signOut()}
                />
              )}
            </Group>
          </MediaQuery>
        </Header>
      }
    >
      <></>
    </AppShell>
  );
}

export default App;
