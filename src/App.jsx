
import Pricecard from "./Components/Pricecard";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
     user: "Single User",
       storage: "5 GB",
   publicProjects: "Unlimited Public Projects",
   communityAccess: "Community Access",
   privateProjects:false,
   isPrivateProjects: "text-muted",
   phoneSupport: false,
   isPhoneSupport: "text-muted",
   subDomain:false,
   isSubDomain: "text-muted",
   reports: false,
   isReports: "text-muted",
     },
    {
      plan: "PLUS",
      price: 9,
       user: "5 Users",
       storage: "50 GB",
       publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
    privateProjects: true,
       isPrivateProjects:"",
     phoneSupport: true,
       isPhoneSupport:"",
       subDomain: true,
     isSubDomain: "",
       reports: true,
       isReports: "text-muted",
    },
    {
      plan: "PRO",
      price: 49,
       user: "Unlimited Users",
       storage: "150 GB",
     publicProjects: "Unlimited Public Projects",
       communityAccess: "Community Access",
       privateProjects: true,
       isPrivateProjects:"",
     phoneSupport: true,
       isPhoneSupport: "",
       subDomain: true,
       isSubDomain:"",
       reports: true,
     isReports:"",
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((item,index) => 
                {
                return <Pricecard
                 price={item} key={index} />
              }) 
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;