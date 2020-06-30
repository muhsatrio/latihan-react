import React, {useEffect, useRef} from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud1');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect 2');
    }
  })
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
      };
    let classes = [];

    if (props.personsLength <= 2) {
      classes.push('red');
    }
    if (props.personsLength <= 1) {
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} style={style} onClick={props.clicked}>Click</button>
            <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(Cockpit);