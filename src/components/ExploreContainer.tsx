import './ExploreContainer.css';
import React from 'react';
import { IonContent, IonInput, IonPage, IonTitle, IonToolbar, IonGrid,IonButton, IonRow, IonCol, IonItem, IonLabel, IonList, IonNote  } from '@ionic/react';
import Pablo from '../assets/images/pablo.svg';
import Lendsqr from '../assets/images/lendsqr.svg';
import Logo from '../assets/images/Union.svg';
import Text from '../assets/images/Welcome.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

function ExploreContainer() {
  return (
    <div>
    <IonPage>
        <IonToolbar>
          <IonTitle id='title'>
          <img src={Logo} alt="svg" id='logo'/> &nbsp;&nbsp;<img src={Lendsqr} alt="svg" id='logo' />
          </IonTitle>
        </IonToolbar><br />
        <IonContent fullscreen>
        <IonGrid id='grid'>
  <IonRow>
    <IonCol>
    <img src={Pablo} alt="svg" id='logo' />
    </IonCol>
    <IonCol>
    <IonGrid>
    <IonList>
      <IonItem lines="none">
        <IonLabel>
        <img src={Text} alt="svg" id='logo' />
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>
          <small>
          Enter details to login
          </small>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>
        <div>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
        </div>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>
        <div>
        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
        </div>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
      <IonLabel>
          <small>
          FORGOT PASSWORD?
          </small>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>
        {/* <IonButton expand="block" className='button'>Block</IonButton> */}
        <NavLink className="navbar-item" to="/dashboard" id='button'> Block </NavLink> 
        </IonLabel>
      </IonItem>
    </IonList>
      </IonGrid>
    </IonCol>
  </IonRow>
</IonGrid>
</IonContent>
    </IonPage>
    </div>
  )
}


export default ExploreContainer;
