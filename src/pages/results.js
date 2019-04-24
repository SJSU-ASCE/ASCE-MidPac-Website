import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Results = (props) => (
    <div>
        <Layout>
        <Helmet>
            <title>Results Page</title>
            <meta name="description" content="Payment Page" />
            
        </Helmet>
        
        <div id="main" className="spotlight">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Results</h1>  
                    </header>
                    <p>Click on the title of each of the tiles to see the scores for each competition. Top 3 schools will be listed in each tile for each competition.</p>
                </div>
            </section>
            <section id="one" className="tiles">
                <article>
                    <header className="major">
                        <h3><a href="https://drive.google.com/file/d/0B9hwm-Se5wxiLWFKQTVIMGMzYWZMNUs0aUJaUF84OXlheHAw/view?usp=sharing">Concrete Canoe</a></h3>
                        <p>1st: Tongji University</p>
                        <br></br>
                        <p>2nd: UN Reno</p>
                        <br></br>
                        <p>3rd: UC Berkeley</p>
                    </header>
                </article>
                <article>
                    <header className="major">
                        <h3><a href="https://drive.google.com/file/d/0B9hwm-Se5wxiNG1vSWJmaVhXb1Znd0FYaTlSemVTUHdfbVFR/view?usp=sharing">Sustainability Competition</a></h3>
                        <p>1st: Hohai University</p>
                        <br></br>
                        <p>2nd: Zhejiang University</p>
                        <br></br>
                        <p>3rd: UC Berkeley</p>
                    </header>
                    
                </article>
                <article>
                    <header className="major">
                        <h3><a href="https://drive.google.com/file/d/0B9hwm-Se5wxiekZiSWtuM0VHTjJUR2JPQ212ZEY3ZGlKRDFV/view?usp=sharing">Transportation Paper</a></h3>
                        <p>1st: UC Berkeley</p>
                        <br></br>
                        <p>2nd: Hohai University</p>
                        <br></br>
                        <p>3rd: Tongji University</p>
                    </header>
                </article>
                <article>
                    <header className="major">
                        <h3><a href="https://docs.google.com/spreadsheets/d/1LlS9QBNqXi9ZkXvtYgVismcKSEG-k0-8K2YC6PZ28EU/edit?usp=sharing">Mead Paper</a></h3>
                        <p>1st: CSU Fresno</p>
                        <br></br>
                        <p>2nd: UC Berkeley</p>
                        <br></br>
                        <p>3rd: CSU Sacramento</p>
                    </header>
                </article>
                <article>
                    <header className="major">
                        <h3><a href="https://docs.google.com/spreadsheets/d/17FAX2u0N-aWH_VZ2SCp1ffmO--yJzOuwZLQsdSdAlrc/edit?usp=sharing">Water Treatment</a></h3>
                        <p>1st: Laval University</p>
                        <br></br>
                        <p>2nd: UC Berkeley</p>
                        <br></br>
                        <p>3rd: Humboldt State University</p>
                    </header>
                </article>
                <article>
                    <header className="major">
                        <h3><a href="https://drive.google.com/open?id=0B9hwm-Se5wxiUm5YYmg4T3pHcks0bTFBb1ZvdHRwU0gwX2Zv">GeoWall</a></h3>
                        <p>1st: Zhejiang University</p>
                        <br></br>
                        <p>2nd: Hohai University</p>
                        <br></br>
                        <p>3rd: Tongji University</p>
                    </header>
                </article>
            </section>
        </div>
        </Layout>
    </div>
)

export default Results