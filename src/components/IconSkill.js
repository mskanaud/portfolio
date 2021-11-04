import React from 'react';
import {Icon} from 'semantic-ui-react';

const IconSkill = props => {
	return(
		<div className="skill-group-set">
			<div className="skill-icon-container">
				<Icon.Group size='big' className="icon-label">
			    	<Icon  size="large"  name={props.skill.icon.main} />
			    	{props.skill.icon.corner && 
			    		<Icon size='small' corner name={props.skill.icon.corner} />}
			  </Icon.Group>
			</div>
			<h2>{props.skill.name}</h2>
			<p>{props.skill.desc}</p>
		</div>
	);
}

export default IconSkill;