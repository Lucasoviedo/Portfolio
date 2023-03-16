import bootstrapLogo from '../../../assets/logos/bootstrap-logo.svg'
import cppLogo from '../../../assets/logos/c++-logo.svg'
import cssLogo from '../../../assets/logos/css-logo.svg'
import dockerLogo from '../../../assets/logos/docker-logo.svg'
import githubLogo from '../../../assets/logos/github-logo.svg'
import htmlLogo from '../../../assets/logos/html-logo.svg'
import javascriptLogo from '../../../assets/logos/javascript-logo.svg'
import jiraLogo from '../../../assets/logos/jira-logo.svg'
import mysqlLogo from '../../../assets/logos/mysql-logo.svg'
import pythonLogo from '../../../assets/logos/python-logo.svg'
import reactLogo from '../../../assets/logos/react-logo.svg'
import reactRouterLogo from '../../../assets/logos/reactRouter-logo.svg'
import reduxLogo from '../../../assets/logos/redux-logo.svg'
import sqlserverLogo from '../../../assets/logos/sqlserver-logo.svg'

import StackItem from './StackItem'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

import './stack.css'

const Stack = () => {
  const {fire, texts} = useContext(AccessibilityContext);

  return (
    <section id='stack' className={`section-container ${!fire && "section-container-dark"}`}>
      <div className='container'>
        <h2 className={`${!fire && "text-dark"}`}>{texts.stack.title}</h2>
        <p className={`${!fire && "text-dark"}`}>{texts.stack.description}</p>
        <h3 className={`stack-list-title ${!fire && "stack-list-title-dark"}`}>Front-end</h3>
        <div className={`stack-list-container ${!fire && "stack-list-container-dark"}`}>
          <StackItem image={bootstrapLogo} name="Bootstrap"
          link="https://getbootstrap.com/"/>
          <StackItem image={cssLogo} name="CSS"
          link="https://developer.mozilla.org/es/docs/Web/CSS"/>
          <StackItem image={htmlLogo} name="HTML"
          link="https://html.com/"/>
          <StackItem image={javascriptLogo} name="JavaScript"
          link="https://www.javascript.com/"/>
          <StackItem image={reactLogo} name="React"
          link="https://reactjs.org/"/>
          <StackItem image={reactRouterLogo} name="React Router"
          link="https://reactrouter.com/en/main"/>
          <StackItem image={reduxLogo} name="Redux"
          link="https://es.redux.js.org/"/>
        </div>
        <h3 className={`stack-list-title ${!fire && "stack-list-title-dark"}`}>Back-end</h3>
        <div className={`stack-list-container ${!fire && "stack-list-container-dark"}`}>
          <StackItem image={cppLogo} name="C++"
          link="https://isocpp.org/"/>
          <StackItem image={javascriptLogo} name="JavaScript"
          link="https://www.javascript.com/"/>
          <StackItem image={mysqlLogo} name="MySQL"
          link="https://www.mysql.com/"/>
          <StackItem image={pythonLogo} name="Python"
          link="https://www.python.org/"/>
          <StackItem image={sqlserverLogo} name="SqlServer"
          link="https://www.microsoft.com/es-es/sql-server/sql-server-downloads"/>
        </div>
        <h3 className={`stack-list-title ${!fire && "stack-list-title-dark"}`}>{texts.stack.others}</h3>
        <div className={`stack-list-container ${!fire && "stack-list-container-dark"}`}>
          <StackItem image={dockerLogo} name="Docker"
          link="https://www.docker.com/"/>
          <StackItem image={githubLogo} name="GitHub"
          link="https://github.com/"/>
          <StackItem image={jiraLogo} name="Jira"
          link="https://www.atlassian.com/es/software/jira"/>
        </div>  
      </div>
    </section>
  )
}

export default Stack