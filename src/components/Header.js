import Button from "./Button"

const Header = ({onAdd, showAdd}) => {
  return (
    <header className="header">
        <h1 className="text-primary">Todolist</h1>
        <Button klasse={showAdd? 'notOnAdd' : 'onAdd'} text={showAdd? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

export default Header