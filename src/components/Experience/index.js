import './index.css'
import React from 'react';
import { Divider, Item, Label } from 'semantic-ui-react'

export default function Experience() {

  const jobDescription = [
    {
      company: 'G-Research',
      startingDate: 'April 2022',
      endingDate: 'Present',
      role: 'Open Source Engineer',
      project: 'Apache Ozone',
      projectLink: 'https://ozone.apache.org/',
      technologies: [
        'Java', 
        'Maven', 
        'Docker', 
        'Kubernetes', 
        'JUnit', 
        'Mockito', 
        'Robot Framework '
      ]
    },
    {
      company: 'MLH Fellowship, G-Research',
      startingDate: 'January 2022',
      endingDate: 'April 2022',
      role: 'Software Engineering Fellow',
      project: 'Apache Ozone',
      projectLink: 'https://ozone.apache.org/',
      technologies: [
        'Java', 
        'Maven', 
        'Docker', 
        'Kubernetes', 
        'JUnit', 
        'Mockito', 
        'Robot Framework '
      ]
    }
  ]

  return (
    <div className='Experience' id='experience'>
      <div className='centered div2'>
        <h1 className='title' style={{color: 'rgb(0, 88, 189)'}}>Work experience</h1>
        <Divider className='sep'/>

        <Item.Group divided>

          {Object.values(jobDescription).map((desc) => (
            <Item>
              <Item.Content>
                <Item.Header style={{fontSize: '24px'}}>{desc.role}</Item.Header>
                <Item.Meta style={{fontSize: '16px'}}>
                  <span>{desc.startingDate} - {desc.endingDate}</span>
                </Item.Meta>
                <Item.Description style={{fontSize: '18px'}}>
                  {desc.company} <br/>
                  project: <a href={desc.projectLink}>{desc.project}</a> <br/>
                </Item.Description>
                <Item.Extra>
                {Object.values(desc.technologies).map((tech) => (
                  <Label style={{backgroundColor: 'rgb(0, 88, 189)', color: 'aliceblue'}}>{tech}</Label>
                ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}

        </Item.Group>
      </div>
    </div>
  );
}