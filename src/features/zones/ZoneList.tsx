import React from 'react';
import { useSelector } from 'react-redux';
import { Zone, ZoneMenuItem } from './Zone.component';
import { selectAllZones } from './zoneSlice';
import { LeftSelect, LeftSelectProps } from '../../components/LeftSelect';
import { ZoneModel } from './Zone.model';

export const ZoneList = () => {
  const zones = useSelector(selectAllZones);

  const menuRender = (item: ZoneModel, index: number) => (
    <ZoneMenuItem key={index} zone={item} />
  );

  const itemRender = (item: ZoneModel) => (
    <Zone zone={item} />
  );

  const lsProps: LeftSelectProps<ZoneModel> = {
    title: 'Zones',
    items: zones,
    menuRender,
    itemRender
  }

  return (
    <LeftSelect {...lsProps} />
  );
}