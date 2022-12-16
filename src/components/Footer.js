import React, { useState } from 'react';
import {
  List,
  ListInlineItem,
} from 'reactstrap';

const Footer = () => {
  return (
    <List type="inline">
  <ListInlineItem>
    © Renita Gidlund,
  </ListInlineItem>
  <ListInlineItem>
    Shannon Young,
  </ListInlineItem>
  <ListInlineItem>
    Annabella Chan
  </ListInlineItem>
</List>
  )
}

export default Footer