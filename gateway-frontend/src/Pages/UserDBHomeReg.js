import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserDBHomeReg = () => {
    return (
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Hello *Username*</h1>
                    <h1 className={"text-gtprimary gt-yourEvents"}>Your Events</h1>
                    {/*Event Cards Begin*/}
                    <div className="eventCards">
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                    </div>
                    {/*Event Cards End*/}
                    {/*  Join Other Events  */}
                    <div className="gtjoin-other">
                        <h1 className={"text-gtprimary"}>Join another event, to double the fun!</h1>
                        <button className={"gtRegNowBtn"}>Register Now</button>
                    </div>
                    {/*  Join Other Events End  */}
                </main>
                {/*  Right Side   */}
                <div className="gtright">
                    <div className="top">
                        <div className="gt-profile">
                            <div className="gt-profile-name">
                                <h5><b>*username*</b></h5>
                            </div>
                            <div className="gt-profile-image">
                                <img src="gateways_logo_white 1.png" alt="user-profile-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="gtcountDiv">
                        <h2 className={"text-gtprimary countdown-info"}>Event Starts In</h2>
                        <h1 className={"countdown"}></h1>
                    </div>
                    <div className="gtContactBottom">
                        <div className="contactText">
                            <Link to={'#'}>
                                <span className="fa-solid fa-comment"></span>
                                <h2>Contact Us</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*  Right Side End  */}
            </div>
        </>
    )
}