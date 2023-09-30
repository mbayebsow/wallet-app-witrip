import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
} from "@ionic/react";

function TransactionsDetailsScreen({ id }) {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=""></IonBackButton>
          </IonButtons>
          <IonTitle>Reçu transaction</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reçu transaction</IonTitle>
          </IonToolbar>
        </IonHeader>
        TransactionsDetailsScreen: {id}
      </IonContent>
    </IonPage>
  );
}

export default TransactionsDetailsScreen;
