import React from 'react';
import './faction.scss';
import { useSelector } from 'react-redux';
import { FactionModel } from './Faction.model';

import { Faction, FactionMenuItem } from './Faction.component';
import { LeftSelect, LeftSelectProps } from '../../components/LeftSelect';

export const FactionList = () => {
  const factions = useSelector((state: any) => state.factions.data);

  const sorted = factions.slice().sort((a: FactionModel,b: FactionModel) => {
    const trimmedA = a.name.replace('The ','');
    const trimmedB = b.name.replace('The ','');
    if (trimmedA < trimmedB) {
      return -1;
    }
    return 1;
  });

  const menuRender = (item: FactionModel, index: number) => (
    <FactionMenuItem key={index} faction={item} />
  )

  const itemRender = (item: FactionModel) => (
    <Faction faction={item} />
  )

  const lsProps: LeftSelectProps<FactionModel> = {
    title: 'Factions',
    items: sorted,
    menuRender,
    itemRender
  }

  return (
    <LeftSelect {...lsProps} />
  )
}