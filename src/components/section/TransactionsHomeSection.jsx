import React from "react";
import TransactionItem from "../TransactionItem.jsx";
import { IonNavLink } from "@ionic/react";
import TransactionsScreen from "../../screen/transaction/Transactions.screen.jsx";

function TransactionsHomeSection() {
  return (
    <>
      <div className="w-full flex-col justify-start items-center gap-px inline-flex">
        {Array.from(Array(15).keys()).map((_, i) => (
          <TransactionItem key={i} transaction={i}/>
        ))}
      </div>
      <div className="mx-auto my-10 w-fit text-blue-400">
        <IonNavLink routerDirection="forward" component={()=> <TransactionsScreen/>}>Voir tout</IonNavLink>
      </div>
    </>
  );
}

export default TransactionsHomeSection;
