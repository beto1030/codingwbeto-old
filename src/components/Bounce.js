import React from "react"

import Helmet from "react-helmet"
import { withPrefix/*, Link*/ } from "gatsby"

export default function Bounce() {
    return (
                  <div>
                     <canvas id="gameCanvas" width="400" height="300"></canvas>
                     <Helmet>
                       <script src={withPrefix('script.js')} type="text/javascript" />
                     </Helmet>
                  </div>
      )
      
}     
