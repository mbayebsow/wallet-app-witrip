import { useEffect } from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { setupIonicReact, IonRouterOutlet } from "@ionic/react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Device } from "@capacitor/device";

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
import LoginScreen from "./screen/home/Login.screen";
import HomeScreen from "./screen/home/Home.screen";
import TransactionsScreen from "./screen/transaction/Transactions.screen";
import TransactionsDetailsScreen from "./screen/transaction/TransactionsDetails.screen";
import TransfertScreen from "./screen/transfert/Transfert.screen";
import ReceiveScreen from "./screen/receive/Receive.screen";

import useLogin from "./hook/useLogin";

setupIonicReact({
  rippleEffect: false,
  mode: "ios",
  backButtonText: "Retour",
});
export default function App() {
  const startedFunc = async () => {
    const device = await Device.getInfo();
    if (device.platform !== "web") {
      StatusBar.setBackgroundColor({ color: "#ffffff" });
      StatusBar.setStyle({ style: Style.Light });
    }
  };

  useEffect(() => {
    startedFunc();
  }, []);

  const { islogin } = useLogin();
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact={true} path="/">
            {islogin ? <HomeScreen /> : <LoginScreen />}
          </Route>
          <Route exact={true} path="/transactions">
            <TransactionsScreen />
          </Route>
          <Route exact={true} path="/transactions/details">
            <TransactionsDetailsScreen />
          </Route>
          <Route exact={true} path="/transfert">
            <TransfertScreen />
          </Route>
          <Route exact={true} path="/paiement">
            <ReceiveScreen />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
