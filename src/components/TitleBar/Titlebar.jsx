import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const rightIcon = () => {
  return (
    <FontIcon
      className="material-icons"
      onTouchTap={() => { alert('북마크 추가')}}
    >
      bookmark_border
    </FontIcon>
  )
}

const Titlebar = (props) => {
  return (
    <AppBar
      title={'Coiners'}
      iconElementRight={<IconButton>{rightIcon()}</IconButton>}
    />
  )
}

export default Titlebar;
