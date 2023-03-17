import React from "react";
import './less-waste.scss';

function LessWaste() {
    return (
        <div className="container-less-waste">
            <h2 className="case-study-big-title">Case Study Less-Waste</h2>
                <div className="case-study-container">
                <img className="less-waste-case-study-img" src={require("../../../assets/images/less-waste-img/less-waste-prototype-img.png")} alt="lesswaste" />
                    <div className="project-description-container">
                        <ul className="project-description-small-container">
                            <li className="project-description-title">Project Type</li>
                            <li className="project-description-text">Sprint</li>
                        </ul>
                        <ul className="project-description-small-container">
                            <li className="project-description-title">My Role (4 team members)</li>
                            <li className="project-description-text">UX Researcher / UI & UX Designer</li>
                        </ul>
                        <ul className="project-description-small-container">
                            <li className="project-description-title">Timeline</li>
                            <li className="project-description-text">2 weeks</li>
                        </ul>
                        <ul className="project-description-small-container">
                            <li className="project-description-title">Platform</li>
                            <li className="project-description-text">Designed for iOS</li>
                        </ul>
                        <ul className="project-description-small-container">
                            <li className="project-description-title">Tools</li>
                            <li className="project-description-text">Figma </li>
                        </ul>
                    </div>
                </div>

                <p className="less-waste-text">Less Waste is an app designed to help users track and manage their food waste to reduce environmental impact and save money.</p>
                <a href='https://www.figma.com/proto/ItpdmiJFcCIi170WsT1SAQ/Untitled?node-id=1580%3A3020&scaling=scale-down&page-id=1580%3A2855&starting-point-node-id=1580%3A3020' target="blank"><button className="primary-button">Prototype</button></a>

            <h3 className="section-big-title">Design Sprint Challenge</h3>
                <p className="less-waste-text">Our team was assigned a two-week design-challenged focused on reducing food waste.</p>
                <h4 className="small-section-title">We were a four-member team:</h4>
                <div className="team-name-container">
                    <p className="less-waste-text"><span className="bold-text">Hollie:</span> Writer</p>
                    <p className="less-waste-text"><span className="bold-text">Vivianne:</span> Asset Collector</p>
                    <p className="less-waste-text"><span className="bold-text">Samuel:</span> Wire-framing / Prototyping</p>
                    <p className="less-waste-text"><span className="bold-text">Audrey:</span> Wire-framing / Prototyping</p>
                </div>
                <p className="less-waste-text">However, even if we were assigned specific roles, we worked a little bit on every part.</p>

            <h3 className="section-big-title">Process</h3>
                <p className="less-waste-text">Being limited in terms of the time we had, we followed the process below in a linear fashion 
                having a specific schedule for each phase throughout the two weeks to ensure proper delivery and quality of the final product.</p>
                <img className="less-waste-process-picture" src={require("../../../assets/images/less-waste-img/process-img.png")} alt="recall" />

            <h3 className="section-big-title">Problem Space</h3>
                <p className="less-waste-text">The industrialization period shifted from "farm to table" to "factory to table." Since then, food has 
                become more accessible and less expensive, which has caused food production to continuously increase over the years leading to an excess
                amount of food at the disposition of consumers who feel they will never run out of food, especially in our demographic area North America.
                This leads to people poorly managing their food consumption, leading to nutrition and financial loss.<br/><br/>

                Before, people used were producing food based on when they needed food when they are hungry. Now people overproduce food if they are hungry,
                which leads to a significant amount of food waste.
                </p>

            <h3 className="section-big-title">Secondary Research</h3>
                <p className="less-waste-text">Below are vital statistics that demonstrate the food waste problem that North American society is 
                facing nowadays with no relevant solution to fix the issues:
                </p>
                <ul className="less-waste-point-container">
                    <li className="less-waste-point"><span className="bold-text">131</span> pounds of spoiled food are thrown away by Americans each year.</li>
                    <li className="less-waste-point"><span className="bold-text">52%</span> of people said a top reason for throwing out food was because it spoiled before
                    they had a chance to eat it.</li>
                    <li className="less-waste-point"><span className="bold-text">77%</span> of people say they overpay for a subscription they no longer use.</li>
                </ul>

            <h3 className="section-big-title">Demographics</h3>
                <p className="less-waste-text">From our research, we discovered that young working professionals living in America of age 18 to 36 years old are an age group
                that tends to be a significant contributor to food waste. This is why we chose to focus on them for the project.
                </p>
                <img className="less-waste-demographic-picture" src={require("../../../assets/images/less-waste-img/demographic-img.jpeg")} alt="recall" />

            <h3 className="section-big-title">Interviews</h3>
                <p className="less-waste-text">In order to create a very strong questionnaire to gather as many key insights we needed for our project, we each wrote down different 
                questions and voted to select only the best ones.</p>
                <img className="interview-img" src={require("../../../assets/images/less-waste-img/interview-img.png")} alt="recall" />

                <h4 className="center-medium-title">Most Voted Interview Questions</h4>
                    <img className="questions-picture" src={require("../../../assets/images/less-waste-img/questionspicture.png")} alt="recall" />
                    <p className="less-waste-text-center">If you want to see the final survey you can click on the link below.</p>
                    <a href='https://www.figma.com/proto/ItpdmiJFcCIi170WsT1SAQ/Untitled?node-id=1580%3A3020&scaling=scale-down&page-id=1580%3A2855&starting-point-node-id=1580%3A3020' target="blank"><button className="center-button">View Survey</button></a>
            
            <h3 className="section-big-title">User Survey Insight</h3>
                <h4 className="small-section-title">Here's an example of what some interviewees had to say:</h4>
                    <ul className="less-waste-point-container">
                        <li className="less-waste-point">“Sometimes we have to throw out old groceries or food.”</li>
                        <li className="less-waste-point">“I don’t have a system for keeping track of my food inventory.”</li>
                        <li className="less-waste-point">“Wasted food is money out the door.”</li>
                    </ul>

                 <h4 className="small-section-title ">Through a survey sent out, we found that:</h4>
                    <ol className="less-waste-point-container">
                        <li className="less-waste-point">People do not use up all of their groceries in time and throw some away because they are expired.</li>
                        <li className="less-waste-point">People do not always have a specific system for keeping track of and organizing their at-home food inventory.</li>
                        <li className="less-waste-point">People feel that wasted food is money out the door and they do not have that money to waste.</li>
                    </ol>

            <h3 className="section-big-title">Meet John Morgan</h3>
                <img className="persona-img" src={require("../../../assets/images/less-waste-img/persona-img.png")} alt="recall" /> 


            <h3 className="section-big-title">How Might We Iteration</h3>
                <p className="less-waste-text">Each of us wrote a different HMW based on our research, and through an elimination and voting process, we selected the one that would give us the best direction
                to find a solution to our problem space.</p>
                <img className="hmw-picture" src={require("../../../assets/images/less-waste-img/hmw-ideation-picture.png")} alt="recall" />

            <h4 className="center-medium-title">Official How Might We</h4>
                <p className="less-waste-text">How might we help young professionals become aware of their grocery purchasing and consumption patterns in order to help them reduce food waste?</p>

            <h3 className="section-big-title">Project Goals</h3>
                <p className="less-waste-text">Create an efficient way to reduce food waste in developed countries by assisting users in their food consumption cycle
                (help them become aware of habits by tracking personal data and providing personal motivation/incentive to change)</p>

            <h4 className="small-section-title">Reduce food waste through:</h4>
                <ul className="less-waste-point-container">
                    <li className="less-waste-point">Tracking user habits</li>
                    <li className="less-waste-point">Providing personal motivation to change</li>
                </ul>


            <h3 className="section-big-title">How "Less Waste" Came To Be</h3>
                 <p className="less-waste-text">We had several brainstorming sessions to find a name that perfectly represents our brand. After ending up with different 
                options, we did an elimination voting process and decided on "Less Waste" which we agreed is memorable and easily associated with our problem space.</p>


            <h3 className="section-big-title">Vision Board</h3>

                <p className="less-waste-text">Each team member created different vision boards and UI boards to get a sense of our focus as a group. We settled on the vision board below because 
                we believe that it explores different features, layouts, and functionalities that helped us design an application that addresses our core users' needs.</p>

                <img className="vision-board-img" src={require("../../../assets/images/less-waste-img/inspiration-vision-board.png")} alt="recall" /> 

            <h3 className="section-big-title">Exploration Sketches</h3>
                <p className="less-waste-text">To help us get started, we took time on our own to do a crazy 8 process to get our ideas flowing.</p>
                <div className="screen-sketches-container">
                    <img className="screen-sketches-img" src={require("../../../assets/images/less-waste-img/explorationpicture2.jpeg")} alt="recall" />
                    <img className="screen-sketches-img2" src={require("../../../assets/images/less-waste-img/explorationpicture1.png")} alt="recall" />
                </div>


            <h3 className="section-big-title">Sketches Evolution</h3>
                <p className="less-waste-text">After carefully discussing our ideas, we had more focus, and we took another moment to work on a different screen to get
                our ideas flowing and get more direction.</p>
                <div className="screen-sketches-container">
                    <img className="screen-sketches-img" src={require("../../../assets/images/less-waste-img/evolutions-sketch.png")} alt="recall" />
                    <img className="screen-sketches-img" src={require("../../../assets/images/less-waste-img/evolutionflow.png")} alt="recall" />
                </div>


            <h3 className="section-big-title">Different Screen Options</h3>
                <p className="less-waste-text">Using different screens, we started to create a flow. Some of us were tasked to design specific screens, while others like me focused 
                on the overall flow and user experience.</p>
                <img className="screen-options-img" src={require("../../../assets/images/less-waste-img/screens-option.png")} alt="recall" /> 
            

            <h4 className="center-medium-title">Design Chosen</h4>
                <p className="less-waste-text">We used a mix of different design experiments together and created the prototype while talking to each other and following the directions above.
                Having limited time we did not want to lose too much time in sketching and spent more working on the prototype once we established a common design direction.</p>

            <h3 className="section-big-title">Colours Library</h3>
                <div className="colour-img-container">
                    <img className="colour-img" src={require("../../../assets/images/less-waste-img/colors1.png")} alt="recall" />
                    <img className="colour-img" src={require("../../../assets/images/less-waste-img/colors2.png")} alt="recall" />
                </div>

            <h3 className="section-big-title">Typography</h3>
                <img className="typography-img" src={require("../../../assets/images/less-waste-img/typographypicture.png")} alt="recall" />

            <h3 className="section-big-title">User Testings & Insights</h3> 
                <h4 className="small-section-title">Positives</h4>
                    <ul className="less-waste-point-container">
                        <li className="less-waste-point">Easy to navigate.</li>
                        <li className="less-waste-point">Likes the look and feel.</li>
                        <li className="less-waste-point">“Performance tracker is genius.”</li>
                        <li className="less-waste-point">A spending overview is beneficial.</li>
                        <li className="less-waste-point">It can be a helpful tool in reducing food waste.</li>
                    </ul>

                <h4 className="small-section-title">Findings + Suggestions</h4>
                    <ul className="less-waste-point-container">
                        <li className="less-waste-point">Add colour guides for charts.</li>
                        <li className="less-waste-point">Add a search feature for finding specific items.</li>
                        <li className="less-waste-point">Increase some colour contrast for accessibility.</li>
                        <li className="less-waste-point">Add manual entering for times when a receipt isn’t an option.</li>
                        <li className="less-waste-point">Filter buttons/features were hard to find.</li>
                    </ul>
            
            <h3 className="section-big-title">Prototyping Interaction</h3>
                <p className="less-waste-text">We have added based on users' feedback to make our prototype stronger and more realistic. Our project goal was to add
                an option to show whether an item was eaten or thrown out to calculate food waste data for the performance section.<br/><br/>

                As for the rest of the iteration process, we spent most of our time working through our prototype, given our time restrictions. We did the wire-framing 
                and went right away to creating our high fidelity prototype while changing things as we went.</p>

            <div className="prototype-section-container">
                <img className="prototype-second-img" src={require("../../../assets/images/less-waste-img/less-waste-prototype-img.png")} alt="recall" />
                <div className="prototype-small-section-container">
                    <p className="prototype-small-section-text">If you have not yet experienced "Less Waste," you can click below.</p>
                    <a href='https://www.figma.com/proto/ItpdmiJFcCIi170WsT1SAQ/Untitled?node-id=1580%3A3020&scaling=scale-down&page-id=1580%3A2855&starting-point-node-id=1580%3A3020' target="blank"><button className="primary-button">View Prototype</button></a>

                </div>
            </div>

            <h3 className="section-big-title">Journey Map</h3>
                <p className="less-waste-text">We have created a journey map representing how our solution would reduce food waste and benefit people financially.
                </p>
                <img className="journey-map-img" src={require("../../../assets/images/less-waste-img/journeymap.png")} alt="recall" />

            <h3 className="section-big-title">User Flow</h3>
                <p className="less-waste-text">We have created a journey map representing how our solution would reduce food waste and benefit people financially.
                </p>
                <img className="journey-map-img" src={require("../../../assets/images/less-waste-img/userflow-img.png")} alt="recall" />

            <h3 className="section-big-title">Success Measurements</h3>
                <ul className="less-waste-point-container">
                    <li className="less-waste-point">Surveys to measure user satisfaction.</li>
                    <li className="less-waste-point">Increasing Daily and monthly active users (See how many users launch our platform often and perform actions in it).</li>
                    <li className="less-waste-point">The Retention Rate is high (shows how many users return to our platform after the first use).</li>
                    <li className="less-waste-point">The churn rate is low (shows how many users abandon our system after using it a couple of times).</li>
                </ul>

            <h3 className="section-big-title">What's Next?</h3>
                <p className="less-waste-text">Our wish list would be to expand the app to include meal planning/recipe suggestions; users have seemed to see the app as a tool for planning meals.</p>

            <h3 className="section-big-title">Key Learnings</h3>
                <ul className="less-waste-point-container">
                    <li className="less-waste-point">While making a sprint, it is essential to keep track of time and respect it to finish the project on time.</li>
                    <li className="less-waste-point">It's essential to have open communication with teammates to get a clear idea of what needs to be done and how.</li>
                    <li className="less-waste-point">While working remotely, using different tools to facilitate the process is essential, such as Figma jam, Figma, slack, etc.</li>
                    <li className="less-waste-point">It's important to know why we want to implement an idea or process to explain it clearly to your teammate and help your point get across. It might not always be considered, but your ideas will be reasoning.</li>
                </ul>
        </div>
    );
}

export default LessWaste;