import React, {useState} from "react"
import LandingEnglish from "./landing";
import LandingFrench from "./landingFrench";

const App = () => {
    const [pageState, setPageState] = useState(false);

  React.useEffect(() => {
  }, [pageState]);

  const changePage = () => {
    setPageState(!pageState)
  }

  return(
      <div>
        {
          pageState ?
              <LandingEnglish changeToFrench={changePage}/>
          :
              <LandingFrench changeToEnglish={changePage }/>
        }
      </div>

  )
}
export default App