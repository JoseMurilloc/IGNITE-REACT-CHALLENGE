import React from 'react';
import styles from '../styles/components/header.module.css';
import logoImage from '../assets/logo.svg';
import { PlusCircle } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImage} alt="Logo da aplicação todo" />  
      <div className={styles.contentInput}>
        <input className={styles.inputSearch} type="text" placeholder="Adicionar uma nova tarefa"/>
        <button>
          <span>Criar</span>
          <PlusCircle color="white" size={20} />
        </button>
      </div>   
    </header>
  );
}