import { ArrowDown, CaretLeft } from "@carbon/icons-react";
import {
  IonButton,
  IonContent,
  IonButtons,
  IonToolbar,
  IonHeader,
  IonBackButton,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonFooter,
  IonTitle,
} from "@ionic/react";

function TransfertScreen() {
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=""></IonBackButton>
          </IonButtons>
          <IonTitle>Transfert</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} scrollY={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transfert</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-padding text-xs opacity-50 m-0">
          Envoyez de l’argent d'un wallet vers n’importe quel autre wallet ou compte bancaire
          instantanément
        </p>

        <div className="ion-padding">
          <div className="w-full m-0 px-3 mb-5 bg-[--ion-card-background] rounded-lg overflow-hidden">
            <IonInput
              type="number"
              label="Montant a envoyer"
              labelPlacement="floating"
              placeholder="ex: 10000"
              className=""
            ></IonInput>
          </div>

          <div className="w-full">
            <div className="w-full h-fit p-3 bg-[--ion-card-background] rounded-lg">
              <div className="w-full mb-3 px-3 bg-[--ion-color-field-background] rounded-lg">
                <IonSelect label="De" labelPlacement="floating">
                  <IonSelectOption value="apple">Apple</IonSelectOption>
                  <IonSelectOption value="banana">Banana</IonSelectOption>
                  <IonSelectOption value="orange">Orange</IonSelectOption>
                </IonSelect>
              </div>
              <div className="w-full px-3  bg-[--ion-color-field-background] rounded-lg">
                <IonInput
                  type="number"
                  label="Numero de telephone"
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </div>
            </div>

            <div className="w-full my-2 flex justify-center">
              <ArrowDown className="h-8 w-6" />
            </div>

            <div className="w-full h-fit p-3 bg-[--ion-card-background] rounded-lg">
              <div className="w-full mb-3 px-3 bg-[--ion-color-field-background] rounded-lg">
                <IonSelect label="Vers" labelPlacement="floating">
                  <IonSelectOption value="apple">Apple</IonSelectOption>
                  <IonSelectOption value="banana">Banana</IonSelectOption>
                  <IonSelectOption value="orange">Orange</IonSelectOption>
                </IonSelect>
              </div>
              <div className="w-full px-3  bg-[--ion-color-field-background] rounded-lg">
                <IonInput
                  type="number"
                  label="Numero de telephone"
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
      <IonFooter className="ion-padding" collapse="fade">
        <IonToolbar>
          <IonButton expand="block" size="large" className="rounded-xl overflow-hidden">
            Valider
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
}

export default TransfertScreen;
