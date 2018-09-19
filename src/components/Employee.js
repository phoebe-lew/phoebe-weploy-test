import React from 'react'

const Employee = ({ employeeDetails }) => {
  console.log(employeeDetails)
  if (employeeDetails) {
    return (
      <div>
        <span>
          <img
            src={employeeDetails['profile-image-url']}
            alt="Weployee"
            height="35"
            width="35"
          />
        </span>
        <span>{employeeDetails.name}</span>
        <div> &#9733; {employeeDetails['average-rating']}</div>
        <div>Email: {employeeDetails.email}</div>
        <div>Mobile: {employeeDetails.mobile}</div>
      </div>
    )
  }
  return (
    <div>
      <i>This position has been sent to matching candidates. Please wait</i>
    </div>
  )
}

export default Employee
