import { IonPage, setupIonicReact } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react'
import { RouteComponentProps } from 'react-router';


setupIonicReact();
const Home: React.FC<RouteComponentProps> = ({match}) => {
  return(
    <IonPage>
    <ExploreContainer />
  </IonPage>
  )
}

export default Home;