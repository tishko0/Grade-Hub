import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/logo.svg";
import styles from "./style.module.css";
import './index.css';

import { IgrButtonModule, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrButtonModule.register();

const HomeComponent: React.FC = () => {
  const name = 'GradeHub';
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="app">
      <div className={styles.app__name}>{name}</div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Press Start to Begin
        </p>
        <IgrButton key="startButtonKey" variant="contained" onClick={handleStart} ><span>Start</span></IgrButton>
      </header>
    </div>
  );
};

export default HomeComponent;
