import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src={require('../../assets/img/icon/logo.svg').default} alt="logo" className="logo footer-logo"/>
                    <nav className="footer-nav">
                        <a href="#" className="footer-link">Ресторанам </a>
                        <a href="#" className="footer-link">Курьерам</a>
                        <a href="#" className="footer-link">Пресс-центр</a>
                        <a href="#" className="footer-link">Контакты</a>
                    </nav>
                    <div className="social-links">
                        <a href="#" className="social-link"><img src={require('../../assets/img/social/instagram.svg').default} alt="instagram"/></a>
                        <a href="#" className="social-link"><img src={require('../../assets/img/social/fb.svg').default} alt="facebook"/></a>
                        <a href="#" className="social-link"><img src={require('../../assets/img/social/vk.svg').default} alt="vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;