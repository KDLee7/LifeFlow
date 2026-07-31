function TaskCard({ 
  title,
  focus,
  completed,
  handleButtonClick }) {



  return (

    <div className="task-card">
        <h3>{title}</h3>
        <h2>{focus}</h2>

<button
          type="button"
          className="counter"
          onClick={handleButtonClick}
      >
        {completed 
        ? "Mark as Incomplete" 
        : "Complete Today's Focus"}
      </button>

<p>
  {completed 
    ? "Great job! Keep building momentum!" 
    : "You haven't completed today's focus yet."}
</p>

      </div>
  )
}

export default TaskCard