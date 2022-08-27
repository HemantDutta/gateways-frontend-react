import {Link} from "react-router-dom";

export const UserDashboardSidebar = () => {
    return (
        <>

                <sidebar>
                    <div className="top">
                        <div className="gatewaysLogo">
                            <img src="gateways_logo_white 1.png" alt="user-logo"/>
                            <h2 className={"text-gtprimary"}>GATEWAYS</h2>
                        </div>
                    </div>
                    <div className="sidebar">
                            <Link to={'/'}>
                                <span className="fa-solid fa-home"></span>
                                <h3>Home</h3>
                            </Link>
                        <Link to={'/'}>
                            <span className="fa-solid fa-message"></span>
                            <h3>Updates</h3>
                        </Link>
                        <Link to={'/'}>
                            <span className="fa-solid fa-calendar-days"></span>
                            <h3>Schedule</h3>
                        </Link>
                        <Link to={'/'}>
                            <span className="fa-solid fa-square-poll-vertical"></span>
                            <h3>Results</h3>
                        </Link>
                        <Link to={'/'}>
                            <span className="fa-solid fa-arrow-right-from-bracket"></span>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </sidebar>

        </>
    )
}