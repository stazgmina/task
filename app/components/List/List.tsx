import CreateButton from "../Button/CreateButton"

const List = ({label, children}) => {
  return (
    <section>
      <h1>{label}</h1>
      {children}
    </section>
  )
}

export default List