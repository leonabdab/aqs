import React, { Component } from 'react';
import MainBanner from '../components/HomePages/BusinessAgency/MainBanner';
import Features from '../components/HomePages/BusinessConsulting/Features';
import WhoWeAre from '../components/HomePages/BusinessConsulting/WhoWeAre';
import WhatWeDo from '../components/HomePages/BusinessConsulting/WhatWeDo';
import CallToAction from '../components/HomePages/BusinessConsulting/CallToAction';
import LatestNews from '../components/HomePages/BusinessConsulting/LatestNews';
import OurClients from '../components/HomePages/BusinessConsulting/OurClients';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Services from '../components/Services/Services';
import OurWorks from '../components/HomePages/BusinessAgency/OurWorks';
import Footer from '../components/Layouts/FooterDark';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <MainBanner />
                <WhoWeAre />
                <OurWorks />
                {/* <CallToAction /> */}
                <WhatWeDo />
                <Services />
                {/* <Features /> */}
                {/* <LatestNews /> */}
                <OurClients />
                <Footer />
            </>
        );
    }
}

export default Index;