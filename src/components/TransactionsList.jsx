import React from "react";
import TransactionItem from "./TransactionItem.jsx";
import { IonText, IonRouterLink } from "@ionic/react";
import { ArrowRight } from "@carbon/icons-react";

function TransactionsHomeSection() {
  return (
    <>
      <div className="mx-auto w-full flex justify-between items-center ion-padding">
        <IonText>Transactions reçent</IonText>
        <IonRouterLink routerLink="/transactions" routerDirection="forward">
          <div className="text-xs flex items-center gap-2 w-fit">
            Voir tout
            <ArrowRight className="h-3 w-3" />
          </div>
        </IonRouterLink>
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
