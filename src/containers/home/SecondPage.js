import React,{useState, useEffect} from 'react';
import skills from '../../const/skills';
import skillGroup from '../../const/skillGroup';
import IconSkill from '../../components/IconSkill';
import {Progress, Image, Label} from 'semantic-ui-react';

const getSkillGroup = () => {
	return skills.map(skill=> (
		<IconSkill skill = {skill}>
		</IconSkill>
	));
}
const getSkillGroupProgress  = (offset, limit) => {
	const skills = [];
	for (let i=offset; i<limit;i++) {
		const skill = skillGroup[i];
		skills.push(
			<>
				<Label pointing ='below' basic>
				 {skill.name}
				</Label>
				<Progress  size='small' 
					success value={skill.ratio} total='10' progress='ratio' />
			</>
		);
	}
	return skills;
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
			<div className="skill-progress">
				<div className="skill-progress-content">
					<div className="avatar-content">
						<div className="skill-progress-avatar"> 
							<div className="msk-avatar progress-avatar">
								<Image src='/mf-avatar.svg' 
								size='small' circular />
							</div>
						</div>
						<div className="skill-progress-description">
							<h2>Who's this guy?</h2>
							<p>
								I'm am Full Stack Developer.
								I have serious passion for UI effects, and creating intuitive, dynamic user experiences.
								Let's make something special.
							</p>
						</div>
					</div>
					<div className="skill-progress-loaders">
						<div className="skill-progress-left">
							{getSkillGroupProgress(0,4)}
						</div>
						<div className="skill-progress-right">
							{getSkillGroupProgress(4,7)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default SecondPage;