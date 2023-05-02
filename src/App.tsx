import profile from './profile_circle.png';
import vandy from './vandy.png';
import capitalone from './c1_logo.png';
import dsg from './dsg_logo.png';
import './App.css';
import background from './background.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  function handleClick(){
    window.location.href = "https://www.linkedin.com/in/owen-leonard15/";
  }
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
        <div className='row' style={{backgroundColor: 'black'}} >
          <div className="content" style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} >
            <img src={profile} style={{height: '7rem', paddingRight: '2rem'}} />
            <div style={{borderBottom: 'none'}}>
              <h1 style={{color: 'whitesmoke'}}>Owen Leonard</h1>
              <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'nowrap'}}>
                <h4>Software Engineer</h4>
                <LinkedInIcon className='icon' onClick={handleClick}/>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="content">
            <h3>EXPERIENCE</h3>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
              <img src={capitalone} alt="capital one logo" style={{height: '3rem'}}/>
              <h2>Software Engineer</h2>
              <h5>2021 - Present</h5>
              <p>Currently, I'm working on a backend/data engineering team which develops the data pipeline for credit card application data.
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
          </div>
        </div>
        <div className='row'>
          <div className="content">
            <h3>PROJECTS</h3>
            <h2>TikTok Hashtag Dashboard</h2>
            <h4 style={{fontSize: '1rem'}}>Web dashboard which collects, aggregates, and displays data on 
              thousands of TikTok hashtags. Used by analysts and external clients at <a style={{fontWeight: 'bolder', color: 'blue'}} href='https://dcdx.co/'>dcdx</a>
            </h4> 
            <a  href='https://github.com/owenLeonard15/TikTokDashboard'>
              <h6 style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between'}}>→ View Work <GitHubIcon style={{marginLeft: '10px'}}/></h6>
              
            </a>  
          </div>
        </div>
        <div className='row'>
          <div className="content">
            <h3>EDUCATION</h3>
            <img src={vandy} alt="vandy logo" style={{height: '4rem'}}/>
            <h2>Vanderbilt University</h2>
            <h4 style={{fontSize: '1rem'}}>Bachelor of Science, Computer Science</h4>    
            <h5>Graduated 2021</h5>
          </div>
        </div>
        <div className='row' style={{display: 'flex', flexDirection: 'row', borderBottom: '0'}}>
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
              {/* <h6>Tech Stack (currently): Python, SQL, Spark, Airflow, Snowflake, Databricks, AWS, Jenksins, Git</h6>
              <h6>Tech Stack (previously): TypeScript, Node.js, Java, Python, Docker, Linux/Unix shell, AWS, Jenksins, Git</h6> */}
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
        </div>
        </div>
  );
}

export default App;
