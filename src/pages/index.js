import React from "react"
import Layout from "../components/Layout"
/*import Bounce from "../components/Bounce"*/

/*
 * uncomment if we need to add a script 
import Helmet from "react-helmet"
import { withPrefix/ *, Link* / } from "gatsby"*/

export default function Home() {
    return (
                  <Layout>
                      <section>
                          <div>
                              <p className="text-center"><span>August 8, 2021 - </span> <a href={"./"}>Vim Cheat Sheet</a></p>
                              <p className="text-center"><span>August 15, 2021 - </span> <a href={"./"}>My Vim Plugins</a></p>
                              <p className="text-center"><span>August 15, 2021 - </span> <a href={"./"}>Geology Flash Cards Chapter 1</a></p>
                              <p className="text-center"><span>August 15, 2021 - </span> <a href={"./"}>Math 40 Notes Chapter 1</a></p>
                              <p className="text-center"><span>August 15, 2021 - </span> <a href={"./"}>My .vimrc File</a></p>
                          </div>
                      </section>
                  </Layout>
                  
      )
      
}     
