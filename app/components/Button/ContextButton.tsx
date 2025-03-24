'use client'
const ContextButton = ({ id, label }) => {
  return (
    <button onClick={() => alert(`${label} ${id}`)}>
        {label}
    </button>
  )
}

export default ContextButton