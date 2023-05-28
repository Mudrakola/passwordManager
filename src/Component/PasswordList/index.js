import './index.css'

const PasswordList = props => {
  const {eachItem, showPass, onDeletePassword} = props
  const {id, enterWebsite1, enterUsername1, enterPassword1,selectColor1} = eachItem
  
  const colors = [
    'color1',
    'color2',
    'color3',
    'color4',
    'color5',
    'color6',
    'color7',
  ]
  const selectedColor = colors[selectColor1]

  const deleteItem = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <div className="word-container">
          <span className={`${selectedColor} first-letter`}>{enterWebsite1[0].toUpperCase()}</span>
        </div>
        <div>
          <p className="website">{enterWebsite1}</p>
          <p className="website">{enterUsername1}</p>
          {!showPass && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="star-image"
              alt="stars"
            />
          )}
          {showPass && <p className="hide-password">{enterPassword1}</p>}
        </div>
      </div>
      <button
        type="button"
        className="button1"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordList
