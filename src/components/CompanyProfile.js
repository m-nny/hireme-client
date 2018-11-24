import React from 'react';
import {Column, Row} from 'simple-flexbox';
import '../styles/_companyprofile.sass'


class CompanyProfile extends React.Component {
	render() {
		return (
			<>
				<Column flexGrow={1} className="profile">
					<Row horizontal="center">
						<h1 className="pink">Company Info</h1>
					</Row>
					<Row>
						<Column className="col">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9k2C9D2VS9nA2FgtNpY76VdH6WeOJxyXH4DSOjWrR8RU170Azpg"
								alt=""/>
							<button>Followers</button>
						</Column>
						<Column className="col22">
							<div>Name:</div>
							<div>Location:</div>
							<div>Specialization:</div>
							<div>Number of employees:</div>
							<div>Years of experience:</div>
							<div>Profile Manager</div>
						</Column>
						<Column>
							<div>Assem Yeskabyl</div>
							<div>username</div>
							<div>city</div>
							<div>Nazarbayev University</div>
							<div>Computer Science</div>
							<div>Name with the link</div>
						</Column>

						{/*</div>*/}
					</Row>
				</Column>
				<Column flexGrow={1} className="skills">
					<Row horizontal="center">
						<h1>Social Media</h1>
					</Row>
					<Row horizontal="center">
						<Column className="col1">
							<div>GitHub URL:</div>
							<div>LinkedIn URL:</div>
							<div>Web URL:</div>
						</Column>
						<Column className="col2">
							<div>Nazarbayev University</div>
							<div>Computer Science</div>
							<div>Bachelor</div>
						</Column>

						{/*</div>*/}
					</Row>
				</Column>

				<button>Follow</button>

			</>
		);
	}
}


export default CompanyProfile;
