import React,{useState, useEffect} from 'react';
import skills from '../../const/skills';
import IconSkill from '../../components/IconSkill';

const getSkillGroup = () => {
	return skills.map(skill=> (
		<IconSkill skill = {skill}>
		</IconSkill>
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