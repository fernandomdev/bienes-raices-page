import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
    return (
        <section className="innerWidth">
            <div className="v-container">

                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="value" />
                    </div>
                </div>

                {/* right side */}
                <div className="v-right">
                    <div className="title">
                        <span>Our Value</span>
                        <h4>Value We Give to You</h4>
                    </div>
                    <div className="v-description">
                        We always ready to help by providijng the best services for you.<br />
                        We beleive a good blace to live can make your life better
                    </div>
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className='accordionItem' key={i} uuid={i}>

                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>

                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="accordion-title">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>

                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className='accordion-description'>{item.detail}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default Value