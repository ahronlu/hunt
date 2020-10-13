import React from 'react'
import {  IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'


const Forgot = () => {
    return (
        <IonPage>
            <NavHeader title="Forgot Password"/>
            <IonContent>
              <IonItem lines="full">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput name="email" type="email" required></IonInput>
              </IonItem>
              <IonRow>
                  <IonCol>
                      <IonButton type="submit" color="primary" expand="block">
                          Get Reset Link
                      </IonButton>
                  </IonCol>
              </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Forgot
