import React from 'react';
import { Icon} from 'semantic-ui-react';
import Button from '../components/Button'

const MenuBar = () => {
	return (
		<div className="menu">
			<div className="icon-container">
				<Icon.Group size='huge' className="icon-label">
				    <Icon  name='phoenix framework' />
				    <Icon corner name='code' />
				</Icon.Group>
			</div>
			<div className="button-container">
				<Button>
			      Home
			    </Button>
			    <Button>
			      About
			    </Button>
			    <Button >
			      Projects
			    </Button>
			    <Button >
			      Contact Me
			    </Button>
			</div>
		</div>
	);
}

export default MenuBar;