import './index.css'

const BannerProfile = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <div>
      <li className={className}>
        <h1 className="title">{headerText}</h1>
        <p className="Description">{description}</p>
      </li>
      <button className="button-Element">Show More</button>
    </div>
  )
}
export default BannerProfile
