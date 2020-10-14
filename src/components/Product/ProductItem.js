import React, { useContext } from "react";
import { withRouter } from "react-router";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonThumbnail
} from "@ionic/react";
import { caretUp, chevronUpCircleOutline, personCircleOutline, timeOutline } from "ionicons/icons";
import UserContext from "../../contexts/UserContext";
import productService from "../../services/product";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./ProductItem.css";

const ProductItem = ({product, history, url, browser}) => {
  const { user } = useContext(UserContext);

  const addUpvote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    productService.addUpVote(user, product.id).catch(() => {
      history.push("/login")
    });
  }
  
  return (
    <IonCard routerLink={url} onClick={browser} button>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={product.thumbnail} />
            </IonThumbnail>
            <IonLabel>
              <div className="ion-text-wrap">
                <strong style={{ fontSize: "1rem" }}>{product.title}</strong>
              </div>

              <div className="ion-text-wrap" style={{ fontSize: "0.8rem" }}>
                {product.description}
              </div>

              <p style={{ alignItems: "center", fontSize: "0.8rem", fontWeight: "normal" }}>
                <IonIcon icon={chevronUpCircleOutline} style={{ verticalAlign: "middle" }} /> {" "}
                <IonText style={{ verticalAlign: "middle" }}>{product.voteCount} points</IonText> {" | "}
                <IonIcon icon={personCircleOutline} stle={{ verticalAlign: "middle" }} />{" "}
                <IonText style={{ verticalAlign: "middle" }}>{product.postedBy.name} points</IonText> {" | "}
                <IonIcon icon={timeOutline} stle={{ verticalAlign: "middle" }} />{" "}
                <IonText style={{ verticalAlign: "middle" }}>{formatDistanceToNow(product.created)}</IonText>
              </p>
            </IonLabel>
            <IonButton slot="end" onClick={addUpvote} size="large">
              <div className="upvote-button_inner">
                <IonIcon icon={caretUp} />
                {product.voteCount}
              </div>
            </IonButton>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default withRouter(ProductItem);