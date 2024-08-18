import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section id='contacto'>
        <div className="innerWidth c-container">
            {/* left side */}
            <div className="c-left">
                <div className="title">
                    <span>Contact Us</span>
                    <h4>Easy to Contact Us</h4>
                </div>
                <div className="v-description">
                    We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better
                </div>
                <div className="contactModes">
                    <div className="flexCenter"> {/* first row */}
                        <div className="c-mode">
                            <div className="icon">
                                <MdCall size={25}></MdCall>
                            </div>
                            <div className="details">
                                <span>Call</span>
                                <span>021 123 456</span>
                            </div>
                            <div className="c-button button flexCenter">
                                Call Now
                            </div>
                        </div>
                        <div className="c-mode">
                            <div className="icon">
                                <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                            </div>
                            <div className="details">
                                <span>Chat</span>
                                <span>021 123 456</span>
                            </div>
                            <div className="c-button button flexCenter">
                                Chat Now
                            </div>
                        </div>
                    </div>
                    <div className="flexCenter"> {/* second row */}
                        <div className="c-mode">
                            <div className="icon">
                                <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                            </div>
                            <div className="details">
                                <span>Video Call</span>
                                <span>021 123 456</span>
                            </div>
                            <div className="c-button button flexCenter">
                                Video Call Now
                            </div>
                        </div>
                        <div className="c-mode">
                            <div className="icon">
                                <HiChatBubbleBottomCenter size={25}></HiChatBubbleBottomCenter>
                            </div>
                            <div className="details">
                                <span>Message</span>
                                <span>021 123 456</span>
                            </div>
                            <div className="c-button button flexCenter">
                                Message Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="value" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact