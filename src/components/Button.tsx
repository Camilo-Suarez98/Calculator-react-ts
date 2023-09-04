import { FC, ReactNode } from 'react'

type ButtonProps = {
  onClick: (value: string) => void,
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={() => onClick(children as string)}>
      {children}
    </button>
  )
}

export default Button