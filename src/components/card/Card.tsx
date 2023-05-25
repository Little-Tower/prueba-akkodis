import React from 'react';
import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.cardMain}>
      <h1>Titulo de la carta</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque?</p>
    </div>
  )
}

export default Card