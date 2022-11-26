import React from 'react'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <h1>hi there</h1>
      <a
        href="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=711&amp;q=80"
        target="_blank"
        rel="noreferrer noopener"
        className={styles['link']}
      >
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className={styles['image']}
        />
      </a>
    </div>
  )
}

export default Home
