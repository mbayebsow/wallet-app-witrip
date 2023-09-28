import { IonNav, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Pages */
import HomeScreen from "./screen/home/Home.screen.jsx";
import LoginScreen from "./screen/home/Login.screen";
import useLogin from "./hook/useLogin";

setupIonicReact();
export default function App() {
  const { islogin } = useLogin();
  return <IonNav root={() => (islogin ? <HomeScreen /> : <LoginScreen />)}></IonNav>;
}
