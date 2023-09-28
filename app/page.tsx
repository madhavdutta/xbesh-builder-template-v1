import Image from 'next/image'
import styles from './page.module.css'
import { Button, Group } from '@mantine/core'

export default function Home() {
  return (
    <main className={styles.main}>
     <Group>
        Hello world!
      </Group>
    </main>
  )
}
