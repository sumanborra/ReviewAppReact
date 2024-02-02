// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
class ReviewsCarousel extends Component {
  state = {length: 0}
  previousStatus = () => {
    const {length} = this.state
    if (length > 0) {
      this.setState(prevState => ({length: prevState.length - 1}))
    }
  }
  nextStatus = () => {
    const {length} = this.state
    if (length < reviewsList.length - 1) {
      this.setState(prevState => ({length: prevState.length + 1}))
    }
  }
  render() {
    const {length} = this.state

    // const {reviewsList} = this.props
    console.log(length)
    const {imgUrl, username, companyName, description} = reviewsList[length]
    return (
      <div className="background-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            className="buttn"
            onClick={this.previousStatus}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="carousal-container">
            <img src={imgUrl} alt={username} className="profile-image" />
            <p className="title-name">{username}</p>
            <p className="company-name">{companyName}</p>
          </div>
          <button
            className="buttn"
            onClick={this.nextStatus}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
