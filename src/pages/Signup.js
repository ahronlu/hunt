import React from 'react'
import {  IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'


const Signup = () => {
    return (
        <IonPage>
            <NavHeader title="Sign Up"/>
            <IonContent fullscreen>
              <IonItem lines="full">
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput name="name" type="text" required></IonInput>
              </IonItem>

              <IonItem lines="full">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput name="email" type="email" required></IonInput>
              </IonItem>

              <IonItem lines="full">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput name="password" type="password" required></IonInput>
              </IonItem>

              <IonRow>
                  <IonCol>
                      <IonButton type="submit" color="primary" expand="block">
                          Sign Up
                      </IonButton>
                  </IonCol>
              </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Signup
