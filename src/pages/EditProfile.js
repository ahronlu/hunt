import React from 'react'
import {  IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'


const EditProfie = () => {
    return (
        <IonPage>
            <NavHeader title="Edit Profie"/>
            <IonContent>
            <IonItem lines="full">
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput name="name" type="text"></IonInput>
              </IonItem>
              <IonItem lines="full">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput name="email" type="email"></IonInput>
              </IonItem>
              <IonItem lines="full">
                  <IonLabel position="floating">New Password</IonLabel>
                  <IonInput name="newPassword" type="password"></IonInput>
              </IonItem>
              <IonItem lines="full">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput name="password" type="password"></IonInput>
              </IonItem>
              <IonRow>
                  <IonCol>
                      <IonButton type="submit" color="primary" expand="block">
                          Save
                      </IonButton>
                  </IonCol>
              </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default EditProfie
