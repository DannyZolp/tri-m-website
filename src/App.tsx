import {
  AppShell,
  Center,
  Group,
  Header,
  MediaQuery,
  Image,
  LoadingOverlay
} from "@mantine/core";
import { FirebaseApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

interface AppProps {
  app: FirebaseApp;
}

function App({ app }: AppProps) {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [adminView, setAdminView] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    if (loggedIn) {
      getDoc(doc(collection(db, "users"), auth.currentUser?.uid)).then(
        (res) => {
          if (res.exists()) {
            auth.currentUser?.getIdTokenResult().then((res) => {
              if (res.claims.admin) {
                setAdminView(true);
                setLoading(false);
              } else {
                setAdminView(false);
                setLoading(false);
              }
            });
          } else {
            setLoading(false);
          }
        }
      );
    } else {
      setLoading(false);
    }
  }, [loggedIn]);

  return (
    <>
      <LoadingOverlay visible={loading} />
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
              </Group>
            </MediaQuery>
          </Header>
        }
      >
        <></>
      </AppShell>
    </>
  );
}

export default App;
