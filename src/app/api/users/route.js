import axios from 'axios';
export async function GET(){
    try{
        const response =await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev',{
      auth: {
        username: "coalition",
        password: "skills-test"
      }
    })
         return Response.json(response.data)
    }
    catch(error){
        return Response.json({
            error:"failed to fetch data"
        },{
            status:500
        })
    }
}