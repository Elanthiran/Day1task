import propTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Pricecard = ({price}) => {
  return (
    <>
    <div className="col-lg-4">
  <div className="card mt-2 ">
    <div className="card-body">
      <h6 className="card-title text-muted">{price.plan}</h6>
      <h1 className="card-plan">${price.price}<span>/month</span></h1>
      <hr />
      <ul>
        <li><span><FaCheck /></span> {price.user}</li>
        <li><span><FaCheck /></span> {price.storage}</li>
        <li><span><FaCheck /></span> {price.publicProjects}</li>
        <li><span><FaCheck /></span> {price.communityAccess}</li>
        <li className={price.isPrivateProjects}><span>{price.privateProjects?<FaCheck />:<FaTimes />}</span> Unlimited
          Private Projects</li>
        <li className={price.isPhoneSupport}><span>{price.phoneSupport?<FaCheck />:<FaTimes />}</span> Dedicated
          Phone Support</li>
        <li className={price.isSubDomain}><span>{price.subDomain?<FaCheck />:<FaTimes />}</span> Free Subdomain
        </li>
        <li className={price.isReports}><span>{price.reports?<FaCheck />:<FaTimes />}</span> Monthly Status
          Reports</li>
      </ul>
      <a className="button"href="#">BUTTON</a>
    </div>
    </div>
    </div>
    </>
  )
}
Pricecard.propTypes={
  price:propTypes.array
  }

export default Pricecard