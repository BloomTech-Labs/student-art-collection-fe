import React from 'react'
import './Team.css'
import Modal from "react-responsive-modal";

const styles = {
	textAlign: "center",
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
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Dave Inden</h2>
								<h3> Full Stack Web Developer</h3>
								<br></br>
								<p>Dave is a software developer with lots of experience in Support departments and understands the importance of how focusing on the user experience means remembering that actual human beings will be using the thing being built. Outside of work dAVE loves spending time with his family, making coffee, and cheering for the San Francisco Giants baseball team.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/davidinden/'>LinkedIn</a>
								<br></br>
								<a href='https://www.daveinden.com/'>Personal Website</a>
								<br></br>
								<a href='https://github.com/daveskull81'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFX4PAND7-053ac23153cf-512' alt='Web Developer' />
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Mackenzie Weber</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://avatars1.githubusercontent.com/u/40191456?s=400&v=4' alt='Web Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Jason Loomis</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>

								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Mackenzie Weber</h2>
								<h3> Full Stack Web Developer</h3>
								<br></br>
								<p>Mack is a programmer with a strong eye for debugging errors quickly and a passion for learning. With a background in editing, he knows that blinders can often be applied, and he seeks to help remove them. In his spare time, Mack likes to play the drums and write poetry.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/mackenzie-weber-a1906a186/'>LinkedIn</a>
								<br></br>
								<a href='https://github.com/MWeberLambdaweb19'>GitHub</a>
								</Modal>
							</div>
							</div>
						</div>
					</ul>

					<ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-ULV0CMZRS-3848f2627a12-512' alt='Web Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Grissobel Payonk</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Grissobel Payonk</h2>
								<h3> Full Stack Web Developer</h3>
								<br></br>
								<p>Gris is a Full Stack Web Developer with a passion for conservation and engineering. She has a background in Animal Science, Electrical Engineering and International Regulatory processes. When she isn’t coding she enjoys backpacking, surfing, cooking, and spending quality time with her pets and loved ones.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/gspayonk/'>LinkedIn</a>
								<br></br>
								<a href='grispayonk.com'>Personal Website</a>
								<br></br>
								<a href='https://github.com/gspayonk'>GitHub</a>
								</Modal>
						</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-ULXK90YSJ-dceca3c6a285-512' alt='Web Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Ian Schwartz</h3>
									<p>Full Stack</p>
                                    <p>Web Developer</p>
								</div>

								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Ian Schwartz</h2>
								<h3> Full Stack Web Developer</h3>
								<br></br>
								<p>Ian is a software developer with a passion for building websites with intuitive UI and learning new technologies. Before embarking on a career in web development, Ian received a bachelor’s degree in Communication Studies and was self-employed as a professional poker player. After a long day of coding, Ian loves to spend time in nature or watch sports.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/ian-schwartz-277bb857/'>LinkedIn</a>
							
								<br></br>
								<a href='https://github.com/ian-schwartz'>GitHub</a>
								</Modal>
						</div>
							</div>
						</div>

						<div className="member-details">
							<div>
								<img src="https://ca.slack-edge.com/T4JUEB3ME-UDTA6SESD-f9033663ba71-512" alt='Web Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Ami Scott</h3>
									<p>Team Lead-Full Stack</p>
                                    <p>Web Developer</p>
								</div>

								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Ami Scott</h2>
								<h3> Team Lead/Full Stack Web Developer</h3>
								<br></br>
								<p>Ami is a software developer with a passion for learning and problem solving. They enjoy working with complex problems and finding unique solutions. Outside of coding they enjoy volunteering, cooking, and spending time with their cats.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/ami-scott/'>LinkedIn</a>
								
								<br></br>
								<a href='https://github.com/Memitaru'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
					</ul>

		
					<ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFK58KV38-e62a8bb2adc8-512' alt='iOS Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Mitchell Budge</h3>
									<p>iOS Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Mitchell Budge</h2>
								<h3> iOS Developer</h3>
								<br></br>
								<p>Mitch is an iOS developer and lifelong student with a passion for puzzle-solving. Mitch thrives in environments where he can tackle complex problems with collaborative solutions and effective outcomes alongside his teammates. When he isn\'t monkeying around in Xcode, Mitch loves to cook, run, go to the movies, and wrestle with his puppy.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/mitchellbudge'>LinkedIn</a>
								<br></br>
								<a href='https://mitchellbudge.com/'>Personal Website</a>
								<br></br>
								<a href='https://github.com/mitchellgbudge'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UFAGBFNRK-f6066cbb23b3-512' alt='Mobile Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Vivek Vishwanath</h3>
									<p>Software Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Vivek Vishwanath</h2>
								<h3> Software Developer</h3>
								<br></br>
								<p>Vivek is a software developer who comes from a math and physical science background. He\'s always been interested in logic and analytical thinking, which is why he became interested in Computer Science and Software Development. His expertise lies in Android, Java Spring, and Flutter development. When not coding, Vivek likes to play guitar and get frustrated watching NY sports teams.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/vivekv210'>LinkedIn</a>
								<br></br>
								
								<a href='https://github.com/VivekV95'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UE26GM3NC-35a35c655340-512' alt='Mobile Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Brandon Lively</h3>
									<p>Mobile Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Brandon Lively</h2>
								<h3> Mobile Developer</h3>
								<br></br>
								<p>Brandon is a mobile software engineer who has a passion for problem solving and technology both new and old.  Has experience with native android development in both Kotlin and Java, Backend Development using Java Spring, and cross platform development with Flutter/Dart. When not making colorful words appear on a screen he enjoys riding motorcycles, hiking, cooking, and watching ted talks.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/brandon-lively-a79912185/'>LinkedIn</a>
								<br></br>
								
								<a href='https://github.com/BrandonLively'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
					</ul>

                    <ul>
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UL6GJCZ6Y-b607c4f87820-512' alt='iOS Developer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Alexandra Rhodes</h3>
                                    <p>iOS Developer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Alexandra Rhodes</h2>
								<h3> iOS Developer</h3>
								<br></br>
								<p>Alexandra is a dedicated iOS Developer and body building competitor. She has a desire to constantly improve upon her skills in all aspects of life. Her desire to learn drives her out of her comfort zone, where she believes success is created. In Alex\'s free time she loves to cook, be a dog-mom, and attend concerts.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/alexandra-rhodes-370525169/'>LinkedIn</a>
								<br></br>
								<a href='https://www.alexcodes.io'>Personal Website</a>
								<br></br>
								<a href='https://github.com/alexnrhodes'>GitHub</a>
								</Modal>
		</div>
							</div>
						</div>
						
						<div className="member-details">
							<div>
								<img src='https://ca.slack-edge.com/T4JUEB3ME-UEXB31TAP-2b07e714ffb3-512' alt='UI Designer'/>
								<div className="member-info">
									<h3 onClick={this.onOpenModal}>Imani Russ</h3>
									<p>UI Designer</p>
								</div>
								<div style={styles}>
								<Modal open={open} onClose={this.onCloseModal} >
								<h2>Imani Russ</h2>
								<h3> UX Designer</h3>
								<br></br>
								<p>Imani is a UX designer with a passion for storytelling and has a big heart for others. She has experience with UX/UI design, UX research, as well as some front end development. When she isn’t creating human experiences, she enjoys photography, traveling, playing instruments, and trying to pet as many dogs as she can.</p>
								<br></br>
								<h3>Contact</h3>
								<a href='https://www.linkedin.com/in/imani-russ-17ba7217b/'>LinkedIn</a>
								<br></br>
							
								
								</Modal>
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