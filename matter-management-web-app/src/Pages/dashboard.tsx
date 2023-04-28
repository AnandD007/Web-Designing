import '../App.css';
import React from "react";
import 'react-bootstrap';

function DashboardPage() {
    return (
        <React.Fragment>
            <div className='overflow-handle'>
                <h2 className='text-left'>Welcome To Lexicon!</h2>
                <p className='set-opacity text-left'>Best Law Firm in India</p>
                <br />
                <h4 className='text-left'></h4>
                <hr />
                <div className="w-60">
                    <img src="/res/gradientImage-4.jpg" className='rounded shadow-lg dashboard-banner-img img-thumbnail' />
                </div>
                <hr />
                
                <div className="container">
                    <h5>Our Company</h5>
                    <p>Laxicon Law firm is a multidisciplinary law firm located in Pune, India that offers a broad range of legal services for domestic and high court matters.</p>
                </div>
                <hr />
                <h4 className="text-center mt-4 mb-4">Famous Criminal Matters In India</h4>
                <div className="row">
                    <div className='col-md-4'>
                        <div className='row dashboard-cards'>
                            <img src="/res/kingfisher.jpg" className='img-thumbnail' />
                            <div className="container">
                                <h5>Collapse of Kingfisher</h5>
                                <p>Vijay Mallaya was an Indian business tycoon who had to abscond to
                                    the United Kingdom after being accused of fraud and money laundering
                                    in the country. Mallya fled the country and sought sanctuary in the
                                    United Kingdom in 2016. Vijay Mallya is said to owe around Rs 9000
                                    crores to multiple banks, which he took out as a loan to save his
                                    now-defunct Kingfisher Airlines from going bankrupt. Mallya’s
                                    desire to develop his liquor and airline businesses sparked the
                                    whole thing. His advisers advised him against it,
                                    but he went ahead and did it anyway. <a className="link-viewer" href="https://blog.ipleaders.in/most-famous-controversial-criminal-cases-india/#Collapse_of_Kingfisher">Read More..</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row dashboard-cards'>
                            <img src="/res/scam-1992.jpeg" className='img-thumbnail' />
                            <div className="container">
                                <h5>The Harsha Mehta scam</h5>
                                <p>Any article on controversial crimes would be incomplete without India’s biggest cases of scams. 
                                    Harshad Mehta was a stockbroker who was one of the primary stock manipulators of the Bombay Stock Exchange, commonly known as the 1992 Indian stock market scam. The securities scandal involved the transfer of Rs 3,500 crore in bank cash to a gang of stockbrokers led by Harshad Mehta.
                                     This money was subsequently invested strategically in the stock market, enabling it to soar to almost 4,500 points.
                                    Harshad Mehta owed the State Bank of India Rs. 500 crores after it discovered it was hanging onto worthless bank receipts.<a className="link-viewer" href="https://blog.ipleaders.in/most-famous-controversial-criminal-cases-india/#The_Harsha_Mehta_scam">Read More..</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row dashboard-cards'>
                            <img src="/res/2g-scam.jpg" className='img-thumbnail' />
                            <div className="container">
                                <h5>2G Spectrum case</h5>
                                <p>This was an Indian case of abuse of power and even featured second in Time Magazine’s “Top Ten Abuses of Power”.
                                    This case involved allegations of bribery against former telecom minister of India, A.
                                    Raja of the UPA government.
                                    Further, a proper auction was not conducted as was the norm in these situations. The Supreme Court cancelled
                                    122 2G licences but the Special CBI Court acquitted the accused in 2017. The Court stated that the prosecution
                                    had “miserably failed” to establish evidence against the accused.<a className="link-viewer" href="https://blog.ipleaders.in/most-famous-controversial-criminal-cases-india/#2G_Spectrum_case">Read More..</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardPage;