import React from "react";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import TransactionItem from "../../components/TransactionItem.jsx";

function TransactionsScreen() {
  return (
    <>
      <IonHeader  className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Retour"></IonBackButton>
          </IonButtons>
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="w-full flex-col justify-start items-center gap-px inline-flex">
          {Array.from(Array(50).keys()).map((_, i) => (
            <TransactionItem key={i} transaction={i}/>
          ))}
        </div>

      </IonContent>
    </>
  );
}

export default TransactionsScreen;
