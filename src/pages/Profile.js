import React, { useContext } from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { personCircleOutline, mailOutline } from "ionicons/icons";
import UserContext from "../contexts/UserContext";
import firebase from "../firebase";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import { toast } from '../utils/toast';


const Profile = () => {
    const { user } = useContext(UserContext);

    async function logoutUser(props) {
        try {
            await firebase.logout();
            props.history.push("/");
            toast("You have logged out successfully.");
        } catch (err) {
            toast(err.message);
        }
    }

    return (
        <IonPage>
            <SmallHeader title="Profile"/>
            <IonContent fullscreen>
              <LargeHeader title="Profile"/>
              {user ? (
                  <>
                    <IonCard>
                        <IonCardContent>
                            <IonList lines="none">
                                <IonItem>
                                    <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                                    <IonLabel>
                                        <strong>{user.displayName}</strong>
                                        <p>Username</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                <IonIcon icon={mailOutline} slot="start"></IonIcon>
                                    <IonLabel>
                                        <strong>{user.email}</strong>
                                        <p>Email</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" routerLink={`/edit-profile`} color="primary" fill="outline">
                                Edit Profile
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" color="primary" onClick={logoutUser}>
                                Log Out
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </>
              ) : (
                  <IonGrid>
                      <IonRow>
                          <IonCol>
                              <IonButton expand="block" routerLink={`/register`} color="primary">
                                Sign Up
                              </IonButton>
                          </IonCol>
                      </IonRow>
                      <IonRow>
                          <IonCol>
                              <IonButton expand="block" routerLink={`/login`} color="primary">
                                Log In
                              </IonButton>
                          </IonCol>
                      </IonRow>
                  </IonGrid>
              )}
            </IonContent>
        </IonPage>
    )
}

export default Profile
