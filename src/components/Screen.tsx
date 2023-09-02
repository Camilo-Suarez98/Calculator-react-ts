import { FC } from 'react'

type ScreenProp = {
  currentValue: string,
};

const Screen: FC<ScreenProp> = ({ currentValue }) => {
  return (
    <h2>{currentValue}</h2>
  )
}

export default Screen