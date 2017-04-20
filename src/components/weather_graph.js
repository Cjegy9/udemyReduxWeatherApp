import React from 'react';

import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  )
}