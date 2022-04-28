import React, { ReactElement, useState } from 'react';

import './leftSelect.scss';
import packageInfo from '../../package.json';

export type LeftSelectProps<Type> = {
  items: Type[];
  title: string;
  menuRender: (item: Type, index: number) => ReactElement | JSX.Element;
  itemRender: (item: Type) => ReactElement | JSX.Element;
}

export function LeftSelect<Type> ({items, title, menuRender, itemRender}: LeftSelectProps<Type>): ReactElement {
  const [active, setActive ] = useState(0);

  const onMenuItemClick = (index: number) => {
    setActive(index);
  }
  
  const renderedMenuItems = items.map((item: Type, index: number) => {
    return (
      <li key={index} className={active === index ? 'active' :''} onClick={() => onMenuItemClick(index)}>
        {menuRender(item, index)}
      </li>

    );
  });

  const renderedActive = items && items.length
    ? (
        active >= 0
        ?  itemRender(items[active])
        : (<h2>Select an item from the left.</h2>)
      )
    : (<h2>No {title.toLowerCase()} to display.</h2>);

  return (
    <div className="left-select-menu">
      <menu>
        <ul>
          {renderedMenuItems}
        </ul>
        <p className="version">v{packageInfo.version}</p>
      </menu>
      <section>
        {renderedActive}
      </section>
    </div>

  );
}