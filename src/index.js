import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/177915581_1432841223732630_867522696428789031_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-1qhWljY--MAX8z0o39&tn=SjRk4lEZwxX_DFRe&_nc_ht=scontent-hkg4-1.xx&oh=00_AT_rHp_PyzjaxOlOiFmvDPlO81G3TGLxBT7ZBB-ocBMvyQ&oe=61E30D2E" alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Nguyen Van Luan</p>
          <p className="text-sub">
            Developer: Java, HTM, CSS, JS, Bootstrap, React,...
          </p>
          <button className="btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://beacons.ai/nguyenvanluan?fbclid=IwAR0I0IB1yoh5Yq1xDmCIEtzcqDZNs_PrHyCPhbtV0kNHgYjM-sdcZLVcOmA';
            }}
          > FOLLOW</button>

        </div>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
