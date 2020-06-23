import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadsetIcon, SettingsIcon } from './styles';

import AvatarIcon from '../../assets/avatar.svg';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={AvatarIcon} alt="Home" />
        </Avatar>
        <UserData>
          <strong>Carlos Henrique</strong>
          <span>#1234</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
