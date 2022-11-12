import './index.css'
import React from 'react';
import { Button, Card, Icon, Divider, Label } from 'semantic-ui-react';

export default function Projects() {

  const project = [
    {
      name: 'RateMio',
      technologies: [
        'Spring MVC',
        'ReactJs',
        'PostgresSQL'],
      description: 'Platform for managing collaboration preferences and ratings.',
      link: 'https://github.com/xBis7/RateMio'
    },
    {
      name: 'TransportCom',
      technologies: [
        'Android Studio',
        'Java',
        'NodeJs',
        'MongoDB'],
      description: 'Template for a mobile app for a transportation company.',
      link: 'https://github.com/xBis7/TransportComApp'
    },
    {
      name: 'TReSA',
      technologies: [
        'JavaFx',
        'Apache Lucene'],
      description: 'The Reuters Search Assistant(TReSA), a search engine based on articles of the Reuters Agency.',
      link: 'https://github.com/xBis7/TReSA'
    },
    {
      name: 'CarWash',
      technologies: [
        'Java',
        'JavaFx',
        'Maven'],
      description: 'A client-server desktop app created for a Car Wash Shop.',
      link: 'https://github.com/xBis7/CarWash'
    }
  ]

  return (
    <div className='Projects' id='projects'>
      <div className='centered div3'>
        <h1 className='title'>Sample projects</h1>
        <Card.Group centered>

          {Object.values(project).map((desc) => (
            <Card raised className='project card'>
              <Card.Content>
                <Card.Header>{desc.name}</Card.Header>

                <Divider fitted style={{ margin: '10px' }} />
                
                <Card.Meta>
                  {Object.values(desc.technologies).map((tech) => (
                    <Label 
                      style={{backgroundColor: 'rgb(0, 88, 189)', 
                              color: 'aliceblue', 
                              margin: '3px'}}
                    >
                      {tech}
                    </Label>
                  ))}
                </Card.Meta>
                
                <Card.Description>
                  {desc.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui buttons'>
                  <Button
                    style={{ backgroundColor: 'rgb(8, 49, 97)', color: 'aliceblue' }}
                    primary
                    href={desc.link}
                  >
                    <Icon name='github alternate' /> GitHub
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}

        </Card.Group>
      </div>
    </div>
  );
}