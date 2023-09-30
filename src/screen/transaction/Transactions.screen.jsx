import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";

import TransactionItem from "../../components/TransactionItem.jsx";

function TransactionsScreen() {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=""></IonBackButton>
          </IonButtons>
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder="Recherche"></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Jeudi 12 Janvier</IonLabel>
            </IonItemDivider>

            {Array.from(Array(10).keys()).map((_, i) => (
              <TransactionItem key={i} transaction={i} />
            ))}
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Jeudi 11 Janvier</IonLabel>
            </IonItemDivider>

            {Array.from(Array(10).keys()).map((_, i) => (
              <TransactionItem key={i} transaction={i} />
            ))}
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Jeudi 10 Janvier</IonLabel>
            </IonItemDivider>

            {Array.from(Array(10).keys()).map((_, i) => (
              <TransactionItem key={i} transaction={i} />
            ))}
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default TransactionsScreen;
