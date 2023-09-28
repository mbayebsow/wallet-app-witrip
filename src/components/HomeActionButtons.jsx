import { IonNavLink } from "@ionic/react";
import { DataShare, Download } from "@carbon/icons-react";

import TransfertScreen from "../screen/transfert/Transfert.screen";

function HomeActionButtons() {
  return (
    <div className="ion-padding bg-black gap-3 fit w-full justify-between  items-center flex">
      <IonNavLink
        routerDirection="forward"
        component={() => <TransfertScreen />}
        className="w-full p-0 h-fit m-0"
      >
        <div className="bg-white text-black rounded-xl flex items-center px-5 py-3 w-full">
          <Download className="w-6 h-6 mr-3" />
          Paiement
        </div>
      </IonNavLink>

      <IonNavLink
        routerDirection="forward"
        component={() => <TransfertScreen />}
        className="w-full p-0 h-fit m-0"
      >
        <div className="bg-white text-black rounded-xl flex items-center px-5 py-3 w-full">
          <DataShare className="w-6 h-6 mr-3" />
          Transfert
        </div>
      </IonNavLink>
    </div>
  );
}

export default HomeActionButtons;
