import React from 'react'

const Employee = ({ employeeDetails }) => {
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
        <span> {employeeDetails.name}</span>
        <br />
        <div> &#9733; {employeeDetails['average-rating']}</div>
        <div>Email: {employeeDetails.email}</div>
        <div>Mobile: {employeeDetails.mobile}</div>
      </div>
    )
  }
  return (
    <div>
      <i>
        This position has been sent to matching candidates.
        <br /> Please wait.
      </i>
    </div>
  )
}

export default Employee
