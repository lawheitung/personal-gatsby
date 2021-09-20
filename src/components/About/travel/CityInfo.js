  
import * as React from 'react';
import './cityinfo.scss';


function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.city}, ${info.country}`;
  const description = `${info.description}`

  return (
    <div className="travel-info-box">
      <div>
        {/* {displayName} {' '} */}
        {/* <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
        </a> */}
      </div>
        <b>{displayName}</b>
        <br />
        <p>{description}</p>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default React.memo(CityInfo);