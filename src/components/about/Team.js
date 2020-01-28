import React from 'react'
import './Team.css'
import Modal from "react-responsive-modal";

const styles = {
	textAlign: "center"
};

class Team extends React.Component {
	state = {
		open: false
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};
	
	onCloseModal = () => {
		this.setState({ open: false });
	};		
	
	render (){
		const { open } = this.state;
    return (
        <>
		
<section>
	<div className='container'>
    <div className="pull-left col-md-4 sm-text-center">
				<div className='team-overview'>
					<h2>Meet Our Team</h2>
					<p>
                        <div>
							<p>
                            Here at Student ArtCo our Mission is to bridge the gap between students and their surrounding communities by having students and the community interact with each other through students' work.
							</p>
							<br></br>
							<p>
							During eight weeks Lambda Students build new features in existing products or, like in our case, we build everything from scratch. During this process the team sets out goals and deadlines to deliver those features to users. If you're interested in our code you'll find the links below!
							</p>
							<br></br>
							<ul>
							<a href='https://github.com/Lambda-School-Labs/student-art-collection-fe'> Front End Repository</a>
							<br></br>
							
							<a href='https://github.com/Lambda-School-Labs/student-art-collection-be'> Back End Repository</a>
							<br></br>
							
							<a href='https://github.com/Lambda-School-Labs/student-art-collection-iOS'> iOS Repository</a>
							<br></br>
							
							<a href='https://github.com/Lambda-School-Labs/student-art-collection-android'> Android Repository</a>
							<br></br>
							<a href='https://www.figma.com/file/KXwyQsMXcwXTqZNQT7bKuW/Student-Art-Collection%2C-Imani-Russ?node-id=372%3A166'> UX</a>
							<br></br>
							</ul>
							<br></br>
							{/* Our team is compromised of Full Stack Web Developers, Mobile Developers,iOS Developers and a UX Designer. 
							<br></br>
							<br></br> */}
							Click on any team member to learn more!

                        </div>
                    </p>
				</div>
			</div>

		<div className='row flex-center sm-no-flex'>

			<div className='pull-right sm-no-float col-md-8'>
				<ul className='team-members'>
					<ul>
						<div className='member-details'>
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-ULVE1AR4Y-32e4313617ec-512' alt='Web Developer' />
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>dAVE Inden</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal}>
        <h2>Simple centered modal</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
        </p>
        </Modal>
		</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFX4PAND7-053ac23153cf-512' alt='Web Developer' />
								<div className="member-info">
									<h3>Mackenzie Weber</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://avatars1.githubusercontent.com/u/40191456?s=400&v=4' alt='Web Developer'/>
								<div className="member-info">
									<h3>Jason Loomis</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>
					</ul>

					<ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-ULV0CMZRS-3848f2627a12-512' alt='Web Developer'/>
								<div className="member-info">
									<h3>Grissobel Payonk</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-ULXK90YSJ-dceca3c6a285-512' alt='Web Developer'/>
								<div className="member-info">
									<h3>Ian Schwartz</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>

						<div className="member-details">
							<div>
								<img src="https://ca.slack-edge.com/T4JUEB3ME-UDTA6SESD-f9033663ba71-512" alt='Web Developer'/>
								<div className="member-info">
									<h3>Ami Scott</h3>
									<p>Team Lead-Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>
					</ul>

		
					<ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFK58KV38-e62a8bb2adc8-512' alt='iOS Developer'/>
								<div className="member-info">
									<h3>Mitchell Budge</h3>
									<p>iOS Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFAGBFNRK-f6066cbb23b3-512' alt='Mobile Developer'/>
								<div className="member-info">
									<h3>Vivek Vishwanath</h3>
									<p>Software Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UE26GM3NC-35a35c655340-512' alt='Mobile Developer'/>
								<div className="member-info">
									<h3>Brandon Lively</h3>
									<p>Mobile Developer</p>
								</div>
							</div>
						</div>
					</ul>

                    <ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UL6GJCZ6Y-b607c4f87820-512' alt='iOS Developer'/>
								<div className="member-info">
									<h3>Alexandra Rhodes</h3>
                                    <p>iOS Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UEXB31TAP-2b07e714ffb3-512' alt='UI Designer'/>
								<div className="member-info">
									<h3>Imani Russ</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
					</ul>
				</ul>
			</div>
			
		</div>
	</div>
</section>

        </>
    )
}
}

export default Team