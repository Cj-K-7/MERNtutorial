import axios from "axios";

const API_URL = '/api/goals/'

//Create new goal
const createGoal =async (goalData:object, token: string) => {
    const config = {
        headers:{
            Authorization: `Bearar ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config);

    return response.data
}

const getGoals =async (token:string) => {
    const config = {
        headers:{
            Authorization: `Bearar ${token}`
        }
    }
    const response = await axios.post(API_URL, config);

    return response.data
}

const goalService = {
    createGoal, getGoals
}

export default goalService