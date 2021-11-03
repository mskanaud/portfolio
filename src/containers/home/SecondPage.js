import React,{useState, useEffect} from 'react';
import skills from '../../const/skills';
import IconSkill from '../../components/IconSkill';
import {Icon} from 'semantic-ui-react';

const getSkillGroup = () => {
	return skills.map(skill=> (
		<div className="skill-group-set">
			<div className="skill-icon-container">
				<Icon.Group size='big' className="icon-label">
			    	<Icon  size="large"  name={skill.icon} />
			  </Icon.Group>
			</div>
			<h2>{skill.name}</h2>
			<p>{skill.desc}</p>
		</div>
	));
}

const SecondPage = () => {
	const [skillGroup, setSkillGroup] = useState([]);
	useEffect(() => {
		setSkillGroup(getSkillGroup());
	},[]);
	return(
		<div className="second-page">
			<div className="skill-description">
				<div className="heading">
					<h1> ABOUT </h1>
				</div>
				<div className="skill-group">
					<div className="skill-container">
						{skillGroup}
					</div>
				</div>
			</div>
		</div>
	);

}

export default SecondPage;