import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VMBO 2022</title>
        <meta name="description" content="16th International Workshop on Value Modelling and Business Ontologies" />
        <link rel="canonical" href="http://vmbo2022.github.io" />
      </Helmet>
      <section>
        <div>
          <h1>
            16th International Workshop on Value Modelling and Business
            Ontologies
          </h1>
          <p className="subtitle">
            In conjunction with the{" "}
            <a href="https://caise22.ugent.be/">
              34th International Conference on Advanced Information Systems
              Engineering (CAiSE 2022)
            </a>
            , Leuven, Belgium, 06-10 June, 2022.
          </p>
          <h2 id="proceedings">Proceedings</h2>
          <p>Proceedings are openly available at <a href="http://ceur-ws.org/Vol-3155/">http://ceur-ws.org/Vol-3155/</a> </p>
          
          <h2 id="venue">Venue</h2>
          <p>
          The workshop will be held at: 
          </p>
          <a href="https://goo.gl/maps/Foywh4bfuxkqapGQ8">
            Room 1.15<br/>
            Maria-Theresiacollege, Leuven Campus, KU Leuven<br/>
            Sint-Michielsstraat 6, 3000 Leuven, Belgium
          </a>

          <h2 id="registration">Registration</h2>
          <p>
          You can register for VMBO 2022 at the <a href="https://caise22.ugent.be/register/">registration page</a> of the 34th International Conference on Advanced Information Systems Engineering (CAiSE 2022).
          </p>
          
          <h2 id="program">Program</h2>
          <div>
            <h4>Session 1 </h4>
            <p>09:30-10:30</p>
            <ul>
              <li>Opening</li>
              <li>
                <div><b>Accounting Contracts in Collaboration Space</b></div>
                <div>Jonas Sveistrup Søgaard, William E. McCarthy, Lasse Herskind, and G. Ken Holman</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/poster1.pdf" target="_blank" rel="noreferrer">Object oriented REA using DBQUITY</a></b></div>
                <div>Jesper Kiehn and Lars Hammer</div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Session 2: Ontologies</h4>
            <p>11:00-12:30</p>
            <ul>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/paper1.pdf" target="_blank" rel="noreferrer">An Ontological Analysis of Justice</a></b></div>
                <div>Paul Johannesson, Helena Zhemchugova, and Susanne Hanger-Kopp</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/short4.pdf" target="_blank" rel="noreferrer">A Preliminary Comment on Amaral’s, Sales’s, and Guizzardi’s “Towards an Ontology Network in Finance and Economics”</a></b></div>
                <div>Ivars Blums and Hans Weigand</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/short5.pdf" target="_blank" rel="noreferrer">Information Entities and Artifact Ontology</a></b></div>
                <div>Hans Weigand and Paul Johannesson</div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Session 3: Accounting Concepts</h4>
            <p>14:00-15:30</p>
            <ul>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/short1.pdf" target="_blank" rel="noreferrer">Claims Debt and Equity in REA with FIBO Extensions</a></b></div>
                <div>Robert Nehmer, Michael Bennett, and Maxwell Gillmore</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/short2.pdf" target="_blank" rel="noreferrer">The Metaphysics of Internal Controls</a></b></div>
                <div>Graham Gal</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/short3.pdf" target="_blank" rel="noreferrer">Inferences: Integrals and Derivatives</a></b></div>
                <div>Graham Gal	</div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Session 4: Applications</h4>
            <p>16:00-17:30</p>
            <ul>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/paper2.pdf" target="_blank" rel="noreferrer">Practically Applicable Enterprise Models: A Research Project Toward a User-oriented Design Method</a></b></div>
                <div>Merijn van den Oever, Ben Roelens, and Dominik Bork</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/paper3.pdf" target="_blank" rel="noreferrer">Evaluating Clinical-Care Metadata Share and its FAIRification using the REA Ontology</a></b></div>
                <div>Syeda A. Sohail, Faiza A. Bukhsh, Maurice van Keulen, Johannes G. Krabbe, and Pavel Hruby</div>
              </li>
              <li>
                <div><b><a href="http://ceur-ws.org/Vol-3155/poster2.pdf" target="_blank" rel="noreferrer">No-Code Application Development Using Ontology Weaver</a></b></div>
                <div>Christian Vibe Scheller and Pavel Hruby</div>
              </li>
            </ul>
          </div>
          <h2>Call for papers</h2>
          <h3>About</h3>
          <p>
            The importance of modeling the essence of enterprises on a level
            that abstracts from operational details is increasingly recognized.
            Two established enterprise modeling approaches are value modeling
            and business ontology. Value modeling is a business modeling
            approach that focuses on the value objects exchanged in business
            networks. Business ontology provides abstract descriptions of
            enterprises in their business context, focusing on what is needed to
            create and transfer value. Research in these fields is conducted
            using instruments like the REA Ontology (Resources, Events, Agents),
            the Unified Foundational Ontology (UFO), the Business Model Canvas,
            the e3value toolset, the Value Delivery Modeling Language (VDML),
            and the Enterprise Engineering framework.
          </p>
          <p>The goal of the VMBO workshop series is two-fold:</p>
          <ul>
            <li>
              to bring together researchers with an interest in value modeling
              and business ontology to present and discuss the current state of
              the art
            </li>
            <li>to identify key areas for further research</li>
          </ul>
          <h3>Topics</h3>
          <p>Topics of interest include, but are not limited to:</p>
          <ul>
            <li>Service ontology for business</li>
            <li>Service-oriented view of business ontology</li>
            <li>Enterprise Engineering</li>
            <li>Business modeling of service exchanges</li>
            <li>Value modeling fundamentals</li>
            <li>Value modeling applications and experiences</li>
            <li>Business ontology fundamentals</li>
            <li>Business ontology applications and experiences</li>
            <li>Role of value modeling in enterprise architecture</li>
            <li>Ontology-driven enterprise system development</li>
            <li>Ontology-aware enterprise systems</li>
            <li>Pragmatic Web – theory and applications</li>
            <li>Ontological representations of aggregated data</li>
            <li>Business ontology / value models for auditing</li>
            <li>
              Business ontology / value models for managerial decision making
            </li>
            <li>Business ontology / value models for strategy exploration</li>
            <li>
              Business ontology / value models for business process management
            </li>
          </ul>
          <h3 id="dates">Important Dates</h3>
          <ul>
            <li>
              Abstract submission: 22 March 2022 AoE
            </li>
            <li>
              Paper submission: <s>8 March</s> <s>15 March</s> 25 March 2022 AoE
            </li>
            <li>Author notification: <s>8 April</s> 19 April 2022</li>
            <li>Camera-ready: <s>18 April</s> 04 May 2022</li>
            <li>Workshop: 6 June 2022</li>
          </ul>
          <h3 id="guidelines">Submission Guidelines</h3>
          <p>
            Submissions should describe original research ideas or
            contributions, present problems or challenges encountered in
            practice, or report on industrial cases and practices.
          </p>
          <p>
            We encourage authors to submit papers for which they would like
            feedback from other participants of the workshop.
          </p>
          <p>Submissions should:</p>
          <ul>
            <li>Respect the 8-page limit (excluding references)</li>
            <li>Be submitted in PDF</li>
            <li>
              Comply with the{" "}
              <a href="https://ceurws.wordpress.com/2020/03/31/ceurws-publishes-ceurart-paper-style/">
                1-column CEUR-ART Style
              </a>
            </li>
          </ul>

          <p>
            When submitting your paper, please select the track{" "}
            <b>"Value Modeling and Business Ontologies"</b>.
          </p>

          <div>
            <a
              href="https://easychair.org/conferences/?conf=caise22"
              class="button"
              target="_blank" rel="noreferrer"
            >
              Submit a paper
            </a>
          </div>

          <h3>Publication</h3>
          <p>
            Accepted papers will be published with CEUR-WS.org online
            proceedings, if desired by the authors.
          </p>

          <p>
            We support the submission of VMBO papers afterward to a special
            issue of a journal, e.g., Journal of Applied Ontology (JAO) or
            Journal of Emerging Technologies in Accounting (JETA), if possible.
          </p>

          <p>
            Note that submitted papers will be reviewed only marginally. The
            program committee will use the papers to put together a final
            program; the aim is to accommodate all relevant papers with
            sufficient quality.
          </p>
          <h3 id="organization">Organization</h3>
          <ul>
            <li>
              <div>
                <a href="https://research.tilburguniversity.edu/en/persons/hans-weigand">
                  Paul Johannesson
                </a>
                , KTH Royal Institute of Technology, Sweden
              </div>
              <div>pajo [at] dsv.su.se</div>
            </li>
            <li>
              <div>
                <a href="https://research.tilburguniversity.edu/en/persons/hans-weigand">
                  Hans Weigand
                </a>
                , Tilburg University, The Netherlands
              </div>
              <div>h.weigand [at] tilburguniversity.edu</div>
            </li>
            <li>
              <div>
                <a href="https://inf.unibz.it/~tpsales">Tiago Prince Sales</a>,
                Free University of Bozen-Bolzano, Italy
              </div>
              <div>tiago.princesales [at] unibz.it</div>
            </li>
          </ul>

          <h3>Program Committee</h3>
          <ul>
            <li>Ben Roelens – Open University, The Netherlands</li>
            <li>Bill McCarthy – Michigan State University, USA</li>
            <li>Christian Huemer – TU Wien, Austria</li>
            <li>Cristine Griffo – Free University of Bozen-Bolzano, Italy</li>
            <li>
              Daniele Porello – Laboratory for Applied Ontology – ISTC-CNR,
              Italy
            </li>
            <li>
              Erik Proper – Luxembourg Institute of Science and Technology,
              Luxembourg
            </li>
            <li>Frederik Gailly – Ghent University, Belgium</li>
            <li>Faiza A. Bukhsh – University of Twente, The Netherlands</li>
            <li>Geert Poels – Ghent University, Belgium</li>
            <li>Giancarlo Guizzardi – University of Twente, The Netherlands</li>
            <li>Graham Gal – University of Massachusetts, USA</li>
            <li>
              Iván Razo-Zapata – Instituto Tecnológico Autónomo de México
              (ITAM), Mexico
            </li>
            <li>
              Jaap Gordijn – Vrije Universiteit Amsterdam, The Netherlands
            </li>
            <li>
              João Paulo A. Almeida – Federal University of Espírito Santo,
              Brazil
            </li>
            <li>Joris Hulstijn – Tilburg University, The Netherlands</li>
            <li>Mike Bennett – Hypercube Limited, UK</li>
            <li>
              Nicola Guarino – Laboratory for Applied Ontology – ISTC-CNR, Italy
            </li>
            <li>
              Patricio de Alencar Silva – Federal Rural University of the
              Semi-arid Region, Brazil
            </li>
            <li>Pavel Hruby – DXC Technology, Denmark</li>
            <li>
              Renata S. S. Guizzardi – University of Twente, The Netherlands
            </li>
            <li>Walter Schwaiger – TU Wien, Austria</li>
            <li>Wim Laurier – Université Saint-Louis, Belgium</li>
            <li>
              Yao-Hua Tan – Delft University of Technology, The Netherlands
            </li>
          </ul>

          <h3 id="previous">Previous Editions</h3>
          <ul>
            <li>
              <a
                href="https://vmbo2021.events.unibz.it/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2021
              </a>
              , Bolzano, IT (Virtual)
            </li>
            <li>
              <a
                href="https://vmbo2020.ugent.be/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2020
              </a>
              , Brussels, BE
            </li>
            <li>
              <a
                href="https://vmbo2019.blogs.dsv.su.se/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2019
              </a>
              , Stockholm, SE
            </li>
            <li>
              <a
                href="https://vmbo2018.e3value.com/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2018
              </a>
              , Amsterdam, NL
            </li>
            <li>
              <a
                href="https://www.list.lu/en/conference/vmbo2017/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2017
              </a>
              , Belvaux, LU
            </li>
            <li>VMBO 2016, Trento, IT</li>
            <li>
              <a
                href="https://vmbo2015.blogs.dsv.su.se/"
                target="_blank" rel="noreferrer"
              >
                VMBO 2015
              </a>
              , Tilburg, NL
            </li>
            <li>VMBO 2014, Berlin, DE</li>
            <li>VMBO 2013, Delft, NL</li>
            <li>VMBO 2012, Vienna, AT</li>
            <li>VMBO 2011, Ghent, BE</li>
            <li>VMBO 2009, Amsterdam, NL</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
