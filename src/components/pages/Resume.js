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
        <>
          <center>
            <h1>Welcome to Geeks for Geeks</h1>
            <h3>Click on below button to download PDF file</h3>
            <button onClick={onButtonClick}>
              Download PDF
            </button>
          </center>
        </>
      );
}
