import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio7 from '../../assets/portfolio7.png';

const Works = () => {
	return (
		<section id='works'>
	      <h2 className="worksTitle">My Portfolio</h2>
	      <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am execited to bring my skills and experience to help bussiness achieve their goals and create a strong online presence.</span>
	      <div className="worksImgs">
	          <img src={Portfolio1} alt="" className="worksImg" />
	          <img src={Portfolio2} alt="" className="worksImg" />
	          <img src={Portfolio3} alt="" className="worksImg" />
	          <img src={Portfolio4} alt="" className="worksImg" />
	          <img src={Portfolio5} alt="" className="worksImg" />
	          <img src={Portfolio7} alt="" className="worksImg" />
	      </div>
	      <button className="workBtn">See More</button> 
	    </section>
		);
}

export default Works