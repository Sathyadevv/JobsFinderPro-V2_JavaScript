export const formPostJob =(values)=>{
    if(!values.authid){
       return{error:"*Invalid User Id.", valid:false}
    }
    if(!values.jobTitle){
        return{error:"*Enter the Title of Job.", valid:false}
    }
    if(!values.jobDescription){
        return{error:"*Enter the Job Description.", valid:false}
    }
    if(!values.jobCity){
        return{error:"*Enter the Job Location.", valid:false}
    }
    if(!values.jobSalary){
        return{error:"*Enter the Salary Details.", valid:false}
    }
    if(!values.jobRequirement){
        return{error:"*Enter the Skill Requirement.", valid:false}
    }
    if(!values.jobType){
      return{error:"*Enter Job Type.", valid:false}
  }
  if(!values.jobApplyEnd){
      return{error:"*Enter the Deadline of application.", valid:false}
  }
    
    return {error:"All are valid.", valid:true}
    }