import * as React from 'react'
import styled from 'styled-components'
import { helpers, media } from '../util/style-utils'

const Container = styled.section`
  background-color: ${helpers.dark};
  margin-bottom: 0;
  padding: 60px 5%;
  display: flex;
  flex-flow: row wrap;

  ${media.xxlarge`
    padding-left: 12%;
    padding-right: 12%;
  `};
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 60px;
  line-height: 46px;
  flex: 1 100%;
  font-weight: 400;
`

const Paragraph = styled.p`
  flex: 1 100%;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 5px;
  line-height: 2.5rem;
  font-size: 1.584rem;
  font-weight: 300;
  padding: 0 20%;
  color: rgb(225, 210, 230);
`

const Experience = styled.div`
  ${helpers.skills};
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  flex: 1 0 90%;
  padding: 0 0.75rem;
`
const Header = styled.h2`
  font-size: 45px;
  font-weight: 300;
  padding: 0;
  margin: 1rem 0;
`

const SkillsContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-wrap: wrap;
`

const SkillTitle = styled.h3`
  border: none;
  text-align: left;
  font-size: 25px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 10px;
  flex: 1 0 100%;
`

const Skill = styled.div`
  flex: 1 1 30%;

  text-align: center;
  padding: 0 10px;
  margin: 1rem 0;
  transition: background-color 0.3s ease;
  font-size: 26px;
  font-weight: 300;
`

const skills = [
  {
    title: 'Coding Skills',
    submenus: [
      {
        subtitle: 'Programming Skills',
        items: ['Javascript (ES6)', 'TypeScript', 'Java', 'C#'],
      },
      {
        subtitle: 'Backend Technologies',
        items: ['NodeJS', 'GraphQL', '(No)SQL', 'Nginx'],
      },
      {
        subtitle: 'Frontend Technologies',
        items: [
          'React',
          'AngularJS 1',
          'Angular 5',
          'VueJS',
          'HTML5',
          'CSS3',
          'SASS',
        ],
      },
    ],
  },
  {
    title: 'Tools',
    submenus: [
      {
        subtitle: 'Version Control Systems',
        items: ['Git', 'TFS'],
      },
      {
        subtitle: 'Backend Technologies',
        items: ['NodeJS', '(No)SQL', 'Nginx'],
      },
      {
        subtitle: 'Build Automatizations',
        items: ['Webpack', 'Gulp', 'Docker'],
      },
    ],
  },
]

const SkillSection = ({ title, submenus }) => (
  <Experience>
    <Header>{title}</Header>
    {submenus.map(({ subtitle, items }) => (
      <SkillsContainer key={subtitle}>
        <SkillTitle>{subtitle}</SkillTitle>
        {items.map(item => <Skill key={item}>{item}</Skill>)}
      </SkillsContainer>
    ))}
  </Experience>
)

const languages = [
  {
    title: 'Dutch',
    description: 'Nederlands is mijn moedertaal.',
    level: 100,
  },
  {
    title: 'English',
    description: 'I am highly proficient in English.',
    level: 95,
  },
  {
    title: 'French',
    description: 'Je parle un peu de Français.',
    level: 40,
  },
]

const LanguageDescription = styled.span`
  ${media.medium`
    flex: 1 0 45%;
  `}
  flex: 1 0 100%;
  text-align: left;
  font-size: 25px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
`

const ProgressBar = styled.div`
  ${media.medium`
    flex: 1 0 45%;
  `}
  flex: 1 0 100%;
  margin-bottom: 1.5rem;
  background-color: rgba(0,0,0,.15);
  display: flex;
`

const FilledProgress = styled.div`
  flex: 0 0 ${({ width }) => width}%;
  background-color: rgba(0,0,0,.15);
  padding-top: 3px;
  padding-bottom: 3px;
  font-weight: 300;
`

const LanguageTitle = styled.span`
  flex: 1 0 100%;
  border: none;
  text-align: left;
  font-size: 36px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 1.5rem 0 1.5rem 1.5rem;
`

const Language = ({ title, description, level }) => (
  <SkillsContainer key={title}>
    <LanguageTitle>{title}</LanguageTitle>
    <LanguageDescription>{description}</LanguageDescription>
    <ProgressBar>
      <FilledProgress width={level}>{level + '%'}</FilledProgress>
    </ProgressBar>
  </SkillsContainer>
)

const LanguageSection = () => (
  <Experience>
    <Header>Languages</Header>
    {languages.map(language => <Language key={language.title} {...language} />)}
  </Experience>
)

export default class Skills extends React.Component {
  render() {
    return (
      <Container >
        <Title>Skills</Title>
        <Paragraph id="skills">
          I love development and design. I'm most comfortable with front-end
          technologies like React and Redux, but I'm also confortable in back-end technologies like NodeJS and GraphQL. I'm a big fan of functional
          programming.
        </Paragraph>
        {skills.map(skill => <SkillSection key={skill.title} {...skill} />)}
        <LanguageSection />
      </Container>
    )
  }
}
