import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  nextReview = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
  }

  previousReview = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]

    return (
      <div className="container">
        <h1>Reviews</h1>
        <div>
          <div className="outer">
            <button
              type="button"
              onClick={this.previousReview}
              data-testid="leftArrow"
              disabled={currentIndex === 0} // Disable button if at first review
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="Left Arrow"
              />
            </button>
            <div className="inner">
              <img src={imgUrl} alt={username} />
              <p>{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              type="button"
              onClick={this.nextReview}
              data-testid="rightArrow"
              disabled={currentIndex === reviewsList.length - 1}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="Right Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
