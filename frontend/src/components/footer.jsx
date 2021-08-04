import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import React from 'react';
import '../styles/footer.css';

export default () => {
    return (
        <div>
            <h1 className='about'>About us</h1>
            <div className='contact'>
                <div className='contact'>
                    <div className='icon'>
                        <a href="https://angel.co/u/tyler-bernstein-5" target='_blank' rel="noopener noreferrer"><FaAngellist size={32}/></a>
                    </div>
                    <div className='icon'>
                        <a href="https://www.linkedin.com/in/tyler-bernstein-356ba0106/" target='_blank' rel="noopener noreferrer"><FaLinkedin size={32}/></a>
                    </div>
                    <div className='icon'>
                        <a href="https://github.com/tsbernstein" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                    </div>
                </div>
                <div className='contact'>
                    <div className='icon'>
                        <a href="https://angel.co/u/ti-wei" target='_blank' rel="noopener noreferrer"><FaAngellist size={32}/></a>
                    </div>
                    <div className='icon'>
                        <a href="https://www.linkedin.com/in/ti-wei-0a20a61b8/" target='_blank' rel="noopener noreferrer"><FaLinkedin size={32}/></a>
                    </div>
                    <div className='icon'>
                        <a href="https://github.com/GeniusSniper" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                    </div>
                </div>
                <div className='icon'>
                    <a href="https://github.com/GeniusSniper/DopePT" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                </div>
            </div>
        </div>
    )
}