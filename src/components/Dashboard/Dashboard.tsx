import React, { useEffect, useState } from 'react';
import { IonContent, IonInput, IonPage, IonTitle, IonToolbar, IonGrid,IonButton, IonRow, IonCol, 
    IonItem, IonLabel, IonList, IonNote, IonHeader, IonButtons, IonMenu,
     IonMenuButton, IonIcon, IonPopover, IonItemGroup,
 } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.scss';
import Lendsqr from './images/lendsqr.svg';
import Logo from './images/Union.svg';
import Bell from './images/bell.svg';
import Girl from './images/Girl.svg';


function Dashboard() {

    // var [showCustomer, setUser] = useState(true);
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader id='header'>
          <IonToolbar>
            <IonTitle>
            <img src={Logo} alt="svg" id='logo' /> &nbsp;&nbsp;
          <img src={Lendsqr} alt="svg" id='logo' />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonItemGroup>
                <IonItem lines="none" id='item'>Switch Organization &nbsp; ▾</IonItem>
                {/* ▸ */}
                <IonItem lines="none" id='item'>Dashboard</IonItem>
                <IonItem lines="none" id='item'><small>CUSTOMERS</small> <span>▾</span> </IonItem>
                <IonItem lines="none" id='item'>Users</IonItem>
                <IonItem lines="none" id='item'>Guarantors</IonItem>
                <IonItem lines="none" id='item'>Loans</IonItem>
                <IonItem lines="none" id='item'>Decision Models</IonItem>
                <IonItem lines="none" id='item'>Savings</IonItem>
                <IonItem lines="none" id='item'>Loan and Requests</IonItem>
                <IonItem lines="none" id='item'>Whitelist</IonItem>
                <IonItem lines="none" id='item'>Karma</IonItem>
                <IonItem lines="none" id='item'><small>BUSINESSES</small> <span>▾</span></IonItem>
                <IonItem lines="none" id='item'>Organization</IonItem>
                <IonItem lines="none" id='item'>Loan Products</IonItem>
                <IonItem lines="none" id='item'>Savings Products</IonItem>
                <IonItem lines="none" id='item'>Fees and Charges</IonItem>
                <IonItem lines="none" id='item'>Transactions</IonItem>
                <IonItem lines="none" id='item'>Services</IonItem>
                <IonItem lines="none" id='item'>Service Account</IonItem>
                <IonItem lines="none" id='item'>Settlements</IonItem>
                <IonItem lines="none" id='item'>Reports</IonItem>
                <IonItem lines="none" id='item'><small>SETTINGS</small> <span>▾</span></IonItem>
                <IonItem lines="none" id='item'>Preferences</IonItem>
                <IonItem lines="none" id='item'>Fees and Pricing</IonItem>
                <IonItem lines="none" id='item'>Audit Logs</IonItem>

            </IonItemGroup>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
                <span>
                {/* <IonMenuButton></IonMenuButton> */}
                </span>
                </IonTitle>
                <IonGrid>
        <IonRow>
          <IonCol>
          <img src={Logo} alt="svg" id='logo' /> &nbsp;&nbsp;
          <img src={Lendsqr} alt="svg" id='logo' />
          </IonCol>
          <IonCol>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for anything"/>
          </IonCol>
          <IonCol>
          <IonMenuButton id='toggle'></IonMenuButton>
          </IonCol>
          <IonCol>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <u id='docs'>Docs</u>
                    </IonCol>
                    <IonCol>
                    <img src={Bell} alt="svg" id='docs' />
                    </IonCol>
                    <IonCol>
                    <img src={Girl} alt="svg" id='girl' />
                    </IonCol>
                    <IonCol>
                       <button className="btn btn-white" id="click-trigger"> <span className='docs' >Adedeji</span></button>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent class="ion-padding">Log out</IonContent>
      </IonPopover>
                    </IonCol>
                </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  )
}


export default Dashboard;