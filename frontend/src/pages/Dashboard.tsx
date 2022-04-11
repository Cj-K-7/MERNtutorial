import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { RootState } from "../app/store";
import GoalForm from "../components/GoalForm";

function Dashboard() {
  const navigate = useNavigate();
  const {user} = useSelector((state:RootState)=>state.auth);

  useEffect(()=>{
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
      <GoalForm/>
    </section>
    </>
  )
}

export default Dashboard