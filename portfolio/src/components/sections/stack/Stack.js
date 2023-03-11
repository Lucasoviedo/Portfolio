import bootstrapLogo from '../../../assets/logos/bootstrap-logo.svg'
import cppLogo from '../../../assets/logos/c++-logo.svg'
import cssLogo from '../../../assets/logos/css-logo.svg'
import dockerLogo from '../../../assets/logos/docker-logo.svg'
import githubLogo from '../../../assets/logos/github-logo.svg'
import htmlLogo from '../../../assets/logos/html-logo.svg'
import javascriptLogo from '../../../assets/logos/javascript-logo.svg'
import mysqlLogo from '../../../assets/logos/mysql-logo.svg'
import pythonLogo from '../../../assets/logos/python-logo.svg'
import reactLogo from '../../../assets/logos/react-logo.svg'
import reduxLogo from '../../../assets/logos/redux-logo.svg'
import sqlserverLogo from '../../../assets/logos/sqlserver-logo.svg'

import StackItem from './StackItem'
import './stack.css'

const Stack = () => {
  return (
    <section id='stack' className='pruebaaa'>
      <h2>Stack</h2>
      <p>On my way to get to be the better web developer I could,
        this is where my skills shine the most
      </p>
      <div className='stack-list-container'>
        <StackItem image={bootstrapLogo} name="Bootstrap"/>
        <StackItem image={cppLogo} name="C++"/>
        <StackItem image={cssLogo} name="CSS"/>
        <StackItem image={dockerLogo} name="Docker"/>
        <StackItem image={githubLogo} name="GitHub"/>
        <StackItem image={htmlLogo} name="HTML"/>
        <StackItem image={javascriptLogo} name="JavaScript"/>
        <StackItem image={mysqlLogo} name="MySQL"/>
        <StackItem image={pythonLogo} name="Python"/>
        <StackItem image={reactLogo} name="React"/>
        <StackItem image={reduxLogo} name="Redux"/>
        <StackItem image={sqlserverLogo} name="SqlServer"/>
      </div>
    </section>
  )
}

export default Stack