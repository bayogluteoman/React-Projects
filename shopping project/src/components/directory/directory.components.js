import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
        ))}
   </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);