import React from 'react';
import { BrowseContainer } from '../containers/browse';
import useContent from '../hooks/use-content';
import selectionFilter  from '../utils/selection-filter';

export default function Browse() {
  const { Netflix } = useContent('Netflix');
  const { Prime } = useContent('Prime');
  const { Hotstar } = useContent('Hotstar');
  const slides = selectionFilter({ Netflix, Prime, Hotstar });

  return <BrowseContainer slides={slides} />;
}
