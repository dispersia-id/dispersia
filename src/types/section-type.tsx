import { JSX } from 'react';

export type Section = {
  positionId: number;
  component: JSX.Element;
  isLast?: boolean;
  isFirst?: boolean;
};
