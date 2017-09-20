import _ from 'lodash';
import '../css/style.css';
import ProfileImage from '../images/profile.jpg'
import PrintMe from '../js/print.js';

function component() {
	var element = document.createElement('div');
	var heading = document.createElement('h1');
	var button = document.createElement('button');
	var profile_image = new Image();

	heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
	heading.classList.add('heading');
	element.appendChild(heading);

	profile_image.src = ProfileImage;
	element.appendChild(profile_image);

	button.innerHTML = 'Click Here';
	button.onclick = PrintMe;
	element.appendChild(button);

	return element;
}

document.body.appendChild(component());
