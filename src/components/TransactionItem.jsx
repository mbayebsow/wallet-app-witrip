import { Download, TrashCan, ViewOff } from "@carbon/icons-react";
import { IonAvatar, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonNavLink, IonNote } from "@ionic/react";
import TransactionsDetailsScreen from "../screen/transaction/TransactionsDetails.screen.jsx";

function TransactionItem({ transaction }) {
  return (
    <IonItemSliding>
      <IonNavLink className="w-full" routerDirection="forward" component={() => <TransactionsDetailsScreen id={transaction} />}>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start" className="w-10 h-10 p-3 bg-gray-100">
            <Download className="w-full h-full" />
          </IonAvatar>
          <IonLabel>
            <h3>De - 77 000 00 00</h3>
            <p>Jeudi 18 fevrier a 17h 30</p>
          </IonLabel>
          <IonNote color="success" slot="end">
            + 9.800
          </IonNote>
        </IonItem>
      </IonNavLink>
      <IonItemOptions>
        <IonItemOption color="light">
          <ViewOff className="w-10 h-5" />
        </IonItemOption>
        <IonItemOption color="danger">
          <TrashCan className="w-10 h-5" />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default TransactionItem;
