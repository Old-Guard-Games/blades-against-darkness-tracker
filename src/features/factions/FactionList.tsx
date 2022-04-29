import React from 'react';
import './faction.scss';
import { useSelector } from 'react-redux';
import { FactionModel } from './Faction.model';

import { Faction, FactionMenuItem } from './Faction.component';
import { LeftSelect, LeftSelectProps } from '../../components/LeftSelect';
import { selectAllFactions } from './factionSlice';

export const FactionList = () => {
  const factions = useSelector(selectAllFactions);

  const menuRender = (item: FactionModel, index: number) => (
    <FactionMenuItem key={index} faction={item} />
  )

  const itemRender = (item: FactionModel) => (
    <Faction faction={item} />
  )

  const lsProps: LeftSelectProps<FactionModel> = {
    title: 'Factions',
    items: factions,
    menuRender,
    itemRender
  }

  return (
    <LeftSelect {...lsProps} />
  )
}