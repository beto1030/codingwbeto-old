import React from "react"
import Layout from "../components/Layout"
import Flashcard from "../components/Flashcard"
import "../styles/card.css"
import {keyterms} from  "../../static/geology-ch1-keyterms"
import {keytermDefinitions} from  "../../static/geology-ch1-keyterm-definitions"

export default function Geology () {

    var terms_and_defs= keyterms.map((id, index) => {
      return {
        id: id,
        term: keyterms[index],
        def: keytermDefinitions[index]
      }
    });


    return (
                    <Layout>
                        <section className="grid-container p-0">
        { terms_and_defs.map((term, idx) => <Flashcard key={idx} frontSide={term.term} backSide={term.def}/>)  }
                        </section>
                    </Layout>
                  
      )
      
}     
