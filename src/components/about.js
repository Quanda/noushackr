import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './login-form';
import './styles/about.css';

export function About(props) {

    return (
        <div className="about">

            <section>
                <header>
                    <h1>Welcome to NousFood</h1>
                </header>
                <p>This application is geared toward those interested in following the
                    potential benefits of brain-boosting foods and supplements. You can Follow any of the 
                    nootropics in the library, and thereby gain access to PubMed hosted scholarly articles. 
                    In addition, the News feed integrates Twitter activity from top community sources right
                    into your dashboard. Other features include curating custom brain-boosting "stacks" which
                    you can then Share back to the NousFood community. NousFood also supports Forking stacks.</p>
            </section>

            <section>
                <header>
                    <h2>A brief history</h2>
                </header><br/>                
                <p><span className="text-lg italic">nootropic</span>: n, adj: dietary supplement that helps support certain brain functions, such as memory, mental speed, and focus</p><br/>
                <p>The word nootropic was coined in 1972 by a Romanian psychologist and chemist,
                Corneliu E. Giurgea, who synthesized Piracetam in 1964.</p><br/>
                <p>from the Greek words 'nous' - meaning mind, and 'trepein' meaning to bend or turn</p><br/>
                <p>According to Dr. Giurgea, a substance categorized as a nootropic meets the following criteria:</p><br/>
                <ul className="italic bold" style={{listStyleType: "decimal"}}>
                    <li>A nootropic may enhance learning and memory.</li>
                    <li>A nootropic may help protect the brain from disruptive conditions such as hypoxia (low oxygen) or electroconvulsive shock.</li>
                    <li>A nootropic may help protect the brain from various chemical or physical injuries such as the effects of barbiturates and anti-cholinergic substances.</li>
                    <li>A nootropic may increase the efficacy of cortical and subcortical neuronal firing mechanisms.</li>
                    <li>A nootropic must possess few or no side effects with very low toxicity.</li>
                </ul><br/>
            </section>

            <section>
                <header>
                    <h2>It's about neuro-chemistry</h2>
                </header><br/>
                <p>As research continues, our scientific understanding of these compounds continues to solidify and expand.
                    It's really all about the functioning of the brain at a neuro chemical level, and suffice to say any substance could 
                    be called a nootropic if it grants the user more control over their neurochemistry and the resulting behavioural and experiential outcomes</p>
            </section>

            <section>
                <header>
                    <h2>What's a 'stack'?</h2>
                </header><br/>
                <p>The term stack in this context, refers to the compounding of nootropics in effort to gain 
                synergistic cognitive enhancing effects</p>
            </section>
            <section>
                <header>
                    <h2>Get started</h2>
                </header><br/>
                <div>
                    <p>Check out this intro video and then login!</p>
                    <iframe type="text/html" width="640" height="360" title="intro"
                        src="https://www.youtube.com/embed/chbpnnZBziU"
                        frameBorder="0">
                    </iframe>
                    <h3>&nbsp;Login</h3>
                    <LoginForm /><br/>
                    <Link to={"/"}>Or register here</Link>
                </div>
            </section>
            <section>
                <header>
                    <h2>Recommended resources</h2>
                </header><br/>
                <p><a href="https://nootropics.com/introduction-to-nootropics/" target="_blank" rel="noopener noreferrer">Introduction to Nootropics</a></p><br/>
                <p><a href="https://www.reddit.com/r/nootropics/wiki/beginners" target="_blank" rel="noopener noreferrer">https://www.reddit.com/r/nootropics/wiki/beginners</a></p><br/>
                <p><a href="https://www.webmd.com/diet/features/eat-smart-healthier-brain#1" target="_blank" rel="noopener noreferrer">Eat smart for a healhier brain</a></p><br/>
                <p><a href="https://darktka.github.io" target="_blank" rel="noopener noreferrer">2017 Nootropics Survey on /r/Nootropics</a></p><br/>
                <p><a href="https://examine.com/supplements/cognitive-function/" target="_blank" rel="noopener noreferrer">https://examine.com/supplements/cognitive-function/</a></p><br/>
                <p><a href="https://www.youtube.com/watch?v=chbpnnZBziU" target="_blank" rel="noopener noreferrer">13 Nootropics to Unlock Your True Brain</a></p>
            </section>
        </div>
    );
}

export default About;
