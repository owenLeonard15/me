import * as React from 'react';
import vandy from './vandy.png';
import capitalone from './c1_logo.png';
import dsg from './dsg_logo.png';
import './App.css';
import logo from './owen-logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  function handleClick(){
    window.location.href = "https://www.linkedin.com/in/owen-leonard15/";
  }

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "white", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
        <div style={{backgroundColor: 'white', width: "100%", minHeight: '60px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
              <LinkedInIcon style={{visibility: "hidden"}} className='icon' onClick={handleClick}/>
              <img src={logo} style={{height: '50px', paddingRight: '2rem'}} />
              <LinkedInIcon className='icon' onClick={handleClick}/>
        </div>
        <div className='row'>
          <div className="content">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{width: '100%', border: 'solid 1px black'}}>
            <AccordionSummary
              expandIcon={false}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <h3>EXPERIENCE</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                <img src={capitalone} alt="capital one logo" style={{height: '3rem'}}/>
                <h2>Software Engineer</h2>
                <h5>2021 - Present</h5>
                <p>I'm currently on a backend/data engineering team developing an application which processes credit card application data.
                  During my first year at Capital One, I worked on enterprise platforms, developing APIs and
                  internal tooling for microservices for the web and mobile applications. 
                </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '2rem'}}>
                <h2>Software Engineer Intern</h2>
                <h5>Summer 2020</h5>
                <p>Designed and deployed an internal dashboard to track AWS resource costs across accounts. I learned a lot about AWS in the process and earned my AWS Solutions Architect certifcation.</p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '2rem'}}>
                <img src={dsg} alt="dsg logo" style={{height: '3.5rem'}}/>
                <h2>Software Engineer Intern</h2>
                <h5>Summer 2019</h5>
                <p>I developed API and front end features related to DSG's customer loyalty program within their newly redesigned POS (point of sale)
                  system. The new POS was intended to replace existing in-store systems and eventually be used in pop-locations on mobile devices. 
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{width: '100%', border: 'solid 1px black'}}>
            <AccordionSummary
              expandIcon={false}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h3>PROJECTS</h3>
            </AccordionSummary>
            <AccordionDetails>
              <h2>TikTok Social Listening Dashboard</h2>
              <p style={{fontSize: '1rem'}}>Web dashboard which collects, aggregates, and displays data on 
                thousands of TikTok hashtags. Created for analysts and external clients at <a style={{fontWeight: 'bolder', color: 'gray'}} href='https://dcdx.co/'>dcdx</a>
              </p> 
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{width: '100%', border: 'solid 1px black'}}>
            <AccordionSummary
              expandIcon={false}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <h3>EDUCATION</h3>
            </AccordionSummary>
            <AccordionDetails>
              <img src={vandy} alt="vandy logo" style={{height: '4rem'}}/>
              <h2>Vanderbilt University</h2>
              <h4 style={{fontSize: '1rem'}}>Bachelor of Science, Computer Science</h4>    
              <h5>Graduated 2021</h5>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{width: '100%', border: 'solid 1px black',}}>
            <AccordionSummary
              expandIcon={false}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <h3>BLOG</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Coming Soon
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
        {/* <div className='row' style={{display: 'flex', flexDirection: 'row', borderBottom: '0'}}>
          <div className="content" style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            <div className='list' style={{paddingRight: '3rem'}}>
              <h3>DOMAINS OF EXPERIENCE</h3>
              <ul>
                <li>→ Data Engineering</li>
                <li>→ API Development</li>
                <li>→ Web Development</li>
                <li>→ Distributed Systems</li>
                <li>→ Serverless</li>
                <li>→ Object Oriented Programming</li>
              </ul>
            </div>
            <div className='list'>
              <h3>TECHNICAL SKILLS</h3>
              <h6>Tech Stack (currently): Python, SQL, Spark, Airflow, Snowflake, Databricks, AWS, Jenksins, Git</h6>
              <h6>Tech Stack (previously): TypeScript, Node.js, Java, Python, Docker, Linux/Unix shell, AWS, Jenksins, Git</h6>
              <ul>
                <li>→ Python</li>
                <li>→ SQL</li>
                <li>→ Spark</li>
                <li>→ Snowflake</li>
                <li>→ Databricks</li>
                <li>→ AWS</li>
                <li>→ Jenkins </li>
                <li>→ Git</li>
                <li>→ Node.js</li>
                <li>→ Airflow</li>
                <li>→ Java</li>
                <li>→ Linux/Unix shell</li>
                <li>→ Docker</li>
                <li>→ TypeScript</li>
                <li>→ React</li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
  );
}

export default App;
