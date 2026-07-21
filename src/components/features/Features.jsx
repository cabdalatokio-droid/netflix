import featuresData from "../../content/Features.json";
import Feature from "./feature";

const Features = () => {
  return (
    <div>
      {featuresData.map(feature=>(
        <Feature key={feature.id} {...feature}/>
      ))}
    </div>
  )
}

export default Features