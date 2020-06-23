import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot?'bot':''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Carlos Henrique" />

      <Role>Offline - 5</Role>
      <UserRow nickname="Chris Redfield" />
      <UserRow nickname="Claire Redfield" />
      <UserRow nickname="Jill Valentine" />
      <UserRow nickname="Leon Scott Kennedy" />
      <UserRow nickname="RE Bot" isBot />
    </Container>
  );
};

export default UserList;
