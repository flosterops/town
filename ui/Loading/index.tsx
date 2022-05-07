import ReactLoading from "react-loading";
import React from "react";

export function Loading () {
  return <div className='loading-wrapper'>
    <ReactLoading type={"spokes"} color='#fff' width={'100px'} height={'100px'} />
  </div>
}
