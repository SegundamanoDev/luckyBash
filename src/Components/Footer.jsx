import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import LogoImg from "../assets/black-logo.jpg";
import {Call, ChevronRight, PlaceRounded} from "@mui/icons-material";
import {
	ChevronRightRounded,
	FacebookRounded,
	Instagram,
	Twitter,
} from "@mui/icons-material";

const Footer = () => {
	const startYear = 2008;
	const currentYear = new Date().getFullYear();
	return (
		<div className='footer_container'>
			<div className='footer_contents_wrapper'>
				<div className='footer_lists'>
					<div className='logo'>
						<img src={LogoImg} alt='logo' />
					</div>
					<p>
						We offer the industry's most skilled and superior technology, we
						solve the smallest to the largest and most complex logistics or
						global level
					</p>
					<div className='readMore_link'>
						<Link to='/about'>Read More</Link>
					</div>
				</div>
				<div className='footer_lists'>
					<h3>OUR SERVICES</h3>
					<span>
						<ChevronRight />
						<Link to=''>Cargo Transportation</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to=''>Air Freight</Link>
					</span>
					<span>
						<ChevronRight />

						<Link to=''>Ocean Freight</Link>
					</span>
					<span>
						<ChevronRight />

						<Link to=''>Packaging & Storage</Link>
					</span>
				</div>
				<div className='footer_lists'>
					<h3>SITE PAGES</h3>
					<span>
						<ChevronRight />
						<Link to='/'>Home</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/about'>About</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/service'>Service</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/tracking'>Tracking</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/contact'>Contact Us</Link>
					</span>
				</div>
				<div className='footer_lists'>
					<h3>LOCATION</h3>
					<span className='address_span'>
						<PlaceRounded className='locations_icon' />
						<div className='addrs'>
							<p>Location:</p>
							<p>138LOWER RD, LONDON SE16</p>
						</div>
					</span>
					<div className='call_span'>
						<h3>CALL CENTER</h3>
						<span>
							<Call className='locations_icon' />
							<div className='call_info'>
								<p className='call_us'>Call Us:</p>
								<p>+44 20 8585 2096</p>
							</div>
						</span>
					</div>
				</div>
			</div>
			<div className='footer_bottom'>
				<div className='copyright'>
					copyright &copy; Flawless.{" "}
					{startYear === currentYear
						? startYear
						: `${startYear}-${currentYear} `}{" "}
					All Right Reserved
				</div>
				<span className='media'>
					<FacebookRounded className='icon' />
					<Twitter className='icon' />
					<Instagram className='icon' />
				</span>
			</div>
		</div>
	);
};

export default Footer;
