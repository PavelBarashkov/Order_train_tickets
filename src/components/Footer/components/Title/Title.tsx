import classes from "./title.props.module.css"

interface ITitleProps {
  title: string
}

export const Title = ({ title }: ITitleProps) => {
  return <h4 className={classes.title}>{title}</h4>
}
