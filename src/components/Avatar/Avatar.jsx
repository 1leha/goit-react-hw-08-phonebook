import { AvatarGenerator } from 'random-avatar-generator';
import React, { useRef } from 'react';

const Avatar = () => {
  const avtarGenerator = new AvatarGenerator();

  const { current: avatarUrl } = useRef(avtarGenerator.generateRandomAvatar());

  return <img width={50} src={avatarUrl} alt="User avatar" />;
};

export default Avatar;
