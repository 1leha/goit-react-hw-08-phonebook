import { AvatarGenerator } from 'random-avatar-generator';
import React, { useRef } from 'react';

const Avatar = () => {
  const avtarGenerator = new AvatarGenerator();
  const { current: url } = useRef(avtarGenerator.generateRandomAvatar());

  return <img width={50} src={url} alt="User avatar" />;
};

export default Avatar;
