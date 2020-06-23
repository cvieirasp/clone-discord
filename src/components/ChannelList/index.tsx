import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="desenvolvimento" />
      <ChannelButton channelName="fases" />
      <ChannelButton channelName="personagens" />
      <ChannelButton channelName="roteiro" />
    </Container>
  );
};

export default ChannelList;
