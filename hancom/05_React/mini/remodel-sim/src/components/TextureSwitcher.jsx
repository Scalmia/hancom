const TextureSwitcher = ({ label, options, value, onChange }) => {
  return (
    <div>
      <span>{label}: </span>
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => onChange(option.url)}
          disabled={option.url === value}
        >
          {option.name}
        </button>
      ))}
    </div>
  )
}

export default TextureSwitcher