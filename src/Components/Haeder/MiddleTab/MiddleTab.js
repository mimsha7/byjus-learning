import React from 'react';
import './Mtab.scss'
import t1 from '../../../Resources/images/Home/trust_1.svg';
import t2 from '../../../Resources/images/Home/trust_2.svg';
import t3 from '../../../Resources/images/Home/trust_3.svg';
import t4 from '../../../Resources/images/Home/trust_4.svg';

const MiddleTab = () => {
    return (

        <section className="tab_container">
            <div>
                <section className="max-auto max-w">
                    <div className="tab_container-main max-auto">
                        <h2>Trusted by 150 million+ learners</h2>

                        <div className="tab_container-grid">
                            <div className="tab_container-colspan">
                                <div className="tab_container-colspan2 max-auto relative">
                                    <span className="tab_container-colspan3">
                                        <img className="tab_container-img" src={t1} alt="" />
                                    </span>
                                </div>
                                <h5>Live and 
                                <br/> the personalised</h5>
                            </div>

                            <div className="tab_container-colspan">
                                <div className="tab_container-colspan2 max-auto relative">
                                    <span className="tab_container-colspan3">
                                        <img className="tab_container-img" src={t2} alt="" />
                                    </span>
                                </div>
                                <h5>Top qualified
                                <br/> teachers</h5>
                            </div>

                            <div className="tab_container-colspan">
                                <div className="tab_container-colspan2 max-auto relative">
                                    <span className="tab_container-colspan3">
                                        <img className="tab_container-img" src={t3} alt="" />
                                    </span>
                                </div>
                                <h5>Activity-based
                                <br/> learning</h5>
                            </div>

                            <div className="tab_container-colspan">
                                <div className="tab_container-colspan2 max-auto relative">
                                    <span className="tab_container-colspan3">
                                        <img className="tab_container-img" src={t4} alt="" />
                                    </span>
                                </div>
                                <h5>100% safe for
                                <br/> kids</h5>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
    </section>
    );
};

export default MiddleTab;