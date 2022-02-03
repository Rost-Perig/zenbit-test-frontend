import React from 'react';
// import PropTypes from 'prop-types';
import s from './Footer.module.css';
import { TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook, TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.links}>
                <a href='https://www.linkedin.com' className={s.link}>
                    <TiSocialLinkedin className={s.icon}/>
                </a>
                <a href='https://twitter.com/?lang=uk' className={s.link}>
                    <TiSocialTwitter className={s.icon}/>
                </a>
                <a href='https://about.facebook.com/' className={s.link}>
                    <TiSocialFacebook className={s.icon}/>
                </a>
                <a href='https://www.pinterest.com/' className={s.link}>
                    <TiSocialPinterest className={s.icon}/>
                </a>    
            </div>
        </footer>
    )
};