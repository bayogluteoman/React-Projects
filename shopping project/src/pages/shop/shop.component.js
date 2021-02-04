import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { ShopPageContainer } from './shop.styles';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
        convertCollectionsSnapshotToMap (snapshot)       
        });
    }

    render(){
        const { match } = this.props;
        return(
            <ShopPageContainer>
            <Route 
            exact path={`${match.path}`} 
            component={CollectionsOverview}
            />

            <Route 
            path={`${match.path}/:collectionId`} 
            component={CollectionPage}/>
    </ShopPageContainer>

        );
    }

}
    
        

export default ShopPage;