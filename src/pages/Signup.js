import React, { useState } from 'react';
import {  IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow } from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import { toast } from "../utils/toast";
import useFormValidation from "../hooks/useFormValidation";
import validateSignup from "../components/Auth/validateSignup";
import firebase from "../firebase";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
};

const Signup = (props) => {
    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateSignup, authenticateUser);

    const [busy, setBusy] = useState(false);

    async function authenticateUser() {
        setBusy(true);
        const { name, email, password } = values;
        try {
            await firebase.register(name, email, password);
            toast("You have signed up successfully!");
            props.history.push("/");
        } catch (err) {
            toast(err.message);
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title="Sign Up"/>
            <IonLoading message={"Please wait..."} isOpen={busy} />
            <IonContent fullscreen>
              <IonItem lines="full">
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput name="name" type="text" value={values.name} onIonChange={handleChange} required></IonInput>
              </IonItem>

              <IonItem lines="full">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput name="email" type="email" value={values.email} onIonChange={handleChange} required></IonInput>
              </IonItem>

              <IonItem lines="full">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput name="password" type="password" value={values.password} onIonChange={handleChange} required></IonInput>
              </IonItem>

              <IonRow>
                  <IonCol>
                      <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={isSubmitting}>
                          Sign Up
                      </IonButton>
                  </IonCol>
              </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Signup;