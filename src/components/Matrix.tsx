import { Children, ReactNode } from "react";
import styles from './matrix.module.css'

export default function Matrix ({ cols = 4, children }: { cols: number,children: ReactNode[]}) {
  return (
    <div className={styles.matrix} style={ {gridTemplateColumns: `repeat(${cols}, 1fr)`} }>
      { Children.toArray(children.map((child, index) => (
        <div className="matrix-item" key={index}>{child}</div>
      )))}
    </div>
  )
}
