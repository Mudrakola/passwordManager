import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordList from '../PasswordList'

class Passwords extends Component {
  state = {
    enterWebsite: '',
    enterUsername: '',
    enterPassword: '',
    isShowPassword: false,
    initialList: [],
  }

  AddPassword = event => {
    event.preventDefault()
    const {enterWebsite, enterUsername, enterPassword} = this.state
    
    const selectColor = Math.ceil(Math.random() * 7)

    const PasswordItems = {
      id: v4(),
      enterWebsite1: enterWebsite,
      enterUsername1: enterUsername,
      enterPassword1: enterPassword,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, PasswordItems],
      enterWebsite: '',
      enterUsername: '',
      enterPassword: '',
      selectColor1:selectColor,
    }))
  }

  onEnterWebsite = event => {
    this.setState({enterWebsite: event.target.value})
  }

  onEnterUsername = event => {
    this.setState({enterUsername: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({enterPassword: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onDeletePassword = id => {
    const {initialList} = this.state
    const filteredList = initialList.filter(
      eachPasswordDelete => id !== eachPasswordDelete.id,
    )
    this.setState({initialList: filteredList})
  }

  onSearchPass = event => {
    const {initialList} = this.state
    const initalValList = initialList
    const val = event.target.value
    const filteredNameList = initialList.filter(eachIt =>
      eachIt.enterWebsite1.toLowerCase().includes(val),
    )
    this.setState({initialList: filteredNameList})
  }

  render() {
    const {
      initialList,
      isShowPassword,
      enterWebsite,
      enterUsername,
      enterPassword,
    } = this.state
    const noOfPassword = initialList.length

    let isShow = false
    if (initialList.length !== 0) {
      isShow = true
    } else {
      isShow = false
    }

    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="password-manager-image"
            alt="app logo"
          />
          <div className="top-card">
            <div className="password-details-card">
              <h1 className="password-heading">Add New Password</h1>
              <form className="form-container" onSubmit={this.AddPassword}>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="website-image"
                    alt="website"
                  />

                  <input
                    type="text"
                    className="website-enter"
                    onChange={this.onEnterWebsite}
                    placeholder="Enter Website"
                    value={enterWebsite}
                  />
                </div>

                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="website-image"
                    alt="username"
                  />

                  <input
                    type="text"
                    className="website-enter"
                    onChange={this.onEnterUsername}
                    placeholder="Enter Username"
                    value={enterUsername}
                  />
                </div>

                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="website-image"
                    alt="password"
                  />

                  <input
                    type="password"
                    className="website-enter"
                    onChange={this.onEnterPassword}
                    placeholder="Enter Password"
                    value={enterPassword}
                  />
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="password-manager-image1"
                alt="password manager"
              />
            </div>
          </div>

          <div className="bottom-card">
            <div className="card-bottom">
              <div className="bottom-card-heading">
                <h1 className="your-password-heading">Your Passwords</h1>
                <p className="count-paragraph">{noOfPassword}</p>
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="website-image search-sm"
                  alt="search"
                />

                <input
                  type="search"
                  className="website-enter search"
                  onChange={this.onSearchPass}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="line" />
            <div className="checkbox-para-container">
              <div className="show-password-container">
                <input
                  type="checkbox"
                  className="checkbox-element"
                  onClick={this.onClickShowPassword}
                  id="sea"
                />
                <label className="paragraph-2" htmlFor="sea">
                  Show Passwords
                </label>
              </div>
            </div>
            <div>
              {isShow && (
                <ul className="listContainer">
                  {initialList.map(eachItem => (
                    <PasswordList
                      eachItem={eachItem}
                      showPass={isShowPassword}
                      onDeletePassword={this.onDeletePassword}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              )}
              {!isShow && (
                <div className="no-password-image">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                      className="password-manager-image1"
                      alt=" no passwords"
                    />
                    <p className="no-password-heading">No Passwords</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
