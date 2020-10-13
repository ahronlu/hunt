import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp,IonTabs, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { createOutline, listCircleOutline, trendingUpOutline, searchOutline, personCircleOutline } from "ionicons/icons";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Submit from "./pages/Submit";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import useAuth from "./hooks/useAuth";
import UserContext from "./contexts/UserContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";
import useAuth from "./hooks/useAuth";

const App = () => {
  const [user, setUser] = useState();
  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/trending" component={Trending} />
            <Route path="/submit" component={Submit} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={Forgot} />
            <Route component={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={listCircleOutline}/>
              <IonLabel>Hunt</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trending" href="/trending">
              <IonIcon icon={trendingUpOutline}/>
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="submit" href="/submit">
              <IonIcon icon={createOutline}/>
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchOutline}/>
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline}/>
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
