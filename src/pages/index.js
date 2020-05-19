import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { theTeam, thePractices } from "../data"

export default () => {
  const images = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            name
            relativePath
            absolutePath
          }
        }
      }
    }
  `)
  return (
    <div>
      Miles Davison TEAM
      <ul>
        {theTeam.map(member => (
          <li>
            <div>{member.name}</div>
            <div>{member.position}</div>
            <ul>
              {member.photoURLs.map((url, i) => (
                <li>
                  <div>{`field${i + 1}: ` + url}</div>
                  {images.allFile.edges.map(edge => {
                    if (edge.node.relativePath === url)
                      return (
                        <div>
                          <div>{`path${i + 1}: /images/${
                            edge.node.relativePath
                          }`}</div>
                          <img src={`/images/${edge.node.relativePath}`} />
                        </div>
                      )
                  })}
                </li>
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
      PRACTICE AREAS
      <ul>
        {thePractices.map(practice => {
          return (
            <li>
              <div>{practice.name}</div>
              <ul>
                {practice.description.map(desc => (
                  <li>{desc}</li>
                ))}
              </ul>
              <ul>
                {practice.subAreas.map(sub => (
                  <li>{sub}</li>
                ))}
              </ul>
              <ul>
                {practice.team.map(member => (
                  <li>{member}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
