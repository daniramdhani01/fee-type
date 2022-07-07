// import icons
import home from "../assets/icons/home.svg"
import briefcase from "../assets/icons/briefcase.svg"

export default function Sidebar() {
    return (
        <aside className="d-flex flex-column align-items-center pt-5 sticky-top">
            <div className="side"><img alt="#" src={home} className="side-icon" /></div>
            <div className="side-active"><img alt="#" src={briefcase} className="side-icon" /></div>
        </aside>
    )
}