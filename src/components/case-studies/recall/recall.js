import "./recall.scss";
import React from "react";


function Recall() {
    return (
        <div className="container-recall">

            <h2 className="section-extra-large-title">Case Study Information</h2>

            <div className="case-study-container">

                <img className="case-study-picture" src={require("../../../assets/images/recall-pictures/recall-pic.png")} alt="recall" />

                <div className="project-description-container">

                    <ul className="project-description-small-container">
                        <li className="project-description-title">Project Type</li>
                        <li className="project-description-text">Academic</li>
                    </ul>

                    <ul className="project-description-small-container">
                        <li className="project-description-title">My role</li>
                        <li className="project-description-text">UI & UX Designer</li>
                    </ul>

                    <ul className="project-description-small-container">
                        <li className="project-description-title">Timeline</li>
                        <li className="project-description-text">8 weeks</li>
                    </ul>

                    <ul className="project-description-small-container">
                        <li className="project-description-title">Platform</li>
                        <li className="project-description-text">Designed for iOS</li>
                    </ul>

                    <ul className="project-description-small-container">
                        <li className="project-description-title">Tools</li>
                        <li className="project-description-text">Figma / InVision</li>
                    </ul>
                </div>

            </div>

            <p className="section-text">Recall is an app designed to help users track and manage their online recurring subscriptions
                through automatic email addresses or manuals import so they can closely monitor their payment due dates, status (free trials,
                renewal due dates, etc.), and subscription costs to stay up to date and avoid financial losses.</p>

            <a href='https://www.figma.com/proto/ItpdmiJFcCIi170WsT1SAQ/Untitled?node-id=1580%3A3020&scaling=scale-down&page-id=1580%3A2855&starting-point-node-id=1580%3A3020' target="blank"><button className="primary-button">Prototype</button></a>

            

            <h3 className="section-large-title">Process</h3>

            <p className="section-text">To fully understand the scope of the problem and how to solve it, I followed the double-diamond approach as
                a road map to guide me through the design process and outcome. </p>
            <img className="process-picture" src={require("../../../assets/images/recall-pictures/process-pic.png")} alt="recall" />

            <h3 className="section-large-title">Problem Space</h3>

            <p className="section-text">Recurring online subscriptions are booming; as per my research,
                18 to 34 years old North Americans have, on average,
                2.5 or more digital subscriptions simultaneously, making it hard
                to manage them properly and avoid financial losses.
            </p>


            <h3 className="section-large-title">Secondary Research</h3>
            <p className="section-text">Below are vital statistics that demonstrate the financial
                issues users can face relating to poor recurring subscription management
                and tracking:
            </p>

            <ul className="bullet-point-container">
                <li className="point"><span className="bold-point">84%</span> of people say they underestimate their monthly subscription spending.</li>
                <li className="point"><span className="bold-point">70%</span> of people say they continue paying for unwanted subscriptions because they forget to cancel before it's renewed.</li>
                <li className="point"><span className="bold-point">35%</span> of people say they overpay for a subscription they no longer use.</li>
                <li className="point"><span className="bold-point">34%</span> find it hard to track many subscriptions.</li>
            </ul>
            <p className="section-text">Here are some key statistics demonstrating that recurring online
                subscriptions are a growing market:
            </p>
            <ul className="bullet-point-container">
                <li className="point"><span className="bold-point">36%</span> of people in the USA said they are likely to increase the number of subscriptions they have.</li>
                <li className="point"><span className="bold-point">53%</span> of people find subscriptions a more convenient method of paying for goods or services..</li>
                <li className="point"><span className="bold-point">23%</span> of people in Canada said they are likely to increase the number of subscriptions they have.</li>
            </ul>

            <p className="section-text">As we can see, users struggle to manage their online recurring subscriptions. They are facing financial losses, which is why there is a need to find a solution to help them,
                as this will only become more common over time with the market constantly expanding. </p>

            <h3 className="section-large-title">Demographics</h3>
            <p className="section-text">These age groups fall into the target demographic because they have an expected average of 2.35
                recurring subscriptions, significantly higher than other age groups; therefore, they are more at risk of financial losses and would
                benefit more from finding a solution.
            </p>
            <img className="demographic-picture" src={require("../../../assets/images/recall-pictures/demographic-pic.png")} alt="recall" />

            <h3 className="section-large-title">Interviews</h3>

            <p className="section-text">Through my research, I found critical information to create a complete interview questionnaire to help me understand
                in greater detail the problems 18 to 34 years old who have at least two or more recurring subscriptions face.<br /><br />

                After multiple interviews, I took what the interviewees said and organized them on sticky notes to divide them into pain points
                and motivations to get a clear picture of their needs and frustrations to lead to the best solutions possible.</p>

            <div className="interview-img-container">

                <div>
                    <h4 className="pain-points-title">Paint Points</h4>
                    <img className="pain-points-img" src={require("../../../assets/images/recall-pictures/paint-points.png")} alt="recall" />
                </div>

                <div>
                    <h4 className="motivations-title">Motivations</h4>
                    <img className="motivations-img" src={require("../../../assets/images/recall-pictures/motivations.png")} alt="recall" />
                </div>

            </div>


            <h3 className="section-large-title">Focus Theme Chosen</h3>

            <p className="section-text">By grouping similar paint points and motivations under diverse themes,
                I discovered that the lack of subscription tracking, notifications, and management were the most common
                issues among the interviewees and the leading causes of financial losses.<br /> <br />

                Having clear key areas of focus helped to guide the rest of the process and find the best solutions
                to address users' specific frustrations and needs.</p>

            <h3 className="section-large-title">Meet Alyssa</h3>
            <img className="persona-img" src={require("../../../assets/images/recall-pictures/persona.png")} alt="recall" />

            <h3 className="section-large-title">Experience Map</h3>
            <img className="experience-map-img" src={require("../../../assets/images/recall-pictures/mapping.png")} alt="recall" />

            <h3 className="section-large-title">HMW</h3>
            <p className="hmw-text">How might we help 18 to 34 years old North American digital subscription customers properly track their
                recurring subscriptions so that they can reduce financial losses?</p>

            <h3 className="section-large-title">Project Goals</h3>
            <ul className="bullet-point-container">
                <li className="point">Offer relevant solutions for tracking and monitoring subscriptions to avoid financial loss (unused app, forgot to cancel, upcoming payment).</li>
                <li className="point">Bring awareness to subscription spending habits (overview of money spent).</li>
                <li className="point">Help users better understand their subscription needs and eliminate unnecessary ones.</li>
            </ul>


            <h3 className="section-large-title">Potential Constraints</h3>

            <div className="constraints-container">

                <h4 className="section-medium-title">Technical:</h4>

                <ul className="section-text">
                    <li>Difficulty aggregating every kind of subscription there is to our system. </li>
                    <li>Specific security measures could prevent getting the information needed to our system.</li>
                </ul>

                <h4 className="section-medium-title">Budget Limitation:</h4>
                
                <ul className="section-text">
                    <li>Business (it costs money to launch and maintain).</li>
                    <li>Workforce (need staff to help implement and maintain everything to keep working correctly).</li>
                </ul>

                <h4 className="section-medium-title">Income (Socio-economic):</h4>

                <ul className="section-text">
                    <li>How much people make will affect their number of subscriptions and their needs.</li>
                </ul>

                <h4 className="section-medium-title">Demographic:</h4>

                <ul className="section-text">
                    <li>Target Market (18-34) primary goals do not align with financial management. It is reported that
                        45% of adults between 18 and 29 receive financial help from their parents, which could indicate
                        that they have other priorities.
                    </li>

                </ul>

                <h4 className="section-medium-title">Abilities:</h4>

                <ul className="section-text">
                    <li>Physical limitations could prevent users from interacting with our system (e.g. visual impairment, mobility issues, etc.).</li>
                    <li>Cognitive limitations could make it harder for users to use our system (e.g. dyslexia, autism, etc.).</li>
                </ul>

            </div>


            <h3 className="section-large-title">User Stories & Epics Process</h3>

            <p className="section-text">Using the information I have gathered up to this point, I started developing multiple epics and user
                stories to narrow potential solutions to users' problems.<br /><br />

                Finally, after multiple rounds of iterations, I selected two epics with their
                most relevant user stories that genuinely targetting the most common users' problems.</p>

            <h3 className="section-large-title">UI Vision Board</h3>

            <p className="section-text">I created a UI vision board to explore different features, components,
                layouts, and functionalities to get inspired and visualize diverse potential user interface options
                to ensure good functionality and address users' core needs.</p>

            <div className="ui-container">
                <div>
                    <img className="ui-img" src={require("../../../assets/images/recall-pictures/uiboard-picture.png")} alt="recall" />
                    <a href='https://projects.invisionapp.com/boards/X6434WO8TPW/' target="blank"><button className="ui-button">View Board</button></a>

                </div>

                
            </div>


            <h3 className="section-large-title">Task Flows</h3>

            <p className="section-text">Utilizing the research, UI Vision Board and the two epics with their most relevant user stories, I created two core
                task flows for an app that will help reduce money lost and frustrations related to online subscriptions.</p>

            <img className="legend-img" src={require("../../../assets/images/recall-pictures/legend.png")} alt="recall" />

            <h4 className="section-medium-center-title">Primary Task Flow</h4>

            <h5 className="section-small-title">Epic</h5>
            <p className="section-text">Setting up new Subscriptions</p>

            <h5 className="section-small-title">Primary user</h5>
            <p className="section-text"> Recurring digital payment subscriber (Persona Alyssa)</p>

            <h5 className="section-small-title">Task</h5>
            <p className="section-text">Setting up a new recurring subscription in the app </p>

            <h5 className="section-small-title">User Stories</h5>
            <ul className="bullet-point-container">
                <li className="point">As a recurring digital payment subscriber, I want to authorize email parsing subscription information to be
                    added so that I can make sure they are accurate.</li>
                <li className="point"> As a recurring digital payment subscriber, I want to obtain payment reminder
                    notifications before the due date so that I can make sure to have money in the
                    account to pay the subscription.</li>
                <li className="point">As a recurring digital payment subscriber, I want to set up reminders asking me
                    if I am still using the subscription so that if I forget about one I don’t keep
                    paying for it without knowing it.</li>

            </ul>
            <img className="task-flow-img" src={require("../../../assets/images/recall-pictures/primaryflow.png")} alt="recall" />

            <h4 className="section-medium-center-title">Secondary Task Flow</h4>

            <h5 className="section-small-title">Epic</h5>
            <p className="section-text">Viewing subscription financial data</p>

            <h5 className="section-small-title">Primary user</h5>
            <p className="section-text">Recurring digital payment subscriber (Persona Alyssa)</p>

            <h5 className="section-small-title">Task</h5>
            <p className="section-text">Reviewing what different subscription costs over time.</p>

            <h5 className="section-small-title">User Stories</h5>
            <ul className="bullet-point-container">
                <li className="point">As a recurring digital payment subscriber, I want to see monthly subscription
                    fees so that I easily know how much I pay for each subscription.</li>
                <li className="point"> As a recurring digital payment subscriber, I want to view compiled yearly
                    fees for each subscription so that I can see if the subscription is worth
                    it in the long term.</li>
                <li className="point">As a recurring digital payment subscriber, I want to see all monthly subscription
                    fees compiled so that I easily know how much to put aside for my monthly payment.</li>

            </ul>
            <img className="task-flow-img" src={require("../../../assets/images/recall-pictures/secondaryflow.png")} alt="recall" />


            <h3 className="section-large-title">Exploration Sketches</h3>

            <p className="section-text">To put my ideas on paper and explore multiple solutions, I used the "crazy 8 process"
                which was very useful to kick-start my sketching process and get my ideas flowing.</p>

            <img className="crazy8-img" src={require("../../../assets/images/recall-pictures/crazy8.png")} alt="recall" />


            <h3 className="section-large-title">Screen Sketches</h3>

            <p className="section-text">I designed multiple versions of different screens to give me more components to work
                with when creating diverse sketch flow options.</p>

            <div className="screen-sketches-container">
                <img className="screen-sketches-img" src={require("../../../assets/images/recall-pictures/signin-picture.png")} alt="recall" />
                <img className="screen-sketches-img" src={require("../../../assets/images/recall-pictures/mainscreen-picture.png")} alt="recall" />
            </div>


            <div className="screen-sketches-container">
                <img className="screen-sketches-img" src={require("../../../assets/images/recall-pictures/subscription-picture.png")} alt="recall" />
                <img className="screen-sketches-img" src={require("../../../assets/images/recall-pictures/financial-picture.png")} alt="recall" />
            </div>





            <h3 className="section-large-title">Flow Sketches</h3>

            <p className="section-text">Utilizing the above sketches components, I created 4 design flows to help users manage their
                recurring online subscriptions better while reducing financial losses.</p>


            <div className="flow-sketches-container">
                <img className="flow-sketches-img" src={require("../../../assets/images/recall-pictures/a.png")} alt="recall" />
                <img className="flow-sketches-img" src={require("../../../assets/images/recall-pictures/b.png")} alt="recall" />
            </div>


            <div className="flow-sketches-container">
                <img className="flow-sketches-img" src={require("../../../assets/images/recall-pictures/c.png")} alt="recall" />
                <img className="flow-sketches-img" src={require("../../../assets/images/recall-pictures/d.png")} alt="recall" />
            </div>



            <h5 className="section-small-center-title">Design Chosen</h5>

            <p className="section-text">After careful consideration, I have decided to select the B flow sketches as the initial
                design because it was a simple design that would efficiently convey the information to
                the users while being familiar to them and adequately assessing their needs.</p>

            <h3 className="section-large-title">Moodboard</h3>

            <div className="moodboard-container">

                <img className="moodboard-img" src={require("../../../assets/images/recall-pictures/moodboard.png")} alt="recall" />

                <div className="moodboard-section-container">

                    <p className="section-text">To refine the project's style and aestetic I created the following moodboard.<br /><br />
                        The moodboard focusses on blue tones to inspire trust to users and neutral colors to bring balance.<br /><br />
                        The best words that embody the moodboard are: Reliable, Friendly, Trustworthy, Neutral, Calm, and Simple.</p>
                    <a href='https://projects.invisionapp.com/boards/M6439U4TEYP/' target="blank"><button className="moodboard-button">View Moodboard</button></a>

                    

                </div>

            </div>





            <h3 className="section-large-title">Colours Library</h3>
            <div className="colour-img-container">
                <img className="colour-img" src={require("../../../assets/images/recall-pictures/accent.png")} alt="recall" />
                <img className="colour-img" src={require("../../../assets/images/recall-pictures/branding.png")} alt="recall" />

            </div>
            
            <div className="neutral-img-container">
            <img className="colour-neutral-img" src={require("../../../assets/images/recall-pictures/neutral.png")} alt="recall" />
            </div>

            <h3 className="section-large-title">Typography</h3>
            <p className="section-text">Montserrat has been chosen for its versatility, an asset if the app is open in different
                iOS platform sizes. Also, it is perfect for branding as it can work on multiple platforms (websites, posters, logos, etc.).
                It is elegant, simple, and with a nice large x-height.</p>
            <img className="typography-img" src={require("../../../assets/images/recall-pictures/typography.png")} alt="recall" />


            <h3 className="section-large-title">Wordmark</h3>
            <p className="section-text">My goal was to find the best wordmark that represents the brand well and ensures that if users saw the wordmark
                somewhere else, they would immediately associate it with the app. I experimented with different font weights,
                sizes, and placements until I found the right one.</p>
            <img className="wordmark-experimentation-img" src={require("../../../assets/images/recall-pictures/wordmark.png")} alt="recall" />

            <h5 className="section-small-center-title">Final Choice</h5>
            <p className="section-text" v>I decided to go with this wordmark because it is simple and modern. Also, it is unique, which makes it easy for people
                to remember and associate with the app's brand.</p>
            <img className="wordmark-img" src={require("../../../assets/images/recall-pictures/recall.png")} alt="recall" />

            <h3 className="section-large-title">User Testing & Prototype Iterations</h3>
            <p className="section-text">When starting wire-framing on Figma, there were some issues with the chosen design
                because users needed to go through too many screens to get the required information. So I did some non-official
                user tests to get more insights into what needed to be changed to make the end design more efficient.<br /><br />

                Afterward, I created three different greyscale prototypes and performed official user tests between each
                iteration to understand and address users' needs. I considered users' feedback and worked on the most critical
                components to prepare the most viable product.<br /><br />

                Finally, I had more time, so I implemented new features to enhance the app and worked on some UI components
                to make it visually pleasing while continuing testing and evolving my design based on user insight to make
                it better, address their needs and reduce friction.</p>

            <h3 className="section-large-title">Design Evolution</h3>
            <div className="evolution-container">
                <div className="evolution-items-container">
                    <img className="evolution-screen-1" src={require("../../../assets/images/recall-pictures/signin1.png")} alt="recall" />
                    <h5 className="evolution-title">Version 1</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-1" src={require("../../../assets/images/recall-pictures/signin2.png")} alt="recall" />
                    <h5 className="evolution-title">Version 2</h5>
                    <p className="evolution-text">- Addition of a "Sign In" title to help users better situate themselves.<br /><br />
                        -Colours have been added to the header and footer to add more contrast to the interface.</p>
                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-1" src={require("../../../assets/images/recall-pictures/signin3.png")} alt="recall" />
                    <h5 className="evolution-title">Version 3</h5>
                    <p className="evolution-text">- To make the app more accessible the "hidden eye" and "remember me" features were added.<br /><br />
                        - The quick log-in instruction title was updated to be easier to understand..</p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-1" src={require("../../../assets/images/recall-pictures/signin4.png")} alt="recall" />
                    <h5 className="evolution-title">Version 4</h5>
                    <p className="evolution-text">- Addition of a thicker bar for the text box to indicate where the user is situated in the Sign-in process.<br /><br />
                        - Friendlier and more descriptive sign-up account message added. <br /> <br />
                        - UI element updated to reflect branding.
                    </p>

                </div>
            </div>


            <div className="evolution-container">
                <div className="evolution-items-container">
                    <img className="evolution-screen-2" src={require("../../../assets/images/recall-pictures/import1.png")} alt="recall" />
                    <h5 className="evolution-title">Version 1</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-2" src={require("../../../assets/images/recall-pictures/import2.png")} alt="recall" />
                    <h5 className="evolution-title">Version 2</h5>
                    <p className="evolution-text">- The monthly/yearly cost feature in the header was modified to enhance its usability for the users.<br /><br />
                        - Alteration of subscriptions screen display to ensure an easier understanding of their importance by the users. <br /> <br />
                        - Subscription cards got reorganized for better visual hierarchy. <br /><br />
                        - Changes to the header and footer.

                    </p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-2" src={require("../../../assets/images/recall-pictures/import3.png")} alt="recall" />
                    <h5 className="evolution-title">Version 3</h5>
                    <p className="evolution-text">- Import label has been updated to be more understandable.<br /><br />
                        - Changed labelling for "estimated cost" to better inform user that the amount displayed is an approximation of their total cost..</p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-2" src={require("../../../assets/images/recall-pictures/import4.png")} alt="recall" />
                    <h5 className="evolution-title">Version 4</h5>
                    <p className="evolution-text">- To facilitate the usage of the monthly/yearly cost feature for users it has been place at the bottom of the screen
                        and has been increase in size to be more thumb accessible.<br /> <br />
                        - Removal of logo at the header to increase usable space such as account picture, welcoming message, and manual addition button.<br /><br />
                        - Following colour injection  "requires your attention" and "Import subscription" were too overwhelming with the colour of logos and app  so did appropriate chance to their understand the hierarchy while being visually pleasing.
                    </p>
                </div>
            </div>


            <div className="evolution-container">
                <div className="evolution-items-container">
                    <img className="evolution-screen-3" src={require("../../../assets/images/recall-pictures/enterinfo1.png")} alt="recall" />
                    <h5 className="evolution-title">Version 1</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-3" src={require("../../../assets/images/recall-pictures/enterinfo2.png")} alt="recall" />
                    <h5 className="evolution-title">Version 2</h5>
                    <p className="evolution-text">- The monthly/yearly cost feature in the header was modified to enhance its usability for the users.<br /><br />
                        - Alteration of subscriptions screen display to ensure an easier understanding of their importance by the users. <br /> <br />
                        - Subscription cards got reorganized for better visual hierarchy.

                    </p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-3" src={require("../../../assets/images/recall-pictures/enterinfo3.png")} alt="recall" />
                    <h5 className="evolution-title">Version 3</h5>
                    <p className="evolution-text">- Import label has been updated to be more understandable.<br /><br />
                        - Changed labelling for "estimated cost" to better inform user that the amount displayed is an approximation of their total cost..</p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-3" src={require("../../../assets/images/recall-pictures/enterinfo4.png")} alt="recall" />
                    <h5 className="evolution-title">Version 4</h5>
                </div>
            </div>


            <div className="evolution-container">
                <div className="evolution-items-container">
                    <img className="evolution-screen-4" src={require("../../../assets/images/recall-pictures/overview1.png")} alt="recall" />
                    <h5 className="evolution-title">Version 1</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-4" src={require("../../../assets/images/recall-pictures/overview2.png")} alt="recall" />
                    <h5 className="evolution-title">Version 2</h5>


                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-4" src={require("../../../assets/images/recall-pictures/overview3.png")} alt="recall" />
                    <h5 className="evolution-title">Version 3</h5>
                    <p className="evolution-text">- Addition of temporary "Updated" description under the monthly/yearly feature so users stay updated with their total estimated cost.</p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-4" src={require("../../../assets/images/recall-pictures/overview4.png")} alt="recall" />
                    <h5 className="evolution-title">Version 4</h5>
                    <p className="evolution-text">- It is the same as version 3 but was put at the footer.</p>
                </div>
            </div>


            <div className="evolution-container">
                <div className="evolution-items-container">
                    <img className="evolution-screen-5" src={require("../../../assets/images/recall-pictures/seeinfo1.png")} alt="recall" />
                    <h5 className="evolution-title">Version 1</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-5" src={require("../../../assets/images/recall-pictures/seeinfo2.png")} alt="recall" />
                    <h5 className="evolution-title">Version 2</h5>
                    <p className="evolution-text">- Previous feature replace with  an information box to make it more straightforward and efficient.<br /><br />
                        - "Remind me due" dates box number borders were taken off to reduce confusion.
                    </p>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-5" src={require("../../../assets/images/recall-pictures/seeinfo3.png")} alt="recall" />
                    <h5 className="evolution-title">Version 3</h5>

                </div>

                <div className="evolution-items-container">
                    <img className="evolution-screen-5" src={require("../../../assets/images/recall-pictures/seeinfo4.png")} alt="recall" />
                    <h5 className="evolution-title">Version 4</h5>
                </div>
            </div>


            <h3 className="section-large-title">Recall Prototype</h3>

            <div className="prototype-section-container">
                <img className="prototype-second-img" src={require("../../../assets/images/recall-pictures/promotion.png")} alt="recall" />

                <div className="prototype-small-section-container">
                    <p className="prototype-small-section-text">If you have not yet experienced recall, here's your chance.</p>
                    <a href='https://www.figma.com/proto/ItpdmiJFcCIi170WsT1SAQ/Untitled?node-id=1580%3A3020&scaling=scale-down&page-id=1580%3A2855&starting-point-node-id=1580%3A3020' target="blank"><button className="primary-button">Prototype</button></a>

                </div>
            </div>




            <h3 className="section-large-title">Key Learnings</h3>

            <ul className="bullet-point-container">
                <li className="point">Testing is mandatory for creating a user-centred design. I feel we learn so much from people's perspectives and help
                    enhance our design drastically.</li>

                <li className="point">Interviewing as many people as possible is the best way to understand users' pain points and needs.</li>

                <li className="point">Trust the process even if it's non-linear, even if you need to go back to fix something and start some parts over,
                    because, in the end, you will get to create a more robust end product.</li>

                <li className="point">Focus on critical components to ensure your MVP product is ready more quickly and waste less time on small details.</li>

                <li className="point">It is crucial to spend more time sketching and wireframing to get a solid initial design because once you start prototyping,
                    it is harder to make changes and easier to waste time, making it hard to finish the project in time.</li>

            </ul>


            <h3 className="section-large-title">What's next?</h3>

            <ul className="bullet-point-container">
                <li className="point">Make the app more accessible (modify UI to fit user needs, enter information by voice, etc.).</li>

                <li className="point">Implement a subscription payment calculator based on the timeline desired by the user.</li>

                <li className="point">Provide more notification options.</li>

                <li className="point">Include recurring bills such as insurance, hydro, etc.</li>

            </ul>



























































        </div>
    );
}

export default Recall;