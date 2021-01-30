import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import  CollectionPreview  from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) =>(
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollProps}) => (
            <CollectionPreview key={id} {...otherCollProps} />))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview); 
