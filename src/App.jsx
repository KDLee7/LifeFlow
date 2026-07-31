import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import TaskCard from './TaskCard'

function App() {
  

  function handleButtonClick(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id ===id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    )
  }

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React Components",
      completed: false,
    },
    {
      id: 2,
      title: "Build Navigation",
      completed: false,
    },
    {
      id: 3,
      title: "Learn CSS Flexbox",
      completed: false,
    }
  ])

  const today = new Date().toLocaleDateString("en-US",{
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
  })
      

      const completedTasks = tasks.filter(task => task.completed).length
      const totalTasks = tasks.length
      const progress = Math.round((completedTasks / totalTasks) * 100)
      
  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>
        <div>
          <Header
            title="LifeFlow"
            name="Kim"
            focus="Learn React"
          />


        </div>
<p>Today is {today}</p>
        
      <div className="progress-bar">
        <h2>Today's Progress</h2>

<p>
  {completedTasks} of {totalTasks} Tasks Completed
</p>

<p>{progress}% Complete</p>
</div>

        {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title="Today's Focus"
          focus={task.title}
          completed={task.completed}
          handleButtonClick={() => handleButtonClick(task.id)}
        />
        ))}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with us</h2>
          <p>Join the Vite community</p>

          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                X
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App