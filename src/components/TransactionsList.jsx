import React from "react";
import TransactionItem from "./TransactionItem.jsx";
import { IonNavLink, IonText } from "@ionic/react";
import TransactionsScreen from "../screen/transaction/Transactions.screen.jsx";

function TransactionsHomeSection() {
  return (
    <>
      <div className="mx-auto w-full flex justify-between items-center ion-padding">
        <IonText>Transactions reçent</IonText>
        <IonNavLink
          className=" text-blue-400"
          routerDirection="forward"
          component={() => <TransactionsScreen />}
        >
          Voir tout
        </IonNavLink>
      </div>
      <div className="w-full flex-col justify-start items-center gap-px inline-flex">
        {Array.from(Array(15).keys()).map((_, i) => (
          <TransactionItem key={i} transaction={i} />
        ))}
      </div>
    </>
  );
}

export default TransactionsHomeSection;
