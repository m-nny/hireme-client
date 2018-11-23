import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import "../styles/_header.sass"

class Header extends React.Component {
    render() {
        return(
            <div className="Header">
            <table>
                <tr>
                    <th><label className="logo">HireMe.kz</label> </th>
                    <th>

                        <ul className="menu">
                            {/*<li className="logo"><label>HireMe.kz</label></li>*/}
                            <li><Link to="/FeedPage"/>News</li>
                            <li><Link to="/Myprofile"/>My Profile</li>
                            <li><Link to="/Notifications"/>Notifications</li>
                            <li><Link to="/Settings"/>Settings</li>
                        </ul>

                    </th>
                </tr>
            </table>
            </div>
        )
    }
}

export default Header;