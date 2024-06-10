import React from 'react'
import { Text } from '@mantine/core'
import styles from './InfoCard.module.css'

interface InfoCardProps {
  title: string,
  description: string,
  className?: string
}

function InfoCard(props: InfoCardProps) {
  return (
    <div className={props.className}>
      <div className={styles.wrapper}>
        <div className={styles.line}></div>
        <h3 className={styles.title}>{props.title}</h3>
        <Text className={styles.description} fz="sm" c="dimmed">{props.description}</Text>
      </div>
    </div>
  )
}

export default InfoCard