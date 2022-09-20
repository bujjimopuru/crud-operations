import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {name, id} = contactDetails

  const starImgUrl = 'https://assets.ccbp.in/frontend/react-js/cross-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p>{name}</p>
      </div>
      <div className="table-cell mobile-no-column">
        <button
          type="button"
          className="delete-button"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="delete-img" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
