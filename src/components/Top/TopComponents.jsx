import { React } from 'react'
import Navbar from './Navbar/Navbar'
import SocialMediaBar from './SocialMediaBar/SocialMediaBar'
import Carousel from './Carousel/Carousel'
import SocialMedia from './SocialMedia/SocialMedia'
import Govbar from './GovBar/Govbar'
import TopComponentsCSS from './TopComponents.module.css'

function TopComponents({ open, setOpen }) {

    return (
        <div className={TopComponentsCSS.topComponents}>
            {/* <Govbar /> */}
            <Navbar open={open} setOpen={setOpen} />
            <SocialMediaBar />
            <Carousel />
            <SocialMedia />
        </div>
    );
}

export default TopComponents;
