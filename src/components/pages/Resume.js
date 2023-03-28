import React from 'react';


export default function Resume() {
    const onButtonClick = () => {
        const fileURL = '/Snarr_Resume.pdf';
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = '/Snarr_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div >
            <div className='skillStyle'>
                Skills:
                <br /><br />
                <ul className='skills'>
                    <li><img src="https://skillicons.dev/icons?i=html" title="HTML" alt="HTML"/></li>
                    <li><img src="https://skillicons.dev/icons?i=css" title="CSS" alt="CSS"/></li>
                    <li><img src="https://skillicons.dev/icons?i=bootstrap" title="Bootstrap" alt="Bootstrap"/></li>
                    <li><img src="https://skillicons.dev/icons?i=js" title="JavaScript" alt="JavaScript"/></li>
                    <li><img src="https://skillicons.dev/icons?i=jquery" title="JQuery" alt="JQuery"/></li>
                    <li><img src="https://skillicons.dev/icons?i=mongodb" title="MongoDB" alt="MongoDB"/></li>
                    <li><img src="https://skillicons.dev/icons?i=nodejs" title="NodeJS" alt="NodeJS"/></li>
                    <li><img src="https://skillicons.dev/icons?i=react" title="React" alt="React"/></li>
                    <li><img src="https://skillicons.dev/icons?i=vscode" title="VSCode" alt="VSCode"/></li>
                </ul>
            </div>
            <div className='resumeBtn'>
                <button className='btn' onClick={onButtonClick}>
                    Download Resume
                </button>
            </div>
        </div>
    );
}
