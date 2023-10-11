import React from 'react';
function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <p>Hello</p>
            <a href='#'>
              <i className='bi-facebook'></i> {/* Bootstrap Icons for Facebook */}
            </a>
            <a href='https://github.com/shyam88-git'>
              <i className='bi-github'></i> {/* Bootstrap Icons for GitHub */}
            </a>
            <a href='https://linkedin.com/in/shyam-sharki/'>
              <i className='bi-linkedin'></i> {/* Bootstrap Icons for LinkedIn */}
            </a>
            <a href='https://www.hackerrank.com/ssk66221'>
              <i className='bi-instagram'></i> {/* Bootstrap Icons for HackerRank */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
