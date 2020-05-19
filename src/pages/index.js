import React from "react"
import team from "../data/theTeam"

export default () => (
  <div>
    Miles Davison
    <ul>
      {team.map(member => (
        <li>
          <div>{member.name}</div>
          <div>{member.position}</div>
          <ul>
            {member.photoURLs.map(url => (
              <li>{url}</li>
            ))}
          </ul>
          <ul>
            {member.practice.map(prac => (
              <li>{prac}</li>
            ))}
          </ul>
          <ul>
            {member.bio.map(b => (
              <li>{b}</li>
            ))}
          </ul>
          <ul>
            {member.education.map(educ => (
              <li>{educ}</li>
            ))}
          </ul>
          <ul>
            {member.experience.map(exp => (
              <li>{exp}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)
