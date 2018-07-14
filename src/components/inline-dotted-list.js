import React from 'react';
import './inline-dotted-list.scss';

export default class InlineDottedList extends React.Component {

  render(){
    let { items, className, id } = this.props;
    return (
      <ul className={`inline-dotted-list ${className||''}`} id={id||''}>
        {items.map((item, i)=>(
          <li className="inline-dotted-list__item" key={`idl-item-${i}`}>{item}</li>
        ))}
      </ul>
    );
  }
}
