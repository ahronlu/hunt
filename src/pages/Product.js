import React, { useContext, useEffect, useState } from "react";
import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonButton } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import productService from "../services/product";

import firebase from "../firebase";
import { Plugins } from "@capacitor/core";
import UserContext from "../contexts/UserContext";
import NavHeader from "../components/Header/NavHeader";
import ProductItem from "../components/Product/ProductItem";
import ProductPhotos from "../components/Product/ProductPhotos";
import ProductComment from "../components/Product/ProductComment";
import CommentModal from "../components/Product/CommentModal";

const { Browser } = Plugins;

const Product = (props) => {
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const productId = props.match.params.productId;
  const productRef = firebase.db.collection("products").doc(productId);

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  },[productId]);

  function getProduct() {
    productRef.get().then((doc) => {
      setProduct({ ...doc.data(), id: doc.id });
    })
  }

  function handleOpenModal() {
    if(!user) {
      props.history.push("/login");
    } else {
      setShowModal(true);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddComment(commentText) {
    if(!user) {
      props.history.push("/login");
    } else {
      productRef.get().then((doc) => {
        if(doc.exists) {
          const previousComments = doc.data().comments;
          const newComment = {
            postedBy: { id: user.uid, name: user.displayName },
            created: Date.now(),
            text: commentText
          }
          const updatedComments = [...previousComments, newComment];
          productRef.update({ comments: updatedComments });
          setProduct((prevState) => ({
            ...prevState,
            comments: updatedComments,
          }));
        }
      });
      setShowModal(false);
    }
  }

  function handleAddVote() {
    if(!user) {
      props.history.push("/login");
    } else {
      productService
        .addUpVote(user, productId)
        .then((newProduct) => setProduct(newProduct))
        .catch(() => props.history.push("/login"));
    }
  }

  function handleDeleteProduct() {
    productRef.delete()
    .then(() => console.log("Document deleted"))
    .catch(err => console.log(err));
    props.history.push("/")
  }

  function postedByAuthUser(product) {
    return user && user.uid === product.postedBy.id;
  }

  async function openBrowser() {
    await Browser.open({
      url: product.url,
    });
  }

  return (
    <IonPage>
      <NavHeader
        title={product && product.description}
        option={product && postedByAuthUser(product)}
        icon={closeCircleOutline}
        action={handleDeleteProduct}
      />
      <IonContent>
        <CommentModal
          isOpen={showModal}
          title="New Comment"
          sendAction={handleAddComment}
          closeAction={handleCloseModal}
        />
        {product && (
          <>
            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-xl-center">
                  <ProductItem product={product} browser={openBrowser}  />
                  <ProductPhotos photos={product.photos} />
                  <IonButton onClick={handleAddVote} size="small">
                    Upvote
                  </IonButton>
                  <IonButton onClick={() => handleOpenModal()} size="small">
                    Comment
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            {product.comments.map((comment, index) => (
              <ProductComment
                key={index}
                comment={comment}
                product={product}
                setProduct={setProduct}
              />
            ))}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Product;