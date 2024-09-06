// src/TP1/05/Exercise5.jsx
import React from 'react';
import styles from "./Card.module.css";

export default function Card({ title, text }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Salgadinho ruffles</h2>
            <p className={styles.text}>Os salgadinhos Elma Chips são sinônimo de sabor e diversão, trazendo alegria a diversas ocasiões, desde um lanche rápido até um encontro com amigos. Com uma variedade que agrada a todos os paladares, Elma Chips se destaca por oferecer opções que vão dos clássicos e irresistíveis aos mais ousados e surpreendentes.
            </p>
        </div>
    );
}
