import React, { useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";

const CommentModal = ({ isOpen, title, sendAction, closeAction, comment }) => {
  const [commentText, setCommentText] = useState(comment ? comment.text : "");

  function handleSendAction (item) {
    sendAction(item);
    setCommentText("");
  }

  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeAction}>
      <IonHeader translate>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={closeAction}>Close</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => handleSendAction(commentText)}>
              Send
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTextarea
          rows={25}
          cols={25}
          placeholder="Your comment"
          value={commentText}
          onIonChange={e => setCommentText(e.target.value)}
        /> 
      </IonContent>
    </IonModal>
  );
}

export default CommentModal;