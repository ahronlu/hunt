import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import ProductList from "../components/Product/ProductList";

const Home = (props) => {
    return (
        <IonPage>
            <SmallHeader title="Hunt"/>
            <IonContent fullscreen>
              <LargeHeader title="Hunt"/>
              <br></br>
              <ProductList loaction={props.loaction} />
            </IonContent>
        </IonPage>
    )
}

export default Home;
