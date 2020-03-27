import React from 'react';


function AboutPage() {
    const aboutStyle = {
        height: '80vh',
        backgroundImage: 'url("https://i.imgur.com/qkdpN.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

  return (
    <div >
        <div class="jumbotron" style={aboutStyle}>
        <div class="container text-center text-white">
    
            <h1 class="display-4">Pupster</h1>
            <p class="lead">They're the good boys and girls.</p>
        </div>
        </div>
        <div class="container">
        <h2>Welcome To Pupster!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. 
        Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. 
        Pellentesque mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.</p>
        </div>
    </div>
  );
}

export default AboutPage;