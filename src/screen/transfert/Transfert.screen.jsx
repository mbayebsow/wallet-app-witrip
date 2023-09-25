import { CaretLeft } from "@carbon/icons-react";
import { IonButton, IonContent, IonButtons, IonToolbar, IonHeader, IonBackButton, IonSelect, IonSelectOption } from "@ionic/react";

function TransfertScreen() {
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Retour"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        {/*<div className="mt-[var(--ion-safe-area-top)] w-full h-16 p-3">
          <ChevronLeft className="h-7 w-7" />
  </div>*/}
        <div className="ion-padding flex flex-col gap-5 justify-between items-center w-full h-full">
          <div className="w-full px-5 flex flex-col gap-5">
            <div className="w-full h-16 rounded-xl  mx-auto flex items-center justify-center text-3xl font-black">1234</div>

            <div className="w-full">
              <div className="w-full h-fit p-5 bg-[var(--primary-200)] rounded-xl flex-col justify-start items-center gap-5 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  <div className="font-normal">De</div>
                  <div className="self-stretch h-[50px] px-[23px] bg-[var(--primary-100)] rounded-xl justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 justify-start gap-2 items-center flex">
                      <IonSelect aria-label="Favorite Fruit" value="Wave" className="w-16">
                        <IonSelectOption value="Wave">Wave</IonSelectOption>
                        <IonSelectOption value="Orange money">Orange money</IonSelectOption>
                        <IonSelectOption value="Free money">Free money</IonSelectOption>
                      </IonSelect>
                      <div className="w-[1.93px] h-[22px] bg-neutral-300 rounded-sm" />
                      <div className="font-normal">780108962</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  <div className="font-normal">Vers</div>
                  <div className="self-stretch h-[50px] px-[23px] bg-[var(--primary-100)] rounded-xl justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 justify-start gap-2 items-center flex">
                      <IonSelect aria-label="Favorite Fruit" value="Orange money" className="w-16">
                        <IonSelectOption value="Wave">Wave</IonSelectOption>
                        <IonSelectOption value="Orange money">Orange money</IonSelectOption>
                        <IonSelectOption value="Free money">Free money</IonSelectOption>
                      </IonSelect>
                      <div className="w-[1.93px] h-[22px] bg-neutral-300 rounded-sm" />
                      <div className="font-normal">780108962</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mb-5">
            <div className="grid grid-flow-row-dense gap-5 gap-y-[6vh] grid-cols-3 grid-rows-3 w-full mb-[4vh]">
              <div className="text-center text-3xl font-black">1</div>
              <div className="text-center text-3xl font-black">2</div>
              <div className="text-center text-3xl font-black">3</div>
              <div className="text-center text-3xl font-black">4</div>
              <div className="text-center text-3xl font-black">5</div>
              <div className="text-center text-3xl font-black">6</div>
              <div className="text-center text-3xl font-black">7</div>
              <div className="text-center text-3xl font-black">8</div>
              <div className="text-center text-3xl font-black">9</div>
              <div className="text-center text-3xl font-black"></div>
              <div className="text-center text-3xl font-black">0</div>
              <div className="flex items-center justify-center font-black">
                <CaretLeft className="h-8 w-8" />
              </div>
            </div>
            <IonButton expand="block">Valider</IonButton>
          </div>
        </div>
      </IonContent>
    </>
  );
}

export default TransfertScreen;
