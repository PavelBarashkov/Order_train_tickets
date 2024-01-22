import React from "react"
import { Container } from "../Container/Container"
import classes from "./about.module.css"

export const About = () => {
  return (
    <section className={classes.section}>
      <Container>
        <h2 className={classes.title}>О НАС</h2>
        <div className={classes.text}>
          <p>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем <br /> все больше людей заказывают жд
            билеты через интернет.
          </p>
          <p>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать?
            <br /> Мы расскажем о преимуществах заказа через интернет.
          </p>
          <p>
            <b>
              Покупать жд билеты дешево можно за 90 суток до отправления поезда.
              <br />
              Благодаря динамическому ценообразованию цена на билеты в это время
              самая низкая.
            </b>
          </p>
        </div>
      </Container>
    </section>
  )
}
