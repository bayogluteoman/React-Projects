import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './directory.styles';
 
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
        ))}
   </DirectoryMenuContainer>
   
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);