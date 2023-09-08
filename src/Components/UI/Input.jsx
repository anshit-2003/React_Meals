import classes from "./Input.module.css"

export default function Input({id, input, label}) {
  return (
    <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
    </div>
  )
}
